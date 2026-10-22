import {
  MemoryPhoto,
  SteppingStoneStage,
  FloatingIsland,
  GardenNote,
  QuizQuestion,
  FireflyWish,
  WishCard,
} from '../types';
import { assetUrl } from '../utils/assetUrl';

export const BIRTHDAY_INFO = {
  sisterName: 'My Sister',
  senderTitle: 'Your Brother',
  birthdayDate: '6 November',
  heroHeadline: 'A WORLD, MADE A LITTLE MORE BEAUTIFUL FOR YOU',
  heroGreeting: 'Happy Birthday, My Sister',
  heroSubtitle: 'Today, a new chapter begins.',
  celebrationTitle: "IT'S YOUR SPECIAL DAY!",
  celebrationGreeting: 'Happy Birthday, My Sister!',
  celebrationWish:
    'You deserve a world full of happiness, beautiful opportunities, and countless reasons to smile.',
  finaleTitle: 'HAPPY BIRTHDAY, MY SISTER',
  finaleStage1: 'You make our world a little more special just by being in it.',
  finaleStage2:
    'I hope this new chapter brings you happiness, peace, confidence, and countless beautiful moments.',
  finaleStage3: 'Thank you for being you.',
  finaleSignoff: 'With love, always,',
  finaleSender: 'Your Brother.',
};

/**
 * All 11 core photographs located directly in public/ as required:
 * memory-01.jpg through memory-11.jpg
 */
export const ALL_MEMORY_PHOTOS: MemoryPhoto[] = [
  {
    id: 'mem-01',
    src: assetUrl('memory-01.jpg'),
    alt: 'Cherished memory of sister smiling',
    caption: 'A bright, unmistakable smile that brings warmth wherever you go.',
    yearHint: 'A timeless moment',
    category: 'moments',
  },
  {
    id: 'mem-02',
    src: assetUrl('memory-02.jpg'),
    alt: 'Sister in a quiet reflective moment',
    caption: 'Quiet confidence, thoughtful eyes, and a heart full of stories.',
    yearHint: 'Memorable days',
    category: 'growing',
  },
  {
    id: 'mem-03',
    src: assetUrl('memory-03.jpg'),
    alt: 'Capturing laughter and elegance',
    caption: 'Effortless grace and the spontaneous laughter that brightens every room.',
    yearHint: 'Golden memories',
    category: 'growing',
  },
  {
    id: 'mem-04',
    src: assetUrl('memory-04.jpg'),
    alt: 'Sister looking radiant',
    caption: 'Always true to yourself, shining in your own authentic way.',
    yearHint: 'Treasured times',
    category: 'moments',
  },
  {
    id: 'mem-05',
    src: assetUrl('memory-05.jpg'),
    alt: 'Vibrant memory framed in light',
    caption: 'A day filled with sunshine, easy conversations, and genuine joy.',
    yearHint: 'Sunny chapter',
    category: 'moments',
  },
  {
    id: 'mem-06',
    src: assetUrl('memory-06.jpg'),
    alt: 'Natural portrait of sister',
    caption: 'Gentle strength and the calmness you bring to those around you.',
    yearHint: 'Peaceful afternoon',
    category: 'moments',
  },
  {
    id: 'mem-07',
    src: assetUrl('memory-07.jpg'),
    alt: 'A beautiful candid portrait',
    caption: 'A candid glimpse of joy — simple, heartfelt, and memorable.',
    yearHint: 'Pure joy',
    category: 'today',
  },
  {
    id: 'mem-08',
    src: assetUrl('memory-08.jpg'),
    alt: 'Celebration and festive spirit',
    caption: 'Dressed in celebration, carrying traditions forward with beauty.',
    yearHint: 'Festive elegance',
    category: 'today',
  },
  {
    id: 'mem-09',
    src: assetUrl('memory-09.jpg'),
    alt: 'Standing tall and confident',
    caption: 'Looking ahead with poise, readiness, and a spirit that never backs down.',
    yearHint: 'Looking forward',
    category: 'today',
  },
  {
    id: 'mem-10',
    src: assetUrl('memory-10.jpg'),
    alt: 'Warm natural expression',
    caption: 'The kind of warmth that makes anyone feel instantly at home.',
    yearHint: 'Everyday grace',
    category: 'moments',
  },
  {
    id: 'mem-11',
    src: assetUrl('memory-11.jpg'),
    alt: 'Radiant sister on a special occasion',
    caption: 'Radiating joy and pride — ready for every new peak yet to be climbed.',
    yearHint: 'Today & beyond',
    category: 'today',
  },
];

/**
 * Chapter 2: The River of Time
 * Four stepping stones crossing the flowing waters
 */
export const RIVER_STEPPING_STONES: SteppingStoneStage[] = [
  {
    id: 'stone-began',
    stoneNumber: 1,
    title: 'Where It All Began',
    subtitle: 'Small footprints, innocent eyes, and endless imagination',
    description:
      'Every grand adventure has a quiet beginning. From our earliest childhood days, your curious spirit and innocent laughter became the heartbeat of our family.',
    photos: [
      {
        src: assetUrl('childhood-1.jpg'),
        caption: 'The early years — full of wonder, mischief, and tiny steps into a big world.',
        alt: 'Childhood photo of sister in early years',
      },
      {
        src: assetUrl('childhood-2.jpg'),
        caption: 'Those innocent childhood days when every day felt like an endless playground.',
        alt: 'Sweet childhood memory',
      },
    ],
    quote: 'The roots of who we are remain steady, no matter how tall the branches reach.',
    lightingTheme: 'warm-nostalgic',
  },
  {
    id: 'stone-growing',
    stoneNumber: 2,
    title: 'Growing Up',
    subtitle: 'Through school books, changing seasons, and shared laughter',
    description:
      'Growing up alongside you has been one of life’s greatest blessings. You learned to navigate challenges with quiet grit, forming your own opinions and finding your voice.',
    photos: [
      {
        src: assetUrl('memory-02.jpg'),
        caption: 'Stepping into your own rhythm with determination and quiet grace.',
        alt: 'Growing up years and learning moments',
      },
      {
        src: assetUrl('memory-03.jpg'),
        caption: 'Every shared conversation and little victory along the road.',
        alt: 'Sister growing up with confidence',
      },
    ],
    quote: 'Watching someone blossom into their true self is a rare and quiet wonder.',
    lightingTheme: 'golden-hour',
  },
  {
    id: 'stone-moments',
    stoneNumber: 3,
    title: 'Moments Worth Keeping',
    subtitle: 'The little pauses that become lifelong treasures',
    description:
      'It is rarely the grand milestones we hold closest, but rather the unplanned laughter, the quiet evening chats, and the moments when we simply stood side by side.',
    photos: [
      {
        src: assetUrl('memory-05.jpg'),
        caption: 'Unfiltered happiness, soaking up good times and genuine smiles.',
        alt: 'Memories of joy and lighthearted moments',
      },
      {
        src: assetUrl('memory-06.jpg'),
        caption: 'A gentle reminder that peace and purpose go hand in hand.',
        alt: 'Calm and reflective memory',
      },
    ],
    quote: 'Some memories do not fade with time; they simply turn into gold.',
    lightingTheme: 'natural-bright',
  },
  {
    id: 'stone-today',
    stoneNumber: 4,
    title: 'Today',
    subtitle: 'Standing tall in your power, grace, and unique light',
    description:
      'Today, on your birthday, look at the wonderful person you have become. You carry strength without arrogance, kindness without hesitation, and a beauty that radiates from within.',
    photos: [
      {
        src: assetUrl('memory-07.jpg'),
        caption: 'Radiant, present, and ready to embrace everything the universe has prepared.',
        alt: 'Sister today, confident and joyful',
      },
      {
        src: assetUrl('memory-11.jpg'),
        caption: 'Celebrating who you are today and all the promise that tomorrow holds.',
        alt: 'Sister celebrating with pride',
      },
    ],
    quote: 'The present moment is your canvas, and the colors are all yours to choose.',
    lightingTheme: 'sunlit-vibrant',
  },
];

/**
 * Chapter 3: The Islands of Memories
 * Three visually distinctive floating islands connected by a natural bridge
 */
export const FLOATING_ISLANDS_DATA: FloatingIsland[] = [
  {
    id: 'island-beginning',
    title: 'The Beginning Island',
    subtitle: 'Nostalgic Childhood Haven',
    theme: 'Misty Moss & Golden Sunbeams',
    description:
      'Nestled among ancient whispering trees and soft morning mist, this island shelters our earliest memories together — innocent laughter, little adventures, and a bond forged before we even knew how big the world was.',
    accentColor: '#C87859',
    reflection: 'Where our story took root in innocence and play.',
    photos: [
      {
        src: assetUrl('childhood-1.jpg'),
        caption: 'Sweet early days full of simple joy.',
        alt: 'Sister in childhood',
      },
      {
        src: assetUrl('childhood-2.jpg'),
        caption: 'Innocent days when laughter came as easy as breathing.',
        alt: 'Childhood portrait',
      },
    ],
  },
  {
    id: 'island-moments',
    title: 'Moments Worth Keeping',
    subtitle: 'The Meadow of Milestones',
    theme: 'Sunlit Sage & Flowing Waters',
    description:
      'Suspended in clear mountain air, this island holds the vibrant chapters of our growing years. Each floating frame reflects a real day, a shared joke, and the quiet milestones that built your resilience.',
    accentColor: '#397F79',
    reflection: 'Chapters of discovery, learning, and genuine connection.',
    photos: [
      {
        src: assetUrl('memory-04.jpg'),
        caption: 'A bright expression of joy and authenticity.',
        alt: 'Memory frame',
      },
      {
        src: assetUrl('memory-08.jpg'),
        caption: 'Festive times, proud memories, and shared smiles.',
        alt: 'Celebration memory',
      },
      {
        src: assetUrl('memory-10.jpg'),
        caption: 'Natural, easy grace captured in an honest moment.',
        alt: 'Graceful portrait',
      },
    ],
  },
  {
    id: 'island-tomorrow',
    title: 'Today & Tomorrow',
    subtitle: 'The Horizon Observatory Island',
    theme: 'Sky Blue & Sunlit Amber',
    description:
      'Perched high where the sky touches the dawn, this island looks out toward your future. It celebrates the strong, admirable woman you are today and greets every tomorrow with hope and confidence.',
    accentColor: '#F2CB82',
    reflection: 'Looking forward into a future bright with possibilities.',
    photos: [
      {
        src: assetUrl('sister-hero.jpg'),
        caption: 'Grace, confidence, and ready to write your next magnificent chapter.',
        alt: 'Sister portrait for today and tomorrow',
      },
      {
        src: assetUrl('memory-09.jpg'),
        caption: 'Stepping forward with unwavering resolve and quiet poise.',
        alt: 'Poised and confident sister',
      },
    ],
  },
];

/**
 * Chapter 5: The Garden of Words
 * Four interactive notes attached to branches or ribbons
 */
export const GARDEN_NOTES_DATA: GardenNote[] = [
  {
    id: 'note-thank-you',
    title: 'Thank You',
    ribbonColor: '#397F79',
    badge: 'Ribbon of Gratitude',
    salutation: 'To my dearest sister,',
    body: [
      'I wanted to create something different for your birthday — a little world filled with memories, thoughtful words, and a reminder of how special you are to me.',
      'Whatever changes in life, you will always have a place in my heart.',
      'Happy Birthday.',
    ],
    signoff: 'With love,\nYour Brother.',
  },
  {
    id: 'note-you-are-special',
    title: 'You Are Special',
    ribbonColor: '#C87859',
    badge: 'Ribbon of Warmth',
    salutation: 'To the one and only,',
    body: [
      'There is a quiet magic in the way you care for people, in your sense of humor, and in the strength you carry without making a fuss about it.',
      'In a busy, noisy world, your authenticity is rare and irreplaceable. Never doubt the value of your presence.',
    ],
    signoff: 'Forever grateful to have you as my sister,\nYour Brother.',
  },
  {
    id: 'note-always-proud',
    title: 'Always Proud of You',
    ribbonColor: '#F2CB82',
    badge: 'Ribbon of Pride',
    salutation: 'To my inspiring sister,',
    body: [
      'Watching you face life with courage, navigate your challenges, and continually grow has been an honor to witness.',
      'Even on the days when you doubt yourself, know that I am always in your corner, cheering you on and feeling endlessly proud of who you are.',
    ],
    signoff: 'Always your biggest supporter,\nYour Brother.',
  },
  {
    id: 'note-wish-future',
    title: 'My Wish for Your Future',
    ribbonColor: '#A8BFA5',
    badge: 'Ribbon of Hope',
    salutation: 'For all your tomorrows,',
    body: [
      'May this new year of your life unfold like a gentle morning: peaceful, full of fresh light, and brimming with exciting new adventures.',
      'I wish you radiant health, deep confidence, true friends who uplift you, and the freedom to pursue whatever brings genuine spark to your eyes.',
    ],
    signoff: 'May all your dreams find wings,\nYour Brother.',
  },
];

/**
 * Chapter 6: The Path of Discoveries
 * Sibling Quiz, 5 Fireflies, Wish Generator, Floating Scroll
 */
export const SIBLING_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'When a new adventure or road trip is announced, what is your signature vibe?',
    options: [
      {
        text: 'The Organized Planner with a full checklist ready!',
        reaction: 'Classic! Keeping everyone on track while having maximum fun!',
      },
      {
        text: 'The Spontaneous Explorer who enjoys the surprises along the way.',
        reaction: 'That free spirit makes every journey unforgettable!',
      },
      {
        text: 'The Relaxed Traveler with snacks and the best music playlist.',
        reaction: 'Unbeatable vibes — the heart and soul of any good road trip!',
      },
    ],
  },
  {
    id: 2,
    question: 'What is our unspoken rule when it comes to favorite sweet treats or snacks?',
    options: [
      {
        text: 'Strict 50/50 split down to the exact milligram!',
        reaction: 'Precise sibling diplomacy at its absolute finest!',
      },
      {
        text: 'Whoever hides it best gets the prize!',
        reaction: 'The stealth game is real — survival of the quickest!',
      },
      {
        text: 'Sharing is caring, but taking the last piece requires brotherly negotiation.',
        reaction: 'A golden family tradition that never gets old!',
      },
    ],
  },
  {
    id: 3,
    question: 'Whenever there is chaos or high stress, who usually steps up to calm the storm?',
    options: [
      {
        text: 'You, with your level head, common sense, and steady patience.',
        reaction: 'True! Your calmness is an anchor for all of us.',
      },
      {
        text: 'We team up and turn stress into laughter within five minutes.',
        reaction: 'The ultimate sibling superpower — laughing through anything!',
      },
      {
        text: 'We make a cup of tea, breathe, and tackle it step by step.',
        reaction: 'Timeless wisdom that always works.',
      },
    ],
  },
  {
    id: 4,
    question: 'What is the top wish for your upcoming year of life?',
    options: [
      {
        text: 'Peace of mind, zero unnecessary drama, and lots of cozy restful moments.',
        reaction: 'You deserve absolute peace and tranquility this year!',
      },
      {
        text: 'Exciting career/personal breakthroughs and fearless new beginnings.',
        reaction: 'You have everything it takes to reach the highest summit!',
      },
      {
        text: 'Travel to breathtaking places, new food adventures, and non-stop memories.',
        reaction: 'Here is to boarding passes, sunsets, and endless stories!',
      },
    ],
  },
];

export const FIREFLY_WISHES_DATA: FireflyWish[] = [
  {
    id: 1,
    title: 'Firefly of Peace',
    wish: 'May quiet calm and peace guard your heart on every single day of this new year.',
    icon: 'Sparkles',
  },
  {
    id: 2,
    title: 'Firefly of Courage',
    wish: 'May you always have the courage to trust your intuition and take brave, beautiful leaps.',
    icon: 'Flame',
  },
  {
    id: 3,
    title: 'Firefly of Joy',
    wish: 'May spontaneous laughter surprise you when you least expect it and fill your days.',
    icon: 'Sun',
  },
  {
    id: 4,
    title: 'Firefly of Good Health',
    wish: 'May vitality, restful sleep, and vibrant energy surround you through every season.',
    icon: 'Heart',
  },
  {
    id: 5,
    title: 'Firefly of Sibling Bond',
    wish: 'No matter how many miles or years pass, your brother is always here for you.',
    icon: 'ShieldCheck',
  },
];

export const WISH_GENERATOR_CARDS: WishCard[] = [
  {
    id: 1,
    blessing: 'The Blessing of Morning Light',
    poeticNote:
      'May the sun rise upon your days with warmth, clearing away every cloud of worry and revealing a clear path forward.',
  },
  {
    id: 2,
    blessing: 'The Blessing of Deep Resilience',
    poeticNote:
      'Like a willow tree beside a stream, may you bend gracefully in the wind yet remain unbreakable and deeply rooted.',
  },
  {
    id: 3,
    blessing: 'The Blessing of Golden Friendships',
    poeticNote:
      'May you be surrounded by people who see your true worth, celebrate your wins, and offer gentle kindness without condition.',
  },
  {
    id: 4,
    blessing: 'The Blessing of Creative Spark',
    poeticNote:
      'May your ideas flow effortlessly and your talents blossom into projects that bring deep fulfillment and pride.',
  },
  {
    id: 5,
    blessing: 'The Blessing of Fearless Joy',
    poeticNote:
      'May you laugh freely, dance to your own melody, and embrace every good thing that comes your way without hesitation.',
  },
  {
    id: 6,
    blessing: 'The Blessing of Mountain Serenity',
    poeticNote:
      'May your thoughts be as clear as a mountain stream and your nights filled with deep, restorative rest.',
  },
];

export const FLOATING_SCROLL_MESSAGE = {
  title: 'An Ancient Forest Scroll',
  subtitle: 'Found drifting softly above the mountain stream',
  message:
    '“A sister is both a mirror and an opposite. She is a shared childhood, an unspoken understanding, and a gentle reminder that wherever you go in this vast world, you never walk completely alone.”',
  dedication: 'Written with love for you on 6 November.',
};

export const HUG_BURST_MESSAGE = {
  title: 'One More Big Hug',
  message:
    'Wrapping you in the warmest brotherly hug across every distance! May your smile never dim, may your spirit stay radiant, and may you always know you are cherished beyond words. Happy Birthday!',
};
