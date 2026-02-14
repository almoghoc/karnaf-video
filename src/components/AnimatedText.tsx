import React from 'react';
import { useCurrentFrame } from 'remotion';
import { fadeIn, slideInRight, slideInLeft, slideInBottom, scaleIn } from '../utils/animations';

interface AnimatedTextProps {
  text: string;
  startFrame: number;
  style?: React.CSSProperties;
  animation?: 'fade' | 'slide' | 'scale' | 'slideLeft' | 'slideUp';
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  startFrame,
  style,
  animation = 'fade',
}) => {
  const frame = useCurrentFrame();

  const opacity = fadeIn(frame, startFrame);

  let translateX = 0;
  let translateY = 0;
  let scale = 1;

  switch (animation) {
    case 'slide':
      translateX = slideInRight(frame, startFrame);
      break;
    case 'slideLeft':
      translateX = slideInLeft(frame, startFrame);
      break;
    case 'slideUp':
      translateY = slideInBottom(frame, startFrame);
      break;
    case 'scale':
      scale = scaleIn(frame, startFrame);
      break;
  }

  return (
    <div
      style={{
        opacity,
        transform: `translateX(${translateX}px) translateY(${translateY}px) scale(${scale})`,
        direction: 'rtl',
        textAlign: 'right',
        ...style,
      }}
    >
      {text}
    </div>
  );
};
