import React, { useState } from 'react';
import { Compass, ChevronLeft, ChevronRight, Menu, X, Sparkles } from 'lucide-react';

interface NavigationProps {
  currentChapter: number;
  totalChapters: number;
  chapterTitles: string[];
  onSelectChapter: (chapterIndex: number) => void;
  onNextChapter: () => void;
  onPrevChapter: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentChapter,
  totalChapters,
  chapterTitles,
  onSelectChapter,
  onNextChapter,
  onPrevChapter,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const progressPercentage = ((currentChapter + 1) / totalChapters) * 100;

  return (
    <>
      <header className="nav-header">
        {/* Top Progress Bar */}
        <div style={{ width: '100%', height: '3px', background: 'rgba(0,0,0,0.4)', overflow: 'hidden' }}>
          <div
            style={{
              width: `${progressPercentage}%`,
              height: '100%',
              background: 'linear-gradient(90deg, var(--teal), var(--amber))',
              boxShadow: '0 0 10px rgba(242, 203, 130, 0.7)',
              transition: 'width 0.4s ease-out',
            }}
          />
        </div>

        <div className="nav-inner">
          {/* Left: Brand & Chapter Info */}
          <div className="nav-brand">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="nav-icon-btn"
              style={{ minWidth: '44px', minHeight: '44px' }}
              aria-label="Toggle story chapters menu"
              title="Browse all 8 story chapters"
            >
              {menuOpen ? <X style={{ width: 22, height: 22, color: 'var(--amber)' }} /> : <Menu style={{ width: 22, height: 22 }} />}
            </button>

            <div className="nav-chapter-badge">
              <span className="nav-chapter-count">
                <Compass style={{ width: 12, height: 12, display: 'inline', marginRight: 4 }} />
                Chapter {currentChapter + 1} of {totalChapters}
              </span>
              <span className="nav-chapter-name">
                {chapterTitles[currentChapter]}
              </span>
            </div>
          </div>

          {/* Center (Desktop / MacBook only): Quick chapter dots / tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
            className="hidden-mobile"
          >
            {chapterTitles.map((title, idx) => {
              const isActive = idx === currentChapter;
              return (
                <button
                  key={idx}
                  onClick={() => onSelectChapter(idx)}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    border: isActive ? '1px solid var(--amber)' : '1px solid transparent',
                    background: isActive ? 'rgba(242, 203, 130, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                    color: isActive ? 'var(--amber)' : 'var(--sage)',
                    transition: 'all 0.25s ease',
                    cursor: 'pointer',
                  }}
                  title={`Go to Chapter ${idx + 1}: ${title}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Right: Prev / Next Controls & Keyboard Hint */}
          <div className="nav-controls">
            <span
              className="hidden-mobile"
              style={{
                fontSize: '0.7rem',
                color: 'var(--sage)',
                marginRight: '6px',
                opacity: 0.7,
              }}
            >
              [←] [→]
            </span>

            <button
              onClick={onPrevChapter}
              disabled={currentChapter === 0}
              className="nav-icon-btn"
              style={{ minWidth: '44px', minHeight: '44px' }}
              aria-label="Previous chapter"
              title="Previous chapter (or Left Arrow)"
            >
              <ChevronLeft style={{ width: 22, height: 22 }} />
            </button>

            <button
              onClick={onNextChapter}
              disabled={currentChapter === totalChapters - 1}
              className="nav-icon-btn"
              style={{ minWidth: '44px', minHeight: '44px' }}
              aria-label="Next chapter"
              title="Next chapter (or Right Arrow)"
            >
              <ChevronRight style={{ width: 22, height: 22 }} />
            </button>
          </div>
        </div>
      </header>

      {/* Chapters Overlay Drawer / Modal for quick jumping */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 999,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            justifyContent: 'flex-start',
          }}
          onClick={() => setMenuOpen(false)}
        >
          <div
            style={{
              width: '100%',
              maxWidth: '380px',
              height: '100%',
              padding: '2rem 1.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              overflowY: 'auto',
              background: 'var(--forest-deep)',
              borderRight: '1px solid rgba(168, 191, 165, 0.3)',
              boxShadow: '10px 0 30px rgba(0,0,0,0.6)',
              paddingTop: 'calc(env(safe-area-inset-top) + 2rem)',
              paddingBottom: 'calc(env(safe-area-inset-bottom) + 2rem)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid rgba(168, 191, 165, 0.25)',
                }}
              >
                <div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: 'var(--amber)' }}>
                    The Living Story
                  </h2>
                  <p style={{ fontSize: '0.8rem', color: 'var(--sage)' }}>
                    A cinematic birthday adventure for My Sister
                  </p>
                </div>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="nav-icon-btn"
                  aria-label="Close menu"
                >
                  <X style={{ width: 20, height: 20 }} />
                </button>
              </div>

              <nav style={{ marginTop: '1.25rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {chapterTitles.map((title, idx) => {
                  const isActive = idx === currentChapter;
                  return (
                    <button
                      key={idx}
                      onClick={() => {
                        onSelectChapter(idx);
                        setMenuOpen(false);
                      }}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '12px 14px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        background: isActive ? 'rgba(242, 203, 130, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                        border: isActive ? '1px solid var(--amber)' : '1px solid transparent',
                        color: isActive ? 'var(--amber)' : 'var(--ivory)',
                        transition: 'all 0.25s ease',
                        cursor: 'pointer',
                        minHeight: '44px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span
                          style={{
                            width: '26px',
                            height: '26px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '0.75rem',
                            fontWeight: 700,
                            background: isActive ? 'var(--amber)' : 'rgba(255,255,255,0.1)',
                            color: isActive ? 'var(--forest-deep)' : 'var(--mist)',
                          }}
                        >
                          {idx + 1}
                        </span>
                        <span style={{ fontSize: '0.95rem', fontWeight: 500 }}>{title}</span>
                      </div>
                      {isActive && <Sparkles style={{ width: 16, height: 16, color: 'var(--amber)' }} />}
                    </button>
                  );
                })}
              </nav>
            </div>

            <div
              style={{
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(168, 191, 165, 0.25)',
                textAlign: 'center',
              }}
            >
              <span style={{ fontSize: '0.8rem', color: 'var(--sage)', display: 'block' }}>
                Dedicated to My Sister
              </span>
              <span style={{ fontSize: '0.9rem', color: 'var(--amber)', fontFamily: 'var(--font-display)' }}>
                6 November
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Hide on mobile utility style */}
      <style>{`
        @media (max-width: 767px) {
          .hidden-mobile {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};
