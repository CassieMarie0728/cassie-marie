---
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
