---
name: Timeless Monolith
colors:
  surface: '#fbf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#fbf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f3ef'
  surface-container: '#efeeea'
  surface-container-high: '#eae8e4'
  surface-container-highest: '#e4e2de'
  on-surface: '#1b1c1a'
  on-surface-variant: '#444748'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f0ec'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#010101'
  on-primary: '#ffffff'
  primary-container: '#1c1c1c'
  on-primary-container: '#858484'
  inverse-primary: '#c8c6c5'
  secondary: '#78592a'
  on-secondary: '#ffffff'
  secondary-container: '#ffd399'
  on-secondary-container: '#79592b'
  tertiary: '#010101'
  on-tertiary: '#ffffff'
  tertiary-container: '#1d1c1b'
  on-tertiary-container: '#878482'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1b1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffddb3'
  secondary-fixed-dim: '#eac088'
  on-secondary-fixed: '#291800'
  on-secondary-fixed-variant: '#5e4115'
  tertiary-fixed: '#e6e2df'
  tertiary-fixed-dim: '#cac6c4'
  on-tertiary-fixed: '#1c1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#fbf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e4e2de'
  warm-bg: '#F8F6F2'
  ink-black: '#1C1C1C'
  ochre-accent: '#B8925E'
  muted-divider: '#D9D4CC'
typography:
  display-xl:
    fontFamily: Playfair Display
    fontSize: 84px
    fontWeight: '400'
    lineHeight: 92px
    letterSpacing: -0.02em
  display-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 54px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 56px
    fontWeight: '400'
    lineHeight: 64px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '300'
    lineHeight: 32px
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  label-caps:
    fontFamily: Hanken Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.15em
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 32px
  margin-desktop: 80px
  margin-tablet: 40px
  margin-mobile: 24px
  section-padding: 160px
---

## Brand & Style

The design system is rooted in the philosophy of architectural permanence and spatial clarity. It targets ultra-high-net-worth individuals and commercial developers who value restraint over trend. The emotional response is one of "Atmospheric Luxury"—a sense of quiet confidence, monastic calm, and uncompromising quality.

The aesthetic leans heavily into **Minimalism** with an **Editorial** structure. It draws inspiration from the precise alignment of Apple, the warm minimalism of Norm Architects, and the large-scale photography of Architectural Digest. The interface acts as a silent gallery frame, receding to allow the architectural work to command the viewer's full attention. Layouts are defined by expansive whitespace, asymmetric balance, and a rigorous adherence to a grid that feels both structured and breathable.

## Colors

The palette is a sophisticated interplay of natural tones. The background uses a "Paper White" (#F8F6F2) which provides more warmth and tactile depth than a standard digital white, mimicking the feel of a premium architectural monograph. 

The primary "Ink Black" (#1C1C1C) is used for maximum legibility and authority in typography. The "Ochre" accent (#B8925E) is used sparingly—reserved for interactive cues, underlines, or small status indicators—evoking the warmth of natural oak or brushed brass. For dark-themed sections, the "Ink Black" becomes the background with "Paper White" typography to maintain high-end contrast without losing the brand's warmth.

## Typography

The typographic system is a dialogue between the classic and the modern. **Playfair Display** serves as the primary serif for all headlines, providing a literary and authoritative tone. It should be typeset with tight tracking in display sizes to emphasize its elegant ligatures and stroke contrast.

**Hanken Grotesk** is the functional counterpart, used for body copy and navigation. It provides a clean, neutral clarity that ensures the interface remains modern. Use the 300 (Light) weight for longer paragraphs to maintain an airy, editorial feel. Labels and small navigation items should always use the `label-caps` style to provide a rhythmic structure to the page without requiring heavy borders or icons.

## Layout & Spacing

This design system utilizes a **12-column fixed-width grid** for desktop, centered within the viewport. The "Luxury of Space" is the guiding principle; therefore, vertical rhythm is intentionally slow, with generous section padding (160px+) to allow the eye to rest between visual statements.

Content should often be offset from the grid to create an editorial, asymmetrical look—for example, a headline may span columns 1-6 while the supporting imagery spans 5-12. On mobile, the layout collapses to a single column with a 24px safety margin, but the vertical breathing room must remain proportionally large to preserve the premium feel.

## Elevation & Depth

To maintain a flat, architectural purity, this system avoids traditional drop shadows and neomorphic effects. Depth is instead conveyed through **Tonal Layers** and **Stacking order**.

- **Primary Surface:** The warm Paper White (#F8F6F2).
- **Secondary Surface:** Slight tonal shifts or full-width imagery used as a backdrop.
- **Glassmorphism:** Reserved exclusively for the sticky navigation header to maintain context of the underlying imagery while ensuring legibility. Use a `backdrop-filter: blur(20px)` with a high-transparency white tint.
- **Outlines:** Use 1px solid borders in the `muted-divider` color (#D9D4CC) for UI elements like input fields or button outlines. This keeps the interface feeling "drawn" and precise, rather than "rendered."

## Shapes

The shape language is strictly **Sharp (0)**. In architecture, precision is paramount. Every UI element—from buttons and input fields to image containers—should feature 90-degree corners. This reinforces the feeling of structural integrity and professional rigor. The only exception to the "no curves" rule is typography and specific iconography (like the WhatsApp logo), which provides a soft organic contrast to the rigid architectural grid.

## Components

### Buttons
- **Primary:** Solid "Ink Black" rectangle with "Paper White" Hanken Grotesk caps. No rounded corners. Subtle hover state: background shifts to "Ochre" (#B8925E).
- **Secondary/Ghost:** 1px "Ink Black" border. Text in "Ink Black."
- **Tertiary:** Text-only with a simple 1px underline in "Ochre."

### Project Cards
Avoid traditional "cards." Use full-bleed or large-format images where the text (Project Name and Category) is placed directly beneath the image in a minimal stack. No shadows or borders.

### Navigation
The navigation should be minimal. Active states are indicated by a 1px "Ochre" underline. The "Book Consultation" button in the header should remain in its own outlined box to act as the primary call to action.

### Input Fields
Simple 1px bottom border only (no full boxes). Labels should be small caps (`label-caps`) floating above the line. Focus state: the bottom border thickens to 2px and changes to "Ochre."

### Testimonials
Centered, large-scale serif typography. Use a single "Ochre" quotation mark or a horizontal rule above the text to denote the section. No profile photos or star ratings; let the words and white space speak for the quality.