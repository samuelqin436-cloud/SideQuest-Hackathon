# Sidequest

A small Kensington discovery guide built with plain JavaScript and CSS. It runs without an account or API key using a curated 45-place demo catalog: 26 cafés and coffee stops, 14 museums and galleries, and five other local discoveries. Counts, ratings and visitor excerpts in Demo Mode are illustrative, not current Google data, and the list is not an exhaustive business register.

## Run locally

Use Node.js 20 or later:

```sh
node server.mjs
```

Then open [http://localhost:4173](http://localhost:4173). The server has no package dependencies. If npm is available, `npm run dev` starts the same server and `npm run build` checks the app script syntax.

## Optional live Google Places data

1. Enable Places API (New) in a Google Maps Platform project.
2. Copy `.env.example` to `.env.local` and add `GOOGLE_MAPS_API_KEY=your_key`.
3. Restrict the key to your local or deployed HTTP referrers and the Places API.
4. Restart the server.

With a key configured, the first screen loads live parks and gardens with Google Places photos; mood changes and searches refresh the real-place feed. Photo-author attributions are shown where Google provides them. The app requests ratings, Maps URLs, price levels, and current opening status, and fetches review snippets only when a place detail is opened. Results load 20 at a time; Text Search offers further pages on demand. Places results are not a complete register of every café. Live walk times and distances are estimates. The walk tray starts in Kensington; **Use my location** asks the browser for your current location and uses it as the route origin when you allow it. Google Maps opens only when you choose the route. The daily weather panel shows Open-Meteo current conditions, high/low, rain probability, sunrise/sunset and an hourly outlook without an API key; rain nudges indoor places up and clear skies nudge outdoor places up. No credentials are stored in source control; `.env.local` is ignored.

Without a key, the app uses static demo content. Demo ratings, review snippets, and walking estimates are illustrative and are labelled as sample content in the interface. Visible cards search Wikimedia Commons for place-specific photos when available and show the linked photographer/license credit; images with no suitable result keep the editorial fallback. Every card image links directly to that place's Google Maps listing.

## Day budget

The day planner lets visitors set a per-person budget, pick walking, bus, or Tube travel, and see a timed, item-by-item estimate for the selected day thread or saved walk. When Google Places supplies `priceLevel`, Sidequest turns that relative band into a clearly labelled spending range; it is not an exact menu price or ticket quote. Places known to have free general entry are listed as free, and unknown ticket prices are excluded from the subtotal and called out for checking. Travel choices use central-London adult estimates (walk £0, bus about £3.50 return, Zone 1 Tube about £6.20 return); actual fares depend on the journey, time and passenger, so the planner links to TfL's fare finder.
