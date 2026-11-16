<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/d18abedc-6f48-44c7-8c20-5e1ed991e173

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Publish with GitHub Pages

Every push to `main` builds the site and deploys it to GitHub Pages. The custom
domain is configured as `edificeconsultantbd.com` in `public/CNAME`. Add the
GitHub Pages DNS records at your domain registrar and enable GitHub Pages with
the GitHub Actions source in the repository settings.
