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
- visualElements: array of VisualElement (industrial design components)
- navigationItems: array of NavigationItem (navigation links)
- industrialTheme: IndustrialTheme (dark industrial theme configuration)
- createdAt: datetime (creation timestamp)
- updatedAt: datetime (last update timestamp)

**Relationships**:
- Contains many ContentBlock entities
- Contains many VisualElement entities
- Contains many NavigationItem entities
- Has one IndustrialTheme

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
**Description**: Industrial design elements and animations

**Fields**:
- id: string (unique identifier)
- type: enum (robotJoint, mechanicalElement, circuitPathway, blueprintElement, backgroundPattern)
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

### ThemePreference
**Description**: User preference for dark/light mode selection

**Fields**:
- id: string (unique identifier)
- userId: string (user identifier, null for anonymous users)
- preferredTheme: enum (dark, light, system)
- autoSwitchEnabled: boolean (whether to respect system preference)
- createdAt: datetime (creation timestamp)
- updatedAt: datetime (last update timestamp)

**Relationships**:
- Associated with User (optional)
- Applied to Homepage

### ThemeTransition
**Description**: Configuration for smooth transitions between dark and light modes

**Fields**:
- id: string (unique identifier)
- duration: number (transition duration in milliseconds)
- easingFunction: string (CSS easing function)
- affectedElements: array of string (elements that transition)
- createdAt: datetime (creation timestamp)

**Relationships**:
- Applied to ThemePreference
- Influences all VisualElement transitions

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
- type must be one of the industrial-specific enum values (robotJoint, mechanicalElement, circuitPathway, blueprintElement)

### MediaAsset Validation
- filename must have valid extension (jpg, png, gif, svg, webp)
- filepath must start with either 'static/' or 'static/img/'
- dimensions must be positive integers
- size must not exceed 5MB for images
- storageLocation must be either 'static' or 'static/img'

### IndustrialTheme Validation
- primaryColor must be a valid hex color value
- secondaryColor must be a valid hex color value
- contrastRatio must be at least 4.5 for accessibility
- blueprintMode must be a boolean value
- themeType must be 'dark industrial'

### MechanicalAnimation Validation
- speed must be a positive number between 0.1 and 5.0
- precision must be a number between 0 and 1
- realismFactor must be a number between 0 and 1
- animationType must be one of the mechanical enum values (robotJoint, gearRotation, pistonMovement, conveyorBelt)
- targetElement must reference a valid VisualElement

### ThemePreference Validation
- userId must be a valid user identifier or null for anonymous users
- preferredTheme must be one of the enum values (dark, light, system)
- autoSwitchEnabled must be a boolean value
- createdAt must be in the past
- updatedAt must be equal to or after createdAt

### ThemeTransition Validation
- duration must be a positive number between 100-1000 milliseconds
- easingFunction must be a valid CSS easing function string
- affectedElements must be an array of valid element identifiers
- createdAt must be in the past

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

### IndustrialTheme Relationships
- Each Homepage has exactly one IndustrialTheme
- IndustrialTheme influences styling of all VisualElements
- IndustrialTheme affects the appearance of ContentBlocks

### MechanicalAnimation Relationships
- Each VisualElement may have zero or one MechanicalAnimation
- MechanicalAnimations are configured by IndustrialTheme settings
- MechanicalAnimations target specific VisualElements for animation

### ThemePreference Relationships
- Each User may have zero or one ThemePreference
- ThemePreference applies to one Homepage
- ThemePreference influences the IndustrialTheme applied to the site

### ThemeTransition Relationships
- Each ThemePreference has zero or one ThemeTransition configuration
- ThemeTransition affects multiple VisualElements during theme changes
- ThemeTransition is applied when switching between dark and light modes

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

### ThemePreference
- Primary: id (unique)
- Secondary: userId (for user-specific preferences)
- Secondary: preferredTheme (for theme-based filtering)

### ThemeTransition
- Primary: id (unique)
- Secondary: duration (for performance optimization)
- Secondary: easingFunction (for animation filtering)