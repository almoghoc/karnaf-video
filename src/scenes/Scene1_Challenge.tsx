import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { GradientBackground } from '../components/GradientBackground';
import { ParticleEffect } from '../components/ParticleEffect';
import { fadeIn, slideInBottom } from '../utils/animations';
import { colors, SCRIPT } from '../utils/constants';

export const Scene1_Challenge: React.FC = () => {
  const frame = useCurrentFrame();
  const { lines } = SCRIPT.scene1;

  // Overall fade in
  const bgOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Slight zoom at end for transition
  const endZoom = interpolate(frame, [210, 240], [1, 1.05], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: bgOpacity,
      }}
    >
      <GradientBackground variant="dark" />
      <ParticleEffect count={25} color="rgba(249, 115, 22, 0.2)" />

      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          transform: `scale(${endZoom})`,
          gap: 20,
          padding: '0 120px',
        }}
      >
        {lines.map((line, i) => {
          const startFrame = 30 + i * 60;
          const opacity = fadeIn(frame, startFrame);
          const translateY = slideInBottom(frame, startFrame);
          const glowAmount = interpolate(
            frame,
            [startFrame, startFrame + 60],
            [0, 10],
            { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
          );

          return (
            <div
              key={i}
              style={{
                opacity,
                transform: `translateY(${translateY}px)`,
                fontFamily: 'Assistant',
                fontSize: i === 0 ? 72 : 56,
                fontWeight: i === 0 ? 700 : 600,
                color: colors.text.primary,
                textShadow: `0 0 ${glowAmount}px ${colors.glow}`,
                direction: 'rtl',
                textAlign: 'center',
                lineHeight: 1.3,
              }}
            >
              {line}
            </div>
          );
        })}
      </div>
    </div>
  );
};
