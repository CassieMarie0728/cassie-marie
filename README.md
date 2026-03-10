# cassie-marie — GitHub Pages only

This repo has been stripped down to **plain static files for GitHub Pages**.

## What got removed
- Netlify-specific deployment
- Eleventy build tooling
- HubPress admin/CMS
- Source/build duplication

## What remains
- A ready-to-publish static site in the **repo root**
- `.nojekyll` for GitHub Pages
- `CNAME` for the custom domain (`nobullshitgrief.com`).

## Publish on GitHub Pages
In GitHub:
1. Open **Settings**
2. Open **Pages**
3. Set **Source** = Deploy from a branch
4. Set **Branch** = `main`
5. Set **Folder** = `/ (root)`
6. Save

## Important
This is now **just static hosting**. There is no admin login anymore.
To edit the site, change the HTML/CSS/files directly in the repo and commit.

## Contact form
GitHub Pages does not process server-side forms.
The contact form was converted to a `mailto:` fallback.
If you want a real form later, connect it to a form backend.

## Base URL used
`https://nobullshitgrief.com`
