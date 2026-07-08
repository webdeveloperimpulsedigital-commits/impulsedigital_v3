# AE (UAE) WordPress Blog — Setup Guide

This guide explains how to install a separate WordPress for the AE blog
so it works as the data source for `https://www.theimpulsedigital.com/ae/blog/`.

---

## How It Works

```
[WordPress on your server]                [Next.js on theimpulsedigital.com]
  impulsedigital.co.in/ae-web-blog/   →  REST API fetches posts
  wp-json/wp/v2                        →  Renders at /ae/blog/
                                         Individual posts at /ae/blog/[slug]/
```

The Next.js app fetches posts from WordPress REST API and renders them
on `theimpulsedigital.com`. **WordPress does NOT need to be publicly browsable
by visitors** — only the REST API endpoint needs to work.

---

## Option A — Install on `impulsedigital.co.in` (Recommended)

This mirrors how the India blog works (`impulsedigital.co.in/ID-web-blog/`).

### Step 1: Upload WordPress to Hostinger (impulsedigital.co.in)

1. Download latest WordPress from [wordpress.org](https://wordpress.org/download/).
2. Log into **Hostinger hPanel** for `impulsedigital.co.in`.
3. Go to **File Manager** → navigate to the root of `impulsedigital.co.in`.
4. Create a new folder named `ae-web-blog`.
5. Upload all contents of the extracted WordPress zip into `ae-web-blog/`.

### Step 2: Create MySQL Database

1. In hPanel, search **MySQL Databases**.
2. Create a new database:
   - **Database Name**: e.g., `u123456789_ae_blog`
   - **Database User**: e.g., `u123456789_ae_user`
   - **Password**: (use a strong password)

### Step 3: Run the WordPress Install Wizard

1. Open: `https://impulsedigital.co.in/ae-web-blog/`
2. Follow the setup: enter database name, user, password, host (`localhost`).
3. Set your WordPress admin username & password.

### Step 4: Configure WordPress Settings

In WordPress Admin → **Settings → General**:
- **WordPress Address (URL)**: `https://impulsedigital.co.in/ae-web-blog`
- **Site Address (URL)**: `https://impulsedigital.co.in/ae-web-blog`

In WordPress Admin → **Settings → Permalinks**:
- Select **Post name** (`/%postname%/`) — required for clean slugs.

### Step 5: Set the `.htaccess` for WordPress

Inside `ae-web-blog/`, create/update `.htaccess`:

```apache
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
RewriteBase /ae-web-blog/
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /ae-web-blog/index.php [L]
</IfModule>
# END WordPress
```

### Step 6: Verify REST API Works

Open in your browser:
```
https://impulsedigital.co.in/ae-web-blog/wp-json/wp/v2/posts?per_page=1
```
You should see a JSON response. If you do, the REST API is working.

---

## Option B — Install on `theimpulsedigital.com` Hostinger Server

If you prefer to host WordPress on the same server as the Next.js app:

1. In Hostinger File Manager for `theimpulsedigital.com`, go to `public/` folder.
2. Create folder `ae-blog/` inside `public/`.
3. Upload WordPress into `public/ae-blog/`.
4. Set WordPress URL to: `https://www.theimpulsedigital.com/ae-blog`
5. REST API would be at: `https://www.theimpulsedigital.com/ae-blog/wp-json/wp/v2`
6. Add `.htaccess` inside `public/ae-blog/`:

```apache
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
RewriteBase /ae-blog/
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /ae-blog/index.php [L]
</IfModule>
# END WordPress
```

---

## Step 7: Connect WordPress to Next.js

After WordPress is installed, update the environment variable:

### In Hostinger hPanel (for theimpulsedigital.com)

1. Go to **hPanel -> Node.js** -> your app -> **Environment Variables**.
2. Add/update:
   ```
   AE_WP_API = https://impulsedigital.co.in/ae-web-blog/wp-json/wp/v2
   ```
   *(Replace with your actual WordPress URL + `/wp-json/wp/v2`)*
3. Click **Save** and **Restart** the Node.js app.
4. Redeploy the Next.js app (push to Git).

### In your local `.env.local` (for development)

```env
AE_WP_API=https://impulsedigital.co.in/ae-web-blog/wp-json/wp/v2
```

---

## Step 8: Post Your First AE Blog Article

1. Log into your AE WordPress admin: `https://impulsedigital.co.in/ae-web-blog/wp-admin/`
2. Create a post under **Posts -> Add New**.
3. Publish it.
4. Verify it appears at: `https://www.theimpulsedigital.com/ae/blog/`

---

## Git / Deployment Notes

- The `ae-web-blog/` or `ae-blog/` folder on the server is **NOT tracked by Git**.
- The Next.js code changes (`lib/wordpress-ae.ts`, `app/ae/blog/`) ARE tracked and deployed via Git.
- The `AE_WP_API` env variable is set in Hostinger hPanel.

---

## Summary of What Is Already Done (Next.js Code)

| File | Status |
|------|--------|
| `lib/wordpress-ae.ts` | Created — AE WordPress REST API helpers |
| `app/ae/blog/layout.tsx` | Created — Blog layout with blog.css |
| `app/ae/blog/page.tsx` | Created — Blog listing page |
| `app/ae/blog/[slug]/page.tsx` | Created — Individual post pages |
| `app/sitemap.ts` | Updated — Includes `/ae/blog/` routes |
| `next.config.ts` | Updated — AE sitemap rewrite added |

**You just need to**: Install WordPress -> Set `AE_WP_API` env var -> Redeploy.
