# THE LIVING STORY
### An Immersive, Cinematic Birthday Adventure for My Sister

*A bespoke, interactive birthday experience designed from scratch with love and poetic storytelling.*

---

## 🌿 Overview

**The Living Story** is an illustrated, mobile-first interactive journey through nature, memory, and celebration created for my sister's birthday on **6 November**.

The experience is built as a cinematic 8-chapter storybook adventure combining layered SVG landscapes, gentle parallax, animated clouds, flowing waters, swaying reeds, glowing fireflies, interactive photography, and an outdoor birthday celebration.

---

## 🎨 Color Palette & Visual Language

Built with a curated natural earth-and-sky palette:

| Color Token | Hex Code | Visual Association |
| :--- | :--- | :--- |
| `--forest` | `#163D35` | Deep highland canopy |
| `--forest-deep` | `#102B29` | Mountain valley depths |
| `--sage` | `#A8BFA5` | Morning leaves & reeds |
| `--mist` | `#E5EFE7` | Atmospheric mountain mist |
| `--ivory` | `#F8F5E9` | Warm parchment & story text |
| `--sky` | `#B9D9E8` | High horizon skies |
| `--teal` | `#397F79` | Winding river currents |
| `--terracotta` | `#C87859` | Sun-warmed earth & pottery |
| `--amber` | `#F2CB82` | Golden dawn sunlight & flames |
| `--ink` | `#20332F` | Deep calligraphic text |

---

## 🗺️ The Eight Story Chapters

1. **Chapter One: The World Wakes Up**
   - Full-screen sunrise opening with misty mountain ridges, illuminated trail, and floating leaves.
   - Title: *"A WORLD, MADE A LITTLE MORE BEAUTIFUL FOR YOU"*
   - Greeting: *"Happy Birthday, My Sister"*
   - Primary Action: *"Begin the Journey"* with path lighting and cinematic transition.

2. **Chapter Two: The River of Time**
   - Flowing river with four interactive stepping stones:
     1. *Where It All Began* (Childhood photos, warm nostalgic lighting)
     2. *Growing Up* (School & growing years, golden hour tones)
     3. *Moments Worth Keeping* (Laughter and milestones, natural bright lighting)
     4. *Today* (Confidence, poise, and present grace, sunlit vibrant lighting)
   - Step-by-step progress indicator and full-photo view triggers.

3. **Chapter Three: The Islands of Memories**
   - Three floating illustrated islands connected by a natural bridge:
     - *Island 1: The Beginning*
     - *Island 2: Moments Worth Keeping*
     - *Island 3: Today and Tomorrow*
   - Smooth island travel transitions and photo containment.

4. **Chapter Four: The Observatory of Moments**
   - Mountaintop observatory featuring all **11 original photographs** (`/memory-01.jpg` to `/memory-11.jpg`).
   - Curved observation path with selectable memory windows.
   - Large featured frame and complete accessible Lightbox with swipe, keyboard (Arrow keys, Esc), and photo counter.

5. **Chapter Five: The Garden of Words**
   - Whispering garden beside a stream with an ancient tree.
   - Four interactive parchment notes hanging on swaying ribbons:
     - *Thank You* (featuring the requested opening letter)
     - *You Are Special*
     - *Always Proud of You*
     - *My Wish for Your Future*
   - Unrolls into an elegant, readable parchment overlay with clear close controls.

6. **Chapter Six: The Path of Discoveries**
   - Four independent, optional interactive discoveries:
     - **A. Sibling Bond Quiz**: Editable questions with fun brotherly reactions.
     - **B. Five Hidden Fireflies**: Glowing fireflies hiding in the trees; tap to capture and reveal unique wishes with counter.
     - **C. Birthday Blessing Generator**: Local poetic blessing cards drawn on demand.
     - **D. Floating Forest Scroll**: Ancient scroll drifting along the brook with a heartfelt sibling quotation.

7. **Chapter Seven: The Celebration Clearing**
   - Joyful outdoor celebration clearing with festive bunting, floating balloons, and a custom SVG birthday cake.
   - Interactive candle lighting: tap *"Light the Candles"* to ignite flame animations, trigger joyful celebration chimes, and release a colorful confetti burst (`canvas-confetti`).
   - Displays: *"IT'S YOUR SPECIAL DAY! Happy Birthday, My Sister!"*

8. **Chapter Eight: The Sunrise Finale**
   - Majestic sunrise landscape with rolling hills, golden clouds, and floating petals.
   - Sister's portrait displayed with full aspect ratio preservation (`object-fit: contain`).
   - Staged reveal of the final birthday message.
   - Interactive *"One More Hug"* button that triggers floating hearts and an affectionate message.
   - *"Experience the Journey Again"* replay button to smoothly restart the adventure.

---

## 📸 Photo Display & Quality Assurance

- **Zero Distortion**: All photographs use `object-fit: contain` with intrinsic aspect-ratio preservation.
- **Root Paths**: All 11 memory photos load directly from `/memory-01.jpg` through `/memory-11.jpg`, plus `/childhood-1.jpg`, `/childhood-2.jpg`, and `/sister-hero.jpg`.
- **No Unwanted Cropping**: Full head, face, and details remain completely visible.

---

## 🎵 Ambient Sound Engine

- Offline, zero-dependency Web Audio API sound generator.
- Generates gentle forest breeze and pentatonic wind chime tones.
- Sound is off by default (respecting user control) and can be toggled via the floating sound icon in the header.

---

## 🛠️ Technology Stack & Local Development

- **Framework**: React 19 + TypeScript
- **Bundler**: Vite 6
- **Styling**: Vanilla CSS with comprehensive CSS custom properties & keyframe animations
- **Icons**: Lucide React
- **Confetti**: Canvas-Confetti

### Commands:

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run production build
npm run build

# Preview production build locally
npm run preview
```

---

*Made with love for My Sister • 6 November*
