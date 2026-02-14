import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { loadFont } from '@remotion/google-fonts/Assistant';
import { Star } from 'lucide-react';
import { GradientBackground } from '../components/GradientBackground';
import { RhinoIcon } from '../components/RhinoIcon';
import { fadeIn, scaleIn, animateCounter, glowPulse } from '../utils/animations';
import { colors, SCRIPT } from '../utils/constants';

const { fontFamily } = loadFont();

export const Scene6_CTA: React.FC = () => {
  const frame = useCurrentFrame();

  // Counter animation (frames 30-90)
  const count = animateCounter(frame, 30, 90, SCRIPT.scene6.counter);

  // Stars appear (frames 90-120, one every 6 frames)
  const starsVisible = Array.from({ length: 5 }, (_, i) => {
    return scaleIn(frame, 90 + i * 6);
  });

  // Logo appears (frames 120-150)
  const logoScale = scaleIn(frame, 120);
  const logoOpacity = fadeIn(frame, 120);

  // Tagline words appear one by one (frames 150-210)
  const taglineWords = SCRIPT.scene6.tagline.split(' ');
  const taglineOpacities = taglineWords.map((_, i) => fadeIn(frame, 150 + i * 15));

  // URL appears (frames 210-240)
  const urlOpacity = fadeIn(frame, 210);

  // Final glow pulse (frames 240-270)
  const finalGlow = frame > 240 ? glowPulse(frame, 0.15) : 0;

  // CTA text
  const ctaOpacity = fadeIn(frame, 180);

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
      }}
    >
      <GradientBackground variant="spotlight" />

      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 24,
        }}
      >
        {/* Counter */}
        <div
          style={{
            fontFamily,
            fontSize: 72,
            fontWeight: 700,
            color: colors.text.primary,
            direction: 'rtl',
            textShadow: `0 0 20px ${colors.accents.rhino}`,
          }}
        >
          <span style={{ fontSize: 36, fontWeight: 400 }}>מעל </span>
          {count}+
          <span style={{ fontSize: 36, fontWeight: 400 }}> משפחות</span>
        </div>

        {/* Stars */}
        <div style={{ display: 'flex', gap: 8 }}>
          {starsVisible.map((scale, i) => (
            <Star
              key={i}
              size={36}
              color="#fbbf24"
              fill="#fbbf24"
              style={{
                transform: `scale(${scale})`,
                filter: 'drop-shadow(0 0 6px rgba(251, 191, 36, 0.6))',
              }}
            />
          ))}
        </div>

        {/* Rhino logo */}
        <div
          style={{
            opacity: logoOpacity,
            transform: `scale(${logoScale})`,
            filter: `drop-shadow(0 0 ${20 + finalGlow * 30}px ${colors.accents.rhino})`,
          }}
        >
          <RhinoIcon size={100} glow />
        </div>

        {/* CTA text */}
        <div
          style={{
            opacity: ctaOpacity,
            fontFamily,
            fontSize: 48,
            fontWeight: 600,
            color: colors.accents.cta,
            direction: 'rtl',
            textShadow: `0 0 15px ${colors.accents.cta}66`,
          }}
        >
          {SCRIPT.scene6.cta}
        </div>

        {/* Brand + Tagline */}
        <div
          style={{
            display: 'flex',
            gap: 12,
            direction: 'rtl',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontFamily,
              fontSize: 52,
              fontWeight: 700,
              color: colors.text.primary,
              opacity: taglineOpacities[0] || 0,
            }}
          >
            {SCRIPT.scene6.brand}
          </span>
          <span
            style={{
              fontFamily,
              fontSize: 36,
              color: colors.text.secondary,
              opacity: taglineOpacities[0] || 0,
            }}
          >
            —
          </span>
          {taglineWords.map((word, i) => (
            <span
              key={i}
              style={{
                fontFamily,
                fontSize: 40,
                fontWeight: 600,
                color: colors.accents.rhino,
                opacity: taglineOpacities[i] || 0,
                textShadow: `0 0 ${10 + finalGlow * 15}px ${colors.glow}`,
              }}
            >
              {word}
            </span>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            opacity: urlOpacity,
            fontFamily,
            fontSize: 28,
            fontWeight: 400,
            color: colors.text.secondary,
            background: 'rgba(255,255,255,0.08)',
            padding: '10px 30px',
            borderRadius: 12,
            border: `1px solid ${colors.accents.rhino}44`,
          }}
        >
          {SCRIPT.scene6.url}
        </div>
      </div>
    </div>
  );
};
