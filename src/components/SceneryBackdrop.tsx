import React from 'react';

interface SceneryProps {
  variant?: 'sunrise' | 'river' | 'islands' | 'observatory' | 'garden' | 'forest' | 'celebration' | 'finale';
}

export const SceneryBackdrop: React.FC<SceneryProps> = ({ variant = 'sunrise' }) => {
  const getGradient = () => {
    switch (variant) {
      case 'sunrise':
      case 'finale':
        return 'linear-gradient(180deg, #102B29 0%, #163D35 40%, #397F79 70%, #F2CB82 96%, #C87859 100%)';
      case 'river':
        return 'linear-gradient(180deg, #102B29 0%, #163D35 45%, #255A52 75%, #397F79 100%)';
      case 'islands':
        return 'linear-gradient(180deg, #0d2220 0%, #163D35 50%, #295F57 85%, #B9D9E8 100%)';
      case 'observatory':
        return 'linear-gradient(180deg, #0b1a19 0%, #163D35 40%, #1F4E46 70%, #397F79 100%)';
      case 'garden':
        return 'linear-gradient(180deg, #102B29 0%, #163D35 40%, #204C40 75%, #2D6355 100%)';
      case 'forest':
        return 'linear-gradient(180deg, #0b1d1c 0%, #102B29 45%, #163D35 80%, #244C44 100%)';
      case 'celebration':
        return 'linear-gradient(180deg, #163D35 0%, #1E4D43 40%, #397F79 75%, #F2CB82 100%)';
      default:
        return 'linear-gradient(180deg, #102B29 0%, #163D35 50%, #397F79 100%)';
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        overflow: 'hidden',
        userSelect: 'none',
        zIndex: 0,
        background: getGradient(),
        transition: 'background 1.2s ease-in-out',
      }}
      aria-hidden="true"
    >
      {/* Sun / Dawn Ambient Aura */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'clamp(280px, 45vw, 650px)',
          height: 'clamp(280px, 45vw, 650px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(242, 203, 130, 0.4) 0%, rgba(200, 120, 89, 0.15) 50%, transparent 75%)',
          filter: 'blur(35px)',
          animation: 'pulseGlow 8s ease-in-out infinite',
        }}
      />

      {/* Animated Clouds Drift */}
      <div
        style={{
          position: 'absolute',
          top: '40px',
          left: 0,
          right: 0,
          height: '140px',
          opacity: 0.25,
          background: 'radial-gradient(ellipse at 30% 50%, rgba(229, 239, 231, 0.8) 0%, transparent 60%), radial-gradient(ellipse at 75% 45%, rgba(185, 217, 232, 0.7) 0%, transparent 65%)',
          filter: 'blur(30px)',
          animation: 'driftClouds 24s ease-in-out infinite alternate',
        }}
      />

      {/* Layer 1: Distant Mountain Peaks SVG */}
      <svg
        style={{
          position: 'absolute',
          bottom: '80px',
          left: 0,
          width: '100%',
          height: 'auto',
          minHeight: '160px',
          opacity: 0.4,
        }}
        viewBox="0 0 1200 320"
        preserveAspectRatio="none"
        fill="#102B29"
      >
        <path d="M0,240 L180,120 L320,190 L520,70 L720,180 L940,90 L1100,170 L1200,110 L1200,320 L0,320 Z" />
      </svg>

      {/* Layer 2: Mid-ground Rolling Forest Hills */}
      <svg
        style={{
          position: 'absolute',
          bottom: '30px',
          left: 0,
          width: '100%',
          height: 'auto',
          minHeight: '130px',
          opacity: 0.7,
        }}
        viewBox="0 0 1200 260"
        preserveAspectRatio="none"
        fill="#163D35"
      >
        <path d="M0,160 Q260,80 500,140 T1000,120 T1200,150 L1200,260 L0,260 Z" />
      </svg>

      {/* Layer 3: Foreground Shoreline */}
      <svg
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: 'auto',
          minHeight: '90px',
          opacity: 0.85,
        }}
        viewBox="0 0 1200 180"
        preserveAspectRatio="none"
        fill="#0b1d1c"
      >
        <path d="M0,90 C300,140 600,40 900,110 C1050,145 1150,110 1200,95 L1200,180 L0,180 Z" />
      </svg>

      {/* Swaying Reeds Left & Right */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: '12px',
          width: '90px',
          height: '130px',
          opacity: 0.65,
          transformOrigin: 'bottom center',
          animation: 'swayReeds 6s ease-in-out infinite',
        }}
      >
        <svg viewBox="0 0 100 160" fill="#20332F" style={{ width: '100%', height: '100%' }}>
          <path d="M20,160 Q35,80 15,10 Q30,70 32,160 Z" />
          <path d="M40,160 Q55,60 70,0 Q60,75 52,160 Z" />
          <path d="M60,160 Q80,90 95,30 Q78,85 70,160 Z" />
        </svg>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: 0,
          right: '16px',
          width: '100px',
          height: '140px',
          opacity: 0.65,
          transformOrigin: 'bottom center',
          animation: 'swayReedsOpposite 7s ease-in-out infinite',
        }}
      >
        <svg viewBox="0 0 100 160" fill="#20332F" style={{ width: '100%', height: '100%' }}>
          <path d="M70,160 Q50,70 80,10 Q65,75 60,160 Z" />
          <path d="M45,160 Q30,50 10,0 Q28,70 35,160 Z" />
          <path d="M25,160 Q10,95 0,40 Q15,90 20,160 Z" />
        </svg>
      </div>

      {/* Floating Leaves */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '25%',
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          opacity: 0.55,
          background: 'var(--amber)',
          animation: 'floatLeaf 14s linear infinite',
          filter: 'blur(0.5px)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '75%',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          opacity: 0.45,
          background: 'var(--terracotta)',
          animation: 'floatLeaf 18s linear infinite 4s',
          filter: 'blur(0.5px)',
        }}
      />
    </div>
  );
};
