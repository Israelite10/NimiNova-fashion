# NIM NOVA COLLECTIONS — TypeScript version

Same site as before (Men/Women catalog, WhatsApp buy buttons, Instagram/WhatsApp
contact, fully responsive, no sign-up) rebuilt with **TypeScript + Vite** instead
of a single plain HTML/JS file. Vite gives you a live-reloading dev server while
you edit, and a `build` command that outputs a plain static site at the end —
still no backend, no accounts, nothing to sign up for.

## Project structure

```
nimnova-ts/
├─ index.html          # page markup (Vite's entry point)
├─ package.json        # scripts + dependencies
├─ tsconfig.json       # TypeScript compiler settings
├─ public/
│  └─ images/          # men/, women/, hero/ placeholder photos — replace later
└─ src/
   ├─ main.ts          # all the site logic (typed)
   ├─ types.ts         # Product / Category type definitions
   ├─ style.css        # all the styling
   └─ vite-env.d.ts    # lets TypeScript understand Vite's CSS imports
```

---

## Step-by-step: setting this up in VS Code

### 1. Install Node.js (one-time, if you don't have it)
Vite needs Node.js to run.
- Go to https://nodejs.org and download the **LTS** version for your OS.
- Install it, then confirm it worked. Open a terminal (on Windows: Command
  Prompt or PowerShell; on Mac: Terminal) and run:
  ```
  node -v
  npm -v
  ```
  You should see version numbers (Node 18 or higher is fine). If you get
  "command not found," restart your computer and try again — Node's installer
  needs a fresh terminal session to register.

### 2. Get the project into a folder
- Unzip `nimnova-ts.zip` anywhere you like, e.g. your Desktop.
  You'll get a folder called `nimnova-ts`.

### 3. Open the folder in VS Code
- Open VS Code.
- Go to **File → Open Folder…** and select the `nimnova-ts` folder.
- VS Code will show the file tree on the left, matching the structure above.

### 4. Open a terminal inside VS Code
- Go to **Terminal → New Terminal** (or press `` Ctrl+` `` / `` Cmd+` ``).
  This opens a terminal already pointed at the project folder — no need to
  `cd` anywhere.

### 5. Install the project's dependencies
In that terminal, run:
```
npm install
```
This downloads Vite and TypeScript into a `node_modules` folder (you'll see
it appear in the file tree — you can ignore it, it's just library code).

### 6. Start the live dev server
```
npm run dev
```
Terminal will print something like:
```
  VITE v5.x.x  ready in 300 ms
  ➜  Local:   http://localhost:5173/
```
Hold Ctrl (Cmd on Mac) and click that link, or paste it into your browser.
Your site opens and **live-reloads** every time you save a file — try editing
some text in `src/main.ts` or `src/style.css` and watch it update instantly.

To stop the server, click into the terminal and press `Ctrl+C`.

### 7. Set your real WhatsApp number and Instagram link
Open `src/main.ts` in VS Code (click it in the file tree) and edit the top:
```ts
const WHATSAPP_NUMBER = "2348012345678"; // your number, country code, no + or leading 0
const INSTAGRAM_URL = "https://instagram.com/nimnovacollections"; // your real link
```
Save the file — if `npm run dev` is running, the browser updates automatically.

### 8. Replace the placeholder photos
Photos live in `public/images/men/`, `public/images/women/`, and
`public/images/hero/`. Drag your real photos into these folders, **keeping the
exact same filenames** (e.g. drop your photo in as `1.jpg` to replace
`public/images/men/1.jpg`) so `src/main.ts` doesn't need to change. If you'd
rather rename files, just update the matching `image:` path in the `products`
object in `src/main.ts`.

### 9. Edit products (add, remove, change price/name)
Still in `src/main.ts`, find the `products` object. Each item looks like:
```ts
{ name: "Satin Wrap Dress", price: 40000, image: "/images/women/1.jpg" },
```
Copy a line to add a product, delete a line to remove one, or edit the
`name`/`price` directly.

### 10. Build the final static site
When you're happy with everything, run:
```
npm run build
```
This produces a `dist/` folder — a plain HTML/CSS/JS site with no build tools
required to run it. That `dist` folder is what you upload to hosting (Netlify,
Vercel, GitHub Pages, or any regular web host).

To double-check the build locally before uploading it:
```
npm run preview
```
This serves the `dist` folder exactly as a real host would.

---

## How the Buy button works
Each "Buy" button opens a WhatsApp chat (`wa.me` link) with a pre-filled
message containing the product name and price, e.g.:

> Hi NIM NOVA COLLECTIONS, I'd like to buy: Satin Wrap Dress
> Price: ₦40,000. Please confirm availability and how to pay.

Note: WhatsApp's click-to-chat links can only pre-fill **text**, not attach a
photo automatically — the customer sees the product photo on the site right
before clicking Buy, so it's still clear what they're asking about.

## No sign-up, no backend
This is a static site: everything happens in the browser. There's no login,
no database, and nothing to sign up for — the only "backend" is WhatsApp
itself, which is where the actual conversation and payment happen.
