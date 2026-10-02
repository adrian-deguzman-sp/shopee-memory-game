# Run the game on your phone (Firebase Hosting)

The project already includes a `firebase.json` (serves the `dist` folder as a single-page app). You only need to create the Firebase project, link it, build, and deploy.

## Prerequisites

- Node.js 18+ and the project dependencies installed (`npm install`)
- A Google account

## 1. Build the app

```bash
npm run build
```

This type-checks and creates the `dist/` folder. Fix any errors it reports before continuing.

## 2. Install the Firebase CLI (once)

```bash
npm install -g firebase-tools
```

## 3. Log in

```bash
firebase login
```

A browser window opens. Sign in with your Google account.

## 4. Create a Firebase project

1. Go to <https://console.firebase.google.com> and click **Add project**.
2. Enter a name (e.g. `shopee-memory-game`). Note the generated **Project ID**; it becomes your URL.
3. You can turn Google Analytics off. Click **Create project**.

(Hosting works on the free Spark plan. No billing is needed.)

## 5. Link the folder to the project

From the project root:

```bash
firebase use --add
```

Pick your project from the list and give it the alias `default`. This creates `.firebaserc`.

> Alternative: run `firebase init hosting`. If asked, answer: public directory `dist`, single-page app **Yes**, GitHub builds **No**, and **do not** overwrite `dist/index.html` or the existing `firebase.json`.

## 6. Deploy

```bash
firebase deploy --only hosting
```

The CLI prints a **Hosting URL**, like `https://<project-id>.web.app`.

## 7. Open it on your phone

- Open the Hosting URL in your phone's browser (or send yourself the link / scan a QR code of it).
- On a phone the game fills the whole screen. The phone-frame only shows on desktop screens.
- **Optional, add to Home Screen:**
  - iPhone (Safari): Share → *Add to Home Screen*.
  - Android (Chrome): ⋮ menu → *Add to Home screen* / *Install app*.

## Updating later

```bash
npm run build
firebase deploy --only hosting
```

## Quick test without deploying (same Wi-Fi)

```bash
npm run dev -- --host
```

Vite prints a `Network:` URL (e.g. `http://192.168.1.20:5173`). Open it on your phone while it's on the same Wi-Fi as your computer. If it doesn't load, allow Node.js through Windows Firewall for private networks.

## Temporary public link with Cloudflare Tunnel (no account needed)

Works on any network (e.g. phone on mobile data) while your computer is on.

1. Install `cloudflared` once: `winget install --id Cloudflare.cloudflared` (then reopen the terminal).
2. Terminal 1: `npm run dev`
3. Terminal 2: `npx --registry=https://registry.npmjs.org/ cloudflared tunnel --url http://localhost:5173`
4. Open the printed `https://<random-words>.trycloudflare.com` URL on your phone.

The URL changes every time you restart the tunnel. Press `Ctrl+C` in each terminal to stop. `vite.config.ts` already allows `*.trycloudflare.com`.

## Troubleshooting

| Problem | Fix |
|---|---|
| `firebase` not recognized | Reopen the terminal after installing, or use `npx firebase-tools <command>` |
| Deploy says no project | Run `firebase use --add` again (step 5) |
| Blank page after deploy | Make sure you ran `npm run build` first and that `dist/index.html` exists |
| Old version still showing on phone | Hard refresh, or close and reopen the tab / home-screen app |
| Sound doesn't play | It's off by default; turn it on via **?** → *Sound* (phones also need a tap first) |
