import React from 'react';
import { useCurrentFrame, interpolate } from 'remotion';
import { BookOpen } from 'lucide-react';
import { GradientBackground } from '../components/GradientBackground';
import { DeviceMockup } from '../components/DeviceMockup';
import { fadeIn, slideInRight, scaleIn, float } from '../utils/animations';
import { colors, SCRIPT } from '../utils/constants';

export const Scene4_Course: React.FC = () => {
  const frame = useCurrentFrame();

  // Layout appears
  const layoutOpacity = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Screenshot slides in (frames 30-90)
  const screenshotX = slideInRight(frame, 30);

  // Screenshot zoom
  const screenshotZoom = interpolate(frame, [180, 270], [1, 1.05], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  // Floating animation
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
        {/* RIGHT side: Device Mockup (60%) */}
        <div
          style={{
            flex: '0 0 60%',
            display: 'flex',
            justifyContent: 'center',
            transform: `translateX(${screenshotX}px) scale(${screenshotZoom}) translateY(${floatY}px)`,
          }}
        >
          <DeviceMockup color={colors.accents.course}>
            <div
              style={{
                width: '100%',
                height: '100%',
                background: `linear-gradient(135deg, ${colors.background.dark}, ${colors.accents.course}33)`,
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
              📚 קורס הדרך לדירה
              <br />
              <span style={{ fontSize: 20, color: colors.text.secondary }}>
                הידע שלך להצלחה בנדל"ן
              </span>
            </div>
          </DeviceMockup>
        </div>

        {/* LEFT side: Service details (40%) */}
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
            <BookOpen size={44} color={colors.accents.course} />
            <span
              style={{
                fontFamily: 'Assistant',
                fontSize: 48,
                fontWeight: 700,
                color: colors.text.primary,
                textShadow: `0 0 15px ${colors.accents.course}66`,
              }}
            >
              {SCRIPT.scene4.title}
            </span>
          </div>

          {/* Numbered step items — matching website design */}
          {SCRIPT.scene4.items.map((item, i) => {
            const itemStartFrame = 120 + i * 15;
            const itemScale = scaleIn(frame, itemStartFrame);
            const itemOpacity = fadeIn(frame, itemStartFrame);

            return (
              <div
                key={i}
                style={{
                  opacity: itemOpacity,
                  transform: `scale(${itemScale})`,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                }}
              >
                <div
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    background: colors.accents.course,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Assistant',
                    fontSize: 18,
                    fontWeight: 700,
                    color: '#fff',
                    flexShrink: 0,
                  }}
                >
                  {i + 1}
                </div>
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
      </div>
    </div>
  );
};
