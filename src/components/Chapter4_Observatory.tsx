import React, { useState } from 'react';
import { ALL_MEMORY_PHOTOS } from '../data/storyContent';
import { Eye, ChevronLeft, ChevronRight, ArrowRight, Compass } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface Chapter4Props {
  onContinue: () => void;
  onOpenLightbox: (index: number) => void;
}

export const Chapter4_Observatory: React.FC<Chapter4Props> = ({
  onContinue,
  onOpenLightbox,
}) => {
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const featuredPhoto = ALL_MEMORY_PHOTOS[featuredIndex];

  const handleSelectFeatured = (index: number) => {
    setFeaturedIndex(index);
    soundEngine.playChime(392 + (index % 5) * 45, 1.2);
  };

  const handlePrev = () => {
    const nextIdx = (featuredIndex - 1 + ALL_MEMORY_PHOTOS.length) % ALL_MEMORY_PHOTOS.length;
    handleSelectFeatured(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (featuredIndex + 1) % ALL_MEMORY_PHOTOS.length;
    handleSelectFeatured(nextIdx);
  };

  return (
    <div className="story-chapter">
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem', width: '100%' }}>
          <div className="chapter-badge">
            <Compass style={{ width: 14, height: 14, color: 'var(--teal)' }} />
            Chapter Four • The Mountaintop Observatory
          </div>

          <h2 className="section-title">The Observatory of Moments</h2>
          <p className="sub-title" style={{ maxWidth: '680px', margin: '0.5rem auto 0' }}>
            A panoramic lookout across the landscape of time. All 11 original photographs suspended as windows into our memories.
          </p>
        </div>

        {/* Observatory Main Deck: Desktop 2-column layout */}
        <div
          style={{
            width: '100%',
            maxWidth: '1240px',
            borderRadius: '1.75rem',
            padding: 'clamp(1.25rem, 3vw, 2.5rem)',
            background: 'linear-gradient(155deg, rgba(22, 61, 53, 0.95), rgba(11, 29, 28, 0.95))',
            border: '1px solid rgba(242, 203, 130, 0.35)',
            boxShadow: '0 16px 45px rgba(0,0,0,0.5), 0 0 25px rgba(242, 203, 130, 0.15)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <div className="desktop-2col">
            {/* Left Column: Large Featured Observation Window */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span
                  style={{
                    padding: '4px 14px',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    background: 'rgba(242, 203, 130, 0.25)',
                    color: 'var(--amber)',
                    border: '1px solid rgba(242, 203, 130, 0.4)',
                  }}
                >
                  Memory Window {featuredIndex + 1} of {ALL_MEMORY_PHOTOS.length}
                </span>

                {/* Left / Right Switcher Controls */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button
                    onClick={handlePrev}
                    className="nav-icon-btn"
                    style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                    aria-label="Previous photograph"
                    title="Previous photo (or Left Arrow)"
                  >
                    <ChevronLeft style={{ width: 20, height: 20 }} />
                  </button>
                  <button
                    onClick={handleNext}
                    className="nav-icon-btn"
                    style={{ border: '1px solid rgba(255,255,255,0.2)' }}
                    aria-label="Next photograph"
                    title="Next photo (or Right Arrow)"
                  >
                    <ChevronRight style={{ width: 20, height: 20 }} />
                  </button>
                </div>
              </div>

              {/* Large Frame with Strict Containment */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(280px, 36vw, 440px)',
                  borderRadius: '1.25rem',
                  overflow: 'hidden',
                  background: 'rgba(11, 29, 28, 0.95)',
                  border: '1px solid rgba(168, 191, 165, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px',
                  boxShadow: '0 12px 30px rgba(0,0,0,0.4)',
                }}
              >
                <img
                  src={featuredPhoto.src}
                  alt={featuredPhoto.alt}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    borderRadius: '0.75rem',
                  }}
                />

                {/* Open in Lightbox Overlay Button */}
                <button
                  onClick={() => onOpenLightbox(featuredIndex)}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(0,0,0,0.3)',
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
                  aria-label="Open full lightbox"
                >
                  <span
                    style={{
                      padding: '8px 18px',
                      borderRadius: '999px',
                      background: 'rgba(16, 43, 41, 0.95)',
                      border: '1px solid var(--amber)',
                      color: 'var(--amber)',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <Eye style={{ width: 16, height: 16 }} />
                    Open in Full Lightbox
                  </span>
                </button>
              </div>

              {/* Caption */}
              <div style={{ textAlign: 'center', padding: '0.25rem 0' }}>
                <p style={{ fontSize: '1rem', color: 'var(--ivory)', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>
                  “{featuredPhoto.caption}”
                </p>
                {featuredPhoto.yearHint && (
                  <span style={{ fontSize: '0.8rem', color: 'var(--sage)', marginTop: '4px', display: 'inline-block' }}>
                    • {featuredPhoto.yearHint} •
                  </span>
                )}
              </div>
            </div>

            {/* Right Column: All 11 Memory Windows Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--sage)' }}>
                  Observation Path • All 11 Windows
                </span>
                <span style={{ fontSize: '0.75rem', color: 'var(--amber)' }}>
                  Click to focus or enlarge
                </span>
              </div>

              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(75px, 1fr))',
                  gap: '8px',
                  maxHeight: '460px',
                  overflowY: 'auto',
                  padding: '4px',
                }}
              >
                {ALL_MEMORY_PHOTOS.map((photo, idx) => {
                  const isSelected = idx === featuredIndex;
                  return (
                    <button
                      key={photo.id}
                      onClick={() => handleSelectFeatured(idx)}
                      style={{
                        position: 'relative',
                        height: '90px',
                        borderRadius: '0.75rem',
                        overflow: 'hidden',
                        padding: '2px',
                        background: 'rgba(11, 29, 28, 0.9)',
                        border: isSelected ? '2px solid var(--amber)' : '1px solid rgba(168, 191, 165, 0.3)',
                        boxShadow: isSelected ? '0 0 16px rgba(242, 203, 130, 0.5)' : 'none',
                        transform: isSelected ? 'scale(1.05)' : 'none',
                        transition: 'all 0.25s ease',
                        cursor: 'pointer',
                      }}
                      aria-label={`Select photograph ${idx + 1}`}
                      aria-pressed={isSelected}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          borderRadius: '0.5rem',
                        }}
                        loading="lazy"
                      />
                      <div
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          padding: '2px 0',
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          textAlign: 'center',
                          background: isSelected ? 'var(--amber)' : 'rgba(16, 43, 41, 0.85)',
                          color: isSelected ? 'var(--forest-deep)' : 'var(--ivory)',
                        }}
                      >
                        #{idx + 1}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Continue Action */}
        <div style={{ marginTop: '2.5rem' }}>
          <button onClick={onContinue} className="btn-primary">
            <span>Walk into the Garden of Words</span>
            <ArrowRight style={{ width: 18, height: 18 }} />
          </button>
        </div>
      </div>
    </div>
  );
};
