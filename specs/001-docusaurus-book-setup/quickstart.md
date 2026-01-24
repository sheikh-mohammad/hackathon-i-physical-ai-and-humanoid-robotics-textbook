# Quickstart: Docusaurus Book Setup

## Prerequisites

- Node.js (LTS version recommended)
- npm or yarn package manager
- Git (for version control)

## Installation Steps

1. **Clone or navigate to your project directory**
   ```bash
   cd /path/to/your/project
   ```

2. **Install Docusaurus globally (if not already installed)**
   ```bash
   npm install -g @docusaurus/core@latest
   ```

3. **Initialize Docusaurus in the current directory**
   ```bash
   npx create-docusaurus@latest . classic
   ```

5. **Install dependencies**
   ```bash
   npm install
   ```

## Setting Up the Book Structure

1. **Replace the default docs folder with your textbook structure**
   - Copy the folder structure from `project_docs/folder_structure.md`
   - Create all directories and placeholder files

2. **Create placeholder content**
   - Add "Test content" to each markdown file
   - Ensure all navigation links work

3. **Configure navigation**
   - Update `sidebars.js` to reflect your textbook structure
   - Auto-generate navigation based on folder structure

## Running the Development Server

```bash
npm run start
```

This will start a local development server and open your site in a browser at `http://localhost:3000`.

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build` directory.

## Deployment to GitHub Pages

1. **Configure deployment in `docusaurus.config.js`**
2. **Set up GitHub Actions workflow for automated deployment**
3. **Push changes to trigger the deployment workflow**

## Customization

- Modify `docusaurus.config.js` to customize site metadata
- Update CSS files in `src/css/` to apply custom styles
- Adjust sidebar configuration in `sidebars.js`