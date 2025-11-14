# Le Saphir Bleu — QR Restaurant Menu

Small responsive QR menu built with React + Vite + TailwindCSS.

## Quick start

Prerequisites:

- Node.js (LTS recommended)
- npm (or yarn)

Install and run in development:

```powershell
npm ci
npm run dev
```

Build for production:

```powershell
npm run build
# preview the built site locally
npm run preview
```

## What to commit

- Commit the source: `src/`, `public/`, `index.html`, `package.json`, `package-lock.json`, `tailwind.config.cjs`, `postcss.config.cjs`, and `README.md`.
- Include `public/assets/` (image assets) so the site can build properly.

Do NOT commit generated files in general. Add these to `.gitignore`:

```text
node_modules/
dist/
.env
.DS_Store
```

If you need to publish to `gh-pages` or a static host without build-step access, you may choose to push `dist/` to a branch (not `main`).

## Deployment

- Netlify / Vercel / GitHub Actions: set build command `npm ci && npm run build` and publish directory `dist`.
- For quick local testing on a phone, run `npm run dev` and open the machine's LAN IP:Vite port or use an ngrok/tunnel service.

## Where to edit the menu

- Menu data is currently stored in `src/pages/MenuPage.jsx` under the `menuData` object. You can edit categories and items there.

## Notes

- Search is accent- and case-insensitive.
- Items in a category are displayed sorted by price (ascending).
- The large category cover image appears in the header; small duplicate thumbnails and duplicate titles were removed.

If you want, I can:
- add a `.gitignore` and commit it for you
- add a GitHub Action to build on push
- move `menuData` to a separate `src/data` file for cleanliness

---
Generated README — adjust as desired.# Restaurant Card Prototype

This is a small prototype using Vite + React + Tailwind CSS that demonstrates an improved UI/UX for a restaurant "link-in-bio" style card (inspired by your screenshot).

How to run (Windows PowerShell):

```powershell
# Install dependencies
npm install

# Run development server
npm run dev
```

Open the URL shown by Vite (usually http://localhost:5173) in your browser.

Notes:
- Images are simple placeholders in `public/assets`.
- The prototype focuses on responsive layout, accessible buttons, and polished visuals.
