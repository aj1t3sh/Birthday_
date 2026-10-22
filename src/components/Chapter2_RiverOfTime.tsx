import React, { useState } from 'react';
import { RIVER_STEPPING_STONES } from '../data/storyContent';
import { ChevronLeft, ChevronRight, Waves, ArrowRight, Eye } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface Chapter2Props {
  onContinue: () => void;
  onOpenPhoto: (src: string, alt: string, caption: string) => void;
}

export const Chapter2_RiverOfTime: React.FC<Chapter2Props> = ({
  onContinue,
  onOpenPhoto,
}) => {
  const [activeStoneIndex, setActiveStoneIndex] = useState(0);

  const currentStage = RIVER_STEPPING_STONES[activeStoneIndex];

  const handleSelectStone = (index: number) => {
    setActiveStoneIndex(index);
    soundEngine.playChime(329.63 + index * 60, 1.5);
  };

  const handlePrevStone = () => {
    if (activeStoneIndex > 0) {
      handleSelectStone(activeStoneIndex - 1);
    }
  };

  const handleNextStone = () => {
    if (activeStoneIndex < RIVER_STEPPING_STONES.length - 1) {
      handleSelectStone(activeStoneIndex + 1);
    }
  };

  return (
    <div className="story-chapter">
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem', width: '100%' }}>
          <div className="chapter-badge">
            <Waves style={{ width: 14, height: 14, color: 'var(--teal)' }} />
            Chapter Two • The River of Time
          </div>

          <h2 className="section-title">The Flowing River</h2>
          <p className="sub-title" style={{ maxWidth: '640px', margin: '0.5rem auto 0' }}>
            Cross through our shared journey across four stepping stones of memory.
          </p>
        </div>

        {/* Stepping Stones River Track */}
        <div
          style={{
            width: '100%',
            maxWidth: '920px',
            margin: '0.5rem auto 2rem',
            padding: '1.25rem 1.5rem',
            borderRadius: '1.5rem',
            background: 'rgba(11, 29, 28, 0.75)',
            border: '1px solid rgba(57, 127, 121, 0.4)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Animated Water Current SVG */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.2,
              pointerEvents: 'none',
              background: 'repeating-linear-gradient(45deg, #163D35, #163D35 15px, #397F79 15px, #397F79 30px)',
              animation: 'riverFlow 18s linear infinite',
            }}
          />

          <div className="stepping-stones-row">
            {RIVER_STEPPING_STONES.map((stone, idx) => {
              const isActive = idx === activeStoneIndex;
              return (
                <button
                  key={stone.id}
                  onClick={() => handleSelectStone(idx)}
                  className={`stone-node ${isActive ? 'active' : ''}`}
                  aria-label={`Stepping stone ${idx + 1}: ${stone.title}`}
                  aria-pressed={isActive}
                >
                  <div className="stone-pill">
                    <span>{idx + 1}</span>
                  </div>
                  <span className="stone-label">{stone.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Presentation (Desktop 2-col, Mobile vertical) */}
        <div
          style={{
            width: '100%',
            maxWidth: '1100px',
            borderRadius: '1.75rem',
            padding: 'clamp(1.25rem, 3vw, 2.5rem)',
            background: 'linear-gradient(155deg, rgba(22, 61, 53, 0.95), rgba(16, 43, 41, 0.95))',
            border: '1px solid rgba(242, 203, 130, 0.35)',
            boxShadow: '0 16px 45px rgba(0,0,0,0.5), 0 0 25px rgba(242, 203, 130, 0.15)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="desktop-2col">
            {/* Left Column: Narrative Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'left' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    padding: '4px 12px',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    background: 'rgba(242, 203, 130, 0.25)',
                    color: 'var(--amber)',
                    border: '1px solid rgba(242, 203, 130, 0.4)',
                  }}
                >
                  Stone {currentStage.stoneNumber} of 4
                </span>

                {/* Prev / Next Stepping Buttons */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={handlePrevStone}
                    disabled={activeStoneIndex === 0}
                    className="nav-icon-btn"
                    style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                    aria-label="Previous stone"
                  >
                    <ChevronLeft style={{ width: 18, height: 18 }} />
                  </button>
                  <button
                    onClick={handleNextStone}
                    disabled={activeStoneIndex === RIVER_STEPPING_STONES.length - 1}
                    className="nav-icon-btn"
                    style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                    aria-label="Next stone"
                  >
                    <ChevronRight style={{ width: 18, height: 18 }} />
                  </button>
                </div>
              </div>

              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 2.5vw, 2.5rem)', color: 'var(--ivory)' }}>
                  {currentStage.title}
                </h3>
                <p style={{ fontSize: '0.95rem', color: 'var(--sage)', marginTop: '4px' }}>
                  {currentStage.subtitle}
                </p>
              </div>

              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: 'var(--mist)', fontWeight: 400 }}>
                {currentStage.description}
              </p>

              {/* Sincere Quote Card */}
              <div
                style={{
                  marginTop: '0.5rem',
                  padding: '1rem 1.25rem',
                  borderRadius: '1rem',
                  background: 'rgba(11, 29, 28, 0.6)',
                  borderLeft: '3px solid var(--amber)',
                }}
              >
                <p style={{ fontSize: '0.9rem', fontStyle: 'italic', color: 'var(--amber)', fontFamily: 'var(--font-display)' }}>
                  “{currentStage.quote}”
                </p>
              </div>
            </div>

            {/* Right Column: Two Full Photographs (100% Aspect Ratio Preserved) */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
              }}
            >
              {currentStage.photos.map((photo, pIdx) => (
                <div
                  key={pIdx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(11, 29, 28, 0.85)',
                    borderRadius: '1rem',
                    border: '1px solid rgba(168, 191, 165, 0.25)',
                    padding: '8px',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                  }}
                >
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: 'clamp(200px, 25vw, 280px)',
                      borderRadius: '0.75rem',
                      overflow: 'hidden',
                      background: 'rgba(16, 43, 41, 0.7)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        borderRadius: '0.5rem',
                      }}
                      loading="lazy"
                    />

                    <button
                      onClick={() => onOpenPhoto(photo.src, photo.alt, photo.caption)}
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
                      aria-label={`View photo: ${photo.alt}`}
                    >
                      <span
                        style={{
                          padding: '6px 14px',
                          borderRadius: '999px',
                          background: 'rgba(16, 43, 41, 0.95)',
                          border: '1px solid var(--amber)',
                          color: 'var(--amber)',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <Eye style={{ width: 14, height: 14 }} />
                        View Full Photo
                      </span>
                    </button>
                  </div>

                  <p
                    style={{
                      fontSize: '0.8rem',
                      fontStyle: 'italic',
                      color: 'var(--mist)',
                      fontFamily: 'var(--font-display)',
                      textAlign: 'center',
                      padding: '8px 4px 4px',
                    }}
                  >
                    {photo.caption}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div style={{ marginTop: '2.5rem' }}>
          <button onClick={onContinue} className="btn-primary">
            <span>Cross to the Islands of Memories</span>
            <ArrowRight style={{ width: 18, height: 18 }} />
          </button>
        </div>
      </div>
    </div>
  );
};
