# PVRS template reproduction

This project is a React + Vite reproduction of the Auralis (Framer) template.

Quick start

1. Install dependencies

```bash
npm install
```

2. Run dev server

```bash
npm run dev
```

3. Open http://localhost:5173/ in your browser

What's included

- `src/components/` - Nav, Hero, Services, Process, Industries, Pricing, Team, Reviews, Contact, FAQ, Footer
- `src/styles.css` - Global styles, responsive layout, and simple animations
- Uses Google Inter font and CDN images from the original template

Next steps (optional)

- Replace placeholder CDN images with local assets
- Improve visuals to be pixel-perfect
- Add form backend for contact submissions
- Add tests and CI

If you'd like, I can continue polishing spacing, exporting assets locally, or preparing a production build.

Serverless contact function

This project includes a mock Netlify serverless function at `netlify/functions/contact.js`. It accepts POST requests with JSON body `{ first, last, email, phone, message }` and returns a 200 response. Integrate with an email provider or database inside this function to make it production-ready.

To test the function locally, install the Netlify CLI and run:

```bash
npm install -g netlify-cli
netlify dev
```

The contact form in the site POSTS to `/.netlify/functions/contact` when submitted.

SendGrid integration

This project can send real emails via SendGrid. Set these environment variables before deploying or when running `netlify dev`:

- `SENDGRID_API_KEY` — your SendGrid API key
- `SENDGRID_TO` — destination email address that receives messages from the site
- `SENDGRID_FROM` — optional sender address (defaults to `SENDGRID_TO`)

Example (Netlify UI or `.env` for local dev):

```
SENDGRID_API_KEY=SG.xxxxx
SENDGRID_TO=hello@yourcompany.com
SENDGRID_FROM=notifications@yourcompany.com
```

After setting those, the contact form will deliver real emails using SendGrid.
