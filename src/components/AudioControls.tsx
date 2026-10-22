import React, { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

export const AudioControls: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    const active = soundEngine.toggle();
    setIsPlaying(active);
  };

  return (
    <button
      onClick={handleToggle}
      className="audio-toggle-btn"
      style={{
        background: isPlaying ? 'rgba(242, 203, 130, 0.25)' : 'rgba(16, 43, 41, 0.85)',
        border: isPlaying ? '1px solid var(--amber)' : '1px solid rgba(168, 191, 165, 0.35)',
        color: isPlaying ? 'var(--amber)' : 'var(--sage)',
        boxShadow: isPlaying ? '0 0 16px rgba(242, 203, 130, 0.4)' : '0 4px 12px rgba(0,0,0,0.3)',
      }}
      aria-label={isPlaying ? 'Mute ambient nature audio' : 'Play ambient nature audio'}
      title={isPlaying ? 'Pause nature sounds' : 'Turn on peaceful nature sounds'}
    >
      {isPlaying ? (
        <>
          <Volume2 style={{ width: 18, height: 18, color: 'var(--amber)' }} />
          <span className="hidden-mobile">Nature Audio On</span>
        </>
      ) : (
        <>
          <VolumeX style={{ width: 18, height: 18 }} />
          <span className="hidden-mobile">Audio Off</span>
        </>
      )}
    </button>
  );
};
