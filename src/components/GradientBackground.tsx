import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { colors } from '../utils/constants';

interface GradientBackgroundProps {
  variant?: 'dark' | 'warm' | 'spotlight';
  fadeInStart?: number;
  children?: React.ReactNode;
}

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  variant = 'dark',
  fadeInStart = 0,
  children,
}) => {
  const frame = useCurrentFrame();

  const rotation = interpolate(frame, [0, 240], [0, 360], {
    extrapolateRight: 'extend',
  });

  let background: string;

  switch (variant) {
    case 'warm':
      background = `linear-gradient(${rotation}deg, ${colors.background.dark}, #1f1208, ${colors.background.medium})`;
      break;
    case 'spotlight':
      const spotX = 50 + Math.sin(frame * 0.02) * 10;
      const spotY = 40 + Math.cos(frame * 0.015) * 10;
      background = `radial-gradient(ellipse at ${spotX}% ${spotY}%, ${colors.accents.rhino}33, ${colors.background.dark} 70%)`;
      break;
    default:
      background = `linear-gradient(${rotation}deg, ${colors.background.dark}, ${colors.background.medium}, #1a1208)`;
  }

  const opacity = fadeInStart > 0
    ? interpolate(frame, [fadeInStart, fadeInStart + 30], [0, 1], {
        extrapolateLeft: 'clamp',
        extrapolateRight: 'clamp',
      })
    : 1;

  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background,
        opacity,
      }}
    >
      {children}
    </div>
  );
};
