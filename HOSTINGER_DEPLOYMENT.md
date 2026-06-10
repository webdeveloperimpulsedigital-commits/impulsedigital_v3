# Hostinger Next.js Standalone Deployment Guide

This guide explains how to deploy your compiled Next.js standalone application to Hostinger staging domain (`https://lightcyan-pig-140007.hostingersite.com/`).

---

## 1. Prepare Your Deployment Package
When Next.js builds in `standalone` mode, it creates a self-contained folder `.next/standalone/` which includes all necessary files and dependencies.

For a complete Hostinger Node.js deploy, you need to bundle the following files:

1. **Standalone Files**:
   Copy all contents of the `.next/standalone/` directory:
   - `server.js` (Application entrypoint)
   - `.env.production`
   - `package.json`
   - `node_modules/`
   - `.next/`

2. **Public Assets**:
   Copy the root `public/` directory and place it **inside** your standalone directory (so it sits next to `server.js`).

3. **Static CSS/JS Files**:
   Copy the root `.next/static/` directory and place it **inside** the standalone `.next/` directory (so the path is `.next/static/` inside your upload folder).

### Summary of what your uploaded folder must look like:
```text
/ (Your Hostinger Node.js Application Root)
├── .env.production
├── package.json
├── server.js
├── node_modules/
├── public/                <-- Copied from root public/ folder
└── .next/
    ├── static/            <-- Copied from root .next/static/ folder
    └── ... (other files from .next/standalone/.next/)
```

*Tip: You can select these files in your root workspace, zip them, and upload them directly via Hostinger's hPanel File Manager.*

---

## 2. Configure Hostinger Node.js hPanel
Log into your Hostinger Dashboard and configure the Node.js section:

1. **Go to Node.js App Configuration**:
   - Locate the **Node.js** icon in your hPanel.
2. **Setup Application Details**:
   - **Node.js Version**: Select **Node.js 20.x** (or the latest LTS version).
   - **Staging Domain**: Select `lightcyan-pig-140007.hostingersite.com`.
   - **Application Root**: Set this to the directory where you uploaded the package files (e.g., `/public_html` or a custom sub-directory).
   - **Document Root**: Keep this as public or `/public_html` as per Hostinger's standard.
   - **Application Startup File**: Set this to **`server.js`** (the standalone entry file).
3. **Environment Variables**:
   Under the environment variables settings in Hostinger, add:
   - `PORT`: `3000` (or the port Hostinger specifies)
   - `NODE_ENV`: `production`
4. **Save and Start**:
   - Click **Save/Update** and click **Start App**.

---

## 3. Restructuring for Live Domain Setup
Once you have tested the functionality on the temporary domain (`lightcyan-pig-140007.hostingersite.com`), you can switch the website to your live domain (`http://theimpulsedigital.com/`) with these simple steps:

1. **Update next.config.ts**:
   In [next.config.ts](file:///g:/ID-website-v3/next.config.ts), verify that the live domain is allowed in `remotePatterns`:
   ```typescript
   remotePatterns: [
     { protocol: 'https', hostname: 'www.theimpulsedigital.com' },
     { protocol: 'http', hostname: 'theimpulsedigital.com' },
     ...
   ]
   ```
2. **Update Environment Variable**:
   In your Hostinger Node.js app dashboard, update the domain settings to map the Node.js app to `theimpulsedigital.com`.
3. **Re-run Build**:
   When compiling for production, set `.env.production` to use `NEXT_PUBLIC_SITE_URL=https://theimpulsedigital.com` and run the build command again before pushing/deploying.
