import React, { useState } from 'react';
import { BIRTHDAY_INFO, HUG_BURST_MESSAGE } from '../data/storyContent';
import { Heart, RotateCcw, Sparkles, Eye, X } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';
import { assetUrl } from '../utils/assetUrl';

interface Chapter8Props {
  onRestart: () => void;
  onOpenPhoto: (src: string, alt: string, caption: string) => void;
}

export const Chapter8_SunriseFinale: React.FC<Chapter8Props> = ({
  onRestart,
  onOpenPhoto,
}) => {
  const [hugGiven, setHugGiven] = useState(false);
  const [floatingHearts, setFloatingHearts] = useState<{ id: number; left: number }[]>([]);

  const handleGiveHug = () => {
    setHugGiven(true);
    soundEngine.playChime(523.25, 2.5);

    // Generate floating hearts
    const newHearts = Array.from({ length: 14 }, (_, i) => ({
      id: Date.now() + i,
      left: 10 + Math.random() * 80,
    }));
    setFloatingHearts(newHearts);

    setTimeout(() => {
      setFloatingHearts([]);
    }, 3500);
  };

  return (
    <div className="story-chapter">
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Floating Hearts from Hug */}
        {floatingHearts.map((heart) => (
          <div
            key={heart.id}
            style={{
              position: 'fixed',
              pointerEvents: 'none',
              zIndex: 9999,
              left: `${heart.left}%`,
              bottom: '20%',
              color: 'var(--terracotta)',
              animation: 'heartFloat 3s ease-out forwards',
            }}
          >
            <Heart style={{ width: 32, height: 32, fill: 'currentColor' }} />
          </div>
        ))}

        {/* Sunrise Aura Badge */}
        <div className="chapter-badge" style={{ borderColor: 'var(--amber)', color: 'var(--amber)', marginBottom: '1.5rem' }}>
          <Sparkles style={{ width: 16, height: 16 }} />
          <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            The Sunrise Finale • A New Chapter
          </span>
        </div>

        {/* Main 2-column Desktop Layout (Sister Portrait on Left, Staged Reveal on Right) */}
        <div
          style={{
            width: '100%',
            maxWidth: '1200px',
            borderRadius: '1.75rem',
            padding: 'clamp(1.5rem, 3.5vw, 3rem)',
            background: 'linear-gradient(155deg, rgba(22, 61, 53, 0.95), rgba(11, 29, 28, 0.95))',
            border: '1px solid rgba(242, 203, 130, 0.45)',
            boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 35px rgba(242, 203, 130, 0.25)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="desktop-2col">
            {/* Left Column: Real Sister Portrait (100% Uncropped Containment) */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div
                style={{
                  position: 'relative',
                  width: 'clamp(240px, 28vw, 380px)',
                  height: 'clamp(320px, 38vw, 480px)',
                  borderRadius: '1.5rem',
                  overflow: 'hidden',
                  padding: '10px',
                  background: 'linear-gradient(145deg, rgba(242, 203, 130, 0.35), rgba(200, 120, 89, 0.3))',
                  border: '2px solid var(--amber)',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.5), 0 0 30px rgba(242, 203, 130, 0.25)',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '1.15rem',
                    overflow: 'hidden',
                    background: 'var(--forest-deep)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                  }}
                >
                  <img
                    src={assetUrl('sister-hero.jpg')}
                    alt="My Sister - Happy Birthday"
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      borderRadius: '0.75rem',
                    }}
                  />

                  {/* Click to expand overlay */}
                  <button
                    onClick={() =>
                      onOpenPhoto(
                        assetUrl('sister-hero.jpg'),
                        'Happy Birthday, My Sister',
                        'May your new chapter be filled with pure joy, confidence, and peace.'
                      )
                    }
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(0,0,0,0.35)',
                      border: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      opacity: 0,
                      transition: 'opacity 0.25s ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                    onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                    aria-label="View full portrait"
                  >
                    <span
                      style={{
                        padding: '8px 18px',
                        borderRadius: '999px',
                        background: 'rgba(16, 43, 41, 0.95)',
                        border: '1px solid var(--amber)',
                        color: 'var(--amber)',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                      }}
                    >
                      <Eye style={{ width: 16, height: 16 }} />
                      View Full Portrait
                    </span>
                  </button>
                </div>
              </div>

              <p style={{ fontSize: '0.85rem', color: 'var(--sage)', fontStyle: 'italic', fontFamily: 'var(--font-display)', marginTop: '0.85rem' }}>
                “May every step forward bring pure joy.”
              </p>
            </div>

            {/* Right Column: Staged Message Reveal & Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', gap: '1.25rem' }} className="finale-text-col">
              <h1 className="hero-title">
                {BIRTHDAY_INFO.finaleTitle}
              </h1>

              <p style={{ fontSize: '1.25rem', fontFamily: 'var(--font-display)', color: 'var(--amber)', fontWeight: 600, lineHeight: '1.4' }}>
                {BIRTHDAY_INFO.finaleStage1}
              </p>

              <p style={{ fontSize: '1.05rem', color: 'var(--mist)', lineHeight: '1.75', maxWidth: '520px' }}>
                {BIRTHDAY_INFO.finaleStage2}
              </p>

              <p style={{ fontSize: '1.1rem', color: 'var(--amber)', fontWeight: 700, letterSpacing: '0.02em' }}>
                {BIRTHDAY_INFO.finaleStage3}
              </p>

              {/* Signoff */}
              <div style={{ paddingTop: '0.5rem' }}>
                <p style={{ fontSize: '0.95rem', fontStyle: 'italic', color: 'var(--sage)', fontFamily: 'var(--font-display)' }}>
                  {BIRTHDAY_INFO.finaleSignoff}
                </p>
                <p style={{ fontSize: '1.35rem', fontWeight: 700, color: 'var(--amber)', fontFamily: 'var(--font-display)' }}>
                  {BIRTHDAY_INFO.finaleSender}
                </p>
              </div>

              {/* Action Buttons */}
              <div style={{ marginTop: '0.75rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', width: '100%' }}>
                <button
                  onClick={handleGiveHug}
                  className="btn-primary"
                  style={{
                    padding: '0.95rem 2rem',
                    background: 'linear-gradient(135deg, var(--terracotta), var(--amber))',
                  }}
                  aria-label="Send one more hug"
                >
                  <Heart style={{ width: 20, height: 20, fill: 'currentColor', color: '#fff' }} />
                  <span>One More Hug</span>
                </button>

                <button
                  onClick={onRestart}
                  className="btn-secondary"
                  style={{ padding: '0.95rem 2rem' }}
                  aria-label="Experience the Journey Again"
                >
                  <RotateCcw style={{ width: 18, height: 18 }} />
                  <span>Experience the Journey Again</span>
                </button>
              </div>

              {/* Hug Message Reveal */}
              {hugGiven && (
                <div
                  style={{
                    width: '100%',
                    maxWidth: '480px',
                    padding: '1.25rem',
                    borderRadius: '1.25rem',
                    border: '1px solid rgba(200, 120, 89, 0.5)',
                    background: 'rgba(32, 51, 47, 0.95)',
                    marginTop: '0.5rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--amber)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <Heart style={{ width: 14, height: 14, fill: 'currentColor' }} />
                      {HUG_BURST_MESSAGE.title}
                    </span>
                    <button onClick={() => setHugGiven(false)} className="nav-icon-btn" aria-label="Close hug message">
                      <X style={{ width: 16, height: 16 }} />
                    </button>
                  </div>
                  <p style={{ fontSize: '0.95rem', color: 'var(--mist)', lineHeight: '1.6' }}>
                    {HUG_BURST_MESSAGE.message}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div style={{ marginTop: '2.5rem', fontSize: '0.8rem', color: 'var(--sage)', opacity: 0.7 }}>
          Dedicated with love to My Sister • 6 November
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .finale-text-col {
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </div>
  );
};
