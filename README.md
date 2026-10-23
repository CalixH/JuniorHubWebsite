# Junior Hub website

Marketing site for Junior Hub Child Care & Learning Centre (www.juniorhub.ca).
Built with [Astro](https://astro.build) and hosted on Netlify.

## Develop

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # outputs to dist/
```

## Where things live

| To change...                              | Edit...                                   |
| ----------------------------------------- | ----------------------------------------- |
| Phone, email, social links, nav menu      | `src/data/site.ts`                        |
| Header / footer markup                    | `src/components/Header.astro`, `Footer.astro` |
| `<head>`, page shell, analytics           | `src/layouts/Layout.astro`                |
| A page's content                          | `src/pages/<page>.astro`                  |
| Photos                                    | `public/images/` then `npm run optimize-images` |

Page file name = URL: `src/pages/about.astro` is served at `/about`.
Old `.html` URLs redirect to the clean URL (see `netlify.toml`).

## Forms

The tour, waitlist and summer camp forms use [Netlify Forms](https://docs.netlify.com/forms/setup/):
they are plain `<form netlify>` elements, detected at build time. Submissions appear in the Netlify
dashboard under Forms, and email notifications are configured there. After submitting, visitors
land on `/thanks`.

## Analytics

Off by default. To enable Google Analytics 4, set `PUBLIC_GA_ID` (e.g. `G-XXXXXXXXXX`) in Netlify's
environment variables. The previous `UA-` tag stopped collecting data when Universal Analytics shut down.

## Credits

Based on the "Alpha" template by [HTML5 UP](https://html5up.net) (CCA 3.0). Icons by Font Awesome.
Template Sass sources are kept in `legacy/sass` for reference.
