import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { Users, Shield, Briefcase, Handshake } from 'lucide-react';
import { GradientBackground } from '../components/GradientBackground';
import { DeviceMockup } from '../components/DeviceMockup';
import { ParticleEffect } from '../components/ParticleEffect';
import { fadeIn, slideInLeft, scaleIn, float } from '../utils/animations';
import { colors, SCRIPT } from '../utils/constants';

const itemIcons = [Users, Handshake, Briefcase, Shield];

export const Scene5_Premium: React.FC = () => {
  const frame = useCurrentFrame();

  // Fade in from previous scene
  const layoutOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Screenshot slides in from left (frames 30-90)
  const screenshotX = slideInLeft(frame, 30);

  // Tilt animation
  const tilt = frame > 210
    ? Math.sin((frame - 210) * 0.04) * 2
    : 0;

  // Float
  const floatY = float(frame);

  // Title fades in (frame 90)
  const titleOpacity = fadeIn(frame, 90);

  return (
    <div
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        opacity: layoutOpacity,
      }}
    >
      <GradientBackground variant="dark" />
      <ParticleEffect count={15} color={colors.accents.premium + '33'} />

      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          display: 'flex',
          direction: 'rtl',
          alignItems: 'center',
          padding: '0 80px',
          gap: 60,
        }}
      >
        {/* RIGHT side: Service details (40%) */}
        <div
          style={{
            flex: '0 0 35%',
            display: 'flex',
            flexDirection: 'column',
            gap: 24,
            direction: 'rtl',
          }}
        >
          {/* Title */}
          <div
            style={{
              opacity: titleOpacity,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <Briefcase size={44} color={colors.accents.premium} />
            <span
              style={{
                fontFamily: 'Assistant',
                fontSize: 48,
                fontWeight: 700,
                color: colors.text.primary,
                textShadow: `0 0 15px ${colors.accents.premium}66`,
              }}
            >
              {SCRIPT.scene5.title}
            </span>
          </div>

          {/* Checkmark items */}
          {SCRIPT.scene5.items.map((item, i) => {
            const itemStartFrame = 120 + i * 15;
            const itemScale = scaleIn(frame, itemStartFrame);
            const itemOpacity = fadeIn(frame, itemStartFrame);
            const Icon = itemIcons[i];

            return (
              <div
                key={i}
                style={{
                  opacity: itemOpacity,
                  transform: `scale(${itemScale})`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                }}
              >
                <Icon
                  size={28}
                  color={colors.accents.premium}
                />
                <span
                  style={{
                    fontFamily: 'Assistant',
                    fontSize: 30,
                    fontWeight: 400,
                    color: colors.text.secondary,
                  }}
                >
                  {item}
                </span>
              </div>
            );
          })}
        </div>

        {/* LEFT side: Device Mockup (60%) */}
        <div
          style={{
            flex: '0 0 60%',
            display: 'flex',
            justifyContent: 'center',
            transform: `translateX(${screenshotX}px) rotate(${tilt}deg) translateY(${floatY}px)`,
          }}
        >
          <DeviceMockup color={colors.accents.premium}>
            <div
              style={{
                width: '100%',
                height: '100%',
                background: `linear-gradient(135deg, ${colors.background.dark}, ${colors.accents.premium}33)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'Assistant',
                fontSize: 32,
                color: colors.text.primary,
                direction: 'rtl',
                padding: 30,
                textAlign: 'center',
              }}
            >
              👔 ליווי פרימיום
              <br />
              <span style={{ fontSize: 20, color: colors.text.secondary }}>
                ליווי אישי מלא מהחיפוש ועד המפתח
              </span>
            </div>
          </DeviceMockup>
        </div>
      </div>
    </div>
  );
};
