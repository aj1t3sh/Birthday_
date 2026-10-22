import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { BIRTHDAY_INFO } from '../data/storyContent';
import { Flame, ArrowRight, PartyPopper } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface Chapter7Props {
  onContinue: () => void;
}

export const Chapter7_Celebration: React.FC<Chapter7Props> = ({ onContinue }) => {
  const [candlesLit, setCandlesLit] = useState(false);

  const handleLightCandles = () => {
    setCandlesLit(true);
    soundEngine.playCelebrationChimes();

    // Fire multi-cannon confetti
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#F2CB82', '#C87859', '#397F79', '#A8BFA5', '#B9D9E8', '#FFFFFF'],
      });

      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 60,
          spread: 60,
          origin: { x: 0 },
          colors: ['#F2CB82', '#C87859', '#F8F5E9'],
        });
      }, 250);

      setTimeout(() => {
        confetti({
          particleCount: 60,
          angle: 120,
          spread: 60,
          origin: { x: 1 },
          colors: ['#397F79', '#A8BFA5', '#F2CB82'],
        });
      }, 450);
    } catch {
      // ignore
    }
  };

  return (
    <div className="story-chapter">
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Festive Bunting Banner SVG spanning across top */}
        <div style={{ width: '100%', maxWidth: '600px', margin: '0 auto 1.5rem', overflow: 'hidden' }}>
          <svg viewBox="0 0 600 60" style={{ width: '100%', height: '50px' }}>
            <path d="M 0,15 Q 300,45 600,15" fill="none" stroke="var(--sage)" strokeWidth="2" />
            <polygon points="40,19 75,23 57,52" fill="var(--terracotta)" />
            <polygon points="100,26 135,30 117,59" fill="var(--amber)" />
            <polygon points="160,33 195,36 177,65" fill="var(--teal)" />
            <polygon points="220,38 255,40 237,69" fill="var(--sky)" />
            <polygon points="280,41 315,41 297,70" fill="var(--sage)" />
            <polygon points="340,40 375,38 357,69" fill="var(--terracotta)" />
            <polygon points="400,36 435,33 417,65" fill="var(--amber)" />
            <polygon points="460,30 495,26 477,59" fill="var(--teal)" />
            <polygon points="520,23 555,19 537,52" fill="var(--sage)" />
          </svg>
        </div>

        {/* Floating Festive Balloons on both sides */}
        <div
          className="hidden-mobile"
          style={{
            position: 'absolute',
            top: '12%',
            left: '5%',
            opacity: 0.85,
            animation: 'balloonRise 6s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        >
          <div style={{ width: '50px', height: '65px', borderRadius: '50%', background: 'var(--amber)', boxShadow: '0 8px 20px rgba(0,0,0,0.3)', position: 'relative' }}>
            <div style={{ position: 'absolute', bottom: '-40px', left: '50%', width: '1px', height: '40px', background: 'var(--sage)' }} />
          </div>
        </div>

        <div
          className="hidden-mobile"
          style={{
            position: 'absolute',
            top: '16%',
            right: '5%',
            opacity: 0.85,
            animation: 'balloonRise 7s ease-in-out infinite 1.5s',
            pointerEvents: 'none',
          }}
        >
          <div style={{ width: '54px', height: '70px', borderRadius: '50%', background: 'var(--terracotta)', boxShadow: '0 8px 20px rgba(0,0,0,0.3)', position: 'relative' }}>
            <div style={{ position: 'absolute', bottom: '-45px', left: '50%', width: '1px', height: '45px', background: 'var(--sage)' }} />
          </div>
        </div>

        {/* Desktop 2-column layout (Cake on Left, Greeting & Controls on Right) */}
        <div
          style={{
            width: '100%',
            maxWidth: '1150px',
            borderRadius: '1.75rem',
            padding: 'clamp(1.5rem, 3.5vw, 3rem)',
            background: 'linear-gradient(155deg, rgba(22, 61, 53, 0.95), rgba(11, 29, 28, 0.95))',
            border: '1px solid rgba(242, 203, 130, 0.4)',
            boxShadow: '0 16px 45px rgba(0,0,0,0.5), 0 0 35px rgba(242, 203, 130, 0.2)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="desktop-2col">
            {/* Left Column: Illustrated Birthday Cake */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 'clamp(240px, 30vw, 360px)', height: 'clamp(240px, 30vw, 360px)', position: 'relative' }}>
                <svg viewBox="0 0 200 200" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                  {/* Wooden Platter */}
                  <ellipse cx="100" cy="180" rx="90" ry="16" fill="#1f3b33" stroke="#397F79" strokeWidth="2" />
                  <ellipse cx="100" cy="177" rx="85" ry="12" fill="#2d5248" />

                  {/* Bottom Tier Cake */}
                  <rect x="35" y="125" width="130" height="45" rx="8" fill="#F8F5E9" />
                  <path d="M 35,135 Q 67,145 100,135 Q 133,145 165,135 L 165,125 L 35,125 Z" fill="#C87859" opacity="0.8" />
                  <circle cx="50" cy="125" r="5" fill="#F2CB82" />
                  <circle cx="75" cy="125" r="5" fill="#F2CB82" />
                  <circle cx="100" cy="125" r="5" fill="#F2CB82" />
                  <circle cx="125" cy="125" r="5" fill="#F2CB82" />
                  <circle cx="150" cy="125" r="5" fill="#F2CB82" />

                  {/* Top Tier Cake */}
                  <rect x="55" y="85" width="90" height="42" rx="6" fill="#FAF7EE" />
                  <path d="M 55,95 Q 77,102 100,95 Q 123,102 145,95 L 145,85 L 55,85 Z" fill="#397F79" opacity="0.75" />
                  <circle cx="68" cy="85" r="4" fill="#C87859" />
                  <circle cx="84" cy="85" r="4" fill="#C87859" />
                  <circle cx="100" cy="85" r="4" fill="#C87859" />
                  <circle cx="116" cy="85" r="4" fill="#C87859" />
                  <circle cx="132" cy="85" r="4" fill="#C87859" />

                  {/* 3 Candles */}
                  <rect x="73" y="60" width="6" height="26" rx="2" fill="#E5EFE7" stroke="#A8BFA5" strokeWidth="1" />
                  <line x1="76" y1="60" x2="76" y2="53" stroke="#20332F" strokeWidth="1.5" />

                  <rect x="97" y="55" width="6" height="31" rx="2" fill="#F2CB82" stroke="#C87859" strokeWidth="1" />
                  <line x1="100" y1="55" x2="100" y2="47" stroke="#20332F" strokeWidth="1.5" />

                  <rect x="121" y="60" width="6" height="26" rx="2" fill="#E5EFE7" stroke="#A8BFA5" strokeWidth="1" />
                  <line x1="124" y1="60" x2="124" y2="53" stroke="#20332F" strokeWidth="1.5" />

                  {/* Lit Animated Flames */}
                  {candlesLit && (
                    <>
                      <g style={{ transformOrigin: '76px 46px', animation: 'flameFlicker 1.8s infinite' }}>
                        <ellipse cx="76" cy="46" rx="4.5" ry="8" fill="#F2CB82" />
                        <ellipse cx="76" cy="47" rx="2.5" ry="5" fill="#FFFFFF" />
                      </g>

                      <g style={{ transformOrigin: '100px 40px', animation: 'flameFlicker 1.5s infinite 0.3s' }}>
                        <ellipse cx="100" cy="40" rx="5.5" ry="9" fill="#F2CB82" />
                        <ellipse cx="100" cy="41" rx="3" ry="5.5" fill="#FFFFFF" />
                      </g>

                      <g style={{ transformOrigin: '124px 46px', animation: 'flameFlicker 1.9s infinite 0.6s' }}>
                        <ellipse cx="124" cy="46" rx="4.5" ry="8" fill="#F2CB82" />
                        <ellipse cx="124" cy="47" rx="2.5" ry="5" fill="#FFFFFF" />
                      </g>
                    </>
                  )}
                </svg>
              </div>

              <span style={{ fontSize: '0.85rem', color: 'var(--sage)', fontStyle: 'italic', fontFamily: 'var(--font-display)', marginTop: '0.5rem' }}>
                {candlesLit ? '✨ Three golden wishes glowing bright' : 'Tap below to light the birthday candles'}
              </span>
            </div>

            {/* Right Column: Greetings & Lighting Interaction */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left', gap: '1rem' }} className="celebration-text-col">
              <span
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'var(--amber)',
                }}
              >
                {BIRTHDAY_INFO.celebrationTitle}
              </span>

              <h2 className="section-title">
                {BIRTHDAY_INFO.celebrationGreeting}
              </h2>

              <p style={{ fontSize: '1.1rem', color: 'var(--mist)', lineHeight: '1.75', maxWidth: '520px' }}>
                {BIRTHDAY_INFO.celebrationWish}
              </p>

              {/* Action Buttons */}
              <div style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem', width: '100%', maxWidth: '360px' }}>
                {!candlesLit ? (
                  <button
                    onClick={handleLightCandles}
                    className="btn-primary"
                    style={{ padding: '1.1rem 2.5rem', fontSize: '1.15rem' }}
                    aria-label="Light the birthday candles"
                  >
                    <Flame style={{ width: 22, height: 22, color: 'var(--forest-deep)' }} />
                    <span>Light the Candles</span>
                  </button>
                ) : (
                  <>
                    <div
                      style={{
                        padding: '10px 18px',
                        borderRadius: '999px',
                        background: 'rgba(242, 203, 130, 0.25)',
                        border: '1px solid var(--amber)',
                        color: 'var(--amber)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        boxShadow: '0 0 20px rgba(242, 203, 130, 0.35)',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                      }}
                    >
                      <PartyPopper style={{ width: 18, height: 18 }} />
                      <span>The Candles Are Lit! Happy Birthday!</span>
                    </div>

                    <button
                      onClick={onContinue}
                      className="btn-primary"
                      style={{ padding: '1.1rem 2.5rem', fontSize: '1.15rem' }}
                    >
                      <span>Continue to Your Final Chapter</span>
                      <ArrowRight style={{ width: 20, height: 20 }} />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1023px) {
          .celebration-text-col {
            align-items: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </div>
  );
};
