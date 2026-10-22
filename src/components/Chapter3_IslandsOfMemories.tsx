import React, { useState } from 'react';
import { FLOATING_ISLANDS_DATA } from '../data/storyContent';
import { MapPin, ArrowRight, Eye, Mountain } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface Chapter3Props {
  onContinue: () => void;
  onOpenPhoto: (src: string, alt: string, caption: string) => void;
}

export const Chapter3_IslandsOfMemories: React.FC<Chapter3Props> = ({
  onContinue,
  onOpenPhoto,
}) => {
  const [selectedIslandId, setSelectedIslandId] = useState(FLOATING_ISLANDS_DATA[0].id);

  const activeIsland =
    FLOATING_ISLANDS_DATA.find((i) => i.id === selectedIslandId) || FLOATING_ISLANDS_DATA[0];

  const handleSelectIsland = (id: string) => {
    setSelectedIslandId(id);
    soundEngine.playChime(440, 1.8);
  };

  return (
    <div className="story-chapter">
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem', width: '100%' }}>
          <div className="chapter-badge">
            <Mountain style={{ width: 14, height: 14, color: 'var(--teal)' }} />
            Chapter Three • The Islands of Memories
          </div>

          <h2 className="section-title">The Floating Islands</h2>
          <p className="sub-title" style={{ maxWidth: '640px', margin: '0.5rem auto 0' }}>
            Three floating illustrated environments suspended above the mist, connected by natural bridges.
          </p>
        </div>

        {/* 3 Islands Selector (Wide 3-col on Desktop, Vertical on Mobile) */}
        <div style={{ width: '100%', maxWidth: '1100px', margin: '1rem 0 2rem', position: 'relative' }}>
          <div className="desktop-3col">
            {FLOATING_ISLANDS_DATA.map((island, idx) => {
              const isSelected = island.id === selectedIslandId;
              return (
                <button
                  key={island.id}
                  onClick={() => handleSelectIsland(island.id)}
                  style={{
                    padding: '1.25rem 1.5rem',
                    borderRadius: '1.5rem',
                    textAlign: 'left',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '130px',
                    background: isSelected
                      ? 'linear-gradient(155deg, rgba(22, 61, 53, 0.98), rgba(16, 43, 41, 0.98))'
                      : 'rgba(16, 43, 41, 0.7)',
                    border: isSelected ? `2px solid ${island.accentColor}` : '1px solid rgba(168, 191, 165, 0.25)',
                    boxShadow: isSelected ? `0 10px 30px rgba(0,0,0,0.5), 0 0 24px ${island.accentColor}40` : '0 4px 14px rgba(0,0,0,0.2)',
                    transform: isSelected ? 'translateY(-3px)' : 'none',
                    transition: 'all 0.35s ease',
                    cursor: 'pointer',
                  }}
                  aria-pressed={isSelected}
                  aria-label={`Travel to ${island.title}`}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                    <span
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        background: isSelected ? island.accentColor : 'rgba(255, 255, 255, 0.1)',
                        color: isSelected ? '#102B29' : 'var(--ivory)',
                      }}
                    >
                      {idx + 1}
                    </span>

                    {isSelected && (
                      <span
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '4px',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: 'var(--amber)',
                        }}
                      >
                        <MapPin style={{ width: 14, height: 14 }} />
                        Exploring Island
                      </span>
                    )}
                  </div>

                  <div style={{ marginTop: '0.75rem' }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--ivory)' }}>
                      {island.title}
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--sage)', marginTop: '2px' }}>
                      {island.subtitle}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Island Illustrated Environment View */}
        <div
          style={{
            width: '100%',
            maxWidth: '1200px',
            borderRadius: '1.75rem',
            padding: 'clamp(1.5rem, 3.5vw, 2.75rem)',
            background: 'linear-gradient(155deg, rgba(22, 61, 53, 0.95), rgba(11, 29, 28, 0.95))',
            border: `1px solid ${activeIsland.accentColor}55`,
            boxShadow: `0 16px 45px rgba(0,0,0,0.5), 0 0 28px ${activeIsland.accentColor}25`,
            backdropFilter: 'blur(12px)',
            textAlign: 'left',
          }}
        >
          {/* Header Row */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingBottom: '1.25rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <div>
              <span
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  padding: '4px 12px',
                  borderRadius: '999px',
                  background: `${activeIsland.accentColor}25`,
                  color: activeIsland.accentColor,
                  border: `1px solid ${activeIsland.accentColor}50`,
                  display: 'inline-block',
                  marginBottom: '6px',
                }}
              >
                {activeIsland.theme}
              </span>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)', color: 'var(--ivory)' }}>
                {activeIsland.title}
              </h3>
            </div>

            <p
              style={{
                fontSize: '0.95rem',
                color: 'var(--sage)',
                fontStyle: 'italic',
                fontFamily: 'var(--font-display)',
                maxWidth: '380px',
              }}
            >
              “{activeIsland.reflection}”
            </p>
          </div>

          <p style={{ fontSize: '1.05rem', color: 'var(--mist)', margin: '1.25rem 0', lineHeight: '1.7', fontWeight: 400 }}>
            {activeIsland.description}
          </p>

          {/* Floating Memory Frames - Responsive Grid with 100% Aspect Ratio Containment */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
              marginTop: '1.5rem',
            }}
          >
            {activeIsland.photos.map((photo, pIdx) => (
              <div
                key={pIdx}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: 'rgba(11, 29, 28, 0.85)',
                  borderRadius: '1.25rem',
                  border: '1px solid rgba(168, 191, 165, 0.25)',
                  padding: '10px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
                  transition: 'transform 0.35s ease',
                }}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: 'clamp(220px, 25vw, 320px)',
                    borderRadius: '0.85rem',
                    overflow: 'hidden',
                    background: 'rgba(16, 43, 41, 0.75)',
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
                    aria-label={`View full photo: ${photo.alt}`}
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
                    fontSize: '0.85rem',
                    fontStyle: 'italic',
                    color: 'var(--mist)',
                    fontFamily: 'var(--font-display)',
                    textAlign: 'center',
                    padding: '10px 6px 4px',
                  }}
                >
                  {photo.caption}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Continue Action */}
        <div style={{ marginTop: '2.5rem' }}>
          <button onClick={onContinue} className="btn-primary">
            <span>Ascend to the Observatory of Moments</span>
            <ArrowRight style={{ width: 18, height: 18 }} />
          </button>
        </div>
      </div>
    </div>
  );
};
