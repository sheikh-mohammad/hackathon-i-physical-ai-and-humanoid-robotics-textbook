# ADR-0004: Frontend Technology Stack and Industrial Design

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2026-01-28
- **Feature:** 002-robocraft-homepage
- **Context:** Need to establish a cohesive frontend technology stack and industrial design language for the RoboCraft homepage that aligns with the product's engineering-focused identity while maintaining performance and accessibility standards.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

Adopt Docusaurus 3.1.0 with React-based custom components as the foundation for the RoboCraft homepage, implementing an industrial design aesthetic with the following specific technologies and design elements:

- **Framework**: Docusaurus 3.1.0 (maintain existing infrastructure)
- **Component Architecture**: React JS with custom component library
- **Styling**: CSS Modules with industrial-themed color palette
- **Typography**: Space Grotesk (headlines), JetBrains Mono (technical/UI), IBM Plex Sans (body)
- **Color Palette**: Deep space dark (#08090d), Industrial orange (#f97316), Warm amber (#fb923c), System green (#22c55e)
- **Motion Design**: Staggered reveals, pulsing signal dots, mouse-tracking radial gradients
- **Visual Motifs**: Robot assembly schematics, grid overlays, floating system labels

## Consequences

### Positive

- Maintains compatibility with existing Docusaurus infrastructure and navigation
- Industrial aesthetic differentiates from typical educational platforms and conveys engineering seriousness
- CSS Modules provide scoped styling without global conflicts
- Color palette creates clear visual hierarchy with orange for CTAs and interaction
- Motion design enhances user experience without overwhelming content consumption
- Typography hierarchy improves readability and technical credibility
- Performance optimizations (lazy loading, code splitting) maintain fast load times

### Negative

- Industrial design may feel intimidating to beginners despite intended professionalism
- Limited customization options compared to fully custom solution
- Potential performance overhead from motion effects if not implemented carefully
- Accessibility considerations for color contrast and motion sensitivity
- Learning curve for team members unfamiliar with industrial design patterns

## Alternatives Considered

Alternative Stack A: Complete custom React application with Next.js
- Pros: Maximum flexibility, modern React patterns, SEO optimization
- Cons: Abandon existing Docusaurus investment, increased complexity, longer development time

Alternative Stack B: Static site generator with vanilla HTML/CSS
- Pros: Minimal dependencies, maximum performance, simple maintenance
- Cons: Lose Docusaurus content management benefits, reduced interactivity, limited scalability

Alternative Design C: Friendly/Approachable aesthetic with bright colors
- Pros: More welcoming to beginners, broader appeal, lighter visual weight
- Cons: Doesn't align with "serious builder" positioning, less distinctive from competitors, undermines engineering credibility

## References

- Feature Spec: specs/002-robocraft-homepage/spec.md
- Implementation Plan: specs/002-robocraft-homepage/plan.md
- Related ADRs: ADR-0001 (Docusaurus Technology Stack), ADR-0003 (Navigation Architecture)
- Evaluator Evidence: history/prompts/002-robocraft-homepage/001-create-robocraft-homepage-plan.plan.prompt.md