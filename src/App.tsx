import React, { useState, useEffect, useCallback } from 'react';
import { Navigation } from './components/Navigation';
import { AudioControls } from './components/AudioControls';
import { SceneryBackdrop } from './components/SceneryBackdrop';
import { Lightbox } from './components/Lightbox';
import { Chapter1_SunriseHero } from './components/Chapter1_SunriseHero';
import { Chapter2_RiverOfTime } from './components/Chapter2_RiverOfTime';
import { Chapter3_IslandsOfMemories } from './components/Chapter3_IslandsOfMemories';
import { Chapter4_Observatory } from './components/Chapter4_Observatory';
import { Chapter5_GardenOfWords } from './components/Chapter5_GardenOfWords';
import { Chapter6_Discoveries } from './components/Chapter6_Discoveries';
import { Chapter7_Celebration } from './components/Chapter7_Celebration';
import { Chapter8_SunriseFinale } from './components/Chapter8_SunriseFinale';
import { ALL_MEMORY_PHOTOS } from './data/storyContent';
import { MemoryPhoto } from './types';

const CHAPTER_TITLES = [
  'The World Wakes Up',
  'The River of Time',
  'The Islands of Memories',
  'The Observatory of Moments',
  'The Garden of Words',
  'The Path of Discoveries',
  'The Celebration Clearing',
  'The Sunrise Finale',
];

export const App: React.FC = () => {
  const [currentChapter, setCurrentChapter] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const ch = params.get('ch') || params.get('chapter');
      if (ch) {
        const parsed = parseInt(ch, 10);
        if (!isNaN(parsed) && parsed >= 1 && parsed <= CHAPTER_TITLES.length) {
          return parsed - 1;
        }
      }
    } catch {
      // fallback
    }
    return 0;
  });

  // Global Lightbox state
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxPhotos, setLightboxPhotos] = useState<MemoryPhoto[]>(ALL_MEMORY_PHOTOS);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Scroll to top and update URL query param whenever chapter changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    try {
      const url = new URL(window.location.href);
      url.searchParams.set('ch', String(currentChapter + 1));
      window.history.replaceState({}, '', url.toString());
    } catch {
      // fallback
    }
  }, [currentChapter]);

  const handleNextChapter = useCallback(() => {
    if (currentChapter < CHAPTER_TITLES.length - 1) {
      setCurrentChapter((prev) => prev + 1);
    }
  }, [currentChapter]);

  const handlePrevChapter = useCallback(() => {
    if (currentChapter > 0) {
      setCurrentChapter((prev) => prev - 1);
    }
  }, [currentChapter]);

  const handleSelectChapter = (idx: number) => {
    setCurrentChapter(idx);
  };

  const handleRestartJourney = () => {
    setCurrentChapter(0);
  };

  // Keyboard navigation for MacBook & desktop
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if lightbox is open (it has its own listener) or if typing in input
      if (lightboxOpen) return;
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement)?.tagName)) return;

      if (e.key === 'ArrowRight') {
        handleNextChapter();
      } else if (e.key === 'ArrowLeft') {
        handlePrevChapter();
      } else if ((e.key === ' ' || e.key === 'Enter') && currentChapter === 0) {
        handleNextChapter();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentChapter, handleNextChapter, handlePrevChapter]);

  // Open single custom photo in Lightbox
  const handleOpenSinglePhoto = (src: string, alt: string, caption: string) => {
    const existingIdx = ALL_MEMORY_PHOTOS.findIndex((p) => p.src === src);
    if (existingIdx !== -1) {
      setLightboxPhotos(ALL_MEMORY_PHOTOS);
      setLightboxIndex(existingIdx);
    } else {
      setLightboxPhotos([
        {
          id: 'custom-single',
          src,
          alt,
          caption,
          category: 'today',
        },
      ]);
      setLightboxIndex(0);
    }
    setLightboxOpen(true);
  };

  // Open Observatory gallery index in Lightbox
  const handleOpenObservatoryLightbox = (index: number) => {
    setLightboxPhotos(ALL_MEMORY_PHOTOS);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Get scenery variant per chapter
  const getSceneryVariant = () => {
    switch (currentChapter) {
      case 0:
        return 'sunrise';
      case 1:
        return 'river';
      case 2:
        return 'islands';
      case 3:
        return 'observatory';
      case 4:
        return 'garden';
      case 5:
        return 'forest';
      case 6:
        return 'celebration';
      case 7:
        return 'finale';
      default:
        return 'sunrise';
    }
  };

  return (
    <div className="main-wrapper">
      {/* Top Navigation */}
      <Navigation
        currentChapter={currentChapter}
        totalChapters={CHAPTER_TITLES.length}
        chapterTitles={CHAPTER_TITLES}
        onSelectChapter={handleSelectChapter}
        onNextChapter={handleNextChapter}
        onPrevChapter={handlePrevChapter}
      />

      {/* Floating Audio Controls */}
      <AudioControls />

      {/* Dynamic Layered Scenery Backdrop */}
      <SceneryBackdrop variant={getSceneryVariant()} />

      {/* Main Chapter Content View */}
      <main style={{ position: 'relative', zIndex: 10, width: '100%', flex: '1 0 auto' }}>
        {currentChapter === 0 && (
          <Chapter1_SunriseHero
            onBeginJourney={handleNextChapter}
            onOpenPhoto={handleOpenSinglePhoto}
          />
        )}

        {currentChapter === 1 && (
          <Chapter2_RiverOfTime
            onContinue={handleNextChapter}
            onOpenPhoto={handleOpenSinglePhoto}
          />
        )}

        {currentChapter === 2 && (
          <Chapter3_IslandsOfMemories
            onContinue={handleNextChapter}
            onOpenPhoto={handleOpenSinglePhoto}
          />
        )}

        {currentChapter === 3 && (
          <Chapter4_Observatory
            onContinue={handleNextChapter}
            onOpenLightbox={handleOpenObservatoryLightbox}
          />
        )}

        {currentChapter === 4 && (
          <Chapter5_GardenOfWords onContinue={handleNextChapter} />
        )}

        {currentChapter === 5 && (
          <Chapter6_Discoveries onContinue={handleNextChapter} />
        )}

        {currentChapter === 6 && (
          <Chapter7_Celebration onContinue={handleNextChapter} />
        )}

        {currentChapter === 7 && (
          <Chapter8_SunriseFinale
            onRestart={handleRestartJourney}
            onOpenPhoto={handleOpenSinglePhoto}
          />
        )}
      </main>

      {/* Shared Lightbox Overlay */}
      <Lightbox
        photos={lightboxPhotos}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
};
