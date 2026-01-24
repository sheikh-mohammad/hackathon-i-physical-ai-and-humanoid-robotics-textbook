# Data Model: Docusaurus Book Setup

## Book Content Entity

**Entity**: Book Content
- **Fields**:
  - id: string (unique identifier based on file path)
  - title: string (title of the content section)
  - content: string (markdown content)
  - path: string (relative path in the documentation tree)
  - parent: string (parent section identifier)
  - children: array (child section identifiers)
  - order: integer (order within parent section)
  - metadata: object (frontmatter data)

**Relationships**:
- Parent-child relationship between sections/modules
- Hierarchical organization following the folder structure

**Validation rules**:
- Each content item must have a unique path
- Path must correspond to actual file location
- Title must be present and non-empty
- Order values must be unique within parent

## Navigation Structure Entity

**Entity**: Navigation Structure
- **Fields**:
  - id: string (unique identifier)
  - label: string (display name in navigation)
  - href: string (link destination)
  - items: array (nested navigation items)
  - collapsed: boolean (whether section is collapsed by default)
  - collapsible: boolean (whether section can be collapsed)

**Relationships**:
- Maps to Book Content entities by path
- Hierarchical structure matching content organization

**State transitions**:
- Not applicable (static navigation structure)

## Site Configuration Entity

**Entity**: Site Configuration
- **Fields**:
  - title: string (site title)
  - tagline: string (site tagline)
  - url: string (site URL)
  - baseUrl: string (base URL path)
  - favicon: string (favicon path)
  - themeConfig: object (theme-specific configuration)
  - presets: array (Docusaurus presets)
  - plugins: array (Docusaurus plugins)

**Relationships**:
- Configures behavior of all Book Content and Navigation Structure