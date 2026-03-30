# GitHub Pages Deployment Patterns

## Standard GitHub Pages Workflow

### Configuration Pattern
```javascript
// docusaurus.config.js for GitHub Pages
const config = {
  title: 'My Site',
  url: 'https://username.github.io',
  baseUrl: '/repo-name/',
  organizationName: 'username',
  projectName: 'repo-name',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,
};
```

### Workflow Pattern
```yaml
name: Deploy to GitHub Pages

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
      - name: Deploy
        if: github.ref == 'refs/heads/main'
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

## Custom Domain Setup

### CNAME File
Create `static/CNAME`:
```
your-custom-domain.com
```

### DNS Configuration
Point your domain's DNS to:
- `username.github.io` (CNAME record)
- Or GitHub's IP addresses (A records)

### Docusaurus Config
```javascript
{
  url: 'https://your-custom-domain.com',
  baseUrl: '/',
  // ... rest of config
}
```

## Common Configuration Issues

### Issue: Site appears at wrong URL
**Cause:** Incorrect `baseUrl` or `url`
**Solution:**
- For `https://username.github.io/repo-name/` → `baseUrl: '/repo-name/'`
- For custom domain → `baseUrl: '/'`

### Issue: Assets not loading (404 errors)
**Cause:** `baseUrl` mismatch
**Solution:** Verify `baseUrl` matches deployment path

### Issue: Deployment branch not found
**Cause:** `deploymentBranch` doesn't exist
**Solution:** Create the branch or use existing one

### Issue: Workflow not triggering
**Cause:** Branch name mismatch or permissions
**Solution:** Verify branch name in workflow matches actual branch

## Organization vs User Pages

### User/Organization Pages
- Repository name: `username.github.io`
- URL: `https://username.github.io`
- `baseUrl: '/'`
- Deploy from `main` or `master` branch

### Project Pages
- Repository name: any name
- URL: `https://username.github.io/repo-name`
- `baseUrl: '/repo-name/'`
- Deploy from `gh-pages` branch

## Troubleshooting Checklist

- [ ] Repository is public (or GitHub Pages enabled for private)
- [ ] `organizationName` matches GitHub username/org
- [ ] `projectName` matches repository name
- [ ] `baseUrl` matches deployment path
- [ ] `deploymentBranch` exists and is correct
- [ ] GitHub Actions workflow has correct permissions
- [ ] `GITHUB_TOKEN` has write access
- [ ] Build completes successfully locally
- [ ] `build/` or output directory is correct
- [ ] No 404 errors in browser console
