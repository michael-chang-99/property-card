# PropertyCard — Frontend Interview Project

This repo is the reference solution for the **Property Listing Card** frontend interview.
See `property-card-interview.pdf` for the full question sheet, Figma mock, and scoring rubric.

---

## Running the project

### Prerequisites
- Node.js 18+
- npm 9+

### Install & start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Other commands

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build locally
```

---

## Folder structure

```
src/
├── App.tsx                               # Mounts PropertyCard with mock data
├── index.css                             # Global reset + body styles
└── components/
    └── PropertyCard/
        ├── index.ts                      # Public API — only export from here
        ├── PropertyCard.tsx              # Composition root
        ├── PropertyCard.module.css       # All styles + CSS design tokens
        ├── PropertyCard.types.ts         # TypeScript types for the full data shape
        ├── hooks/
        │   └── usePropertyCard.ts        # Derives display values from raw data
        ├── components/
        │   ├── StatusBadge.tsx           # active / pending / sold badge
        │   ├── PhotoGallery.tsx          # Primary photo + count badge
        │   ├── FeatureList.tsx           # Renders first N interior features
        │   ├── PriceHistory.tsx          # Listed / reduced history rows
        │   └── AgentCard.tsx             # Agent info + initials fallback avatar
        └── utils/
            ├── formatCurrency.ts         # (number) → "$485,000"
            ├── formatAddress.ts          # (Address) → { line1, line2 }
            ├── formatBaths.ts            # ({ full, half }) → "2.5"
            └── getStatusConfig.ts        # (status) → { label, color }
```

---

## Interview questions

The full interview sheet is in **`property-card-interview.pdf`**. Summary:

| # | Question | Time |
|---|---|---|
| 1 | **Implementation** — build the card from the Figma spec and JSON | 45 min |
| 2 | **Architecture** — refactor into components, hook, utils, types, CSS tokens | 30 min |

---

## Design tokens

Defined in `PropertyCard.module.css` as CSS custom properties:

| Token | Value | Used on |
|---|---|---|
| `--status-active` | `#1DB954` | Active badge |
| `--status-pending` | `#F5A623` | Pending badge |
| `--status-sold` | `#E02020` | Sold badge |
| `--price-reduced` | `#E02020` | Reduced price history row |
| `--color-accent` | `#0969DA` | Feature list bullets, agent avatar |
| `--border-color` | `#E2E6EA` | Dividers, panel border |
| `--radius-card` | `12px` | Card border radius |
| `--radius-badge` | `4px` | Photo count badge |
| `--shadow-card` | `0 2px 12px rgba(0,0,0,.08)` | Card elevation |

---

## Key edge cases handled

| Case | Where |
|---|---|
| `address.unit: null` | `formatAddress.ts` — filtered out with `.filter(Boolean)` |
| `agent.photo: null` | `AgentCard.tsx` — renders initials avatar |
| `features.amenities: null` | `FeatureList.tsx` — guards with `?.length` |
| `photos: []` | `PhotoGallery.tsx` — shows placeholder, hides count badge |
| `price: 0` | `formatCurrency.ts` — returns "Price not disclosed" |
| `openHouses: []` | Not rendered (section hidden when empty) |
| `isPrimary` flag | `PhotoGallery.tsx` — `find(isPrimary) ?? [0] ?? null` |
