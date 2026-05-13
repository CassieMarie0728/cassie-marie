---
title: THE AFTERMATH DIARIES Design System
description: A raw, unapologetic design system for grief without filters
published: 2026-05-13

# Color Palette
colors:
  void-black:
    value: '#0b0f0f'
    description: Primary background—the void. Deep enough to disappear into.
    usage: Body background, primary container color
  blood-red:
    value: '#981518'
    description: Accent color. Anger. Passion. The color of everything you're not saying out loud.
    usage: Links, buttons, focus states, emphasis
  blood-red-hover:
    value: '#b91c1f'
    description: Intensified red. When the anger gets louder.
    usage: Interactive states, hover effects
  ash-gray:
    value: '#a8a9ad'
    description: Muted secondary text. The color of exhaustion, of not quite caring about your appearance anymore.
    usage: Body text, secondary content, metadata
  smoke:
    value: '#f5f5f5'
    description: Near-white. Not pure. Faded. Like memories.
    usage: Primary text, headings, foreground elements
  card-bg:
    value: '#141919'
    description: Slightly lighter than void-black. Subtle depth for card containers.
    usage: Card backgrounds, section overlays
  card-border:
    value: '#1e2626'
    description: Barely-there borders. They exist but don't demand attention.
    usage: Borders, dividers, subtle separation

# Typography
typography:
  headline:
    family: 'Special Elite'
    fallbacks: ['cursive']
    usage: All headings (h1-h4), emphasis, branding
    weights: 400 (standard)
    description: |
      Handwritten-style serif. Intimate. Like someone poured their grief into a journal entry.
      Used for all headlines because this is *personal*, not corporate.
  
  body:
    family: 'Source Sans 3'
    fallbacks: ['Courier New', 'Courier', 'monospace']
    usage: Body text, paragraphs, UI labels
    weights: 400 (regular), 600 (semibold), 700 (bold)
    description: |
      Clean, readable sans-serif. Professional enough to be taken seriously,
      human enough to feel like someone actually wrote this.
  
  monospace:
    family: 'IBM Plex Mono'
    fallbacks: ['monospace']
    usage: Metadata, tags, section labels, fine print
    weights: 400 (regular), 500 (medium)
    description: |
      Technical. Stark. Used for timestamps, category tags, and legal disclaimers.
      No nonsense. Just facts.

# Type Scale
typescale:
  h1:
    sizes: 'clamp(2rem, 5vw, 3.75rem)'
    line-height: 1.2
    margin-bottom: 1.25rem
    description: Hero-sized. For when you need to scream.
  
  h2:
    sizes: 'clamp(1.75rem, 4vw, 2.5rem)'
    line-height: 1.2
    margin-bottom: 1rem
    description: Section headers. Loud but not overwhelming.
  
  h3:
    sizes: 'clamp(1.15rem, 2.5vw, 1.5rem)'
    line-height: 1.2
    margin-bottom: 0.5rem
    description: Subsection headers. Organized chaos.
  
  h4:
    sizes: '1.1rem'
    line-height: 1.2
    margin-bottom: 0.5rem
    description: Minor headings. Still matters, just less.
  
  body-large:
    sizes: '1.05rem'
    line-height: 1.8
    description: Featured text, post content, detailed reading.
  
  body-default:
    sizes: '1rem'
    line-height: 1.7
    description: Standard body copy.
  
  body-small:
    sizes: '0.9rem'
    line-height: 1.5
    description: Excerpts, metadata, secondary info.
  
  meta:
    sizes: '0.75rem'
    line-height: 1.4
    text-transform: uppercase
    letter-spacing: '0.15em'
    description: Tags, labels, dates. Tiny but present.

# Spacing System
spacing:
  xs: '0.25rem'
  sm: '0.5rem'
  md: '1rem'
  lg: '1.25rem'
  xl: '1.5rem'
  xxl: '2rem'
  xxxl: '2.5rem'
  section: '4rem'
  description: All spacing follows a consistent scale. Nothing random. Everything has purpose.

# Layout
layout:
  container-max-width: '1100px'
  container-padding: '1.25rem'
  page-container-max-width: '800px'
  gutter: '1.25rem'
  section-padding: '4rem 0'
  description: |
    Wide enough for breathing room, narrow enough to feel intimate.
    Gutter-based system. Responsive padding adjusts with viewport.

# Elevation & Shadows
shadows:
  none: 'none'
  subtle: 'box-shadow: none; border: 1px solid var(--card-border)'
  description: |
    No drop shadows. No elevation. Everything exists on the same plane.
    Borders instead of shadows—more direct, less pretentious.
    This ain't material design.

# Border Radius
radii:
  none: '0'
  sharp: '2px'
  card: '3px'
  circle: '50%'
  description: |
    Mostly sharp. Minimal rounding. Everything is *sharp* about grief,
    so the design shouldn't be rounded and soft.
    Cards get just enough curve to feel approachable.

# Buttons
buttons:
  primary:
    background: 'var(--blood-red)'
    color: 'var(--smoke)'
    border: '2px solid var(--blood-red)'
    padding: '0.85rem 2rem'
    font-family: 'var(--font-headline)'
    font-size: '1.05rem'
    border-radius: '2px'
    hover:
      background: 'var(--blood-red-hover)'
      border-color: 'var(--blood-red-hover)'
      color: '#fff'
    active:
      transform: 'scale(0.97)'
    description: 'Call-to-action buttons. Aggressive. Demands attention. No apologies.'
  
  secondary:
    background: 'transparent'
    color: 'var(--smoke)'
    border: '2px solid var(--ash-gray)'
    padding: '0.85rem 2rem'
    font-family: 'var(--font-headline)'
    font-size: '1.05rem'
    border-radius: '2px'
    hover:
      border-color: 'var(--blood-red)'
      color: 'var(--blood-red)'
    active:
      transform: 'scale(0.97)'
    description: 'Secondary actions. Understated but clickable. Like crying quietly instead of screaming.'
  
  small:
    padding: '0.55rem 1.25rem'
    font-size: '0.9rem'
    description: 'Smaller variant for inline or supplementary actions.'

# Cards
cards:
  background: 'var(--card-bg)'
  border: '1px solid var(--card-border)'
  border-radius: '3px'
  padding: '1.75rem'
  hover:
    border-color: 'var(--blood-red)'
    transform: 'translateY(-2px)'
  description: |
    Minimal card styling. No depth, no shadow. Just content with breathing room.
    Hover effect lifts slightly—subtle feedback that something's interactive.

# Input Fields
inputs:
  background: 'var(--void-black)'
  color: 'var(--smoke)'
  border: '1px solid var(--card-border)'
  border-radius: '2px'
  padding: '0.85rem 1rem'
  font-family: 'var(--font-body)'
  font-size: '1rem'
  placeholder-color: 'var(--ash-gray)'
  focus:
    outline: '2px solid var(--blood-red)'
    outline-offset: '1px'
    border-color: 'var(--blood-red)'
  description: 'Simple, accessible input styling. Clear focus states. No confusion here.'

# Tags
tags:
  background: 'var(--blood-red)'
  color: '#fff'
  padding: '0.2rem 0.6rem'
  border-radius: '2px'
  font-family: 'var(--font-mono)'
  font-size: '0.7rem'
  text-transform: 'uppercase'
  letter-spacing: '0.1em'
  description: 'Category markers. Bold. Impossible to miss. Like the emotions you can't ignore.'

# Motion & Transitions
motion:
  transition-speed-fast: '0.1s'
  transition-speed-normal: '0.2s'
  transition-speed-slow: '0.3s'
  timing-function: 'ease'
  descriptions:
    - 'Color transitions: 0.2s ease'
    - 'Border transitions: 0.2s ease'
    - 'Transform transitions: 0.15s ease'
    - 'Scale on active: 0.97 (0.1s)'
  note: |
    No animations. No floating particles. No "delight."
    Only functional transitions that provide feedback.
    Fast enough to feel responsive. Slow enough to feel intentional.

# Responsive Breakpoints
breakpoints:
  mobile: '0px (default)'
  tablet-small: '500px'
  tablet: '600px'
  desktop-small: '768px'
  desktop: '900px'
  description: |
    Mobile-first approach. Everything stacks by default.
    Breakpoints are conservative—don't add complexity until you need to.

# Accessibility
accessibility:
  focus-outline: '3px solid var(--blood-red)'
  focus-outline-offset: '3px'
  color-contrast: 'WCAG AA compliant throughout'
  skip-link: 'Present. Visible on focus.'
  semantic-html: 'Used throughout. Headings in order. Lists as lists.'
  description: |
    This isn't a luxury brand site. Real people in crisis are reading this.
    No low-contrast text. No hidden navigation. No gatekeeping functionality.
    Accessibility is built in, not bolted on.

---

## The Design Philosophy

**This is NOT a pretty portfolio site.** This is not about aesthetics for aesthetics' sake. Every color, every font, every spacing decision exists for a specific reason: to communicate honestly about grief without condescending bullshit.

### Color Strategy

The color palette is a binary system with an accent: **void-black** (the emptiness), **smoke** (the faded reality), and **blood-red** (the anger that cuts through everything). There are no gradients, no pastels, no "inspire and uplift" palette. There's just *dark*, *muted*, and *bold*.

The void-black background isn't just aesthetic—it's thematic. Grief IS a void sometimes. The smoke-white text is intentionally not pure white because grief isn't binary; it's faded, complicated, exhausted. Blood-red is everywhere interactive because the anger is what moves people through the content. It's what makes them read, share, and feel less alone.

### Typography: Personal + Professional

**Special Elite** (the headline font) is handwritten and intimate. It's the voice of someone in their journal, not a corporation. **Source Sans 3** is clean and readable because your readers' attention spans are shot—their brains are mush with grief brain. No decorative fonts. No cutesy bullshit. **IBM Plex Mono** handles metadata and disclaimers because legal shit is serious and deserves to be stark.

The type scale uses `clamp()` for fluid typography—it gets bigger on bigger screens without breakpoint-specific rules. Readable on a phone when someone's crying on the bathroom floor at 2 AM. Just as readable on a desktop when they finally have the energy to sit at a computer.

### Spacing: Breathing Room

Four-rem section padding gives every section weight. Cards have enough internal padding that content doesn't feel claustrophobic. This is intentional. Grief makes everything feel tight and suffocating. Design should provide relief, not amplify the pressure.

### Interactions: Honest Feedback

Buttons scale down slightly on click (0.97) to feel tactile. Cards lift on hover to indicate they're clickable. Links change color. These aren't flashy transitions—they're communication. "Yes, something happened when you clicked." "Yes, this is interactive." That's all you get.

There's no hover animation, no floating particles, no "magical" experience. People here don't want magic. They want clarity and real talk.

### Accessibility: Built-In, Not Bolted-On

The blood-red focus outline is 3px and visible. Not tucked away. Not an afterthought. Navigation is in HTML order. Text contrast meets WCAG AA standards throughout. A skip-to-content link exists.

This website serves people in crisis. They might be on a screen reader. They might have hand tremors and need bigger click targets. Accessibility isn't a feature—it's the entire foundation.

### The Disclaimer Banner

That tiny legal footer? It's not hidden. It's not shrunk to illegibility. Font size is small (0.65rem) but the line-height and max-width make it readable. Because someone in crisis needs to know they should call 988. This isn't just legal CYA—it's potentially life-saving information.

## What's NOT Here

- Gradients
- Drop shadows (borders instead)
- Animations
- Decorative elements
- Hover effects beyond color/transform
- Rounded corners on anything critical
- Distracting imagery
- Infinite scroll or dark patterns
- Anything that feels "sticky" or manipulative

## The Bottom Line

This design system is a middle finger to the pastoral, minimalist, "inspiration" aesthetic that dominates grief content online. It's saying: **Grief is not beautiful. Grief is not a journey. Grief is rage and exhaustion and clarity all at once. Deal with it.**

The design doesn't try to make grief pretty. It just gets out of the way and lets the words do the work.
