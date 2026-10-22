export interface MemoryPhoto {
  id: string;
  src: string;
  alt: string;
  caption: string;
  yearHint?: string;
  category: 'childhood' | 'growing' | 'moments' | 'today';
}

export interface SteppingStoneStage {
  id: string;
  stoneNumber: number;
  title: string;
  subtitle: string;
  description: string;
  photos: {
    src: string;
    caption: string;
    alt: string;
  }[];
  quote: string;
  lightingTheme: 'warm-nostalgic' | 'golden-hour' | 'natural-bright' | 'sunlit-vibrant';
}

export interface FloatingIsland {
  id: string;
  title: string;
  subtitle: string;
  theme: string;
  description: string;
  photos: {
    src: string;
    caption: string;
    alt: string;
  }[];
  accentColor: string;
  reflection: string;
}

export interface GardenNote {
  id: string;
  title: string;
  ribbonColor: string;
  badge: string;
  salutation?: string;
  body: string[];
  signoff: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: {
    text: string;
    reaction: string;
  }[];
}

export interface FireflyWish {
  id: number;
  title: string;
  wish: string;
  icon: string;
}

export interface WishCard {
  id: number;
  blessing: string;
  poeticNote: string;
}
