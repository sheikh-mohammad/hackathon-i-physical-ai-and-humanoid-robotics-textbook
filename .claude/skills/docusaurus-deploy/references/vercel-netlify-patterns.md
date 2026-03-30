# Vercel and Netlify Deployment Patterns

## Vercel Deployment

### Configuration Pattern
```javascript
// docusaurus.config.js for Vercel
const config = {
  title: 'My Site',
  url: 'https://your-domain.vercel.app',
  baseUrl: '/',
  // Vercel doesn't need organizationName/projectName
};
```

### Vercel Configuration File
Create `vercel.json`:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "build",
  "framework": "docusaurus"
}
```

### GitHub Actions for Vercel
```yaml
name: Deploy to Vercel

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          scope: ${{ secrets.VERCEL_ORG_ID }}
```

## Netlify Deployment

### Configuration Pattern
```javascript
// docusaurus.config.js for Netlify
const config = {
  title: 'My Site',
  url: 'https://your-site.netlify.app',
  baseUrl: '/',
};
```

### Netlify Configuration File
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### GitHub Actions for Netlify
```yaml
name: Deploy to Netlify

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
      - uses: nwtgck/actions-netlify@v2.0
        with:
          publish-dir: './build'
          production-branch: main
          github-token: ${{ secrets.GITHUB_TOKEN }}
          deploy-message: "Deploy from GitHub Actions"
          enable-pull-request-comment: true
          enable-commit-comment: true
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## Platform Comparison

| Feature | GitHub Pages | Vercel | Netlify |
|---------|--------------|--------|---------|
| Cost | Free | Free tier | Free tier |
| Custom Domain | Yes | Yes | Yes |
| SSL/HTTPS | Yes | Yes | Yes |
| Preview Deploys | No | Yes | Yes |
| Build Time | ~2 min | ~1 min | ~1 min |
| Serverless Functions | No | Yes | Yes |
| Environment Variables | Limited | Yes | Yes |
| Setup Complexity | Medium | Low | Low |

## Migration Paths

### GitHub Pages → Vercel
1. Connect Vercel to GitHub repository
2. Update `docusaurus.config.js` (remove GitHub Pages settings)
3. Create `vercel.json` configuration
4. Set environment variables in Vercel dashboard
5. Deploy and verify
6. Update DNS if using custom domain

### GitHub Pages → Netlify
1. Connect Netlify to GitHub repository
2. Update `docusaurus.config.js` (remove GitHub Pages settings)
3. Create `netlify.toml` configuration
4. Set environment variables in Netlify dashboard
5. Deploy and verify
6. Update DNS if using custom domain

### Vercel ↔ Netlify
1. Both support direct GitHub integration
2. Update configuration files
3. Set environment variables in new platform
4. Deploy and verify
5. Update DNS if needed
