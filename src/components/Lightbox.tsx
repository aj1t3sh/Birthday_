import React, { useEffect, useRef, useState, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { MemoryPhoto } from '../types';

interface LightboxProps {
  photos: MemoryPhoto[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (newIndex: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const backdropRef = useRef<HTMLDivElement>(null);

  const currentPhoto = photos[currentIndex];

  const handlePrev = useCallback(() => {
    setIsZoomed(false);
    onNavigate((currentIndex - 1 + photos.length) % photos.length);
  }, [currentIndex, photos.length, onNavigate]);

  const handleNext = useCallback(() => {
    setIsZoomed(false);
    onNavigate((currentIndex + 1) % photos.length);
  }, [currentIndex, photos.length, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  // Touch swipe support for mobile
  const minSwipeDistance = 45;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  if (!isOpen || !currentPhoto) return null;

  return (
    <div
      ref={backdropRef}
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Photo Lightbox"
      onClick={(e) => {
        if (e.target === backdropRef.current) onClose();
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Top Header / Bar */}
      <div
        className="w-full max-w-4xl flex items-center justify-between pb-3 px-2 z-10"
        style={{ color: 'var(--mist)' }}
      >
        <div className="flex items-center gap-2">
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase"
            style={{ background: 'rgba(57, 127, 121, 0.4)', color: 'var(--amber)' }}
          >
            {currentIndex + 1} / {photos.length}
          </span>
          {currentPhoto.yearHint && (
            <span className="text-xs text-sage" style={{ color: 'var(--sage)' }}>
              • {currentPhoto.yearHint}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="p-2.5 rounded-full transition-colors flex items-center justify-center text-sm"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              color: 'var(--ivory)',
              minWidth: '44px',
              minHeight: '44px',
            }}
            aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
            title={isZoomed ? 'Reset zoom' : 'Toggle zoom'}
          >
            <ZoomIn className={`w-5 h-5 ${isZoomed ? 'text-amber-300' : ''}`} />
          </button>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full transition-colors flex items-center justify-center"
            style={{
              background: 'rgba(200, 120, 89, 0.3)',
              color: 'var(--ivory)',
              minWidth: '44px',
              minHeight: '44px',
              border: '1px solid rgba(200, 120, 89, 0.5)',
            }}
            aria-label="Close photo preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="lightbox-content">
        {/* Navigation Arrows */}
        {photos.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:-left-12 z-20 p-3 rounded-full transition-transform active:scale-90 flex items-center justify-center"
              style={{
                background: 'rgba(16, 43, 41, 0.85)',
                border: '1px solid rgba(168, 191, 165, 0.4)',
                color: 'var(--ivory)',
                minWidth: '48px',
                minHeight: '48px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
              }}
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:-right-12 z-20 p-3 rounded-full transition-transform active:scale-90 flex items-center justify-center"
              style={{
                background: 'rgba(16, 43, 41, 0.85)',
                border: '1px solid rgba(168, 191, 165, 0.4)',
                color: 'var(--ivory)',
                minWidth: '48px',
                minHeight: '48px',
                boxShadow: '0 4px 16px rgba(0,0,0,0.4)',
              }}
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        {/* Complete Image Viewer - Full aspect ratio preservation, no distortion */}
        <div className="lightbox-image-wrapper">
          <img
            src={currentPhoto.src}
            alt={currentPhoto.alt || 'Birthday memory'}
            className="lightbox-img transition-transform duration-300"
            style={{
              transform: isZoomed ? 'scale(1.25)' : 'scale(1)',
              cursor: isZoomed ? 'zoom-out' : 'zoom-in',
            }}
            onClick={() => setIsZoomed(!isZoomed)}
          />
        </div>

        {/* Caption below photograph */}
        {currentPhoto.caption && (
          <div
            className="mt-3 text-center px-4 py-2.5 rounded-xl max-w-xl"
            style={{
              background: 'rgba(16, 43, 41, 0.75)',
              border: '1px solid rgba(168, 191, 165, 0.25)',
              color: 'var(--ivory)',
            }}
          >
            <p className="text-sm sm:text-base font-normal leading-relaxed">
              {currentPhoto.caption}
            </p>
          </div>
        )}
      </div>

      {/* Swipe hint on mobile */}
      <div className="mt-2 text-xs sm:hidden text-center opacity-60" style={{ color: 'var(--mist)' }}>
        Swipe left or right to explore memories
      </div>
    </div>
  );
};
