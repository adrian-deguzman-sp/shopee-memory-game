# Shopee-style Memory Game (front-end mockup)

A playable, front-end-only memory (card-matching) game built with **React 18 + TypeScript (strict) + Vite**. It recreates the 4 mockup screens (Home, Game board, Win modal, Rewards) plus Pause, Game Over and Help states. No backend; only `localStorage` is used (streak, best score, difficulty, sound).

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run typecheck  # tsc --noEmit
npm run build      # type-check + production build
```

On desktop the app renders inside a 375x812 phone frame; below 500px viewport width it goes full-bleed.

## How it plays

- **Home**: pick a grid (4×3, 4×4, 4×5, 6×4) and tap **Play Now**. **?** opens the help/sound modal.
- **Game**: countdown timer + move counter. Flip two cards; matches stay open, mismatches shake and flip back after ~0.8s (input locked meanwhile). The back arrow pauses.
- **Win** → confetti modal → **Claim Now** → **Rewards** (mock ₱50 voucher, daily streak advances). **Play Again** restarts.
- **Time runs out** → Game Over modal (Try Again / Home).

## Project structure

```
src/
├─ App.tsx, main.tsx
├─ types/        game.ts, screen.ts
├─ constants/    cards.ts (13 faces), levels.ts, rewards.ts
├─ utils/        shuffle.ts (Fisher-Yates), buildDeck.ts, format.ts, cx.ts, sound.ts
├─ hooks/        useMemoryGame.ts (useReducer state machine), useTimer.ts, useLocalStorage.ts
├─ context/      AppContext.tsx (screen, level, streak, best score, sound, toast)
├─ styles/       theme.css (tokens), global.css, animations.css
├─ assets/
│  ├─ icons/     CardIcons.tsx (13 card faces), UiIcons.tsx
│  └─ art/       BagGlyph, Logo, TitleArt, Mascot, GiftBox, BgDecor
├─ components/
│  ├─ layout/    PhoneFrame, Screen, ScreenHeader
│  ├─ game/      Board, Card (3D flip), HudPill
│  ├─ modals/    Modal, WinModal, PauseModal, GameOverModal, HelpModal
│  ├─ rewards/   VoucherCard, StreakRow
│  └─ ui/        Button, Ribbon, Confetti, Toast
└─ screens/      HomeScreen/, GameScreen/, RewardsScreen/
```

Game state machine: `playing ⇄ paused → won | lost`, driven by a reducer in `useMemoryGame` (actions `START`, `FLIP`, `RESOLVE`, `PAUSE`, `RESUME`, `TICK`).

## Card faces (original simplified SVGs)

coin, cart, bag, parcel, voucher, flash-sale bolt, free-shipping truck, gift, heart, star, storefront, price tag (%), wallet.

## Placeholders to replace

| Asset | Where | Notes |
|---|---|---|
| Brand logo | `src/assets/art/Logo.tsx` | Generic bag glyph + plain "Shopee" text; swap in the real logo asset |
| Bag "S" mark (card back, voucher stub, rewards art) | `src/assets/art/BagGlyph.tsx` | Original simplified mark, not the official one |
| Mascot | `src/assets/art/Mascot.tsx` | Original simplified bag character, not the official mascot |
| Title lettering | `src/assets/art/TitleArt.tsx` | SVG text; replace with raster/vector art if desired |
| Gift boxes, coins, voucher art, rewards illustration | `GiftBox.tsx`, `CoinIcon`, `RewardsScreen.tsx` | Simplified vector stand-ins |
| Sound effects | `src/utils/sound.ts` | Synthesized beeps (Web Audio); replace with real audio files. Sound is off by default |
| Fonts | `index.html` | "Baloo 2" loaded from Google Fonts; self-host if needed |
| Voucher redemption | `RewardsScreen.tsx` | "Use Voucher" only shows a toast |

## Assumptions

- The timer is a **countdown** (60s on the default 4×4), inferred from the mockup values (00:45 at 6 moves, 00:20 at the win).
- One move = one pair of flips.
- Pause, Game Over, Help and the difficulty chips are not in the mockup; they were added.
- Every win grants the same mock ₱50 voucher (valid until Oct 31, 2026).
- Score = `pairs*100 + timeLeft*5 − extraMoves*5` (shown on the win modal; best score stored locally).
