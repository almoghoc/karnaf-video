import React, { useMemo } from 'react';
import { useCurrentFrame } from 'remotion';

interface Particle {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  phase: number;
}

interface ParticleEffectProps {
  count?: number;
  color?: string;
  style?: React.CSSProperties;
}

export const ParticleEffect: React.FC<ParticleEffectProps> = ({
  count = 30,
  color = 'rgba(139, 92, 246, 0.3)',
  style,
}) => {
  const frame = useCurrentFrame();

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      x: (i * 137.508) % 100,
      y: (i * 53.239) % 100,
      size: 2 + (i % 4) * 1.5,
      speed: 0.3 + (i % 5) * 0.15,
      opacity: 0.2 + (i % 3) * 0.15,
      phase: (i * 2.399) % (Math.PI * 2),
    }));
  }, [count]);

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        pointerEvents: 'none',
        ...style,
      }}
    >
      {particles.map((p, i) => {
        const y = (p.y + frame * p.speed * 0.3) % 110 - 5;
        const x = p.x + Math.sin(frame * 0.02 + p.phase) * 3;
        const currentOpacity = p.opacity * (0.5 + Math.sin(frame * 0.05 + p.phase) * 0.5);

        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${x}%`,
              top: `${y}%`,
              width: p.size,
              height: p.size,
              borderRadius: '50%',
              background: color,
              opacity: currentOpacity,
            }}
          />
        );
      })}
    </div>
  );
};
