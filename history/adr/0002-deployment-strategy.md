# ADR-0002: Deployment Strategy

> **Scope**: Document decision clusters, not individual technology choices. Group related decisions that work together (e.g., "Frontend Stack" not separate ADRs for framework, styling, deployment).

- **Status:** Accepted
- **Date:** 2026-01-24
- **Feature:** 001-docusaurus-book-setup
- **Context:** Need to select a deployment solution for the static documentation site that provides good performance, reliability, and ease of maintenance while keeping costs minimal.

<!-- Significance checklist (ALL must be true to justify this ADR)
     1) Impact: Long-term consequence for architecture/platform/security?
     2) Alternatives: Multiple viable options considered with tradeoffs?
     3) Scope: Cross-cutting concern (not an isolated detail)?
     If any are false, prefer capturing as a PHR note instead of an ADR. -->

## Decision

- Hosting: GitHub Pages (free static hosting)
- Automation: GitHub Actions workflow
- Trigger: Automated builds on push to main branch
- Source: Built from Docusaurus source in repository

## Consequences

### Positive

- Zero hosting costs
- Tight integration with GitHub workflow
- Automatic deployment on changes
- Good performance and reliability
- No infrastructure management required
- Easy for team members to contribute

### Negative

- Limited customization of deployment environment
- Dependency on GitHub ecosystem
- Potential limitations on build time or frequency
- Less flexibility compared to commercial hosting options

## Alternatives Considered

- Netlify/Vercel - rejected due to need for additional account management and potential costs
- Self-hosting - rejected due to increased operational complexity and maintenance overhead
- AWS S3/CloudFront - rejected due to increased complexity and ongoing costs

## References

- Feature Spec: specs/001-docusaurus-book-setup/spec.md
- Implementation Plan: specs/001-docusaurus-book-setup/plan.md
- Related ADRs: ADR-0001 Docusaurus Technology Stack
- Evaluator Evidence: specs/001-docusaurus-book-setup/research.md