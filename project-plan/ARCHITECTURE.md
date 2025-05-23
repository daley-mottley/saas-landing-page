
# Technical Architecture

## Component Structure
```
src/
├── components/
│   ├── ui/                    # Shadcn base components
│   ├── layout/
│   │   ├── Header.tsx        # Navigation and logo
│   │   └── Footer.tsx        # Links and legal
│   ├── sections/
│   │   ├── Hero.tsx          # Main value proposition
│   │   ├── Features.tsx      # Product features showcase
│   │   ├── Testimonials.tsx  # Social proof
│   │   ├── Pricing.tsx       # Pricing tiers
│   │   └── CTA.tsx           # Final conversion section
│   └── common/
│       ├── AnimatedSection.tsx # Scroll animations wrapper
│       ├── GradientButton.tsx  # Custom CTA button
│       └── FeatureCard.tsx     # Reusable feature display
├── hooks/
│   ├── useScrollAnimation.ts  # Custom scroll effects
│   └── useIntersectionObserver.ts # Viewport detection
├── utils/
│   ├── animations.ts         # Animation configurations
│   └── constants.ts          # App constants and copy
└── types/
    └── index.ts              # TypeScript interfaces
```

## Performance Optimizations
1. **Lazy Loading**: Components load as needed
2. **Image Optimization**: WebP format with fallbacks
3. **Code Splitting**: Route-based code splitting
4. **Animation Performance**: Hardware-accelerated transforms
5. **Bundle Size**: Tree-shaking and minimal dependencies

## Responsive Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px  
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

## Accessibility Features
- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader optimization
- Color contrast compliance
- Reduced motion preferences
