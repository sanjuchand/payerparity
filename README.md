# PayerParity

Marketing website for PayerParity — payer-sourced negotiation leverage for hospitals.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy on Vercel

1. Import this repository in [Vercel](https://vercel.com/new).
2. Deploy — Vercel auto-detects Next.js at the repo root.
3. No root directory override needed.

## Contact form (Formspree)

1. Create a form at [formspree.io](https://formspree.io) with notification email `payerparity@gmail.com`
2. Copy the form ID from the endpoint URL (`https://formspree.io/f/YOUR_FORM_ID`)
3. Add to Vercel → Project → Settings → Environment Variables:
   - `NEXT_PUBLIC_FORMSPREE_FORM_ID` = your form ID
4. Redeploy

For local testing, copy `.env.example` to `.env.local` and add your form ID.

## Blog posts

Add markdown files to `content/blog/` with frontmatter (`title`, `description`, `date`, `author`, `published`).

## Python stub

Optional Python scaffold lives in `python/` and is not part of the Vercel deployment.
