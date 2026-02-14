import React from 'react';
import { useCurrentFrame } from 'remotion';
import { glowPulse } from '../utils/animations';
import { colors } from '../utils/constants';

interface RhinoIconProps {
  size?: number;
  style?: React.CSSProperties;
  glow?: boolean;
}

export const RhinoIcon: React.FC<RhinoIconProps> = ({
  size = 120,
  style,
  glow = true,
}) => {
  const frame = useCurrentFrame();
  const glowIntensity = glow ? glowPulse(frame, 0.08) : 0;

  return (
    <div
      style={{
        fontSize: size,
        lineHeight: 1,
        filter: glow
          ? `drop-shadow(0 0 ${20 + glowIntensity * 20}px ${colors.accents.rhino})`
          : undefined,
        ...style,
      }}
    >
      🦏
    </div>
  );
};
