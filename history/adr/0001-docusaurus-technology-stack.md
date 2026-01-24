# ADR-0001: Docusaurus Technology Stack

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2026-01-24
- **Feature:** 001-docusaurus-book-setup
- **Context:** Need to select a documentation framework for the Physical AI Humanoid and Robotics textbook that provides good navigation, search capability, and customization options while being maintainable and following industry standards.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

- Framework: Docusaurus v3.x (latest stable)
- Preset: Classic (provides documentation, blog, and pages support)
- Language: Markdown for content authoring
- Integration: Context7 MCP server for documentation reference during implementation

## Consequences

### Positive

- Modern architecture with TypeScript support
- Built-in search functionality
- Excellent documentation capabilities
- Strong community support and ecosystem
- Automatic sidebar generation from folder structure
- Versioning support for future enhancements

### Negative

- Additional dependency on Node.js ecosystem
- Potential complexity for non-technical content contributors
- Lock-in to Docusaurus-specific features and conventions
- Build time dependencies for static site generation

## Alternatives Considered

- Docusaurus v2.x - rejected due to older architecture and lack of modern features
- GitBook - rejected due to limited customization options and less active development
- Hugo - rejected due to steeper learning curve and more complex templating system
- Custom solution - rejected due to maintenance overhead and reinventing established patterns

## References

- Feature Spec: specs/001-docusaurus-book-setup/spec.md
- Implementation Plan: specs/001-docusaurus-book-setup/plan.md
- Related ADRs: none
- Evaluator Evidence: specs/001-docusaurus-book-setup/research.md