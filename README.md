# SpinTech Cyber website

Static site (HTML, CSS, JS). No build step, no backend, no dependencies.

```
index.html          SpinTech Cyber home (services, about, contact)
web-studio.html     Msingi Web Studio page, served at /web-studio
css/base.css        shared reset and layout helpers
css/spintech.css    SpinTech black / yellow / gold theme
css/studio.css      Msingi Web Studio theme (separate identity)
js/config.js        EDIT THIS: numbers, address, hours, services, prices, portfolio
js/main.js          renders services, WhatsApp links, nav, year
assets/logo.png     official SpinTech logo (unmodified)
vercel.json         enables the clean /web-studio URL
```

## Run locally
Just double-click index.html to preview. (Optional: `npx serve .` to test the clean /web-studio URL.)

## Upload to GitHub
1. Create an empty repository on github.com (e.g. `spintech-cyber`).
2. In this folder:
```
git init
git add .
git commit -m "SpinTech Cyber website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/spintech-cyber.git
git push -u origin main
```

## Deploy on Vercel
1. Sign in at vercel.com with GitHub, click **Add New > Project**, import the repo.
2. Framework preset: **Other**. Leave build command and output directory empty. Click **Deploy**.
3. Later: Project > Settings > Domains to attach a custom domain.

## Before public launch
Contact details, prices and the first portfolio project are already set in `js/config.js`.
- [ ] Confirm the final list of SpinTech services (edit or delete cards in `config.js`)
- [ ] Add exact opening and closing times if wanted (`hours`)
- [ ] Add more Msingi portfolio projects as they are completed
- [ ] Test both WhatsApp buttons, the phone link, email link and map on a phone
