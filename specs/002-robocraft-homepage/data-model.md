# Data Model: RoboCraft Holographic Homepage

**Feature**: RoboCraft Holographic Homepage Redesign
**Date**: 2026-01-25

## Entity Definitions

### Homepage
**Description**: Main page entity containing all content and visual elements for the RoboCraft homepage

**Fields**:
- id: string (unique identifier)
- title: string (RoboCraft branding)
- subtitle: string (tagline/description)
- contentSections: array of ContentBlock (structured content from markdown files)
- visualElements: array of VisualElement (holographic design components)
- navigationItems: array of NavigationItem (navigation links)
- createdAt: datetime (creation timestamp)
- updatedAt: datetime (last update timestamp)

**Relationships**:
- Contains many ContentBlock entities
- Contains many VisualElement entities
- Contains many NavigationItem entities

### ContentBlock
**Description**: Individual content block extracted from markdown files

**Fields**:
- id: string (unique identifier)
- type: enum (heading, paragraph, list, table, code, quote, thematicBreak)
- content: string (rendered content)
- sourceFile: string (originating markdown file path)
- order: number (display order)
- className: string (CSS classes for styling)

**Relationships**:
- Belongs to Homepage
- May reference MediaAsset for embedded images

### VisualElement
**Description**: Holographic design elements and animations

**Fields**:
- id: string (unique identifier)
- type: enum (floatingElement, particle, techIcon, backgroundPattern)
- position: object (x, y coordinates)
- animationType: string (type of animation - CSS or JS based on complexity)
- size: string (dimensions)
- colorScheme: string (color palette with specific hex/RGB values)
- zIndex: number (layering order)
- isActive: boolean (whether animation is active)
- animationComplexity: enum (simple, complex) - determines if CSS or JS animation is used

**Relationships**:
- Belongs to Homepage

### NavigationItem
**Description**: Navigation menu items

**Fields**:
- id: string (unique identifier)
- label: string (display text)
- url: string (destination path)
- icon: string (icon identifier)
- order: number (menu order)
- isVisible: boolean (whether to display)

**Relationships**:
- Belongs to Homepage

### MediaAsset
**Description**: Generated images and media files

**Fields**:
- id: string (unique identifier)
- filename: string (original filename)
- filepath: string (relative path from static directory)
- altText: string (accessibility description)
- type: enum (image, video, icon)
- dimensions: object (width, height)
- size: number (file size in bytes)
- createdAt: datetime (generation timestamp)
- storageLocation: enum (static, static/img) - indicates which directory the file is stored in

**Relationships**:
- Referenced by ContentBlock

## State Transitions

### Homepage States
- draft → inReview → published
- published → archived (when replaced by newer version)

### ContentBlock States
- pending → processed → rendered
- rendered → archived (when content changes)

## Validation Rules

### Homepage Validation
- title must be between 1-100 characters
- contentSections must contain at least one valid ContentBlock
- navigationItems must have unique URLs
- createdAt must be in the past
- updatedAt must be equal to or after createdAt

### ContentBlock Validation
- content must not exceed 10,000 characters
- sourceFile must reference an existing markdown file
- order must be a positive integer
- type must be one of the defined enum values

### VisualElement Validation
- position coordinates must be valid numbers
- animationType must correspond to implemented animations
- zIndex must be between 0-9999
- size must be in valid CSS format
- animationComplexity must be either 'simple' or 'complex'
- colorScheme must use specific hex/RGB values from defined palette

### MediaAsset Validation
- filename must have valid extension (jpg, png, gif, svg, webp)
- filepath must start with either 'static/' or 'static/img/'
- dimensions must be positive integers
- size must not exceed 5MB for images
- storageLocation must be either 'static' or 'static/img'

## Relationships & Constraints

### ContentBlock Relationships
- Each ContentBlock belongs to exactly one Homepage
- ContentBlocks are ordered by the 'order' field within their Homepage
- ContentBlocks may reference zero or one MediaAsset for embedded media

### NavigationItem Relationships
- Each NavigationItem belongs to exactly one Homepage
- NavigationItems are ordered by the 'order' field within their Homepage

### MediaAsset Relationships
- Each MediaAsset may be referenced by zero or many ContentBlocks
- MediaAssets are stored in either static/ or static/img/ directories
- MediaAssets must be referenced by at least one ContentBlock to remain active
- Each MediaAsset has a specific storageLocation indicating which directory it's in

## Indexes

### Homepage
- Primary: id (unique)
- Secondary: title (searchable)

### ContentBlock
- Primary: id (unique)
- Secondary: homepageId, order (composite for ordering)
- Secondary: sourceFile (for content lookup)

### VisualElement
- Primary: id (unique)
- Secondary: homepageId, type (for filtering by element type)

### MediaAsset
- Primary: id (unique)
- Secondary: filepath (unique, for preventing duplicates)
- Secondary: type (for filtering by media type)