import React, { useState } from 'react';
import { ArrowRight, Sparkles, Calendar, Heart } from 'lucide-react';
import { BIRTHDAY_INFO } from '../data/storyContent';
import { soundEngine } from '../utils/soundEngine';
import { assetUrl } from '../utils/assetUrl';

interface Chapter1Props {
  onBeginJourney: () => void;
  onOpenPhoto?: (src: string, alt: string, caption: string) => void;
}

export const Chapter1_SunriseHero: React.FC<Chapter1Props> = ({
  onBeginJourney,
  onOpenPhoto,
}) => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleBegin = () => {
    setIsTransitioning(true);
    soundEngine.playChime(523.25, 2.5);
    setTimeout(() => {
      onBeginJourney();
    }, 600);
  };

  return (
    <div
      className="story-chapter"
      style={{
        transition: 'all 0.6s ease',
        transform: isTransitioning ? 'scale(1.02)' : 'scale(1)',
        opacity: isTransitioning ? 0.75 : 1,
      }}
    >
      <div className="app-container">
        {/* DESKTOP & TABLET WIDE LAYOUT (1024px+) */}
        <div className="desktop-hero-layout">
          {/* Column 1: Typography & CTA */}
          <div className="hero-text-col">
            {/* Date Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '999px',
                background: 'rgba(22, 61, 53, 0.85)',
                border: '1px solid var(--amber)',
                color: 'var(--amber)',
                boxShadow: '0 0 16px rgba(242, 203, 130, 0.25)',
                marginBottom: '1rem',
              }}
            >
              <Calendar style={{ width: 14, height: 14 }} />
              <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                {BIRTHDAY_INFO.birthdayDate}
              </span>
              <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--amber)' }} />
              <span style={{ fontSize: '0.8rem', color: 'var(--ivory)' }}>A Special Sunrise</span>
            </div>

            {/* Overline */}
            <p className="hero-overline" style={{ textAlign: 'inherit' }}>
              A WORLD, MADE A LITTLE MORE<br className="mobile-break" /> BEAUTIFUL FOR YOU
            </p>

            {/* Main Greeting */}
            <h1 className="hero-title" style={{ marginBottom: '0.75rem', textAlign: 'inherit' }}>
              Happy Birthday,<br className="mobile-break" /> My Sister
            </h1>

            {/* Subtitle */}
            <p className="sub-title" style={{ maxWidth: '520px', marginBottom: '1.25rem' }}>
              {BIRTHDAY_INFO.heroSubtitle}
            </p>

            {/* Animated Sunrise Trail Illustration */}
            <div
              style={{
                width: '100%',
                maxWidth: '340px',
                height: '32px',
                marginBottom: '1.5rem',
                position: 'relative',
              }}
            >
              <svg viewBox="0 0 340 32" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                <path
                  d="M 10,30 Q 130,10 170,4 Q 210,10 330,30"
                  fill="none"
                  stroke="var(--amber)"
                  strokeWidth="2.5"
                  strokeDasharray="6 6"
                  opacity="0.75"
                />
                <circle cx="170" cy="4" r="5" fill="var(--amber)">
                  <animate attributeName="r" values="4;7;4" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.7;1;0.7" dur="2s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>

            {/* Primary Action Button */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <button
                onClick={handleBegin}
                disabled={isTransitioning}
                className="btn-primary"
                style={{
                  padding: '1rem 2.5rem',
                  fontSize: '1.15rem',
                }}
                aria-label="Begin the Journey"
              >
                <Sparkles style={{ width: 20, height: 20, color: 'var(--forest-deep)' }} />
                <span>Begin the Journey</span>
                <ArrowRight style={{ width: 20, height: 20, color: 'var(--forest-deep)' }} />
              </button>

              <span style={{ fontSize: '0.75rem', color: 'var(--sage)', opacity: 0.8 }} className="hidden-mobile">
                Press Space or Enter to begin • Use [←] [→] to navigate
              </span>
            </div>
          </div>

          {/* Column 2: Sister Portrait Frame */}
          <div className="hero-photo-col">
            <div
              className="hero-frame-container"
              style={{
                position: 'relative',
                borderRadius: '1.75rem',
                padding: '8px',
                background: 'linear-gradient(145deg, rgba(242, 203, 130, 0.45), rgba(200, 120, 89, 0.35))',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5), 0 0 35px rgba(242, 203, 130, 0.3)',
                border: '1px solid rgba(242, 203, 130, 0.5)',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '1.25rem',
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
                  alt="My Sister - Birthday Celebration"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    transition: 'transform 0.7s ease',
                  }}
                  loading="eager"
                />

                <button
                  onClick={() =>
                    onOpenPhoto &&
                    onOpenPhoto(
                      assetUrl('sister-hero.jpg'),
                      'Happy Birthday, My Sister',
                      'A radiant smile greeting a brand new sunrise of life.'
                    )
                  }
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.3)',
                    border: 'none',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}
                  aria-label="View full portrait"
                >
                  <span
                    style={{
                      background: 'rgba(16, 43, 41, 0.9)',
                      padding: '8px 16px',
                      borderRadius: '999px',
                      border: '1px solid var(--amber)',
                      color: 'var(--amber)',
                    }}
                  >
                    View Full Portrait
                  </span>
                </button>
              </div>

              {/* Heart Badge */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-10px',
                  right: '-10px',
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'var(--terracotta)',
                  color: 'var(--ivory)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.4)',
                  border: '2px solid var(--ivory)',
                }}
              >
                <Heart style={{ width: 20, height: 20, fill: 'currentColor' }} />
              </div>
            </div>

            <p
              style={{
                fontSize: '0.8rem',
                color: 'var(--sage)',
                fontStyle: 'italic',
                fontFamily: 'var(--font-display)',
                marginTop: '0.75rem',
                textAlign: 'center',
                maxWidth: '300px',
              }}
            >
              “A world made a little more beautiful for you.”
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .desktop-hero-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 3.5rem;
          width: 100%;
        }

        .hero-text-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          z-index: 2;
        }

        .hero-photo-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .hero-frame-container {
          width: clamp(260px, 28vw, 380px);
          height: clamp(340px, 38vw, 480px);
        }

        .hero-overline {
          font-size: clamp(0.75rem, 1.2vw, 0.95rem);
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-weight: 700;
          color: var(--amber);
          margin-bottom: 0.6rem;
          line-height: 1.4;
        }

        .mobile-break {
          display: none;
        }

        @media (max-width: 1023px) {
          .mobile-break {
            display: inline;
          }

          .desktop-hero-layout {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 1.5rem;
            width: 100%;
          }

          .hero-text-col {
            align-items: center !important;
            text-align: center !important;
            width: 100% !important;
            max-width: 100% !important;
          }

          .hero-frame-container {
            width: clamp(180px, 45vw, 240px);
            height: clamp(240px, 55vw, 310px);
          }

          .hero-overline {
            letter-spacing: 0.08em;
            max-width: 320px;
          }
        }
      `}</style>
    </div>
  );
};
