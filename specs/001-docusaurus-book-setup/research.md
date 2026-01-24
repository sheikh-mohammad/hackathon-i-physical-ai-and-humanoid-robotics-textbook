# Research: Docusaurus Book Setup

## Docusaurus Framework Selection

**Decision**: Use Docusaurus v3.x with classic preset
**Rationale**: Docusaurus v3.x is the latest stable version with modern architecture, TypeScript support, and improved performance. The classic preset provides standard documentation features with blog and pages support.
**Alternatives considered**:
- Docusaurus v2.x - older architecture but more mature plugin ecosystem
- GitBook - simpler but less customizable
- Hugo - more complex but highly flexible

## Context7 MCP Server Integration

**Decision**: Use Context7 during implementation for documentation reference
**Rationale**: Context7 provides up-to-date Docusaurus documentation and best practices that will help ensure the implementation follows current standards and avoids deprecated approaches.
**Alternatives considered**:
- Official Docusaurus docs - may not be as current
- Stack Overflow/forums - inconsistent quality

## Navigation Generation Approach

**Decision**: Auto-generate navigation from folder structure
**Rationale**: This approach ensures consistency between the content organization and navigation, reduces maintenance overhead, and prevents navigation from becoming out of sync with content.
**Alternatives considered**:
- Manual navigation configuration - more control but higher maintenance
- Hybrid approach - partially manual, partially auto-generated

## Deployment Strategy

**Decision**: Deploy to GitHub Pages using GitHub Actions workflow
**Rationale**: GitHub Pages provides free hosting with good performance and reliability. GitHub Actions provides automated builds and deployments triggered by pushes to main branch.
**Alternatives considered**:
- Netlify/Vercel - require additional account setup
- Self-hosting - more complex infrastructure requirements

## Branding and Theming

**Decision**: Create custom theme for Physical AI Humanoid and Robotics textbook
**Rationale**: Custom branding creates a cohesive learning experience and distinguishes the textbook from generic documentation sites.
**Alternatives considered**:
- Use default Docusaurus theme - less distinctive
- Minimal customizations - less brand recognition

## Content Placeholder Strategy

**Decision**: Create placeholder content with "Test content" for all files
**Rationale**: This ensures all navigation links work and the site structure is validated without requiring actual content creation at this stage.
**Alternatives considered**:
- Leave files completely empty - may cause rendering issues
- Use Lorem ipsum content - less clear indication of placeholder status

## Project Structure Decision

**Decision**: Set up Docusaurus project in current directory (.)
**Rationale**: This simplifies the project structure by avoiding unnecessary subdirectories and keeps the Docusaurus files at the root level for easier access and management.
**Alternatives considered**:
- Subdirectory approach (e.g., docusaurus-book/) - adds unnecessary nesting
- Monorepo structure - more complex than needed for a single documentation site