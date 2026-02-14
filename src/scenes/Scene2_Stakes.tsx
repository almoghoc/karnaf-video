import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { AlertTriangle, TrendingDown, Clock } from 'lucide-react';
import { GradientBackground } from '../components/GradientBackground';
import { fadeIn, slideInLeft, glowPulse } from '../utils/animations';
import { colors, SCRIPT } from '../utils/constants';

const iconMap = {
  alert: AlertTriangle,
  trending: TrendingDown,
  clock: Clock,
};

export const Scene2_Stakes: React.FC = () => {
  const frame = useCurrentFrame();
  const { cards } = SCRIPT.scene2;

  // Fade out at end
  const fadeOutOpacity = interpolate(frame, [180, 210], [1, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Pulse effect for all cards (frames 90-150 relative = 330-390 absolute)
  const pulseScale = frame > 90 && frame < 150
    ? 1 + Math.sin((frame - 90) * 0.15) * 0.03
    : 1;

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: fadeOutOpacity,
      }}
    >
      <GradientBackground variant="dark" />

      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 28,
          padding: '0 200px',
          transform: `scale(${pulseScale})`,
        }}
      >
        {cards.map((card, i) => {
          const startFrame = i * 30;
          const opacity = fadeIn(frame, startFrame);
          const translateX = slideInLeft(frame, startFrame);
          const Icon = iconMap[card.icon];
          const glow = glowPulse(frame, 0.08);

          return (
            <div
              key={i}
              style={{
                opacity,
                transform: `translateX(${translateX}px)`,
                display: 'flex',
                alignItems: 'center',
                gap: 24,
                direction: 'rtl',
                background: 'rgba(239, 68, 68, 0.08)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: 16,
                padding: '24px 40px',
                width: '100%',
                maxWidth: 700,
                boxShadow: `0 0 ${20 + glow * 15}px rgba(239, 68, 68, ${0.15 + glow * 0.1})`,
              }}
            >
              <Icon
                size={40}
                color={colors.accents.danger}
                style={{ flexShrink: 0 }}
              />
              <span
                style={{
                  fontFamily: 'Assistant',
                  fontSize: 36,
                  fontWeight: 700,
                  color: colors.text.primary,
                }}
              >
                {card.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
