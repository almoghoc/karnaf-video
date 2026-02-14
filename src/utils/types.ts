export interface SceneProps {
  startFrame: number;
  endFrame: number;
}

export interface AnimatedTextProps {
  text: string;
  startFrame: number;
  style?: React.CSSProperties;
  animation?: 'fade' | 'slide' | 'scale' | 'slideLeft';
}

export interface CardData {
  text: string;
  icon: 'alert' | 'trending' | 'clock';
}
