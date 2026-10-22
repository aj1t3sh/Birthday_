import React, { useState } from 'react';
import { GARDEN_NOTES_DATA } from '../data/storyContent';
import { GardenNote } from '../types';
import { Flower2, X, Feather, ArrowRight, Heart } from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface Chapter5Props {
  onContinue: () => void;
}

export const Chapter5_GardenOfWords: React.FC<Chapter5Props> = ({ onContinue }) => {
  const [selectedNote, setSelectedNote] = useState<GardenNote | null>(null);
  const [readNoteIds, setReadNoteIds] = useState<string[]>([]);

  const handleOpenNote = (note: GardenNote) => {
    setSelectedNote(note);
    if (!readNoteIds.includes(note.id)) {
      setReadNoteIds([...readNoteIds, note.id]);
    }
    soundEngine.playChime(587.33, 1.8);
  };

  const handleCloseNote = () => {
    setSelectedNote(null);
  };

  return (
    <div className="story-chapter">
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem', width: '100%' }}>
          <div className="chapter-badge">
            <Flower2 style={{ width: 14, height: 14, color: 'var(--teal)' }} />
            Chapter Five • The Garden of Words
          </div>

          <h2 className="section-title">The Whispering Garden</h2>
          <p className="sub-title" style={{ maxWidth: '640px', margin: '0.5rem auto 0' }}>
            Beside the calm stream stands an ancient tree. Four parchment notes hang gently from its branches. Tap each ribbon to unroll a message.
          </p>
        </div>

        {/* Notes Read Tracker */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.5rem', fontSize: '0.85rem', color: 'var(--sage)', fontWeight: 600 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--amber)' }} />
          <span>Notes opened: {readNoteIds.length} of {GARDEN_NOTES_DATA.length}</span>
        </div>

        {/* Ancient Tree & Hanging Notes (Desktop 4-col, Mobile 2-col) */}
        <div
          style={{
            width: '100%',
            maxWidth: '1200px',
            borderRadius: '1.75rem',
            padding: 'clamp(1.5rem, 3vw, 2.5rem)',
            background: 'rgba(11, 29, 28, 0.75)',
            border: '1px solid rgba(57, 127, 121, 0.35)',
            boxShadow: '0 16px 45px rgba(0,0,0,0.4)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Tree Branch Silhouette SVG spanning across top */}
          <div style={{ width: '100%', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
            <svg viewBox="0 0 800 60" style={{ width: '100%', height: '40px', overflow: 'visible' }}>
              <path
                d="M 20,20 Q 200,45 400,20 Q 600,45 780,25"
                fill="none"
                stroke="#397F79"
                strokeWidth="7"
                strokeLinecap="round"
                opacity="0.8"
              />
              <path
                d="M 120,30 Q 180,50 240,25"
                fill="none"
                stroke="#397F79"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.6"
              />
              <path
                d="M 520,25 Q 580,50 660,30"
                fill="none"
                stroke="#397F79"
                strokeWidth="4"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* 4 Interactive Notes (Wide 4-col Grid on Desktop) */}
          <div className="desktop-4col">
            {GARDEN_NOTES_DATA.map((note, idx) => {
              const isRead = readNoteIds.includes(note.id);
              return (
                <div key={note.id} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  {/* Hanging Ribbon Cord with sway animation */}
                  <div
                    style={{
                      width: '4px',
                      height: '32px',
                      borderRadius: '999px',
                      marginBottom: '4px',
                      background: note.ribbonColor,
                      transformOrigin: 'top center',
                      animation: `ribbonSway ${3 + idx * 0.7}s ease-in-out infinite alternate`,
                    }}
                  />

                  {/* Parchment Note Button */}
                  <button
                    onClick={() => handleOpenNote(note)}
                    style={{
                      width: '100%',
                      padding: '1.25rem 1rem',
                      borderRadius: '1.25rem',
                      textAlign: 'center',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      minHeight: '170px',
                      background: isRead
                        ? 'linear-gradient(155deg, #FDFBF7, #EDE6D2)'
                        : 'linear-gradient(155deg, #F8F5E9, #E5DFC8)',
                      border: `2px solid ${note.ribbonColor}`,
                      color: 'var(--ink)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                      transform: 'rotate(-0.5deg)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                    }}
                    aria-label={`Open note: ${note.title}`}
                  >
                    {/* Ribbon Bow / Wax Seal */}
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginTop: '-24px',
                        marginBottom: '8px',
                        background: note.ribbonColor,
                        color: '#ffffff',
                        border: '2px solid #ffffff',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.25)',
                      }}
                    >
                      <Heart style={{ width: 16, height: 16, fill: 'currentColor' }} />
                    </div>

                    <div>
                      <span
                        style={{
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                          color: 'var(--ink-light)',
                          display: 'block',
                          marginBottom: '4px',
                        }}
                      >
                        {note.badge}
                      </span>
                      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700 }}>
                        {note.title}
                      </h3>
                    </div>

                    <div
                      style={{
                        marginTop: '0.75rem',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        color: 'var(--teal)',
                      }}
                    >
                      <Feather style={{ width: 14, height: 14 }} />
                      <span>{isRead ? 'Read Again' : 'Tap to Unroll'}</span>
                    </div>
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Note Parchment Modal Overlay */}
        {selectedNote && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9999,
              background: 'rgba(11, 29, 28, 0.85)',
              backdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem',
            }}
            onClick={handleCloseNote}
            role="dialog"
            aria-modal="true"
            aria-label={selectedNote.title}
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '560px',
                padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                borderRadius: '1.5rem',
                background: 'linear-gradient(155deg, #FCFAF2 0%, #F5F0DF 100%)',
                border: `2px solid ${selectedNote.ribbonColor}`,
                color: 'var(--ink)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.6)',
                maxHeight: '90vh',
                overflowY: 'auto',
                textAlign: 'left',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Bar */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid rgba(32, 51, 47, 0.15)',
                  marginBottom: '1.25rem',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: selectedNote.ribbonColor }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--forest)' }}>
                    {selectedNote.badge}
                  </span>
                </div>

                <button
                  onClick={handleCloseNote}
                  className="nav-icon-btn"
                  style={{ color: 'var(--ink)', minWidth: '44px', minHeight: '44px' }}
                  aria-label="Close note"
                >
                  <X style={{ width: 20, height: 20 }} />
                </button>
              </div>

              {/* Salutation */}
              {selectedNote.salutation && (
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 700, color: 'var(--forest)', marginBottom: '1rem' }}>
                  {selectedNote.salutation}
                </p>
              )}

              {/* Letter Paragraphs */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '1.05rem', lineHeight: '1.75', color: 'var(--ink-light)' }}>
                {selectedNote.body.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {/* Signoff */}
              <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid rgba(32, 51, 47, 0.15)', textAlign: 'right' }}>
                <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--forest)', whiteSpace: 'pre-line' }}>
                  {selectedNote.signoff}
                </p>
              </div>

              {/* Return Button */}
              <div style={{ marginTop: '1.75rem', display: 'flex', justifyContent: 'center' }}>
                <button
                  onClick={handleCloseNote}
                  style={{
                    padding: '8px 24px',
                    borderRadius: '999px',
                    background: 'var(--forest-deep)',
                    color: 'var(--ivory)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    border: 'none',
                    cursor: 'pointer',
                    minHeight: '44px',
                  }}
                >
                  Return to Garden
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Continue Action */}
        <div style={{ marginTop: '2.5rem' }}>
          <button onClick={onContinue} className="btn-primary">
            <span>Follow the Path of Discoveries</span>
            <ArrowRight style={{ width: 18, height: 18 }} />
          </button>
        </div>
      </div>
    </div>
  );
};
