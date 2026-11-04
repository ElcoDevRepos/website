/**
 * Case studies for Elco Dev's own products. Every number here is either public
 * (shown on the product's own site or store listing) or Elco Dev's own product
 * data. No client information appears in this file.
 */

export type CaseStudy = {
  /** Matches a Project slug in lib/site.ts; the case study renders on /work/<slug>. */
  slug: string;
  headline: string;
  /** One sentence for cards and meta descriptions. */
  teaser: string;
  challenge: string;
  approach: { title: string; body: string }[];
  outcome: string[];
  facts: { value: string; label: string }[];
  /** What a client hiring Elco Dev gets from this experience. */
  forClients: string;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "crohns-food-tracker",
    headline: "Nine years of a health app: from a patient's own diary to a two-platform subscription product",
    teaser: "A food and symptom diary on the App Store since 2017, rebuilt around the first meal a new user logs.",
    challenge:
      "Crohn's Food Tracker started as a diary its developer, an IBD patient, needed himself. Nine years later it is a subscription app on iOS and Android with a web site, clinician pages and a trigger-food report. The hard part of a health tracker is not features. It is getting a tired, unwell person to log their first meal, then their second, long enough for the data to say something useful.",
    approach: [
      {
        title: "Measure the first session, not the download",
        body: "We traced a 30-day cohort of new users step by step. Almost all of them finished onboarding, but more than four in ten never saved a first meal. That made the empty first screen, not the paywall or crashes, the problem to fix.",
      },
      {
        title: "Make the first log one tap",
        body: "New users now see their own problem foods as tappable chips the moment they open Log Meal, with the details tucked away. Each step of that first log is tracked so the next change is decided by data.",
      },
      {
        title: "Trials that follow the real store terms",
        body: "Paywall copy reads the live price and trial length from the stores instead of hard-coded text, and trial reminders follow each person's actual trial window, with their own logging stats in the message.",
      },
      {
        title: "Store compliance as a routine",
        body: "In-app purchases, age ratings, review notes and localized release notes are scripted, so App Store and Google Play reviews are a checklist instead of a scramble.",
      },
    ],
    outcome: [
      "Live on the App Store since 2017 and on Google Play",
      "More than 1,600 people tracking, as counted in the app (shown on crohnsfoodtracker.app)",
      "Monthly, semiannual, annual and lifetime plans, plus one-off doctor reports",
      "Google Play listing in 10 languages; release notes in 11",
      "Rated 5.0 on Google Play",
    ],
    facts: [
      { value: "2017", label: "On the App Store since" },
      { value: "1,600+", label: "People tracking (in-app count)" },
      { value: "2 taps", label: "To log a meal" },
      { value: "11", label: "Release-note languages" },
    ],
    forClients:
      "If you are building a health, habit or tracking app, we know where these apps lose people (the first session) and how to ship subscription, privacy and store-review work without surprises.",
  },
  {
    slug: "liturgical-living",
    headline: "Two native apps, one shared core, and a 700-page website generated from the app's own content",
    teaser: "A free Catholic prayer app, native on iOS and Android, with a search-ready website built from the same content.",
    challenge:
      "Liturgical Living puts daily readings, the Liturgy of the Hours with audio, the Rosary, novenas, the Bible and daily games in one app. The app had to feel native on both platforms, work offline for prayer, stay accessible to older users with large text, and get discovered without an ad budget.",
    approach: [
      {
        title: "Native on both platforms, shared where it counts",
        body: "Android is Kotlin and Jetpack Compose and iOS is native Swift, with the liturgical calendar, game logic and content shared so both apps give the same answer on the same day.",
      },
      {
        title: "Accessibility as a requirement",
        body: "An accessibility audit found that the system text-size setting did nothing on iOS. We rebuilt typography to scale with Dynamic Type, made every daily game playable with VoiceOver and TalkBack, and set minimum touch-target and colour-contrast rules for all new screens.",
      },
      {
        title: "A website generated from the app",
        body: "A generator turns the app's own calendar, saints, novenas and articles into a static website of 700+ pages, with structured data, a sitemap, seasonal hubs and a browser version of the daily word game. One source of truth feeds the app and the site.",
      },
      {
        title: "Audio that behaves like a real player",
        body: "Streamed audio for the Hours runs in a proper media session on Android and a shared player on iOS, with lock-screen controls, scrubbing and resume, and it keeps playing while the user moves around the app.",
      },
    ],
    outcome: [
      "Free on the App Store and Google Play, no ads on prayer content",
      "700+ page website at liturgicalliving.app, generated from the app's content",
      "Eleven traditional novenas word for word from public-domain prayer books, each with its source",
      "Encrypted backups the user controls, with no account required",
      "The full Catholic Bible offline, and a 5.0 rating on Google Play",
    ],
    facts: [
      { value: "2", label: "Native apps (Kotlin, Swift)" },
      { value: "700+", label: "Generated web pages" },
      { value: "8", label: "Daily games" },
      { value: "0", label: "Accounts required" },
    ],
    forClients:
      "If you need native iOS and Android apps that stay in step, accessibility done properly, or content that should also rank on the web, this is the pattern we use.",
  },
  {
    slug: "nicdrop",
    headline: "Launching a subscription app with paid ads, then fixing the funnel the ads exposed",
    teaser: "A quit-nicotine app launched on iOS and Android, with an honest funnel audit and the fixes that followed.",
    challenge:
      "NicDrop helps people quit nicotine pouches, vapes and cigarettes with a weekly taper instead of willpower. It launched on iOS with Apple Search Ads. The ads worked: installs came in at about $1.45 each. But installs are not revenue, and the question was where people were leaving.",
    approach: [
      {
        title: "A two-minute plan, no account",
        body: "Onboarding asks what you use, how much and what it costs, then builds a weekly step-down to a quit date. There is no sign-up wall: one-tap logging, streaks and money saved work from the first minute.",
      },
      {
        title: "An AI coach with a real job",
        body: "The coach (Claude) is there for the craving moment, next to a three-minute countdown and breathing pacer. New users get three free coach messages, so they can feel it before they pay.",
      },
      {
        title: "Audit the funnel before buying more traffic",
        body: "A full funnel audit showed that the leak was after install: too few people logged at all, and very few reached the paywall. We restructured the ad campaigns, added a free coach taste and a short monthly trial, and started a 50/50 annual price test with every event tagged by variant.",
      },
      {
        title: "Ship to more people without more work",
        body: "The app is in English, German and Dutch, and the Google Play listing went out in 18 locales from a script, alongside the Android launch.",
      },
    ],
    outcome: [
      "Live on the App Store and Google Play",
      "Cost per install around $1.45 on Apple Search Ads",
      "A running price test and funnel events that show where each user stops",
      "App in 3 languages; Play listing in 18 locales",
    ],
    facts: [
      { value: "2 min", label: "To a personal taper plan" },
      { value: "~$1.45", label: "Cost per install (Apple Ads)" },
      { value: "18", label: "Play listing locales" },
      { value: "3", label: "Free AI coach messages" },
    ],
    forClients:
      "If you plan to spend money on app installs, we set up the funnel events and pricing tests first, so every dollar of ads tells you something.",
  },
  {
    slug: "deskbridge",
    headline: "A signed, paid Mac app shipped in days, then four feature releases in two weeks",
    teaser: "A $12 Mac app that opens Samsung DeX in a Mac window, shipped with licensing, updates and search pages in days.",
    challenge:
      "Samsung retired DeX for PC, and Macs never had it. People with a Galaxy phone and a Mac had no clean way to use the phone's desktop on the Mac. The product had to be a real Mac app: signed, notarized, self-updating and paid, with no server to run and no account to create.",
    approach: [
      {
        title: "Build on proven open source",
        body: "Deskbridge is a Swift menu-bar app that drives scrcpy and adb, plus a small Android helper app for screen blackout, calls and notifications. The hard device work was tested on real hardware before anything was sold.",
      },
      {
        title: "Licensing with no server",
        body: "Licence keys are signed offline with Ed25519 and checked on the Mac, so there is no account, no licence server and nothing to keep running. Stripe handles checkout; Sparkle handles signed updates.",
      },
      {
        title: "Ship, then keep shipping",
        body: "Version 1.0 went live the day after the product was named and priced. In the following two weeks came pop-out app windows, call answering, notification mirroring, drag-and-drop file sharing and a Pixel desktop mode beta.",
      },
      {
        title: "Search pages instead of ads",
        body: "Sixteen how-to guides answer the questions people actually search for, with structured data, a sitemap and instant indexing. An anonymous, opt-out usage count shows where trial users get stuck.",
      },
    ],
    outcome: [
      "Live at elcodev.com/apps/deskbridge: $12 once, with a 7-day free trial",
      "Signed, notarized and self-updating, with offline licence keys",
      "First paying customer within two weeks of launch, with no ad spend",
      "16 search guides published",
    ],
    facts: [
      { value: "4", label: "Feature releases in 2 weeks" },
      { value: "$12", label: "One-time price" },
      { value: "16", label: "Search guides" },
      { value: "$0", label: "Ad spend" },
    ],
    forClients:
      "If you need a desktop app, a hardware integration or a product shipped fast without cutting corners on signing, payments and updates, we have done exactly that.",
  },
  {
    slug: "realtime-sports-api",
    headline: "A developer API product: 29 leagues, three delivery methods and self-serve billing",
    teaser: "A live sports data API with REST, webhooks, WebSocket and an MCP server for AI assistants, run end to end by Elco Dev.",
    challenge:
      "Developers building scoreboards, fantasy and betting tools need live data that arrives fast and in a predictable shape, plus keys, docs and billing they can use without talking to anyone. Running an API product means the boring parts (rate limits, usage caps, failed payments, key rotation) matter as much as the data.",
    approach: [
      {
        title: "One shape for 29 leagues",
        body: "Scores, play-by-play, box scores, schedules, odds and injuries are normalized into one model across NFL, college football, NBA, men's college basketball, MLB, NHL and 23 soccer competitions.",
      },
      {
        title: "Three ways to receive data",
        body: "Poll over REST, or have updates pushed by signed webhooks or a WebSocket stream, delivered within about a second of the source. A hosted MCP server lets AI assistants like Claude and Cursor query live games.",
      },
      {
        title: "Self-serve from key to invoice",
        body: "Developers get a key instantly, 1,000 free calls in their first month and live docs with a try-it console. Stripe runs usage-based plans, and plan changes, usage headers and checkout recovery are automated.",
      },
      {
        title: "Operate it like a business",
        body: "Usage caps, trial-abuse checks, billing watchdogs and delivery monitors run on schedules, and developers get clear error hints when a request fails.",
      },
    ],
    outcome: [
      "Live at realtimesportsapi.com with a free tier and paid plans",
      "More than 660 developer sign-ups, and about 70% of October sign-ups made a live API call",
      "REST, signed webhooks, WebSocket and a hosted MCP server",
      "Self-serve keys, docs, usage-based billing and plan changes",
    ],
    facts: [
      { value: "29", label: "Leagues covered" },
      { value: "~1s", label: "Push after the source" },
      { value: "3", label: "Delivery methods" },
      { value: "660+", label: "Developer sign-ups" },
    ],
    forClients:
      "If you are launching an API, a data product or anything with usage-based billing, we have built and operated the whole stack: data model, delivery, docs, keys and Stripe.",
  },
];

export const caseStudyBySlug = (slug: string) => CASE_STUDIES.find((c) => c.slug === slug);
