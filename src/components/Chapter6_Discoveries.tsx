import React, { useState } from 'react';
import {
  SIBLING_QUIZ_QUESTIONS,
  FIREFLY_WISHES_DATA,
  WISH_GENERATOR_CARDS,
  FLOATING_SCROLL_MESSAGE,
} from '../data/storyContent';
import {
  Compass,
  Sparkles,
  HelpCircle,
  Scroll,
  Shuffle,
  CheckCircle,
  X,
  ArrowRight,
  Flame,
  Sun,
  Heart,
  ShieldCheck,
} from 'lucide-react';
import { soundEngine } from '../utils/soundEngine';

interface Chapter6Props {
  onContinue: () => void;
}

export const Chapter6_Discoveries: React.FC<Chapter6Props> = ({ onContinue }) => {
  const [activeTab, setActiveTab] = useState<'fireflies' | 'quiz' | 'generator' | 'scroll'>('fireflies');

  // Discovery A: Sibling Quiz State
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, { text: string; reaction: string }>>({});

  // Discovery B: 5 Fireflies State
  const [foundFireflyIds, setFoundFireflyIds] = useState<number[]>([]);
  const [activeFireflyWish, setActiveFireflyWish] = useState<(typeof FIREFLY_WISHES_DATA)[0] | null>(null);

  // Discovery C: Wish Generator State
  const [currentWishIndex, setCurrentWishIndex] = useState(0);
  const [drawnCount, setDrawnCount] = useState(1);

  // Handlers
  const handleFireflyClick = (firefly: (typeof FIREFLY_WISHES_DATA)[0]) => {
    if (!foundFireflyIds.includes(firefly.id)) {
      setFoundFireflyIds([...foundFireflyIds, firefly.id]);
    }
    setActiveFireflyWish(firefly);
    soundEngine.playChime(659.25, 2.0);
  };

  const handleDrawNewWish = () => {
    let nextIdx = Math.floor(Math.random() * WISH_GENERATOR_CARDS.length);
    if (nextIdx === currentWishIndex && WISH_GENERATOR_CARDS.length > 1) {
      nextIdx = (nextIdx + 1) % WISH_GENERATOR_CARDS.length;
    }
    setCurrentWishIndex(nextIdx);
    setDrawnCount((prev) => prev + 1);
    soundEngine.playChime(523.25, 1.5);
  };

  const handleSelectQuizOption = (qId: number, option: { text: string; reaction: string }) => {
    setQuizAnswers({ ...quizAnswers, [qId]: option });
    soundEngine.playChime(440, 1.2);
  };

  const getFireflyIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame':
        return <Flame style={{ width: 22, height: 22, color: 'var(--amber)' }} />;
      case 'Sun':
        return <Sun style={{ width: 22, height: 22, color: 'var(--amber)' }} />;
      case 'Heart':
        return <Heart style={{ width: 22, height: 22, color: 'var(--terracotta)' }} />;
      case 'ShieldCheck':
        return <ShieldCheck style={{ width: 22, height: 22, color: 'var(--sage)' }} />;
      default:
        return <Sparkles style={{ width: 22, height: 22, color: 'var(--amber)' }} />;
    }
  };

  return (
    <div className="story-chapter">
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem', width: '100%' }}>
          <div className="chapter-badge">
            <Compass style={{ width: 14, height: 14, color: 'var(--teal)' }} />
            Chapter Six • The Path of Discoveries
          </div>

          <h2 className="section-title">Forest Wonders</h2>
          <p className="sub-title" style={{ maxWidth: '640px', margin: '0.5rem auto 0' }}>
            Optional interactive discoveries hidden along the trail. Explore at your own pace.
          </p>
        </div>

        {/* Discovery Category Tabs */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            marginBottom: '1.75rem',
          }}
        >
          <button
            onClick={() => setActiveTab('fireflies')}
            style={{
              padding: '8px 18px',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: activeTab === 'fireflies' ? 'var(--amber)' : 'rgba(22, 61, 53, 0.7)',
              color: activeTab === 'fireflies' ? 'var(--forest-deep)' : 'var(--ivory)',
              border: activeTab === 'fireflies' ? '1px solid var(--amber)' : '1px solid rgba(168, 191, 165, 0.3)',
              boxShadow: activeTab === 'fireflies' ? '0 4px 14px rgba(242, 203, 130, 0.4)' : 'none',
              cursor: 'pointer',
              minHeight: '44px',
            }}
          >
            <Sparkles style={{ width: 16, height: 16 }} />
            <span>Hidden Fireflies ({foundFireflyIds.length}/5)</span>
          </button>

          <button
            onClick={() => setActiveTab('quiz')}
            style={{
              padding: '8px 18px',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: activeTab === 'quiz' ? 'var(--amber)' : 'rgba(22, 61, 53, 0.7)',
              color: activeTab === 'quiz' ? 'var(--forest-deep)' : 'var(--ivory)',
              border: activeTab === 'quiz' ? '1px solid var(--amber)' : '1px solid rgba(168, 191, 165, 0.3)',
              boxShadow: activeTab === 'quiz' ? '0 4px 14px rgba(242, 203, 130, 0.4)' : 'none',
              cursor: 'pointer',
              minHeight: '44px',
            }}
          >
            <HelpCircle style={{ width: 16, height: 16 }} />
            <span>Sibling Bond Quiz</span>
          </button>

          <button
            onClick={() => setActiveTab('generator')}
            style={{
              padding: '8px 18px',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: activeTab === 'generator' ? 'var(--amber)' : 'rgba(22, 61, 53, 0.7)',
              color: activeTab === 'generator' ? 'var(--forest-deep)' : 'var(--ivory)',
              border: activeTab === 'generator' ? '1px solid var(--amber)' : '1px solid rgba(168, 191, 165, 0.3)',
              boxShadow: activeTab === 'generator' ? '0 4px 14px rgba(242, 203, 130, 0.4)' : 'none',
              cursor: 'pointer',
              minHeight: '44px',
            }}
          >
            <Shuffle style={{ width: 16, height: 16 }} />
            <span>Wish Blessing</span>
          </button>

          <button
            onClick={() => setActiveTab('scroll')}
            style={{
              padding: '8px 18px',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: activeTab === 'scroll' ? 'var(--amber)' : 'rgba(22, 61, 53, 0.7)',
              color: activeTab === 'scroll' ? 'var(--forest-deep)' : 'var(--ivory)',
              border: activeTab === 'scroll' ? '1px solid var(--amber)' : '1px solid rgba(168, 191, 165, 0.3)',
              boxShadow: activeTab === 'scroll' ? '0 4px 14px rgba(242, 203, 130, 0.4)' : 'none',
              cursor: 'pointer',
              minHeight: '44px',
            }}
          >
            <Scroll style={{ width: 16, height: 16 }} />
            <span>Drifting Scroll</span>
          </button>
        </div>

        {/* Tab Content Container */}
        <div
          style={{
            width: '100%',
            maxWidth: '960px',
            borderRadius: '1.75rem',
            padding: 'clamp(1.25rem, 3.5vw, 2.5rem)',
            background: 'linear-gradient(155deg, rgba(22, 61, 53, 0.95), rgba(11, 29, 28, 0.95))',
            border: '1px solid rgba(168, 191, 165, 0.35)',
            boxShadow: '0 16px 45px rgba(0,0,0,0.5)',
            backdropFilter: 'blur(12px)',
            textAlign: 'left',
          }}
        >
          {/* TAB 1: HIDDEN FIREFLIES */}
          {activeTab === 'fireflies' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '1.25rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--amber)' }}>
                    Interactive Forest Discovery
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--ivory)' }}>
                    Catch the Five Glowing Fireflies
                  </h3>
                </div>
                <span
                  style={{
                    padding: '4px 14px',
                    borderRadius: '999px',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    background: 'rgba(242, 203, 130, 0.25)',
                    color: 'var(--amber)',
                    border: '1px solid rgba(242, 203, 130, 0.4)',
                  }}
                >
                  {foundFireflyIds.length} / 5 Found
                </span>
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--mist)', marginBottom: '1.5rem' }}>
                Five gentle fireflies drift among the leaves. Tap on each one to capture its unique birthday blessing.
              </p>

              {/* Firefly Interactive Clearing */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(240px, 32vw, 360px)',
                  borderRadius: '1.25rem',
                  background: 'rgba(11, 29, 28, 0.9)',
                  border: '1px solid rgba(57, 127, 121, 0.4)',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {/* Glow backdrop */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at center, rgba(57, 127, 121, 0.25) 0%, transparent 70%)',
                  }}
                />

                {FIREFLY_WISHES_DATA.map((ff, idx) => {
                  const isFound = foundFireflyIds.includes(ff.id);
                  const positions = [
                    { top: '22%', left: '18%' },
                    { top: '65%', left: '26%' },
                    { top: '28%', left: '50%' },
                    { top: '70%', left: '72%' },
                    { top: '24%', left: '82%' },
                  ];
                  const pos = positions[idx];

                  return (
                    <button
                      key={ff.id}
                      onClick={() => handleFireflyClick(ff)}
                      style={{
                        position: 'absolute',
                        top: pos.top,
                        left: pos.left,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        minWidth: '48px',
                        minHeight: '48px',
                        animation: `fireflyGlow ${3 + idx * 0.8}s ease-in-out infinite`,
                      }}
                      aria-label={`Capture Firefly #${ff.id}: ${ff.title}`}
                    >
                      <div
                        style={{
                          width: '40px',
                          height: '40px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          background: isFound ? 'var(--amber)' : 'rgba(242, 203, 130, 0.35)',
                          color: isFound ? 'var(--forest-deep)' : 'var(--amber)',
                          border: '2px solid var(--amber)',
                          boxShadow: isFound ? '0 0 24px var(--amber)' : '0 0 10px rgba(242, 203, 130, 0.5)',
                        }}
                      >
                        <Sparkles style={{ width: 20, height: 20, fill: 'currentColor' }} />
                      </div>
                      <span style={{ fontSize: '0.7rem', color: 'var(--amber)', marginTop: '4px', fontWeight: 700 }}>
                        #{ff.id}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Firefly Wish Modal Dialog */}
              {activeFireflyWish && (
                <div
                  style={{
                    marginTop: '1.25rem',
                    padding: '1.25rem',
                    borderRadius: '1.25rem',
                    border: '1px solid rgba(242, 203, 130, 0.4)',
                    background: 'rgba(22, 61, 53, 0.95)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '1rem',
                  }}
                  role="status"
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{ padding: '8px', borderRadius: '12px', background: 'rgba(242, 203, 130, 0.2)' }}>
                      {getFireflyIcon(activeFireflyWish.icon)}
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', color: 'var(--amber)', fontWeight: 700 }}>
                        {activeFireflyWish.title}
                      </h4>
                      <p style={{ fontSize: '0.95rem', color: 'var(--ivory)', marginTop: '4px', lineHeight: '1.6' }}>
                        “{activeFireflyWish.wish}”
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={() => setActiveFireflyWish(null)}
                    className="nav-icon-btn"
                    aria-label="Dismiss wish"
                  >
                    <X style={{ width: 18, height: 18 }} />
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: SIBLING QUIZ */}
          {activeTab === 'quiz' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '1.25rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--amber)' }}>
                    Sibling Connection
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--ivory)' }}>
                    The Sibling Bond Quiz
                  </h3>
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--sage)', fontWeight: 600 }}>
                  Question {currentQuizIndex + 1} of {SIBLING_QUIZ_QUESTIONS.length}
                </span>
              </div>

              {(() => {
                const q = SIBLING_QUIZ_QUESTIONS[currentQuizIndex];
                const selectedOption = quizAnswers[q.id];

                return (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: 600, color: 'var(--ivory)', lineHeight: '1.5' }}>
                      {q.question}
                    </h4>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {q.options.map((opt, oIdx) => {
                        const isSelected = selectedOption?.text === opt.text;
                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleSelectQuizOption(q.id, opt)}
                            style={{
                              width: '100%',
                              padding: '14px 18px',
                              borderRadius: '1rem',
                              textAlign: 'left',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                              background: isSelected ? 'var(--amber)' : 'rgba(16, 43, 41, 0.7)',
                              color: isSelected ? 'var(--forest-deep)' : 'var(--ivory)',
                              border: isSelected ? '1px solid var(--amber)' : '1px solid rgba(168, 191, 165, 0.25)',
                              fontWeight: isSelected ? 700 : 500,
                              fontSize: '0.95rem',
                              transition: 'all 0.25s ease',
                              cursor: 'pointer',
                              minHeight: '44px',
                            }}
                          >
                            <span>{opt.text}</span>
                            {isSelected && <CheckCircle style={{ width: 18, height: 18, flexShrink: 0 }} />}
                          </button>
                        );
                      })}
                    </div>

                    {selectedOption && (
                      <div
                        style={{
                          padding: '1rem 1.25rem',
                          borderRadius: '1rem',
                          background: 'rgba(16, 43, 41, 0.9)',
                          borderLeft: '4px solid var(--amber)',
                          fontSize: '0.95rem',
                          color: 'var(--mist)',
                          fontStyle: 'italic',
                        }}
                      >
                        💬 <strong style={{ color: 'var(--amber)' }}>Brotherly note:</strong> {selectedOption.reaction}
                      </div>
                    )}

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                      <button
                        onClick={() => setCurrentQuizIndex(Math.max(0, currentQuizIndex - 1))}
                        disabled={currentQuizIndex === 0}
                        className="btn-secondary"
                        style={{ minHeight: '44px' }}
                      >
                        Previous
                      </button>

                      <button
                        onClick={() =>
                          setCurrentQuizIndex(
                            Math.min(SIBLING_QUIZ_QUESTIONS.length - 1, currentQuizIndex + 1)
                          )
                        }
                        disabled={currentQuizIndex === SIBLING_QUIZ_QUESTIONS.length - 1}
                        className="btn-secondary"
                        style={{ minHeight: '44px' }}
                      >
                        Next Question
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}

          {/* TAB 3: WISH GENERATOR */}
          {activeTab === 'generator' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '1.25rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--amber)' }}>
                    Poetic Birthday Oracle
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--ivory)' }}>
                    Birthday Blessing Generator
                  </h3>
                </div>
                <span style={{ fontSize: '0.85rem', color: 'var(--sage)', fontWeight: 600 }}>
                  Draw #{drawnCount}
                </span>
              </div>

              {(() => {
                const wish = WISH_GENERATOR_CARDS[currentWishIndex];
                return (
                  <div
                    style={{
                      padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                      borderRadius: '1.5rem',
                      textAlign: 'center',
                      background: 'linear-gradient(155deg, rgba(22, 61, 53, 0.98), rgba(11, 29, 28, 0.98))',
                      border: '2px solid var(--amber)',
                      boxShadow: '0 0 30px rgba(242, 203, 130, 0.25)',
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '50%',
                        margin: '0 auto 1rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: 'rgba(242, 203, 130, 0.2)',
                        border: '1px solid var(--amber)',
                        color: 'var(--amber)',
                      }}
                    >
                      <Sparkles style={{ width: 24, height: 24 }} />
                    </div>

                    <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', color: 'var(--amber)', marginBottom: '0.75rem' }}>
                      {wish.blessing}
                    </h4>

                    <p style={{ fontSize: '1.05rem', color: 'var(--mist)', lineHeight: '1.7', fontStyle: 'italic', maxWidth: '640px', margin: '0 auto' }}>
                      “{wish.poeticNote}”
                    </p>
                  </div>
                );
              })()}

              <div style={{ marginTop: '1.75rem', display: 'flex', justifyContent: 'center' }}>
                <button onClick={handleDrawNewWish} className="btn-primary">
                  <Shuffle style={{ width: 18, height: 18 }} />
                  <span>Draw Another Blessing</span>
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: FLOATING SCROLL */}
          {activeTab === 'scroll' && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '1.25rem' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--amber)' }}>
                    Lost Forest Artifact
                  </span>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', color: 'var(--ivory)' }}>
                    {FLOATING_SCROLL_MESSAGE.title}
                  </h3>
                </div>
                <span style={{ fontSize: '0.8rem', color: 'var(--sage)', fontStyle: 'italic' }}>
                  {FLOATING_SCROLL_MESSAGE.subtitle}
                </span>
              </div>

              <div
                style={{
                  padding: 'clamp(1.5rem, 4vw, 2.5rem)',
                  borderRadius: '1.5rem',
                  textAlign: 'center',
                  background: 'linear-gradient(155deg, #FAF7EE 0%, #EDE6D2 100%)',
                  border: '2px solid var(--amber)',
                  color: 'var(--ink)',
                  boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
                }}
              >
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    margin: '0 auto 1rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(200, 120, 89, 0.2)',
                    border: '1px solid var(--terracotta)',
                    color: 'var(--terracotta)',
                  }}
                >
                  <Scroll style={{ width: 24, height: 24 }} />
                </div>

                <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', fontStyle: 'italic', lineHeight: '1.7', color: 'var(--forest-deep)', maxWidth: '640px', margin: '0 auto' }}>
                  {FLOATING_SCROLL_MESSAGE.message}
                </p>

                <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid rgba(32, 51, 47, 0.15)' }}>
                  <p style={{ fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--terracotta)' }}>
                    {FLOATING_SCROLL_MESSAGE.dedication}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Continue Action */}
        <div style={{ marginTop: '2.5rem' }}>
          <button onClick={onContinue} className="btn-primary">
            <span>Enter the Celebration Clearing</span>
            <ArrowRight style={{ width: 18, height: 18 }} />
          </button>
        </div>
      </div>
    </div>
  );
};
