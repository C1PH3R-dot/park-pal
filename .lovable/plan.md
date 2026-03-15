

# ASPHA PARK ASSISTANT — Smart Parking Web App

## Overview
A premium glassmorphism smart parking web app with animated mesh backgrounds, dual-theme engine, liquid border effects, and a fully interactive parking grid — built as a mobile-first PWA.

---

## 1. Foundation & Theming
- **Animated Mesh Background**: Three floating blobs (Lavender, Sky Blue, Mint) with smooth CSS animations, layered behind a global `backdrop-blur` for frosted-glass depth
- **Dual-Theme Engine**: Light ("Cloud White" — 30% opacity glass) and Dark ("Deep Slate" — 15% opacity glass) with a global toggle
- **Typography**: Plus Jakarta Sans for headings, Geist for body text, tabular-nums for metrics
- **Glass Card Component**: Reusable frosted-glass surface with proper border, blur, and radius specs per the design brief

## 2. Navigation
- **Floating Dock Nav Bar**: Horizontally centered, pill-shaped, floating at bottom (mobile) / top (desktop)
- Routes: Dashboard, Booking, Contact
- Lucide-react icons for each nav item
- Active state highlighting

## 3. Dashboard Page
- Real-time system metrics displayed in glass cards:
  - AI Detection Accuracy (99.2%)
  - System Latency (12ms)
  - Total Slots (120)
  - Current Occupancy (84%)
- Large tabular numbers with sparkline visualizations
- Staggered fade-in animations on mount

## 4. Booking Page
- **Location Sidebar/Selector**: Pre-configured locations (SREC Campus - EIE Block, Brookefields Mall, Prozone Mall, Fun Republic)
- **Smart Parking Grid**: CSS Grid layout (4 cols mobile, 8 cols desktop)
  - Available slots pulse softly in Emerald
  - Occupied slots shown in Rose with reduced opacity
  - Tap-to-select with scale animation
- **Booking Flow**: Select slot → confirmation dialog → success state

## 5. Contact/Support Page
- Glass-card contact form (name, email, message)
- Contextual help section
- Location-based support info

## 6. Interactive Effects
- **Liquid Border Trace**: Primary buttons with a glowing neon line that tracks cursor position around the perimeter
- **Staggered Animations**: All page components fade-in with `y: 20 → 0` spring animation on mount
- **Hover/Tap Effects**: Scale transitions on interactive elements

## 7. PWA Setup
- Install `vite-plugin-pwa` with manifest configuration
- App name: "ASPHA PARK ASSISTANT"
- Theme colors for light/dark modes
- Standalone display, portrait orientation
- Installable from browser with Add to Home Screen support

## 8. Pages & Routing
- `/` — Dashboard (metrics overview)
- `/booking` — Parking grid with location selector
- `/contact` — Support & contact form
- `*` — 404 Not Found

