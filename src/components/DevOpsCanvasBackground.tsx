import React, { useEffect, useRef } from 'react';

interface Packet {
  pathIndex: number;
  progress: number;
  speed: number;
  colorType: 'blue' | 'cyan';
  length: number;
}

interface NodeDot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  phase: number;
}

interface TracePoint {
  x: number;
  y: number;
}

export const DevOpsCanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let isDark = document.documentElement.classList.contains('dark');
    const themeObserver = new MutationObserver(() => {
      isDark = document.documentElement.classList.contains('dark');
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let traces: TracePoint[][] = [];
    let packets: Packet[] = [];
    let nodes: NodeDot[] = [];
    const mouse = { x: -9999, y: -9999, active: false };

    const buildScene = () => {
      const rect = canvas.getBoundingClientRect();
      width = Math.max(rect.width, 320);
      height = Math.max(rect.height, 320);
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Build orthogonal DevOps/VPC routing traces across the hero canvas
      const gridStep = 48;
      const traceCount = Math.max(8, Math.floor(width / 140));
      traces = [];

      for (let i = 0; i < traceCount; i++) {
        const startY =
          Math.floor((height * (0.1 + (i / traceCount) * 0.8)) / gridStep) * gridStep;
        const midX1 = Math.floor((width * (0.2 + ((i * 37) % 30) / 100)) / gridStep) * gridStep;
        const midX2 = Math.floor((width * (0.55 + ((i * 53) % 30) / 100)) / gridStep) * gridStep;
        const deltaY = (i % 2 === 0 ? 1 : -1) * gridStep * (1 + (i % 2));
        const endY = Math.max(gridStep, Math.min(height - gridStep, startY + deltaY));

        traces.push([
          { x: 0, y: startY },
          { x: midX1, y: startY },
          { x: midX1 + gridStep, y: endY },
          { x: midX2, y: endY },
          { x: midX2 + gridStep, y: startY },
          { x: width, y: startY },
        ]);
      }

      // Add vertical backbone traces
      const verticalCols = [0.18, 0.42, 0.68, 0.86];
      verticalCols.forEach((ratio, idx) => {
        const x = Math.floor((width * ratio) / gridStep) * gridStep;
        const offset = idx % 2 === 0 ? gridStep : -gridStep;
        traces.push([
          { x, y: 0 },
          { x, y: Math.floor((height * 0.4) / gridStep) * gridStep },
          { x: x + offset, y: Math.floor((height * 0.55) / gridStep) * gridStep },
          { x: x + offset, y: height },
        ]);
      });

      // Spawn traveling data packets along traces
      packets = [];
      traces.forEach((_, pathIndex) => {
        const count = pathIndex % 2 === 0 ? 2 : 1;
        for (let k = 0; k < count; k++) {
          packets.push({
            pathIndex,
            progress: (k * 0.5 + (pathIndex * 0.17) % 1) % 1,
            speed: 0.0014 + ((pathIndex + k) % 4) * 0.00045,
            colorType: (pathIndex + k) % 2 === 0 ? 'blue' : 'cyan',
            length: 48 + ((pathIndex * 11) % 36),
          });
        }
      });

      // Spawn subtle ambient infrastructure mesh nodes
      const nodeCount = Math.min(34, Math.max(16, Math.floor((width * height) / 38000)));
      nodes = Array.from({ length: nodeCount }, (_, i) => ({
        x: ((i * 137.5) % 100) * 0.01 * width,
        y: ((i * 73.1) % 100) * 0.01 * height,
        vx: (i % 2 === 0 ? 1 : -1) * (0.12 + (i % 5) * 0.04),
        vy: (i % 3 === 0 ? 1 : -1) * (0.08 + (i % 4) * 0.04),
        radius: 1.6 + (i % 3) * 0.5,
        phase: i * 0.7,
      }));
    };

    const getPointAtProgress = (path: TracePoint[], t: number): TracePoint => {
      if (path.length < 2) return path[0] || { x: 0, y: 0 };
      let totalLen = 0;
      const segLengths: number[] = [];
      for (let i = 0; i < path.length - 1; i++) {
        const dx = path[i + 1].x - path[i].x;
        const dy = path[i + 1].y - path[i].y;
        const len = Math.hypot(dx, dy);
        segLengths.push(len);
        totalLen += len;
      }
      if (totalLen === 0) return path[0];
      let target = Math.max(0, Math.min(1, t)) * totalLen;
      for (let i = 0; i < segLengths.length; i++) {
        if (target <= segLengths[i] || i === segLengths.length - 1) {
          const localT = segLengths[i] === 0 ? 0 : target / segLengths[i];
          return {
            x: path[i].x + (path[i + 1].x - path[i].x) * localT,
            y: path[i].y + (path[i + 1].y - path[i].y) * localT,
          };
        }
        target -= segLengths[i];
      }
      return path[path.length - 1];
    };

    let rafId = 0;
    let time = 0;

    const render = () => {
      time += 0.016;
      ctx.clearRect(0, 0, width, height);

      const gridStep = 48;

      // 1. Subtle coordinate grid + junction crosshairs
      ctx.strokeStyle = isDark ? 'rgba(148, 163, 184, 0.055)' : 'rgba(100, 116, 139, 0.08)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = 0; x <= width; x += gridStep) {
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, height);
      }
      for (let y = 0; y <= height; y += gridStep) {
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width, y + 0.5);
      }
      ctx.stroke();

      // Crosshairs at every 2nd grid intersection
      ctx.strokeStyle = isDark ? 'rgba(56, 189, 248, 0.14)' : 'rgba(37, 99, 235, 0.14)';
      ctx.beginPath();
      for (let x = gridStep * 2; x < width; x += gridStep * 2) {
        for (let y = gridStep * 2; y < height; y += gridStep * 2) {
          ctx.moveTo(x - 3, y + 0.5);
          ctx.lineTo(x + 4, y + 0.5);
          ctx.moveTo(x + 0.5, y - 3);
          ctx.lineTo(x + 0.5, y + 4);
        }
      }
      ctx.stroke();

      // 2. Orthogonal DevOps VPC / CI-CD traces
      traces.forEach((path) => {
        ctx.beginPath();
        path.forEach((pt, idx) => {
          if (idx === 0) ctx.moveTo(pt.x, pt.y);
          else ctx.lineTo(pt.x, pt.y);
        });
        ctx.strokeStyle = isDark ? 'rgba(59, 130, 246, 0.12)' : 'rgba(37, 99, 235, 0.11)';
        ctx.lineWidth = 1.1;
        ctx.stroke();

        // Corner node ticks
        for (let i = 1; i < path.length - 1; i++) {
          ctx.fillStyle = isDark ? 'rgba(56, 189, 248, 0.22)' : 'rgba(37, 99, 235, 0.22)';
          ctx.fillRect(path[i].x - 1.5, path[i].y - 1.5, 3, 3);
        }
      });

      // 3. Drifting infrastructure mesh nodes & proximity links
      if (!prefersReducedMotion) {
        nodes.forEach((node) => {
          node.x += node.vx;
          node.y += node.vy;
          if (node.x < 0 || node.x > width) node.vx *= -1;
          if (node.y < 0 || node.y > height) node.vy *= -1;
          node.x = Math.max(0, Math.min(width, node.x));
          node.y = Math.max(0, Math.min(height, node.y));
        });
      }

      const maxLinkDist = 145;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < maxLinkDist) {
            const alpha = (1 - dist / maxLinkDist) * (isDark ? 0.18 : 0.13);
            ctx.strokeStyle = isDark
              ? `rgba(56, 189, 248, ${alpha.toFixed(3)})`
              : `rgba(37, 99, 235, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.85;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw mesh nodes + mouse proximity link
      nodes.forEach((node) => {
        const pulse = 0.65 + 0.35 * Math.sin(time * 2 + node.phase);
        if (mouse.active) {
          const md = Math.hypot(node.x - mouse.x, node.y - mouse.y);
          if (md < 180) {
            const alpha = (1 - md / 180) * (isDark ? 0.35 : 0.25);
            ctx.strokeStyle = isDark
              ? `rgba(34, 211, 238, ${alpha.toFixed(3)})`
              : `rgba(8, 145, 178, ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        ctx.fillStyle = isDark
          ? `rgba(96, 165, 250, ${(0.32 * pulse).toFixed(3)})`
          : `rgba(37, 99, 235, ${(0.28 * pulse).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 4. Traveling telemetry / deployment packets along traces
      if (!prefersReducedMotion) {
        packets.forEach((pkt) => {
          pkt.progress = (pkt.progress + pkt.speed) % 1;
          const path = traces[pkt.pathIndex];
          if (!path) return;

          const head = getPointAtProgress(path, pkt.progress);
          const tailProgress = Math.max(0, pkt.progress - 0.045);
          const tail = getPointAtProgress(path, tailProgress);

          const grad = ctx.createLinearGradient(tail.x, tail.y, head.x, head.y);
          const rgb =
            pkt.colorType === 'cyan'
              ? isDark
                ? '34, 211, 238'
                : '8, 145, 178'
              : isDark
              ? '59, 130, 246'
              : '37, 99, 235';

          grad.addColorStop(0, `rgba(${rgb}, 0)`);
          grad.addColorStop(1, `rgba(${rgb}, ${isDark ? 0.85 : 0.65})`);

          ctx.strokeStyle = grad;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(tail.x, tail.y);
          ctx.lineTo(head.x, head.y);
          ctx.stroke();

          // Crisp packet head
          ctx.fillStyle = `rgba(${rgb}, ${isDark ? 0.95 : 0.8})`;
          ctx.beginPath();
          ctx.arc(head.x, head.y, 2.2, 0, Math.PI * 2);
          ctx.fill();
        });

        rafId = requestAnimationFrame(render);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active =
        mouse.x >= 0 && mouse.x <= rect.width && mouse.y >= 0 && mouse.y <= rect.height;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    buildScene();
    render();

    const resizeObserver = new ResizeObserver(() => {
      buildScene();
      if (prefersReducedMotion) render();
    });
    resizeObserver.observe(canvas);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
};
