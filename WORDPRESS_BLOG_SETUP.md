# WordPress Blog Setup Guide (Hostinger + Next.js Subfolder)

This guide explains how to install and run a WordPress blog inside a `/blogs/` subdirectory of your Next.js application on Hostinger.

---

## 1. Directory Structure

For Hostinger to serve WordPress correctly, the WordPress installation must be placed inside the `public/` directory of your deployed Node.js application root.

Your server directory structure should look like this:

```text
/home/username/public_html/ (Your Node.js Application Root)
├── server.js
├── package.json
├── node_modules/
├── .next/
└── public/                 <-- Main Document Root mapped by Apache
    ├── .htaccess           <-- Main Next.js .htaccess file
    ├── css/
    ├── js/
    └── blogs/              <-- CREATE THIS FOLDER & PLACE WORDPRESS HERE
        ├── wp-admin/
        ├── wp-content/
        ├── wp-includes/
        ├── wp-config.php
        ├── index.php       <-- WordPress Entrypoint
        └── .htaccess       <-- WordPress Sub-folder rewrite rules
```

---

## 2. Step-by-Step Installation

### Step 2.1: Download WordPress
1. Download the latest version of WordPress from [wordpress.org](https://wordpress.org/download/).
2. Extract the zip file locally. You will get a folder named `wordpress`.

### Step 2.2: Upload to Hostinger
1. Log into your Hostinger **hPanel**.
2. Go to **File Manager** and navigate to your application root (e.g., `/public_html`).
3. Open the `public/` folder.
4. Create a new folder named `blogs` inside `public/`.
5. Upload all the contents of the extracted `wordpress` folder *directly* into `public/blogs/`.

### Step 2.3: Create MySQL Database
1. In the Hostinger hPanel, search for **MySQL Databases**.
2. Create a new database:
   - **Database Name**: e.g., `u123456789_blogs`
   - **Database User**: e.g., `u123456789_blogsuser`
   - **Password**: (Generate a secure password)
3. Write down these details; you will need them during the WordPress setup.

### Step 2.4: Run the WordPress Installation Wizard
1. Open your web browser and navigate to:
   `https://lightcyan-pig-140007.hostingersite.com/blogs/`
   *(Once your live domain is set up, this will be `https://www.theimpulsedigital.com/blogs/`)*.
2. Select your language and click **Continue**.
3. Enter your MySQL database details (Host, Database Name, User, and Password) when prompted.
4. Complete the installation by creating your WordPress admin username and password.

---

## 3. Apache `.htaccess` Routing Configuration

To make sure Next.js and WordPress do not conflict, we have already updated the main `.htaccess` routing rules.

### Main Next.js `.htaccess` (`public/.htaccess`)
We replaced the React SPA fallback rules with a clean static fallback rule:
```apache
  # If the requested path is a real file or directory in public, serve it directly
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule . - [L]
```
Since `/blogs/` is a physical directory inside the `public/` folder, Apache matches `RewriteCond %{REQUEST_FILENAME} -d` and skips forwarding it to Next.js, allowing WordPress to execute natively.

### WordPress Sub-directory `.htaccess` (`public/blogs/.htaccess`)
Inside the `public/blogs/` directory, create or modify the `.htaccess` file to handle WordPress pretty permalinks (e.g., `https://domain.com/blogs/sample-post/`):

```apache
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteRule .* - [E=HTTP_AUTHORIZATION:%{HTTP:Authorization}]
RewriteBase /blogs/
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /blogs/index.php [L]
</IfModule>
# END WordPress
```

---

## 4. Git Considerations

* **Excluded from Git**: The `blog/` and `blogs/` folders are explicitly excluded in your root [.gitignore](file:///g:/ID-website-v3/.gitignore) and `dist/.gitignore`. This ensures that your Git pushes and GitHub Actions deployments will **never** overwrite or delete your WordPress files, database connections, or uploaded media (`wp-content/uploads/`).
