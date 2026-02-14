import React from 'react';

interface DeviceMockupProps {
  color?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export const DeviceMockup: React.FC<DeviceMockupProps> = ({
  color = '#667eea',
  children,
  style,
}) => {
  return (
    <div
      style={{
        position: 'relative',
        width: 580,
        height: 380,
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px ${color}33`,
        background: `linear-gradient(135deg, ${color} 0%, ${color}99 100%)`,
        padding: 16,
        ...style,
      }}
    >
      {/* Browser chrome */}
      <div
        style={{
          display: 'flex',
          gap: 6,
          marginBottom: 10,
          paddingLeft: 4,
        }}
      >
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
        <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
      </div>
      {/* Screen content */}
      <div
        style={{
          width: '100%',
          height: 'calc(100% - 26px)',
          borderRadius: 8,
          overflow: 'hidden',
          background: '#111827',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
    </div>
  );
};
