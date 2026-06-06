'use client';

import React, { useRef } from 'react';

interface NodeMeshProps {
  variant?: 'hero' | 'section' | 'footer' | 'dense';
  className?: string;
  animated?: boolean;
}

interface NodePoint {
  x: number;
  y: number;
  delay: number;
  size: number;
}

interface Connection {
  from: NodePoint;
  to: NodePoint;
}

const DIAGONAL_NODES: NodePoint[] = [
  { x: 15.5, y: 6.5, delay: 0.6, size: 1.5 },
  { x: 18, y: 19.5, delay: 1.2, size: 1.5 },
  { x: 12.6, y: 7.2, delay: 0.6, size: 1.9 },
  { x: 15, y: 17.5, delay: 2, size: 1.7 },
  { x: 14.9, y: 22.1, delay: 1.5, size: 1.8 },
  { x: 16, y: 15.5, delay: 1.4, size: 1.2 },
  { x: 26.7, y: 13.3, delay: 0.5, size: 1.7 },
  { x: 19.1, y: 22.3, delay: 1.6, size: 1.8 },
  { x: 31.5, y: 14.3, delay: 0.8, size: 1 },
  { x: 23.6, y: 17.6, delay: 1.8, size: 1.6 },
  { x: 33.6, y: 39.5, delay: 0.7, size: 1.8 },
  { x: 42.4, y: 26, delay: 1.6, size: 1.3 },
  { x: 38.4, y: 28.8, delay: 1.2, size: 1.2 },
  { x: 34.1, y: 25.6, delay: 0.4, size: 1.2 },
  { x: 28.1, y: 35.8, delay: 1.2, size: 2 },
  { x: 44.7, y: 47.1, delay: 1.6, size: 1.9 },
  { x: 35.6, y: 41.6, delay: 0.1, size: 1.6 },
  { x: 38, y: 37.6, delay: 1, size: 1.1 },
  { x: 53.2, y: 54.1, delay: 1.9, size: 1.3 },
  { x: 41.4, y: 55.5, delay: 0.1, size: 1.2 },
  { x: 60.9, y: 45.2, delay: 1.3, size: 1.7 },
  { x: 45.2, y: 60.8, delay: 0.4, size: 1.5 },
  { x: 48, y: 60.4, delay: 0.9, size: 1.3 },
  { x: 54.6, y: 64.1, delay: 0.2, size: 1.1 },
  { x: 70.3, y: 49, delay: 1.4, size: 1.2 },
  { x: 63.6, y: 73.5, delay: 0.8, size: 1.6 },
  { x: 73.7, y: 73.7, delay: 1.8, size: 1.5 },
  { x: 61.7, y: 70.1, delay: 0.3, size: 2 },
  { x: 71.5, y: 73.3, delay: 0.1, size: 1.5 },
  { x: 66.7, y: 61.8, delay: 0.2, size: 1.7 },
  { x: 64.9, y: 64.1, delay: 1.2, size: 1.7 },
  { x: 74, y: 67.1, delay: 0.9, size: 1.3 },
  { x: 78.2, y: 91.8, delay: 1.1, size: 1.9 },
  { x: 92.7, y: 82.6, delay: 1, size: 1.2 },
  { x: 73.9, y: 91.8, delay: 0.5, size: 1.3 },
  { x: 93.8, y: 94.5, delay: 0.1, size: 1.9 },
  { x: 91.4, y: 76.7, delay: 1.8, size: 1 },
  { x: 99.1, y: 80.4, delay: 1.6, size: 1 },
  { x: 93.7, y: 90.8, delay: 0.4, size: 1.5 },
  { x: 87.8, y: 97.4, delay: 1, size: 1.3 }
];

export default function NodeMesh({ variant = 'section', className = '', animated = true }: NodeMeshProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  // We use the new diagonal flowing nodes for all variants, scaled slightly depending on variant density needs
  const getNodes = (): NodePoint[] => {
    // We can filter some nodes out for lighter variants
    if (variant === 'section') {
      return DIAGONAL_NODES.filter((_, i) => i % 2 === 0);
    }
    return DIAGONAL_NODES;
  };

  const nodes = getNodes();

  const getConnections = (nodes: NodePoint[]): Connection[] => {
    const connections: Connection[] = [];
    // Connect nearby nodes
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = nodes[i].x - nodes[j].x;
        const dy = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 22) { // tighter connections for diagonal web
          connections.push({ from: nodes[i], to: nodes[j] });
        }
      }
    }
    return connections;
  };

  const connections = getConnections(nodes);
  
  const isHero = variant === 'hero';
  const lineColor = isHero ? '#6EB8D0' : '#0D7A9E';
  const nodeColor = '#0D7A9E';
  const lineOpacity = isHero ? 0.35 : 0.2;

  return (
    <svg
      ref={svgRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid slice"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Connection lines */}
      {connections.map((conn, i) => (
        <line
          key={`line-${i}`}
          x1={conn.from.x}
          y1={conn.from.y}
          x2={conn.to.x}
          y2={conn.to.y}
          stroke={lineColor}
          strokeWidth="0.15"
          opacity={lineOpacity}
          strokeLinecap="round"
          className={animated ? "flow-line" : ""}
          style={animated ? { animationDelay: `${(conn.from.delay + conn.to.delay) / 2}s` } : undefined}
        />
      ))}

      {/* Node points */}
      {nodes.map((node, i) => (
        <g 
          key={`node-${i}`} 
          className={animated ? "float-ambient" : ""}
          style={animated ? { animationDelay: `${node.delay}s` } : undefined}
        >
          {/* Outer ring pulse */}
          {animated && (
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size * 1.5}
              fill="none"
              stroke={nodeColor}
              strokeWidth="0.1"
              opacity={0.3}
              style={{
                animation: `nodeRing ${3 + node.delay}s ease-out ${node.delay}s infinite`,
              }}
            />
          )}
          {/* Core dot */}
          <circle
            cx={node.x}
            cy={node.y}
            r={node.size * 0.4}
            fill={nodeColor}
            opacity={animated ? 0.8 : 0.5}
            style={animated ? {
              animation: `nodePulse 3s ease-in-out ${node.delay}s infinite`,
            } : undefined}
          />
        </g>
      ))}
    </svg>
  );
}
