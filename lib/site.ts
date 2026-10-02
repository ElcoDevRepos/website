/**
 * Every fact the site states lives here: pages, JSON-LD, the sitemap and
 * llms.txt all read from it, so they never disagree.
 */

export const SITE = {
  name: "Elco Dev",
  legalName: "Elco Dev, LLC",
  url: "https://www.elcodev.com",
  founded: "2019",
  founder: "Austin Hunter",
  city: "Nashville",
  region: "TN",
  country: "US",
  phone: "+1-615-784-8066",
  phoneDisplay: "(615) 784-8066",
  email: "austin@elcodev.com",
  calendly: "https://calendly.com/elco-dev/general-discussion",
  linkedin: "https://www.linkedin.com/company/elco-dev",
  github: "https://github.com/ElcoDevRepos",
  description:
    "Elco Dev is a Nashville software studio, founded in 2019, that designs and builds iOS and Android apps, web apps and SaaS platforms, APIs and websites. It also builds and runs apps of its own in the App Store and Google Play.",
  tagline: "We design, build and launch web and mobile apps.",
};

export type Links = { site?: string; appStore?: string; googlePlay?: string };

export type Project = {
  slug: string;
  name: string;
  /** "own": built and run by Elco Dev. "client": built for a client. "partner": Elco Dev leads the technology as CTO. */
  kind: "own" | "client" | "partner";
  category: "Mobile app" | "Web app & SaaS" | "API" | "Website";
  year: string;
  summary: string;
  description: string;
  highlights: string[];
  platforms: string[];
  tech: string[];
  links: Links;
  /** Desktop screenshot (16:10). */
  image: string;
  /** Phone screenshots, for apps. */
  phones?: string[];
  icon?: string;
  /** Shown instead of store buttons while an app is on its way. */
  note?: string;
  seoTitle: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "nicdrop",
    name: "NicDrop",
    kind: "own",
    category: "Mobile app",
    year: "2026",
    summary: "A quit-nicotine app with a taper plan, craving help and an AI coach.",
    description:
      "NicDrop helps people quit nicotine pouches, vapes and cigarettes with a plan instead of willpower. In two minutes it builds a weekly taper down to a quit date, then keeps the day simple: one-tap logging, today's allowance, a three-minute craving timer and a coach to talk the hard moments through.",
    highlights: [
      "Personal taper plan with a quit date, built in a two-minute onboarding",
      "One-tap logging, streaks and money saved, with no account required",
      "Craving SOS with a three-minute timer and an AI coach (Claude)",
      "Subscriptions with a free trial through RevenueCat, launched with Apple Search Ads",
    ],
    platforms: ["iOS"],
    tech: ["React Native", "Expo", "Firebase", "RevenueCat", "Claude AI"],
    links: { site: "https://nicdrop.app", appStore: "https://apps.apple.com/app/id6813736340" },
    image: "/portfolio/nicdrop.webp",
    phones: ["/apps/nicdrop-1.webp", "/apps/nicdrop-2.webp", "/apps/nicdrop-3.webp"],
    icon: "/icons/nicdrop.webp",
    seoTitle: "NicDrop: quit-nicotine iPhone app built by Elco Dev",
  },
  {
    slug: "wisewallets",
    name: "WiseWallets",
    kind: "own",
    category: "Mobile app",
    year: "2024",
    summary: "A zero-based budget whose transactions are encrypted on the phone.",
    description:
      "WiseWallets is a zero-based budgeting app with one difference: transactions, amounts, merchants and budget lines are encrypted on the device with a key only the user holds. Plan the month, sort new transactions into budget lines with a tap, and track savings goals and debt payoff.",
    highlights: [
      "Zero-based monthly budget: give every dollar a job, copy last month in one tap",
      "Bank connection (Pro) with a sorting tray for new transactions",
      "On-device encryption with a 12-word recovery phrase",
      "Savings goals and a snowball vs. avalanche debt payoff planner",
    ],
    platforms: ["iOS"],
    tech: ["On-device encryption", "Bank sync", "Subscriptions"],
    links: { appStore: "https://apps.apple.com/us/app/wisewallets/id6476206284" },
    image: "/apps/wisewallets-1.webp",
    phones: ["/apps/wisewallets-1.webp", "/apps/wisewallets-2.webp", "/apps/wisewallets-3.webp"],
    icon: "/icons/wisewallets.webp",
    seoTitle: "WiseWallets: private budgeting app for iPhone by Elco Dev",
  },
  {
    slug: "crohns-food-tracker",
    name: "Crohn's Food Tracker",
    kind: "own",
    category: "Mobile app",
    year: "2017",
    summary: "A food and symptom diary for Crohn's, colitis and IBS, in the stores since 2017.",
    description:
      "Crohn's Food Tracker is a two-tap food and symptom diary built for Crohn's disease, ulcerative colitis and IBS. Log a meal, rate how it sat, and after a week see likely trigger foods ranked by how often they preceded symptoms, with a one-page report to take to the doctor.",
    highlights: [
      "Two-tap meal logging with a quick rating of how it sat",
      "Likely trigger foods ranked after a week of data",
      "One-page report for GI appointments",
      "On the App Store since 2017, also on Google Play",
    ],
    platforms: ["iOS", "Android"],
    tech: ["Mobile", "Subscriptions", "Health data"],
    links: {
      site: "https://crohnsfoodtracker.app",
      appStore: "https://apps.apple.com/us/app/crohns-tracker-food-ibd/id1250276026",
      googlePlay: "https://play.google.com/store/apps/details?id=com.austinhunter.crohnsFoodTracker",
    },
    image: "/portfolio/crohns.webp",
    phones: ["/apps/crohns-1.webp"],
    icon: "/icons/crohns.webp",
    seoTitle: "Crohn's Food Tracker: food and symptom diary app by Elco Dev",
  },
  {
    slug: "starter-set",
    name: "Starter Set",
    kind: "own",
    category: "Mobile app",
    year: "2026",
    summary: "A beginner workout coach built around the gear you already own.",
    description:
      "Starter Set turns the dumbbells, bike or walking pad someone already owns into a plan. It teaches every move from zero, adapts after every session, and its camera coach counts reps and gives form cues on the phone, with no video uploaded.",
    highlights: [
      "Plans built only from the user's own equipment, adapted after every session",
      "Camera coach: rep counting and form cues with on-device pose tracking",
      "On-device AI coach (Gemini Nano on supported Android phones)",
    ],
    platforms: ["iOS", "Android"],
    tech: ["React Native", "Expo", "ML Kit", "Apple Vision", "RevenueCat"],
    links: { site: "https://starterset.app" },
    image: "/portfolio/starterset.webp",
    phones: ["/apps/starterset-1.webp", "/apps/starterset-2.webp", "/apps/starterset-3.webp"],
    icon: "/icons/starterset.webp",
    note: "Launching on the App Store and Google Play",
    seoTitle: "Starter Set: home workout coach app built by Elco Dev",
  },
  {
    slug: "liturgical-living",
    name: "Liturgical Living",
    kind: "own",
    category: "Mobile app",
    year: "2026",
    summary: "A free Catholic daily prayer app, native on iOS and Android.",
    description:
      "Liturgical Living puts the Catholic day in one app: daily Mass readings, the Liturgy of the Hours with audio, the Rosary, novenas and the full Bible, all following the liturgical calendar. Free, with no ads.",
    highlights: [
      "Liturgy of the Hours with streamed audio and a resume-where-you-left-off player",
      "Daily readings, saints and holy days from the liturgical calendar",
      "Rosary, novenas and a daily Catholic word game",
      "Native Android (Kotlin, Jetpack Compose) and native iOS",
    ],
    platforms: ["iOS", "Android"],
    tech: ["Kotlin", "Jetpack Compose", "Native iOS", "Audio"],
    links: {
      site: "https://liturgicalliving.app",
      appStore: "https://apps.apple.com/us/app/liturgical-living/id6775888958",
      googlePlay: "https://play.google.com/store/apps/details?id=com.elcodev.lection",
    },
    image: "/portfolio/liturgical-living.webp",
    phones: ["/apps/liturgical-living-1.webp", "/apps/liturgical-living-2.webp", "/apps/liturgical-living-3.webp"],
    icon: "/icons/liturgical-living.webp",
    seoTitle: "Liturgical Living: Catholic prayer app built by Elco Dev",
  },
  {
    slug: "homeshelf",
    name: "Homeshelf",
    kind: "own",
    category: "Mobile app",
    year: "2026",
    summary: "A family library app for homeschoolers: scan your books, plan each child's reading.",
    description:
      "Homeshelf catalogs a family's home library by scanning the barcode on each book, answers \"do we own this?\" before the next book sale, and plans each child's reading by subject and term. The library is shared across the whole family's phones, with a lending list for books that go out the door.",
    highlights: [
      "Barcode scanning to add a shelf of books in minutes",
      "\"Do we own this?\" search, a wishlist and a lending list with due-date reminders",
      "Reading plans per child, subject and term, with a reading log and exportable lists",
      "One Plus purchase covers the whole household, through RevenueCat",
    ],
    platforms: ["Android"],
    tech: ["React Native", "Expo", "Firebase", "RevenueCat"],
    links: { googlePlay: "https://play.google.com/store/apps/details?id=com.elcodev.homeshelf" },
    image: "/apps/homeshelf-1.webp",
    phones: ["/apps/homeshelf-1.webp", "/apps/homeshelf-2.webp", "/apps/homeshelf-3.webp"],
    icon: "/icons/homeshelf.webp",
    seoTitle: "Homeshelf: homeschool family library app built by Elco Dev",
  },
  {
    slug: "scripted",
    name: "Scripted",
    kind: "own",
    category: "Mobile app",
    year: "2026",
    summary: "A Bible you can write in: draw, highlight and take notes on Scripture.",
    description:
      "Scripted turns a phone or tablet into a study Bible you can write in. Draw, highlight and underline directly on the text with a finger or stylus, tap a verse to highlight it or leave a note, and your marks stay where you put them through rotations, folds and font-size changes. The King James Version is free and works offline; more translations unlock with a one-time purchase, with no subscription.",
    highlights: [
      "Pen, highlighter and eraser drawn over the text with Skia, stored as vector paths",
      "Verse highlights and notes, search, and a \"My marks\" list of everything annotated",
      "Eight reading themes, tablet and foldable layouts",
      "KJV free and offline; more translations as one-time purchases through RevenueCat",
    ],
    platforms: ["Android"],
    tech: ["React Native", "Expo", "Skia", "Firebase", "RevenueCat"],
    links: { googlePlay: "https://play.google.com/store/apps/details?id=com.elcodev.scriptedbible" },
    image: "/apps/scripted-1.webp",
    phones: ["/apps/scripted-1.webp", "/apps/scripted-2.webp", "/apps/scripted-3.webp"],
    icon: "/icons/scripted.webp",
    seoTitle: "Scripted: Bible annotation app built by Elco Dev",
  },
  {
    slug: "spotted",
    name: "Spotted",
    kind: "own",
    category: "Mobile app",
    year: "2026",
    summary: "A daily photo hunt: the same five things to find for everyone, every day.",
    description:
      "Spotted is Wordle for the real world. Everyone gets the same five photo prompts each day, like \"a dog\", \"a yellow flower\" or \"a blue door\". Go outside, snap them, and the phone checks each photo on the device and stamps it SPOTTED! Then share a Wordle-style grid with your time and a collage of the day's finds. There's no account and nothing is uploaded.",
    highlights: [
      "Same five prompts worldwide each day, from a bank of 800+ with no repeats within 90 days",
      "On-device photo checking: Apple Vision on iOS, ML Kit on Android, plus a colour check",
      "Shareable result grid and collage, daily streaks and stats",
      "Seasonal hunt calendars and themed packs, with Plus and one-time packs through RevenueCat",
    ],
    platforms: ["iOS", "Android"],
    tech: ["SwiftUI", "Kotlin", "Jetpack Compose", "Apple Vision", "ML Kit", "RevenueCat"],
    links: { site: "https://elcodev-apps.vercel.app/spotted" },
    image: "/apps/spotted-1.webp",
    phones: ["/apps/spotted-1.webp", "/apps/spotted-2.webp", "/apps/spotted-3.webp"],
    icon: "/icons/spotted.webp",
    note: "Launching on the App Store and Google Play",
    seoTitle: "Spotted: daily photo hunt app built by Elco Dev",
  },
  {
    slug: "realtime-sports-api",
    name: "Realtime Sports API",
    kind: "own",
    category: "API",
    year: "2026",
    summary: "A live NFL and college football data API for developers.",
    description:
      "Realtime Sports API gives developers live NFL and college football data: scores, play-by-play, betting odds and webhooks, with a free tier, self-serve keys and documentation.",
    highlights: ["Live scores, play-by-play and odds over REST", "Webhooks for game events", "Free tier and self-serve API keys", "Developer docs and examples"],
    platforms: ["Web", "API"],
    tech: ["Node.js", "Next.js", "Firebase", "Webhooks"],
    links: { site: "https://realtimesportsapi.com" },
    image: "/portfolio/realtime-sports-api.webp",
    seoTitle: "Realtime Sports API: live football data API by Elco Dev",
  },
  {
    slug: "clientping",
    name: "ClientPing",
    kind: "own",
    category: "Web app & SaaS",
    year: "2026",
    summary: "Client updates written from a week of GitHub activity.",
    description:
      "ClientPing connects to GitHub and drafts a client-ready weekly update from the pull requests and commits across a team, for freelancers and engineering managers who'd rather ship than write status reports.",
    highlights: ["GitHub connection with private repo support", "AI-drafted updates you review and send", "Markdown output"],
    platforms: ["Web"],
    tech: ["Next.js", "GitHub API", "AI"],
    links: { site: "https://client-ping.elcodev.com" },
    image: "/portfolio/clientping.webp",
    seoTitle: "ClientPing: automated client updates from GitHub, by Elco Dev",
  },
  {
    slug: "taskmerit",
    name: "TaskMerit",
    kind: "partner",
    category: "Web app & SaaS",
    year: "2026",
    summary: "A property-first CRM for landscaping and snow-removal companies.",
    description:
      "TaskMerit keeps customers, properties, crews and the daily schedule in one place so the office and the field move together. Elco Dev is the technology partner: Austin Hunter serves as CTO, leading the architecture and development of a multi-tenant platform built around a field-service core (customer, property, service, visit, work record). Now in private beta.",
    highlights: [
      "Invitation-only multi-tenant workspaces with verified sign-up",
      "Real-time office workspace: customers, properties, crews and the day's schedule",
      "QuickBooks Online connection",
      "Branded transactional email through Resend",
    ],
    platforms: ["Web"],
    tech: ["Next.js", "Firebase", "QuickBooks Online", "Resend"],
    links: { site: "https://taskmerit.com" },
    image: "/portfolio/taskmerit.webp",
    seoTitle: "TaskMerit: field-service CRM, technology led by Elco Dev",
  },
  {
    slug: "bookreverb",
    name: "BookReverb",
    kind: "client",
    category: "Web app & SaaS",
    year: "2025",
    summary: "Connects publishers with real readers, with optional reviews.",
    description:
      "BookReverb helps publishers reach interested readers without review swaps or chasing people in groups. Upload an advance copy once, readers opt in based on interest, and reading progress and optional review links are tracked in one dashboard. Elco Dev took over the product and now leads all of its development.",
    highlights: ["Took over an existing codebase and now owns full development", "Publisher workflow: upload an advance copy once and set a reader bid", "Reader opt-in based on interest", "Progress and review tracking in one dashboard"],
    platforms: ["Web"],
    tech: ["Next.js", "Marketplace", "Dashboards"],
    links: { site: "https://www.bookreverb.com" },
    image: "/portfolio/bookreverb.webp",
    seoTitle: "BookReverb: reader marketplace for publishers, built by Elco Dev",
  },
  {
    slug: "equidesk",
    name: "EquiDesk",
    kind: "client",
    category: "Web app & SaaS",
    year: "2026",
    summary: "Operations software for equestrian barns.",
    description:
      "EquiDesk runs an equestrian operation from one mobile-friendly app: horses and health records, boarders, lessons, billing and messaging, replacing spreadsheets and text threads.",
    highlights: ["Horse, boarder and lesson management", "Billing and messaging in one place", "Mobile-friendly for use at the barn"],
    platforms: ["Web"],
    tech: ["Next.js", "SaaS", "Billing"],
    links: { site: "https://equi-desk.com" },
    image: "/portfolio/equidesk.webp",
    seoTitle: "EquiDesk: equestrian barn management software built by Elco Dev",
  },
  {
    slug: "peerless-development",
    name: "Peerless Development",
    kind: "client",
    category: "Website",
    year: "2026",
    summary: "Website for a Nashville design-build remodeling contractor.",
    description:
      "A lead-generating website for a licensed design-build contractor serving Nashville and Middle Tennessee, covering remodeling, additions and new construction, with project galleries, service-area pages and consultation requests.",
    highlights: ["Service and service-area pages built for local search", "Project galleries", "Consultation request flow"],
    platforms: ["Web"],
    tech: ["Next.js", "Local SEO", "Lead capture"],
    links: { site: "https://peerlessdevelopment.com" },
    image: "/portfolio/peerless-development.webp",
    seoTitle: "Peerless Development website, built by Elco Dev",
  },
  {
    slug: "peerless-properties",
    name: "Peerless Properties",
    kind: "client",
    category: "Website",
    year: "2026",
    summary: "Website for a Wilson County real estate investment firm.",
    description:
      "A website for a residential real estate investment firm in Wilson County, Tennessee, built to bring in sellers and off-market deals, with pages for property types, markets and private owners.",
    highlights: ["Seller and cash-offer lead flows", "Market and criteria pages for local search", "Investor and advisor sections"],
    platforms: ["Web"],
    tech: ["Next.js", "Local SEO", "Lead capture"],
    links: { site: "https://peerlesspropertiestn.com" },
    image: "/portfolio/peerless-properties.webp",
    seoTitle: "Peerless Properties website, built by Elco Dev",
  },
  {
    slug: "laurel-crm",
    name: "LaurelCRM",
    kind: "client",
    category: "Web app & SaaS",
    year: "2023",
    summary: "An internal CRM for Laurel Medical, built from the ground up.",
    description: "A custom CRM for Laurel Medical's growing workload, built from the ground up and extended as new needs came in.",
    highlights: ["Customer and pipeline management", "Built around the team's own workflow", "Ongoing feature development"],
    platforms: ["Web"],
    tech: ["Angular", "TypeScript", "REST APIs"],
    links: {},
    image: "/portfolio/laurel-crm.webp",
    seoTitle: "LaurelCRM: custom CRM built by Elco Dev",
  },
  {
    slug: "penalty-verdict",
    name: "Penalty Verdict",
    kind: "client",
    category: "Mobile app",
    year: "2022",
    summary: "Football fans vote on referee calls in real time.",
    description: "A mobile app where football fans vote on referee decisions as they happen, with penalties and game incidents tracked live.",
    highlights: ["Real-time voting on referee calls", "Live penalty and incident data", "iOS and Android from one codebase"],
    platforms: ["iOS", "Android"],
    tech: ["Ionic", "Capacitor", "Node.js", "Firebase"],
    links: { site: "https://penaltyverdict.com" },
    image: "/portfolio/penalty-verdict.webp",
    seoTitle: "Penalty Verdict app, built by Elco Dev",
  },
  {
    slug: "ccs",
    name: "Community Concierge Services",
    kind: "client",
    category: "Mobile app",
    year: "2022",
    summary: "Valet trash operations for apartment communities.",
    description: "Operations software for an apartment valet trash company: route optimization, service verification in the field and a customer portal for multifamily properties.",
    highlights: ["Route optimization with Google Maps", "Service verification from the field app", "Customer portal for property managers"],
    platforms: ["iOS", "Android", "Web"],
    tech: ["Flutter", "Next.js", "Firebase", "Google Maps"],
    links: { site: "https://go-ccs.com" },
    image: "/portfolio/ccs-trash.webp",
    seoTitle: "Community Concierge Services apps, built by Elco Dev",
  },
  {
    slug: "canvenient",
    name: "Canvenient",
    kind: "client",
    category: "Web app & SaaS",
    year: "2021",
    summary: "SaaS for apartment communities to run valet trash service.",
    description: "A SaaS platform for apartment communities to manage valet trash service, with live service tracking and resident management.",
    highlights: ["Live service tracking", "Resident management", "Serverless backend on Cloud Functions"],
    platforms: ["Web"],
    tech: ["Angular", "Firebase", "Cloud Functions"],
    links: { site: "https://canvenient.com" },
    image: "/portfolio/canvenient.webp",
    seoTitle: "Canvenient platform, built by Elco Dev",
  },
  {
    slug: "md-virtual-care",
    name: "MD Virtual Care",
    kind: "client",
    category: "Mobile app",
    year: "2021",
    summary: "A virtual-first healthcare platform with patient apps and a portal.",
    description: "A virtual-first healthcare platform: patient mobile apps and a web portal with secure records and real-time messaging.",
    highlights: ["Patient apps for iOS and Android", "Web portal with secure records", "Real-time messaging"],
    platforms: ["iOS", "Android", "Web"],
    tech: ["Ionic", "Capacitor", "Next.js", "Node.js"],
    links: {},
    image: "/portfolio/md-virtual-care.webp",
    seoTitle: "MD Virtual Care healthcare platform, built by Elco Dev",
  },
  {
    slug: "synctup",
    name: "SynctUp",
    kind: "client",
    category: "Mobile app",
    year: "2020",
    summary: "Contact sharing and sync across devices.",
    description: "A contact sharing and synchronization app that keeps contacts up to date across devices in real time.",
    highlights: ["Contact sharing between users", "Real-time sync across devices", "iOS, Android and web"],
    platforms: ["iOS", "Android", "Web"],
    tech: ["Ionic", "Capacitor", "MongoDB", "Node.js"],
    links: { site: "https://app.synctup.com" },
    image: "/portfolio/synctup.webp",
    seoTitle: "SynctUp app, built by Elco Dev",
  },
];

export const OWN_APPS = PROJECTS.filter((p) => p.kind === "own" && p.category === "Mobile app");
export const projectBySlug = (slug: string) => PROJECTS.find((p) => p.slug === slug);

export type Service = {
  slug: string;
  name: string;
  short: string;
  title: string;
  metaDescription: string;
  intro: string;
  includes: string[];
  stack: string[];
  work: string[];
  faqs: { q: string; a: string }[];
};

export const SERVICES: Service[] = [
  {
    slug: "mobile-app-development",
    name: "Mobile app development",
    short: "iOS and Android apps, from first build to App Store launch and growth.",
    title: "Mobile App Development in Nashville | iOS & Android | Elco Dev",
    metaDescription:
      "Elco Dev builds iOS and Android apps in React Native or native Swift and Kotlin, and handles App Store and Google Play launch, subscriptions and analytics. Nashville, TN.",
    intro:
      "We build iOS and Android apps and take them all the way to the stores. Because we run apps of our own, launch is part of the job: store listings and screenshots, review, subscriptions, analytics and paid acquisition.",
    includes: [
      "Cross-platform apps in React Native (Expo), or native Swift and Kotlin when the app calls for it",
      "App Store and Google Play setup, listings, screenshots and review",
      "Subscriptions and in-app purchases with free trials (RevenueCat)",
      "Push notifications, offline support and on-device features like camera and health data",
      "Product analytics and crash reporting from day one",
      "Ongoing releases and support after launch",
    ],
    stack: ["React Native", "Expo", "Swift", "Kotlin", "Firebase", "RevenueCat", "On-device AI"],
    work: ["nicdrop", "starter-set", "liturgical-living", "wisewallets", "crohns-food-tracker", "penalty-verdict"],
    faqs: [
      { q: "Should my app be native or cross-platform?", a: "Most apps are best built once in React Native and shipped to both stores. We go native (Swift, Kotlin) when an app leans on platform features, audio or heavy performance needs, as we did for Liturgical Living." },
      { q: "Do you handle the App Store and Google Play submission?", a: "Yes. We set up the listings, screenshots, privacy details, in-app purchases and review, the same way we launch our own apps." },
      { q: "Can you add subscriptions and a free trial?", a: "Yes. We use RevenueCat for subscriptions, trials and lifetime purchases across both stores." },
    ],
  },
  {
    slug: "web-app-development",
    name: "Web apps & SaaS",
    short: "Custom web apps, SaaS platforms, dashboards and APIs.",
    title: "Web App & SaaS Development in Nashville | Elco Dev",
    metaDescription:
      "Custom web applications, SaaS platforms, CRMs, dashboards and APIs built with Next.js, Node.js and Firebase by Elco Dev, a Nashville software studio.",
    intro:
      "We build the software businesses run on: SaaS platforms, internal CRMs, customer portals, dashboards and APIs. Multi-tenant accounts, billing, integrations and real-time data are everyday work for us.",
    includes: [
      "SaaS platforms with accounts, teams, roles and billing",
      "Internal tools and CRMs built around how your team actually works",
      "Integrations: QuickBooks Online, payments, GitHub, Google Maps and more",
      "Public APIs with keys, documentation and webhooks",
      "Real-time dashboards and reporting",
      "Hosting, monitoring and ongoing development",
    ],
    stack: ["Next.js", "React", "TypeScript", "Node.js", "Firebase", "Vercel"],
    work: ["taskmerit", "equidesk", "realtime-sports-api", "clientping", "bookreverb", "laurel-crm"],
    faqs: [
      { q: "Can you build a multi-tenant SaaS?", a: "Yes. TaskMerit and EquiDesk are multi-tenant platforms with invitation sign-up, organization-scoped data and billing." },
      { q: "Do you partner with founders as a technical cofounder or CTO?", a: "Sometimes. On TaskMerit, Elco Dev's founder serves as CTO and leads the platform's technology as a partner in the business." },
      { q: "Can you take over an existing codebase?", a: "Yes. We took over BookReverb and now lead all of its development, and we extend existing products as well as build new ones." },
      { q: "Do you build APIs?", a: "Yes. Realtime Sports API is a public developer API we built and run, with keys, webhooks and documentation." },
    ],
  },
  {
    slug: "websites",
    name: "Websites",
    short: "Fast, search-ready websites that bring in leads.",
    title: "Website Design & Development in Nashville | Elco Dev",
    metaDescription:
      "Fast, search-optimized websites for Nashville and Middle Tennessee businesses, built by Elco Dev: service-area pages, structured data, lead capture and analytics.",
    intro:
      "We build websites that load fast, rank locally and turn visitors into calls and quote requests: real HTML pages for search engines and AI assistants, clear service pages, and simple lead capture.",
    includes: [
      "Service and service-area pages built for local search",
      "Structured data, sitemaps and page speed tuned for Google and AI search",
      "Lead capture: quote requests, booking and call tracking",
      "Project galleries and case studies",
      "Landing pages for apps and products",
      "Analytics and conversion tracking",
    ],
    stack: ["Next.js", "Vercel", "Structured data", "Analytics"],
    work: ["peerless-development", "peerless-properties", "nicdrop", "crohns-food-tracker"],
    faqs: [
      { q: "Will my site show up in Google and AI answers?", a: "We build every page as real HTML with structured data, a sitemap and fast load times, which is what search engines and AI assistants read. Rankings also depend on your content and reviews, and we'll help with both." },
      { q: "Can you build a landing page for my app?", a: "Yes. We build the sites for our own apps, like nicdrop.app and starterset.app." },
    ],
  },
  {
    slug: "staff-augmentation",
    name: "Staff augmentation",
    short: "Experienced developers who join your team.",
    title: "Developer Staff Augmentation | Elco Dev",
    metaDescription: "Add experienced web and mobile developers from Elco Dev to your team, scaling up or down as your roadmap needs.",
    intro:
      "Need more hands on an existing product? Our developers join your team, work in your repos and process, and scale up or down as the roadmap changes, with no recruiting overhead.",
    includes: [
      "Web and mobile developers who work in your codebase and tools",
      "Scale up or down as needed",
      "Help with features your team is stuck on",
      "Code review, testing and release support",
    ],
    stack: ["React", "React Native", "Next.js", "Angular", "Node.js", "Firebase"],
    work: ["laurel-crm", "md-virtual-care", "canvenient"],
    faqs: [{ q: "How quickly can someone start?", a: "Usually within a couple of weeks of a consultation, depending on the skills you need." }],
  },
];

export const serviceBySlug = (slug: string) => SERVICES.find((s) => s.slug === slug);

export const MVP_TIERS = [
  {
    name: "Design to frontend",
    price: "$3,500",
    note: "Starting price",
    blurb: "Any design format works, from Figma files to napkin sketches.",
    features: ["Your design turned into production code", "Responsive on every screen size", "Interactive UI and animations", "Cross-browser tested", "Performance tuned"],
  },
  {
    name: "MVP product build",
    price: "$7,000",
    note: "Starting price",
    blurb: "From concept to a working product with the integrations it needs, in about 14 days.",
    features: ["Custom frontend and backend", "Database design", "Sign-in and accounts", "Third-party API integrations", "Payments", "Analytics", "Testing"],
    featured: true,
  },
  {
    name: "Long-term partnership",
    price: "Custom",
    note: "For existing products",
    blurb: "A dedicated team for ongoing development of an existing product.",
    features: ["Regular sprint planning and delivery", "New features", "Performance and scalability work", "Security reviews", "Maintenance and support"],
  },
];

export const TESTIMONIALS = [
  { quote: "Austin at Elco has been great to work with. He built and launched my mobile app, Bevvo, which is a mobile payment solution for the hospitality industry. Austin managed front end, back end, and database development including integrating third party applications to execute payment processing, reporting, etc. He also managed the publication process onto Apple and Google app stores while being swift in addressing any bugs that have popped up after publishing.", author: "Justin Garabed", company: "Bevvo" },
  { quote: "As an entrepreneur without much money trying to get a minimum viable product into existence, Elco Development has been the perfect partner. Austin built the entire project for less than a big firm would have charged for a few planning meetings. I'm not a programmer, and I send Austin some simple mock-ups of what I want, and a few days later, there it is working on my site.", author: "Charles Lyons", company: "Daily Dashboard" },
  { quote: "Austin and his development team have transformed my app idea into a tangible reality. Having had no prior experience in app development, Austin has established himself as indispensable in steering me through the nuances of this complex process. Collaborating with Austin is comparable to experiencing the professionalism and expertise of a major corporation, combined with the personalized approach of a small business.", author: "Titus Cara", company: "Penalty Verdict" },
  { quote: "Austin is fantastic. I was really impressed with how well he handled everything, from the quality of his work to his problem-solving skills. His communication is spot on, he always keeps me informed and makes everything easy to understand.", author: "Jason Robinson", company: "Renew Music" },
  { quote: "Rather than integrating Zoom for the video conferencing element of our site, he decided it would save money over time to build our own conferencing software, which he did from scratch. I was grateful that he was able to have the vision of the company in mind and the willingness to take care of business. What an asset to any startup!", author: "William Mattison", company: "GOAT Tutors" },
  { quote: "The company that I work for was in search for a CRM database to help with our expanding work load. Austin has been building this from the ground up and we have been nothing but pleased with the progress. Austin is also available to talk if there is an issue or if we have a new idea.", author: "Marla Nesbella", company: "Laurel Medical" },
  { quote: "I had the pleasure of collaborating with Austin on developing an app based on my UX designs. Austin's ability to overcome blockers and tackle development challenges ensured a smooth and efficient process. Not only did he execute the project quickly, but his collaborative approach made the experience enjoyable and productive.", author: "Matt Khan", company: "AVRI Stories" },
  { quote: "These guys know code! I've had the opportunity to work with multiple companies over the years and Elco Dev is hands down the best. They treat every project as if it's their own no matter how big or small.", author: "Mike Nelson", company: "Ladder Suite" },
  { quote: "Austin is a great person to work with! He is very understanding and consistent. He has met deadlines and exceeded expectations. The value of his work is rare to find with others.", author: "Bishal Khadka", company: "Beyond Auto Cores" },
  { quote: "Austin is a great developer. Highly recommend.", author: "Collin Goodwin", company: "Saucer" },
];

export const CLIENT_LOGOS = [
  { name: "Community Concierge Services", logo: "/assets/brands/ccs.png", url: "https://www.go-ccs.com" },
  { name: "The Home Depot", logo: "/assets/brands/home-depot.jpg", url: "https://www.homedepot.com" },
  { name: "Tennessee State Parks", logo: "/assets/brands/tsp-logo.svg", url: "https://tnstateparks.com" },
  { name: "Ladder Suite", logo: "/assets/brands/ladder-suite.png", url: "https://www.laddersuite.com" },
];

export const PROCESS = [
  { step: "01", title: "Free consultation", body: "A 30-minute call about what you want to build, who it's for and what matters most." },
  { step: "02", title: "Scope and quote", body: "A clear plan with the features, timeline and price, so you know what you're getting before we start." },
  { step: "03", title: "Design and build", body: "Short cycles with working builds you can try and regular progress updates along the way." },
  { step: "04", title: "Launch and grow", body: "Store submission or go-live, then analytics, subscriptions and improvements, the same way we run our own apps." },
];

export const FAQS = [
  { q: "How much does it cost to build an app with Elco Dev?", a: "An MVP product build starts at $7,000 and turning an existing design into a working frontend starts at $3,500. Larger products and long-term work are quoted after a free consultation, once we know the scope." },
  { q: "How long does it take to build an MVP?", a: "A focused MVP typically takes about 14 days. The timeline depends on scope, and we'll give you an accurate one after the consultation." },
  { q: "Do you build both iOS and Android apps?", a: "Yes. We usually build once in React Native and ship to both the App Store and Google Play, and we build natively in Swift or Kotlin when an app needs it." },
  { q: "Can you launch the app in the App Store and Google Play for me?", a: "Yes. We handle store listings, screenshots, review, subscriptions and in-app purchases. We launch and grow our own apps, including NicDrop, WiseWallets, Crohn's Food Tracker and Liturgical Living, so we know the process well." },
  { q: "What technologies do you use?", a: "React Native and Expo, Swift and Kotlin for mobile; Next.js, React, TypeScript and Node.js for the web; Firebase for data; RevenueCat for subscriptions; and on-device and cloud AI where it helps." },
  { q: "Where is Elco Dev located?", a: "We're based in Nashville, Tennessee, and work with clients across the United States. Elco Dev was founded in 2019." },
  { q: "Do you work with non-technical founders?", a: "Yes, often. Bring an idea, sketches or a Figma file and we'll turn it into a plan and a working product, explaining each step along the way." },
  { q: "Do you support apps after launch?", a: "Yes. We offer ongoing development and support: new features, releases, performance and security work, and maintenance." },
];

export const STATS = [
  { value: "2019", label: "Founded in Nashville" },
  { value: "50+", label: "Projects delivered" },
  { value: String(OWN_APPS.length), label: "Apps of our own" },
  { value: "~14 days", label: "Typical MVP build" },
];
