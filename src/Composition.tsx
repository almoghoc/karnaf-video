import React from 'react';
import { Sequence, useCurrentFrame } from 'remotion';
import { loadFont } from '@remotion/google-fonts/Assistant';
import { Scene1_Challenge } from './scenes/Scene1_Challenge';
import { Scene2_Stakes } from './scenes/Scene2_Stakes';
import { Scene3_RhinoIntro } from './scenes/Scene3_RhinoIntro';
import { Scene4_Course } from './scenes/Scene4_Course';
import { Scene5_Premium } from './scenes/Scene5_Premium';
import { Scene6_CTA } from './scenes/Scene6_CTA';
import { SCENES, colors } from './utils/constants';
import './style.css';

loadFont();

export const MainSequence: React.FC = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        background: colors.background.dark,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Scene 1: The Challenge (0-8s) */}
      <Sequence
        from={SCENES.challenge.start}
        durationInFrames={SCENES.challenge.end - SCENES.challenge.start}
      >
        <Scene1_Challenge />
      </Sequence>

      {/* Scene 2: The Stakes (8-15s) */}
      <Sequence
        from={SCENES.stakes.start}
        durationInFrames={SCENES.stakes.end - SCENES.stakes.start}
      >
        <Scene2_Stakes />
      </Sequence>

      {/* Scene 3: Rhino Intro (15-25s) */}
      <Sequence
        from={SCENES.rhinoIntro.start}
        durationInFrames={SCENES.rhinoIntro.end - SCENES.rhinoIntro.start}
      >
        <Scene3_RhinoIntro />
      </Sequence>

      {/* Scene 4: Course Service (25-38s) */}
      <Sequence
        from={SCENES.course.start}
        durationInFrames={SCENES.course.end - SCENES.course.start}
      >
        <Scene4_Course />
      </Sequence>

      {/* Scene 5: Premium Service (38-51s) */}
      <Sequence
        from={SCENES.premium.start}
        durationInFrames={SCENES.premium.end - SCENES.premium.start}
      >
        <Scene5_Premium />
      </Sequence>

      {/* Scene 6: Call to Action (51-60s) */}
      <Sequence
        from={SCENES.cta.start}
        durationInFrames={SCENES.cta.end - SCENES.cta.start}
      >
        <Scene6_CTA />
      </Sequence>
    </div>
  );
};
