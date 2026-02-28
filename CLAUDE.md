# Physical AI Humanoid Robotics Textbook - Project Overview

STRICTLY FOLLOW the instructions written in @AGENTS.md -> [AGENTS.md](./AGENTS.md) and READ this file at the start of every session and always remember it.

## Project Purpose and Goals

The Physical AI Humanoid Robotics Textbook project is designed to be an educational resource covering the intersection of artificial intelligence and humanoid robotics. This is part of a hackathon competition to create a comprehensive textbook for teaching Physical AI & Humanoid Robotics. The project uses Docusaurus as the documentation framework and aims to provide extensive coverage of topics related to physical AI systems, humanoid robot development, and the theoretical and practical aspects of creating intelligent robotic systems.

The hackathon includes several key requirements:
- AI/Spec-Driven Book Creation using Docusaurus deployed to GitHub Pages
- Integrated RAG Chatbot Development with OpenAI Agents/ChatKit SDKs
- Bonus points for implementing signup/signin with better-auth.com
- Bonus points for personalized content based on user background
- Bonus points for Urdu translation capabilities

## Technology Stack

The project utilizes the following technology stack:

- **Docusaurus v3.1**: Static site generator for documentation
- **React.js**: Component-based UI development
- **Node.js/npm**: Package management and runtime environment
- **Markdown**: Content authoring format
- **CSS/Custom Styles**: Styling and theme customization
- **GitHub Pages**: Deployment platform
- **Spec-Kit Plus**: For AI/Spec-driven development
- **Claude Code**: AI-assisted development

## Directory Structure and Organization

The project follows a Docusaurus-based directory structure:

```
D:\hackathon-1-physical-ai-humanoid-robotics-textbook/
├── .claude/                 # Claude Code workspace files
├── .git/                    # Git repository files
├── .github/                 # GitHub configuration
├── .specify/                # Spec-Kit Plus configuration
├── docs/                    # Main documentation content
├── frontend/                # Docusaurus application
│   ├── docs/                # Documentation markdown files
│   ├── src/                 # Custom React components
│   │   ├── components/      # Custom UI components
│   │   ├── css/             # Custom styles
│   │   ├── pages/           # Custom pages
│   │   ├── theme/           # Theme overrides
│   │   └── utils/           # Utility functions
│   ├── static/              # Static assets
│   ├── docusaurus.config.js # Docusaurus configuration
│   ├── package.json         # Node.js dependencies
│   ├── sidebars.js          # Navigation sidebar configuration
│   └── build/               # Build output (gitignored)
├── specs/                   # Specification files
│   ├── 001-docusaurus-book-setup/  # Initial setup specs
│   └── 002-robocraft-ui/    # UI design specs
├── history/                 # Project history
│   ├── prompts/             # Prompt history records
│   └── adr/                 # Architecture decision records
├── CLAUDE.md               # Claude Code project rules
└── README.md               # Project overview
```

## Current Implementation Status

The project is currently in an advanced state with the following key features implemented:

### Docusaurus Setup
- Complete Docusaurus configuration with custom navigation
- Extensive documentation structure covering modules 0-7 on physical AI
- Custom Navbar and Footer components with theme overrides
- Responsive design for mobile and desktop viewing
- GitHub Pages deployment configuration

### Content Structure
- Module 0: Getting Started with Physical AI (Hardware Requirements)
- Module 1: Introduction to Physical AI
- Module 2: Robotic Nervous System (ROS 2)
- Module 3: Digital Twin (Gazebo & Unity)
- Module 4: AI-Robot Brain (NVIDIA Isaac)
- Module 5: Vision-Language-Action (VLA)
- Module 6: Humanoid Robot Development
- Module 7: Conversational Robotics

### Custom Components
- Interactive 3D Robot Preview component
- Hardware Tier Cards
- Modules Grid and Cards
- Hero Section with animations
- Custom Navbar with mobile menu
- Custom Footer with CTA

### Frontend Features
- Dark mode theme (disabled switching)
- Custom CSS styling
- Mobile-responsive design
- Smooth scrolling navigation
- Interactive elements

## Key Features Already Built

### Navigation and Structure
- Organized module structure from basic concepts to advanced topics
- Auto-generated sidebar navigation
- Custom Navbar with LEARN FREE, MODULES, TECHNOLOGY, and GitHub links
- Mobile-responsive hamburger menu
- Sticky navigation header

### Content Features
- Comprehensive coverage of physical AI and humanoid robotics topics
- Hardware requirements documentation
- Software and system architecture details
- Step-by-step setup guides
- Cross-references between sections

### Technical Features
- Custom theme overrides
- Mobile-responsive design
- Static site generation for fast loading
- Version control integration
- GitHub Pages deployment configuration

## Completed Specifications
- **001-docusaurus-book-setup**: Initial Docusaurus setup with complete spec, plan, and tasks
- **002-robocraft-ui**: UI design with complete spec, plan, and tasks implementation

## Next Steps and Remaining Work

### High Priority
1. **RAG Chatbot Integration**: Implement Retrieval-Augmented Generation chatbot using OpenAI Agents/ChatKit SDKs
2. **Authentication System**: Implement signup/signin with better-auth.com including user background questions
3. **Personalization Engine**: Add content personalization based on user background
4. **Translation System**: Implement Urdu translation capability for chapters

### Medium Priority
1. **Advanced UI Components**: Add more interactive elements and 3D visualizations
2. **Quiz System**: Implement assessment tools for each module
3. **Progress Tracking**: Add user progress tracking and certificates
4. **Additional Content**: Complete remaining chapters and appendices

### Technical Improvements
1. **Performance Optimization**: Optimize images and assets for faster loading
2. **SEO Enhancement**: Improve meta tags and structured data
3. **Analytics Integration**: Add detailed user behavior tracking
4. **Accessibility**: Enhance WCAG compliance

## Deployment Configuration

The project is configured for deployment through GitHub Pages with the following key settings:

- Production URL: `https://sheikh-mohammad.github.io`
- Base URL: `/hackathon-i-physical-ai-and-humanoid-robotics-textbook/`
- Organization: `sheikh-mohammad`
- Repository: `robocraft`
- Deployment branch: `gh-pages`

Deployment process:
1. Run `npm run build` in the frontend directory to generate static files
2. Push changes to main branch
3. GitHub Actions handles automated deployment to GitHub Pages

## Special Considerations for Maintenance

### Documentation Updates
- New content should follow the existing module/chapter structure
- Maintain consistent formatting and style across all documents
- Update sidebars.js when adding new chapters or sections
- Keep cross-references accurate when moving or renaming content
- Follow the existing file naming convention (numbers for ordering)

### Technical Maintenance
- Monitor dependency updates in package.json
- Test custom components when updating Docusaurus
- Verify all navigation links remain functional
- Ensure mathematical notation renders correctly
- Keep search functionality updated

### Content Quality
- Maintain technical accuracy in all robotics and AI concepts
- Ensure examples are up-to-date with current technology
- Verify that all setup guides are tested and functional
- Keep pace with developments in humanoid robotics field
- Review ethical considerations as the field evolves

### Performance Monitoring
- Regularly check site loading speeds
- Monitor custom component performance
- Track user engagement through analytics
- Optimize images and assets periodically
- Test cross-browser compatibility

## Getting Started for Returning Developers

To resume work on this project:

### Prerequisites
- Node.js >= 18.0
- npm package manager
- Git for version control

### Setup Process
1. Clone the repository
2. Navigate to the frontend directory: `cd frontend/`
3. Install dependencies: `npm install`
4. Start development server: `npm start`

### Development Commands
- `npm start`: Start local development server
- `npm run build`: Build for production
- `npm run serve`: Serve built files locally
- `npm run deploy`: Deploy to GitHub Pages
- `npm run clear`: Clear cache and build artifacts

### Project Workflow
1. Use Spec-Kit Plus for new feature development (`sp.specify`, `sp.plan`, `sp.tasks`)
2. Make changes to documentation in the `frontend/docs/` directory
3. Add custom components in `frontend/src/components/`
4. Update navigation in `frontend/sidebars.js`
5. Test locally before committing changes

### Git Workflow
- Create feature branches for new functionality
- Use atomic commits with descriptive messages
- Follow the existing branch naming convention
- Submit pull requests for review when implementing specs

## Key Files and Directories to Remember

- `frontend/docusaurus.config.js`: Main Docusaurus configuration
- `frontend/sidebars.js`: Navigation structure
- `frontend/src/components/`: Custom React components
- `frontend/src/theme/`: Theme overrides (Navbar, Footer)
- `frontend/docs/`: All textbook content
- `specs/`: Project specifications and plans
- `history/`: Project history and decision records

## Project Status Summary

The project is in good shape with a solid foundation for the textbook. The Docusaurus setup is complete, content structure is well-defined, and UI components are implemented. The next major focus should be on implementing the RAG chatbot, authentication system, and personalization features to earn bonus points in the hackathon. The content for all modules is structured and ready for expansion.