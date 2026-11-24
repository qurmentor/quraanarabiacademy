# Quraan Arabi Academy — Website

Static site (no build step).

```
index.html                    Main landing page + 6-step placement form
quraanic-transformation.html  Ijazah Track page
legal.html                    Terms / Privacy
css/style.css                 All styles
js/main.js                    Page logic (form, pricing, referral, timezone)
js/firebase-init.js           Firebase SDK + config (Firestore/Storage)
assets/                       founder photo + logo files
firestore.rules               Security rules to paste in Firebase Console
.nojekyll                     Tells GitHub Pages to serve files as-is
```

## Deploy on GitHub Pages
1. Upload the **contents** of this folder to the repo root (index.html must be at the root).
2. Settings → Pages → Deploy from branch → `main` → `/ (root)`.
3. Firebase Console → Authentication → Settings → Authorized domains → add `<username>.github.io`.

## Deploy elsewhere
Netlify / Cloudflare Pages / Vercel: drag the folder or connect the repo. Build command: none. Output directory: `/`.

## Before going live
- Replace `wa.me/1234567890` with the real WhatsApp number if still present.
- Paste `firestore.rules` into Firebase → Firestore → Rules.
- Firebase web config in `js/firebase-init.js` is public by design; security comes from the rules.
