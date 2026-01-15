# GitHub Actions Deployment Workflows

This repository contains automated deployment workflows for both the current Vite application and the future Next.js application.

## Workflows

### 1. Vite Deployment (vite-deploy.yml)
**Status:** ✅ Active - For current blue-theme branch

**Triggers:**
- Push to `blue-theme` or `main` branches
- Pull requests to `blue-theme` or `main` branches

**Jobs:**
- **build-and-deploy**: Builds the Vite app and uploads artifacts
- **lint**: Runs ESLint and TypeScript checks

**Current Deployment:**
The workflow builds the project but doesn't auto-deploy. Uncomment and configure deployment options in the workflow file as needed.

### 2. Next.js Deployment (nextjs-deploy.yml)
**Status:** 🔄 Ready - For after Next.js migration

**Triggers:**
- Push to `main` or `nextjs-migration` branches
- Pull requests to `main` branch

**Jobs:**
- **build-and-test**: Lints, type checks, and builds the Next.js app
- **deploy-vercel**: Deploys to Vercel production (main branch only)
- **deploy-preview**: Creates Vercel preview deployments (pull requests)
- **deploy-server**: Alternative deployment to self-hosted server

## Setup Instructions

### For Vite Deployment (Current)

1. **GitHub Pages Deployment** (Optional):
   - Go to repository Settings → Pages
   - Source: GitHub Actions
   - No secrets needed

2. **Custom Server Deployment** (Optional):
   Uncomment the SSH deploy section in `vite-deploy.yml` and add these secrets:
   - `SSH_PRIVATE_KEY`: Your SSH private key
   - `REMOTE_HOST`: Your server hostname
   - `REMOTE_USER`: SSH username
   - `REMOTE_TARGET`: Deployment directory path

### For Next.js Deployment (After Migration)

#### Option 1: Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login and link project:
   ```bash
   vercel login
   vercel link
   ```

3. Add secrets to GitHub repository:
   - Go to Settings → Secrets and variables → Actions
   - Click "New repository secret"
   - Add the following secrets:
     - `VERCEL_TOKEN`: Get from https://vercel.com/account/tokens
     - `VERCEL_ORG_ID`: Found in `.vercel/project.json` after linking
     - `VERCEL_PROJECT_ID`: Found in `.vercel/project.json` after linking

4. Push to `main` branch to trigger production deployment

#### Option 2: Self-Hosted Server

1. Configure SSH secrets (same as Vite deployment above)

2. Ensure your server has:
   - Node.js 20+ installed
   - PM2 or similar process manager
   - Proper firewall and security settings

3. Update `next.config.js` for standalone output:
   ```javascript
   module.exports = {
     output: 'standalone',
   }
   ```

## Branch Strategy

- **`blue-theme`**: Current development branch (Vite app)
- **`main`**: Production branch
- **`vite-backup`**: Backup of original Vite setup
- **`nextjs-migration`**: Branch for Next.js migration work

## Workflow Status

Check workflow status at:
```
https://github.com/Azure12355/ai-giant/actions
```

## Testing Locally

Before pushing, test builds locally:

**For Vite:**
```bash
npm run build
npm run preview
```

**For Next.js (after migration):**
```bash
npm run build
npm run start
```

## Troubleshooting

### Build Failures
- Check the Actions tab for detailed logs
- Ensure all dependencies are in `package.json`
- Verify environment variables are set correctly

### Deployment Failures
- Verify secrets are correctly configured
- Check server credentials
- Ensure server has necessary permissions

### Vercel Deployment Issues
- Confirm project is linked: `vercel link`
- Check token permissions
- Verify org and project IDs

## Migration to Next.js

When ready to migrate:

1. Create `nextjs-migration` branch:
   ```bash
   git checkout -b nextjs-migration
   ```

2. Follow migration plan in `/Users/lytton/.claude/plans/async-growing-flamingo.md`

3. Test Next.js workflow in preview deployments

4. Merge to `main` when ready for production

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Vercel Deployment Guide](https://vercel.com/docs/deployments/overview)
- [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
