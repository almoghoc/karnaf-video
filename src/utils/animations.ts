import { spring, interpolate } from 'remotion';

// Spring configurations
export const springConfigs = {
  gentle: { damping: 20, mass: 1, stiffness: 100 },
  snappy: { damping: 15, mass: 0.5, stiffness: 200 },
  bouncy: { damping: 10, mass: 1, stiffness: 300 },
  slow: { damping: 25, mass: 2, stiffness: 80 },
};

// Fade in animation
export const fadeIn = (frame: number, startFrame: number) => {
  if (frame < startFrame) return 0;
  return spring({
    frame: frame - startFrame,
    fps: 30,
    config: springConfigs.gentle,
    from: 0,
    to: 1,
  });
};

// Fade out animation
export const fadeOut = (frame: number, startFrame: number) => {
  if (frame < startFrame) return 1;
  return spring({
    frame: frame - startFrame,
    fps: 30,
    config: springConfigs.gentle,
    from: 1,
    to: 0,
  });
};

// Slide in from right (for RTL)
export const slideInRight = (frame: number, startFrame: number) => {
  if (frame < startFrame) return 100;
  return spring({
    frame: frame - startFrame,
    fps: 30,
    config: springConfigs.snappy,
    from: 100,
    to: 0,
  });
};

// Slide in from left
export const slideInLeft = (frame: number, startFrame: number) => {
  if (frame < startFrame) return -100;
  return spring({
    frame: frame - startFrame,
    fps: 30,
    config: springConfigs.snappy,
    from: -100,
    to: 0,
  });
};

// Slide in from bottom
export const slideInBottom = (frame: number, startFrame: number) => {
  if (frame < startFrame) return 80;
  return spring({
    frame: frame - startFrame,
    fps: 30,
    config: springConfigs.gentle,
    from: 80,
    to: 0,
  });
};

// Scale in animation
export const scaleIn = (frame: number, startFrame: number) => {
  if (frame < startFrame) return 0;
  return spring({
    frame: frame - startFrame,
    fps: 30,
    config: springConfigs.bouncy,
    from: 0,
    to: 1,
  });
};

// Overshoot scale (for rhino entrance)
export const scaleOvershoot = (frame: number, startFrame: number) => {
  if (frame < startFrame) return 0.5;
  return spring({
    frame: frame - startFrame,
    fps: 30,
    config: { damping: 8, mass: 1, stiffness: 200 },
    from: 0.5,
    to: 1,
  });
};

// Floating effect (subtle up-down)
export const float = (frame: number) => {
  return Math.sin(frame * 0.05) * 5;
};

// Glow pulse
export const glowPulse = (frame: number, speed: number = 0.1) => {
  return 0.5 + Math.sin(frame * speed) * 0.5;
};

// Screen shake effect
export const shake = (frame: number, startFrame: number, duration: number = 30) => {
  if (frame < startFrame || frame > startFrame + duration) return { x: 0, y: 0 };
  const progress = (frame - startFrame) / duration;
  const decay = 1 - progress;
  return {
    x: Math.sin(frame * 1.5) * 4 * decay,
    y: Math.cos(frame * 2) * 3 * decay,
  };
};

// Counter animation (smooth counting)
export const animateCounter = (
  frame: number,
  startFrame: number,
  endFrame: number,
  target: number
) => {
  if (frame < startFrame) return 0;
  if (frame >= endFrame) return target;
  const progress = interpolate(frame, [startFrame, endFrame], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return Math.round(progress * target);
};
