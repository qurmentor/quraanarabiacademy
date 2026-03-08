# Quraan Arabi Academy — Deployment Package

## Files Included (2 HTML files — everything you need)

  index.html                    — Main academy landing page  (fully self-contained)
  quraanic-transformation.html  — Ijazah Track page          (fully self-contained)
  README.md                     — This file

Each HTML file has ALL CSS embedded inside it.
No external CSS files. No npm. No build tools. No server required.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DEPLOYMENT — 3 OPTIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

OPTION A — Open Locally (instant, no setup)
  1. Save BOTH .html files in the SAME folder on your computer.
  2. Double-click index.html to open in Chrome, Firefox, Safari, or Edge.
  3. The "Apply for Mentorship" button will redirect to quraanic-transformation.html.

  ⚠️  IMPORTANT: Both files must be in the same folder.
      If you open index.html alone the button still works,
      but the destination page must also be in the same folder.

OPTION B — Netlify Drop (free live URL in 30 seconds)
  1. Go to https://netlify.com/drop
  2. Drag the folder containing both .html files onto the page.
  3. You get a public live URL instantly. No account required.

OPTION C — GitHub Pages (free permanent hosting)
  1. Create a free GitHub account at github.com
  2. Create a new repository (any name)
  3. Upload both .html files to the repository
  4. Go to Settings → Pages → Source: Deploy from branch → main → / (root)
  5. Site goes live at: https://yourusername.github.io/repo-name

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPLY FOR MENTORSHIP BUTTON — HOW IT WORKS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

The button in the Ijazah Track card uses a bulletproof redirect:

  <a href="quraanic-transformation.html"
     onclick="window.location.href='quraanic-transformation.html'; return false;">
    Apply for Mentorship ↗
  </a>

  - href         → standard browser navigation
  - onclick      → forces redirect in sandboxed previews and webview apps
  - return false → prevents any event interference
  - Visual design and gold hover animation are unchanged

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NAVIGATION FLOW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  index.html
    └── [Apply for Mentorship] ──→  quraanic-transformation.html
                                          └── [Back to Academy]   ──→  index.html
                                          └── [Return to Academy] ──→  index.html

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PLACEMENT FORM — STEP 1 FIELDS (updated)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Step 1 "Professional Background" now includes:

  Full Name      — text field
  Age            — number field (5–100)
  Phone Number   — telephone field
  Email Address  — email field
  Profession     — text field
  Study Goals    — textarea
  Preferred Plan — dropdown (Foundation / Fluency / Ijazah Track)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
QUICK CUSTOMISATIONS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Update WhatsApp number:
  Search both files for: wa.me/1234567890
  Replace with your actual WhatsApp number.

Update pricing:
  In index.html → find the <!-- PROGRAMS --> section
  Edit the <option> text inside each .path-select dropdown.

Connect forms to receive email submissions (Formspree — free):
  1. Sign up at formspree.io
  2. Wrap form inputs in: <form action="https://formspree.io/f/YOUR_ID" method="POST">

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
BROWSER SUPPORT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  Chrome 90+   ✓
  Firefox 88+  ✓
  Safari 14+   ✓
  Edge 90+     ✓
  Mobile iOS   ✓
  Mobile Android ✓

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Quraan Arabi Academy — The Future of Quranic Literacy.
