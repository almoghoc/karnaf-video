import React from 'react';
import { useCurrentFrame, interpolate, spring } from 'remotion';
import { GradientBackground } from '../components/GradientBackground';
import { ParticleEffect } from '../components/ParticleEffect';
import { RhinoIcon } from '../components/RhinoIcon';
import { fadeIn, shake, scaleOvershoot } from '../utils/animations';
import { colors, SCRIPT } from '../utils/constants';

export const Scene3_RhinoIntro: React.FC = () => {
  const frame = useCurrentFrame();

  // Rhino charges across screen (frames 30-90 relative)
  const rhinoX = interpolate(frame, [30, 90], [1200, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const rhinoScale = scaleOvershoot(frame, 30);

  // Screen shake (frames 60-90 relative)
  const shakeEffect = shake(frame, 60, 30);

  // Brand text appears (frames 120-180)
  const textOpacity = fadeIn(frame, 120);
  const textGlow = interpolate(frame, [120, 180], [0, 20], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Background transition to warm orange
  const purpleIntensity = interpolate(frame, [90, 180], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Subtitle
  const subtitleOpacity = fadeIn(frame, 160);

  // Subtext
  const subtextOpacity = fadeIn(frame, 200);

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        transform: `translate(${shakeEffect.x}px, ${shakeEffect.y}px)`,
      }}
    >
      <GradientBackground variant="dark" />

      {/* Orange overlay fading in */}
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          background: `radial-gradient(circle at 50% 50%, ${colors.accents.rhino}44, transparent 70%)`,
          opacity: purpleIntensity,
        }}
      />

      <ParticleEffect count={20} color={colors.accents.rhino + '44'} />

      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 30,
        }}
      >
        {/* Rhino charging in */}
        <div
          style={{
            transform: `translateX(${rhinoX}px) scale(${rhinoScale})`,
          }}
        >
          <RhinoIcon size={140} glow />
        </div>

        {/* Brand name */}
        <div
          style={{
            opacity: textOpacity,
            fontFamily: 'Assistant',
            fontSize: 80,
            fontWeight: 700,
            color: colors.text.primary,
            textShadow: `0 0 ${textGlow}px ${colors.accents.rhino}, 0 0 ${textGlow * 2}px ${colors.glow}`,
            direction: 'rtl',
            textAlign: 'center',
          }}
        >
          {SCRIPT.scene3.title}
        </div>

        {/* Subtitle */}
        <div
          style={{
            opacity: subtitleOpacity,
            fontFamily: 'Assistant',
            fontSize: 44,
            fontWeight: 600,
            color: colors.accents.rhino,
            direction: 'rtl',
            textAlign: 'center',
            textShadow: `0 0 10px ${colors.glow}`,
          }}
        >
          {SCRIPT.scene3.subtitle}
        </div>

        {/* Subtext */}
        <div
          style={{
            opacity: subtextOpacity,
            fontFamily: 'Assistant',
            fontSize: 36,
            fontWeight: 400,
            color: colors.text.secondary,
            direction: 'rtl',
            textAlign: 'center',
          }}
        >
          {SCRIPT.scene3.subtext}
        </div>
      </div>
    </div>
  );
};
