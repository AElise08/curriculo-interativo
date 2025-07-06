"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  connections: number[];
  pulse: number;
  pulseSpeed: number;
  size: number;
  activity: number;
}

interface NeuralNetworkBackgroundProps {
  className?: string;
}

export function NeuralNetworkBackground({ className = "" }: NeuralNetworkBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create neural network nodes
    const createNodes = () => {
      const nodes: Node[] = [];
      const nodeCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 12000));

      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2,
          connections: [],
          pulse: Math.random() * Math.PI * 2,
          pulseSpeed: 0.01 + Math.random() * 0.02,
          size: 1 + Math.random() * 2,
          activity: Math.random(),
        });
      }

      // Create intelligent connections based on proximity and network topology
      nodes.forEach((node, i) => {
        const maxConnections = 3 + Math.floor(Math.random() * 3);
        const nearbyNodes = nodes
          .map((otherNode, j) => ({
            index: j,
            distance: Math.sqrt(
              Math.pow(node.x - otherNode.x, 2) + Math.pow(node.y - otherNode.y, 2)
            ),
          }))
          .filter((item) => item.index !== i)
          .sort((a, b) => a.distance - b.distance)
          .slice(0, maxConnections);

        node.connections = nearbyNodes
          .filter((item) => item.distance < 180)
          .map((item) => item.index);
      });

      return nodes;
    };

    nodesRef.current = createNodes();

    const animate = () => {
      // Clear with slight trail effect for smoother animation
      ctx.fillStyle = "rgba(15, 23, 42, 0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const nodes = nodesRef.current;
      const time = Date.now() * 0.001;

      // Update node properties
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;
        node.pulse += node.pulseSpeed;
        node.activity = 0.3 + 0.7 * Math.sin(time * 0.5 + i * 0.1);

        // Bounce off edges with damping
        if (node.x <= 0 || node.x >= canvas.width) {
          node.vx *= -0.8;
          node.x = Math.max(0, Math.min(canvas.width, node.x));
        }
        if (node.y <= 0 || node.y >= canvas.height) {
          node.vy *= -0.8;
          node.y = Math.max(0, Math.min(canvas.height, node.y));
        }
      });

      // Draw neural connections with signal propagation
      nodes.forEach((node, i) => {
        node.connections.forEach((connectionIndex) => {
          const connectedNode = nodes[connectionIndex];
          if (!connectedNode) return;

          const distance = Math.sqrt(
            Math.pow(node.x - connectedNode.x, 2) + Math.pow(node.y - connectedNode.y, 2)
          );

          if (distance < 200) {
            const opacity = Math.max(0, (1 - distance / 200) * 0.4);
            const activity = (node.activity + connectedNode.activity) / 2;
            
            // Create synaptic connection
            const gradient = ctx.createLinearGradient(
              node.x, node.y, 
              connectedNode.x, connectedNode.y
            );
            gradient.addColorStop(0, `rgba(147, 51, 234, ${opacity * activity})`);
            gradient.addColorStop(0.5, `rgba(59, 130, 246, ${opacity * activity * 0.8})`);
            gradient.addColorStop(1, `rgba(6, 182, 212, ${opacity * activity * 0.6})`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5 + activity * 1.5;
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(connectedNode.x, connectedNode.y);
            ctx.stroke();

            // Draw signal pulses along connections
            if (activity > 0.6 && Math.random() < 0.03) {
              const progress = (Math.sin(time * 2 + i) + 1) / 2;
              const signalX = node.x + (connectedNode.x - node.x) * progress;
              const signalY = node.y + (connectedNode.y - node.y) * progress;
              
              const signalGradient = ctx.createRadialGradient(
                signalX, signalY, 0,
                signalX, signalY, 8
              );
              signalGradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
              signalGradient.addColorStop(0.5, `rgba(147, 51, 234, ${opacity * 0.8})`);
              signalGradient.addColorStop(1, "rgba(147, 51, 234, 0)");
              
              ctx.fillStyle = signalGradient;
              ctx.beginPath();
              ctx.arc(signalX, signalY, 4, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        });
      });

      // Draw neurons with sophisticated rendering
      nodes.forEach((node, i) => {
        const pulseIntensity = 0.7 + 0.3 * Math.sin(node.pulse);
        const neuronSize = node.size * (1 + pulseIntensity * 0.5);
        const glowSize = neuronSize * 4;
        
        // Outer neural glow
        const outerGlow = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, glowSize
        );
        outerGlow.addColorStop(0, `rgba(147, 51, 234, ${node.activity * 0.3})`);
        outerGlow.addColorStop(0.3, `rgba(59, 130, 246, ${node.activity * 0.2})`);
        outerGlow.addColorStop(0.7, `rgba(6, 182, 212, ${node.activity * 0.1})`);
        outerGlow.addColorStop(1, "rgba(6, 182, 212, 0)");
        
        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(node.x, node.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Neural soma (cell body)
        const somaGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, neuronSize
        );
        somaGradient.addColorStop(0, `rgba(255, 255, 255, ${0.9 * node.activity})`);
        somaGradient.addColorStop(0.4, `rgba(147, 51, 234, ${0.7 * node.activity})`);
        somaGradient.addColorStop(1, `rgba(59, 130, 246, ${0.3 * node.activity})`);
        
        ctx.fillStyle = somaGradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, neuronSize, 0, Math.PI * 2);
        ctx.fill();

        // Neural nucleus
        if (node.activity > 0.5) {
          ctx.fillStyle = `rgba(255, 255, 255, ${node.activity * 0.8})`;
          ctx.beginPath();
          ctx.arc(node.x, node.y, neuronSize * 0.3, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed top-0 left-0 w-full h-full pointer-events-none z-0 ${className}`}
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #312e81 70%, #0f172a 100%)",
      }}
    />
  );
}
