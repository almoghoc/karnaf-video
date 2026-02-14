import { Composition } from 'remotion';
import { MainSequence } from './Composition';
import { VIDEO } from './utils/constants';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MainSequence"
        component={MainSequence}
        durationInFrames={VIDEO.totalFrames}
        fps={VIDEO.fps}
        width={VIDEO.width}
        height={VIDEO.height}
      />
    </>
  );
};
