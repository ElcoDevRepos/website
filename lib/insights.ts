/**
 * Insight articles. Written from Elco Dev's own experience; prices come from real quotes
 * sent in 2025–2026 with no client named. Keep claims to what we have actually done.
 */

export type Block =
  | { h2: string }
  | { p: string }
  | { ul: string[] }
  | { table: { head: string[]; rows: string[][] } };

export type Insight = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  published: string; // ISO date
  updated: string;
  readMinutes: number;
  body: Block[];
  related: { label: string; href: string }[];
  /** Optional short, direct answer shown first (what search and AI tools quote). */
  answer?: string;
  /** Optional FAQ, rendered with FAQPage markup. */
  faq?: { q: string; a: string }[];
  /** Optional product call to action; replaces the worksheet box. */
  product?: { name: string; href: string; blurb: string; cta: string };
};

export const WORKSHEET = {
  href: "/downloads/app-project-planning-worksheet.pdf",
  title: "App project planning worksheet",
  blurb: "A free two-page worksheet to get your idea, users, must-haves, budget and timeline onto paper before you talk to any developer. Direct download, no email required.",
};

export const INSIGHTS: Insight[] = [
  {
    slug: "how-much-does-a-custom-app-cost",
    title: "How much does a custom app cost in 2026?",
    seoTitle: "How Much Does a Custom App Cost in 2026? Real Ranges From Real Quotes",
    description:
      "Honest price ranges for custom mobile apps, web apps and websites in 2026, taken from the quotes a small US studio actually sent, plus what drives the price up and how to spend less.",
    published: "2026-11-04",
    updated: "2026-11-04",
    readMinutes: 6,
    body: [
      { p: "Most \"how much does an app cost\" articles give a range so wide it's useless: $10,000 to $500,000. Here's a narrower, more honest answer. These are the ranges from the fixed quotes we at Elco Dev actually sent over the past year, for a small, senior US team. Agencies with account managers and big offices charge more; freelancers working alone can charge less." },
      { h2: "The short answer" },
      {
        table: {
          head: ["Project", "What it usually is", "What we've quoted"],
          rows: [
            ["Design to working front end", "Turning finished designs into a responsive, working interface", "From $3,500"],
            ["Focused MVP", "One core workflow, sign-in, payments if needed, launched in about 14 days", "From $7,000"],
            ["Small custom app or website", "A first version of an app or a custom site with a few integrations", "Mostly $8,000 to $20,000"],
            ["Larger custom system", "Multi-milestone business apps: dashboards, document handling, integrations with existing systems", "About $50,000 to $60,000"],
            ["After launch", "Hosting, updates, store requirements, small fixes", "From $40/month hosting; support plans sized to the app"],
          ],
        },
      },
      { h2: "What actually drives the price" },
      {
        ul: [
          "Number of distinct user types. An app for one kind of user is far cheaper than one with customers, staff and admins, each with their own screens and permissions.",
          "Integrations. Every connection to another system (payments, accounting, an ERP, a CRM, SMS) adds design, testing and failure handling. Integrations with older business systems are where budgets stretch.",
          "Platforms. One cross-platform codebase for iOS and Android costs much less than two native apps. We only recommend native when an app leans hard on platform features or audio.",
          "Unknowns. A vague scope gets padded or blows up later. That's why we often suggest a paid discovery phase or a first milestone before quoting the whole build.",
          "Content and data migration. Moving years of records or hundreds of pages is real work, and it's often left out of early estimates.",
        ],
      },
      { h2: "How projects are usually paid" },
      { p: "We quote a fixed price before any work starts. Larger builds are split into milestones (for example four payments of 25%) so you pay as working software is delivered. If the scope changes, the change is quoted in writing first. Hourly billing has its place for open-ended support, but for a build, a fixed quote protects you from surprises." },
      { h2: "Five ways to spend less" },
      {
        ul: [
          "Start with one workflow done well. A narrow first version that people actually use beats a broad one that ships late.",
          "Use one codebase for iOS, Android and web where you can.",
          "Buy before you build. If an off-the-shelf tool covers 90% of the need, use it and build only the missing piece.",
          "Own your accounts from day one (hosting, app stores, domains), so you're never paying to get your own things back.",
          "Budget for year two. Apps need yearly store updates; planning for that avoids an emergency bill later.",
        ],
      },
      { h2: "The hidden costs nobody quotes" },
      { p: "Apple's developer program is $99 a year and Google Play is a one-time $25 (Apple offers fee waivers to eligible nonprofits). Hosting, SMS, maps and email services are usually small at first and grow with use. Every year Apple and Google raise their minimum requirements, and an app that misses the deadline stops getting updates. We cover what that upkeep involves in our maintenance guide." },
      { h2: "Get a real number" },
      { p: "Ranges only go so far. Fill in our free planning worksheet, then book a 30-minute call, and we'll give you a fixed quote for your actual project." },
    ],
    related: [
      { label: "MVP pricing", href: "/mvp" },
      { label: "How we price", href: "/services#pricing" },
      { label: "What app maintenance actually involves", href: "/insights/app-maintenance-costs" },
    ],
  },
  {
    slug: "nonprofit-app-developer-checklist",
    title: "Choosing an app developer for a nonprofit: a checklist",
    seoTitle: "Choosing an App or Website Developer for a Nonprofit: A Practical Checklist",
    description:
      "A practical checklist for nonprofits hiring a developer for an app or website: ownership, accessibility, budgets that match grants, texting consent, privacy and what to ask in the proposal.",
    published: "2026-11-04",
    updated: "2026-11-04",
    readMinutes: 7,
    body: [
      { p: "Nonprofits hire developers under unusual constraints: grant timelines, board approvals, people with every level of digital access, and very little room for a project that goes sideways. We read a lot of nonprofit RFPs and build mission-driven software ourselves. This is the checklist we'd want a nonprofit to use on us." },
      { h2: "1. You own everything" },
      {
        ul: [
          "The code lives in a repository your organization owns.",
          "The app is published under your own App Store and Google Play accounts, not the developer's.",
          "Domains, hosting and third-party services are in your accounts, paid at cost.",
          "Ask: \"If we part ways, what do we have to do to keep running?\" The right answer is \"nothing.\"",
        ],
      },
      { h2: "2. Accessibility is built in, not bolted on" },
      {
        ul: [
          "Ask which standard they test against (WCAG 2.1 or 2.2 Level AA is typical) and how: automated scans plus manual keyboard and screen-reader testing.",
          "Avoid \"accessibility overlay\" widgets as the fix. Problems should be fixed in the code and templates.",
          "Ask for an example where they made something accessible, and what they changed.",
        ],
      },
      { h2: "3. The budget matches how you're funded" },
      {
        ul: [
          "Fixed prices per phase you can match to a grant period or board approval.",
          "Pass-through costs (hosting, texting, store fees) listed separately, so recurring costs are visible to your finance team.",
          "Year-two costs quoted up front: updates, store requirements, support.",
        ],
      },
      { h2: "4. Texting and notifications respect consent" },
      {
        ul: [
          "Explicit opt-in per purpose, recorded with time and wording; STOP and HELP handled automatically.",
          "Carrier registration for text messages (10DLC in the US) planned early, because approval can take weeks.",
          "A clear rule for when to use push notifications versus SMS.",
        ],
      },
      { h2: "5. Privacy fits the people you serve" },
      {
        ul: [
          "Collect only what each step needs; let people browse without an account.",
          "Role-based staff access, audit logs, encryption in transit and at rest.",
          "Retention and deletion rules agreed before launch.",
          "If your RFP asks about AI tools, expect a straight answer about how the developer uses them and a commitment not to put your confidential data into third-party tools without approval.",
        ],
      },
      { h2: "6. The team is honest about its size and experience" },
      {
        ul: [
          "Small teams can be a strength (you work with the person doing the work) but ask about continuity: who covers vacations, and is everything documented and in your accounts?",
          "Ask for comparable work and references, and check them.",
          "Be wary of anyone who claims experience in your exact field without examples.",
        ],
      },
      { h2: "7. Questions to put in your RFP" },
      {
        ul: [
          "Who owns the code, data, accounts and store listings?",
          "What accessibility standard do you test against, and how?",
          "What are the one-time, recurring and usage-based costs over three years?",
          "What happens after launch: response times, updates, release cadence?",
          "Which subcontractors would touch our data?",
          "What insurance does the contract require? Say so in the RFP, because it rules some vendors in or out early.",
        ],
      },
      { h2: "Start with a plan" },
      { p: "Our free planning worksheet helps you put the goals, users, must-haves and budget on one page before you talk to developers, and it makes every proposal you receive easier to compare." },
    ],
    related: [
      { label: "Apps and websites for nonprofits", href: "/services/nonprofit-app-development" },
      { label: "Case studies", href: "/case-studies" },
      { label: "How much does a custom app cost?", href: "/insights/how-much-does-a-custom-app-cost" },
    ],
  },
  {
    slug: "app-maintenance-costs",
    title: "What app maintenance actually involves (and what it costs)",
    seoTitle: "What App Maintenance Actually Involves, and What It Costs",
    description:
      "What keeping an iOS, Android or web app alive really takes after launch: yearly store requirements, security updates, monitoring and small fixes, and how to budget for it.",
    published: "2026-11-04",
    updated: "2026-11-04",
    readMinutes: 6,
    body: [
      { p: "Launch day feels like the finish line, but an app is more like a car than a building: it needs regular service or it stops running. We maintain our own apps in the App Store and Google Play (one has been there since 2017), so this is the list we work through ourselves every year." },
      { h2: "The yearly store requirements" },
      { p: "Google Play requires apps to target a recent Android version every year; apps that fall behind can't publish updates and become harder to find. Apple requires new builds to use a recent SDK. Neither deadline is optional, and both usually mean updating libraries, fixing whatever the update breaks, testing on new devices, and resubmitting through review." },
      { h2: "Security and dependency updates" },
      { p: "Every app is built on dozens of open-source libraries and services. They release security fixes constantly. Keeping up means updating on a schedule, testing before release, and reacting quickly when a serious vulnerability lands. The same goes for WordPress sites, where plugins are the most common way in for attackers." },
      { h2: "Monitoring and fixes" },
      {
        ul: [
          "Crash reporting and uptime alerts, so problems are caught before customers report them.",
          "Backups that are actually tested.",
          "Store console upkeep: policy changes, data-safety forms, developer-account notices that arrive with deadlines.",
          "Small bugs that appear as new phones and OS versions ship.",
        ],
      },
      { h2: "Small improvements" },
      { p: "Most apps also need a steady trickle of small changes: wording, a new field, a report, an integration that changed its API. Budgeting a few hours a month for this keeps the app useful instead of slowly falling behind." },
      { h2: "What it costs" },
      { p: "Costs scale with how complex the app is and how often it changes. Hosting for a simple site starts around $40 a month with us. Apps are usually best on a monthly plan with a set number of included hours, sized to the app after a short review, rather than paying for emergencies one at a time. Store fees are separate: $99 a year for Apple and a one-time $25 for Google Play." },
      { h2: "Signs your app needs attention now" },
      {
        ul: [
          "You've received a Google Play \"target API level\" or Apple SDK notice.",
          "The original developer is gone and nobody has the accounts or the code.",
          "Reviews mention crashes on newer phones.",
          "The app hasn't had an update in over a year.",
        ],
      },
      { h2: "We can take it over" },
      { p: "If someone else built your app and it needs a home, we start with a short review of the code, accounts and hosting, tell you what we found, and then put it on a plan." },
    ],
    related: [
      { label: "App maintenance and support", href: "/services/app-maintenance-support" },
      { label: "How much does a custom app cost?", href: "/insights/how-much-does-a-custom-app-cost" },
      { label: "How we take over an existing app", href: "/case-studies/taking-over-an-app" },
    ],
  },

  {
    slug: "app-developer-disappeared",
    title: "Your app developer disappeared. Here's what to do next",
    seoTitle: "App Developer Disappeared? What to Do Next (A Practical Checklist)",
    description:
      "Your developer or agency stopped answering and the app still has users. Here's the order to work in: secure the accounts, get the code, check what's running, then decide who takes it over.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 6,
    body: [
      { p: "It happens more often than people admit. The freelancer takes a full-time job, the agency folds, or the friend who built it gets busy. The app keeps running for a while, until a store deadline, an expired card or a broken login turns it into an emergency. We've picked up products built by other teams, and the order below is the one that keeps the risk lowest." },
      { h2: "1. Find out which accounts exist, and who owns them" },
      { p: "Before anything else, make a list. The question for each one is the same: is it in your company's name, or the developer's?" },
      {
        ul: [
          "Apple Developer account and App Store Connect (iOS apps)",
          "Google Play Console (Android apps)",
          "The domain registrar and DNS",
          "Hosting and cloud accounts (for example Vercel, AWS, Google Cloud, Firebase, Hostinger)",
          "The code repository (GitHub, GitLab, Bitbucket)",
          "Payments (Stripe, RevenueCat) and email sending services",
          "Analytics, crash reporting and any paid APIs the app calls",
        ],
      },
      { p: "Anything in your company's name is safe. Anything in the developer's personal name is the real risk, because if their card expires or they close the account, your app goes with it." },
      { h2: "2. Move what you can into your own name" },
      { p: "Apple and Google both have official ways to move an app from one developer account to another (App Transfer in App Store Connect, and an app transfer request in Play Console), so you don't lose your listing, reviews or users. Domains can be moved to a registrar account you control with a transfer code. Cloud and repository accounts usually let the current owner add you as an owner or admin. If the developer is reachable but slow, these are the few requests worth chasing, ideally in writing." },
      { h2: "3. Get a copy of the code" },
      { p: "Ask for repository access, not a zip file. A repository has the history, and the history shows what was changed recently and why. If all you can get is a zip, take it: a working copy is far better than none." },
      { h2: "4. Check what's actually running" },
      {
        ul: [
          "Does the live app match the code you were given? (It often doesn't.)",
          "Are there store notices waiting, like a Google Play target-API deadline or an Apple SDK requirement?",
          "Are backups running, and has anyone ever restored one?",
          "Are passwords, API keys or secrets sitting in the code where they shouldn't be?",
          "What is each service costing per month, and is any of it unused?",
        ],
      },
      { h2: "5. Decide who takes it over" },
      { p: "Whoever you hire next should start with a short, read-only review before changing anything, then tell you plainly what works, what's risky and what to fix first, with a fixed price for the fixes. Be wary of anyone who recommends a full rebuild before they've read the code. Sometimes a rebuild is right, but it should be a conclusion, not an opening line." },
      { h2: "How we handle it" },
      { p: "We took over BookReverb's existing codebase and now lead all of its development, and we run our own apps in both stores. If your developer has gone quiet, we can start with the review and then keep the app running on a monthly care plan, with every account kept in your name." },
    ],
    related: [
      { label: "How we take over an existing app", href: "/case-studies/taking-over-an-app" },
      { label: "Monthly care plans", href: "/care-plans" },
      { label: "What app maintenance involves", href: "/insights/app-maintenance-costs" },
    ],
  },
  {
    slug: "ai-built-app-checklist",
    title: "Built your app with AI tools? Check these before real customers use it",
    seoTitle: "AI-Built App Checklist: What to Check Before Real Customers Use It",
    description:
      "AI coding tools can get an app to a working demo fast. Before paying customers rely on it, check access rules, secrets, payments, backups, monitoring and store requirements.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 6,
    body: [
      { p: "AI coding tools are genuinely good at getting from an idea to something that works on your screen. We use them every day, under developer review. The gap is usually not the features. It's the parts nobody sees in a demo: who can read whose data, what happens when a payment fails, and what happens at 2 a.m. when something breaks. Here's the list we'd go through before real customers depend on it." },
      { h2: "Who can see whose data" },
      { p: "This is the most common serious problem. Apps built quickly often check permissions only in the screens, not on the server or in the database rules, so a curious user can read or change other people's records. Test it directly: sign in as one user and try to load another user's data. If your app uses Firebase or Supabase, read the security rules line by line." },
      { h2: "Secrets in the wrong place" },
      { p: "API keys for paid services (AI models, email, maps, payments) must live on the server, not in the app or the website's code, where anyone can copy them. A leaked key for a paid API can turn into a large bill within hours. Set spending limits and budget alerts on every paid service while you're at it." },
      { h2: "Payments that hold up" },
      {
        ul: [
          "Upgrades, cancellations and refunds are driven by the payment provider's webhooks, not by what the app says happened.",
          "Failed renewals and expired cards are handled, not just the happy path.",
          "There's one source of truth for who has paid, and support can look it up.",
        ],
      },
      { h2: "Backups you've actually restored" },
      { p: "Turn on automatic backups for the database and file storage, then restore one into a test copy. A backup nobody has restored is a hope, not a plan." },
      { h2: "Knowing when it breaks" },
      { p: "Add crash reporting and uptime alerts that reach a person, plus basic logs you can search. Without them, your customers become your monitoring, and they usually just leave." },
      { h2: "Store and platform rules" },
      { p: "Apps in the App Store and Google Play have to keep up with yearly SDK and target-API requirements, privacy forms and review guidelines. Web apps need dependency and security updates. None of this is hard, but it never stops, so it needs an owner." },
      { h2: "Getting a second pair of eyes" },
      { p: "If you built the app yourself, or with a developer who has moved on, a short review is usually enough to find the issues above and size the fixes. We do that review, fix what matters at a fixed price, and can keep the app running afterwards on a monthly plan." },
    ],
    related: [
      { label: "How we take over an existing app", href: "/case-studies/taking-over-an-app" },
      { label: "Monthly care plans", href: "/care-plans" },
      { label: "Your app developer disappeared: what to do next", href: "/insights/app-developer-disappeared" },
    ],
  },

  {
    slug: "wordpress-maintenance-checklist",
    title: "WordPress maintenance: what a monthly plan should actually include",
    seoTitle: "WordPress Maintenance Checklist: What a Monthly Plan Should Include",
    description:
      "A plain checklist for keeping a WordPress site safe and current: updates tested before they go live, backups you can restore, malware and uptime checks, and time for small edits. Plus what to ask before you pay for a plan.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 5,
    body: [
      { p: "Most small-business and nonprofit websites run on WordPress, and most of them are fine until the day they aren't: a plugin update breaks the layout, a form stops sending, or the site starts redirecting visitors somewhere unpleasant. Nearly all of that is preventable with a little routine work each month. Here's what that routine should cover, whoever does it." },
      { h2: "Updates, tested before they go live" },
      { p: "WordPress core, the theme and every plugin release updates often, and many of them are security fixes. Out-of-date plugins are the most common way WordPress sites get broken into. The catch is that updates sometimes conflict with each other, so good maintenance means updating on a schedule and checking the site afterwards (forms, menus, checkout if you have one) rather than switching on auto-update and hoping." },
      { h2: "Backups you can actually restore" },
      {
        ul: [
          "Daily backups of the database and files, stored somewhere other than the server itself.",
          "Kept long enough to go back before a problem started (a few weeks, not a few days).",
          "Restored into a test copy now and then, to prove they work.",
        ],
      },
      { h2: "Security and uptime checks" },
      { p: "A malware scan and an uptime monitor catch problems before your visitors do. Remove plugins and admin accounts nobody uses, and make sure every admin has a strong password. Those two steps close a surprising number of doors." },
      { h2: "Time for small changes" },
      { p: "Most sites need a trickle of edits: new photos, an updated price, a staff change, a new page for an event. A plan with a small block of included time each month is usually cheaper and faster than quoting each change separately." },
      { h2: "Questions to ask before you pay for a plan" },
      {
        ul: [
          "Are updates tested before they go live, or just applied automatically?",
          "Where are backups stored, and when was one last restored?",
          "How many hours of changes are included, and what happens if I need more?",
          "How fast do you reply, and on which days?",
          "Are the hosting, domain and admin accounts in my name?",
          "Can I cancel any time?",
        ],
      },
      { h2: "What we offer" },
      { p: "Our Care plan covers all of the above for $129 a month: tested monthly updates, malware scanning and uptime monitoring, an hour a month of small changes, and replies within 2 business days. It's month to month, with accounts kept in your name. If you only need hosting, that starts at $40 a month." },
    ],
    related: [
      { label: "Monthly care plans", href: "/care-plans" },
      { label: "What app maintenance involves", href: "/insights/app-maintenance-costs" },
      { label: "Your app developer disappeared: what to do next", href: "/insights/app-developer-disappeared" },
    ],
  },

  {
    slug: "google-play-target-api-requirement",
    title: "Google Play's target API rule: why your Android app can't be updated (2026)",
    seoTitle: "Google Play Target API Level Requirement 2026: What App Owners Need to Do",
    description:
      "Since August 31, 2026, Google Play only accepts new apps and updates that target Android 16 (API level 36), and older apps lose visibility on newer phones. Here's what that means for your app and how it gets fixed.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 5,
    body: [
      { p: "Every year Google raises the minimum Android version that apps on Google Play must be built for, called the target API level. App owners usually find out when their developer can't upload a fix, or when a warning lands in Play Console. We update our own Android apps for this every year, so here's the plain version." },
      { h2: "The 2026 rule" },
      {
        table: {
          head: ["What", "Requirement (from Google Play's target API page)"],
          rows: [
            ["New apps and app updates (phones and tablets)", "Must target Android 16 (API level 36) or higher, from August 31, 2026"],
            ["Existing apps", "Must target Android 15 (API level 35) or higher to stay available to new users on devices running a newer Android version"],
          ],
        },
      },
      { p: "Other form factors (Wear OS, Android TV, Automotive, XR) have their own, lower minimums. Google's official target API page is the source of truth, and Play Console shows the exact status for your app." },
      { h2: "What happens if your app is behind" },
      {
        ul: [
          "You can't publish updates, including bug fixes and security patches, until the app targets the required level.",
          "If it's below the existing-app minimum, new users on newer phones can't find or install it. People who already have it can usually keep using it.",
          "Each year you skip makes the next update bigger, because libraries and tools move on together.",
        ],
      },
      { h2: "Why it isn't just a version number" },
      { p: "Raising the target level changes how Android treats your app: permissions, notifications, background work, file access and screen layout rules all tighten. In practice that means updating the app's libraries, fixing whatever the new rules break, testing on real devices, and resubmitting. For a well-kept app it's usually a modest job. For an app nobody has touched in two or three years, it can be a small project." },
      { h2: "What to do now" },
      {
        ul: [
          "Open Play Console and check the app's target API status and any policy notices.",
          "Make sure you (not only a former developer) have owner access to the Play Console account.",
          "Get the current code. Without it, nobody can rebuild the app.",
          "Have a developer estimate the update before starting, so there are no surprises.",
        ],
      },
      { h2: "How we handle it" },
      { p: "Our Care Plus plan includes the yearly Google Play target-API and Apple SDK updates, with store resubmission, so this stops being an annual scramble. If your app is already behind, we start with a short review and a fixed quote for getting it current." },
    ],
    related: [
      { label: "Monthly care plans", href: "/care-plans" },
      { label: "What app maintenance involves", href: "/insights/app-maintenance-costs" },
      { label: "Production health check", href: "/services/production-health-check" },
    ],
  },

  {
    slug: "apple-xcode-26-sdk-requirement",
    title: "Apple's 2026 SDK rule: why your iPhone app update gets rejected at upload",
    seoTitle: "Apple Xcode 26 / iOS 26 SDK Requirement (2026): What App Owners Need to Do",
    description:
      "Since late April 2026, App Store Connect only accepts builds made with Xcode 26 or later against the iOS 26 SDK. Here's what that means for an app that hasn't been updated in a while.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 4,
    body: [
      { p: "Apple, like Google, moves the floor every year. This year's rule, from Apple's \"upcoming requirements\" page: apps uploaded to App Store Connect must be built with Xcode 26 or later, using the iOS 26 SDK (or the matching iPadOS, tvOS, visionOS or watchOS 26 SDK). It has applied to uploads since late April 2026." },
      { h2: "What it does, and what it doesn't" },
      {
        ul: [
          "It controls the tools your app is built with, not which iPhones it supports. An app built with the iOS 26 SDK can still run on older iOS versions, if it's set up to.",
          "It applies when a new build is uploaded. Your current version stays on the App Store, but you can't ship a fix or a new feature until the app builds with the new tools.",
          "Builds made with older Xcode versions are refused at upload, before App Review ever sees them.",
        ],
      },
      { h2: "Why an old app can take real work" },
      { p: "Moving to a new Xcode and SDK usually pulls in newer versions of the app's libraries and frameworks (React Native, Expo, Flutter or native dependencies), and those updates can break things that have nothing to do with Apple. An app that's been updated every year usually has a modest job ahead. One that's two or three versions behind can need a proper upgrade project first." },
      { h2: "What to check" },
      {
        ul: [
          "Who has Account Holder or Admin access to your Apple Developer account and App Store Connect? If it's only a former developer, fix that first.",
          "When was the last build uploaded, and with which Xcode version?",
          "Do you have the current source code and signing setup?",
          "Are there other notices waiting in App Store Connect, such as privacy details or agreements to accept?",
        ],
      },
      { h2: "How we handle it" },
      { p: "We keep our own apps current with Apple's SDK requirements every year, and our Care Plus plan includes this for client apps, with resubmission. If your app has fallen behind, we start with a short review and a fixed quote for bringing it up to date." },
    ],
    related: [
      { label: "Google Play's 2026 target API rule", href: "/insights/google-play-target-api-requirement" },
      { label: "Monthly care plans", href: "/care-plans" },
      { label: "Production health check", href: "/services/production-health-check" },
    ],
  },
  {
    slug: "transfer-app-to-your-own-developer-account",
    title: "How to move your app into your own Apple and Google accounts",
    seoTitle: "How to Transfer an App to Your Own Apple or Google Play Developer Account",
    description:
      "If your iOS or Android app is published under a developer's or agency's account, you can move it to your own without losing the listing, reviews or users. Here's how the process works and what to prepare.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 5,
    body: [
      { p: "A lot of business apps are published under the developer's account instead of the owner's. That works until the developer moves on. Both Apple and Google have official ways to move an app to a different account while keeping its store listing, reviews and existing users, so you don't have to publish a new app and start over. The details change from time to time, so use each platform's official help page as the final word. This is the shape of it." },
      { h2: "Before you start" },
      {
        ul: [
          "Create your own developer accounts in your company's name: Apple Developer Program ($99 a year) and Google Play Console (a one-time $25 fee). Finish the verification and tax and banking details, which can take a few days.",
          "Get the current source code and confirm someone can still build the app. A transferred app you can't update isn't worth much.",
          "List the services attached to the app (sign-in, push notifications, payments, analytics), because some of them are tied to the developer account and need updating after the move.",
        ],
      },
      { h2: "Apple (App Store Connect)" },
      { p: "Apple calls this an App Transfer. The Account Holder of the current account starts it in App Store Connect and names the receiving account, and the Account Holder of the receiving account accepts it. Apple lists criteria an app must meet to be transferable, so check Apple's \"App transfer\" help page first. Ratings, reviews and the app's existing users move with it." },
      { h2: "Google Play" },
      { p: "Google supports moving apps between Play Console developer accounts too. Both accounts need to be active and in good standing, and the request is reviewed. Google's help page \"Transfer apps to a different developer account\" describes the current steps and what moves with the app." },
      { h2: "After the move" },
      {
        ul: [
          "Re-check in-app purchases and subscriptions, and update any purchase tools (for example RevenueCat) to the new account's credentials.",
          "Update push notification keys, sign-in configuration and signing certificates where they were tied to the old account.",
          "Make a small test release, so you know the new account can actually ship updates.",
        ],
      },
      { h2: "We can do the legwork" },
      { p: "We publish and maintain our own apps in both stores. If your app is stuck under someone else's account, we can plan the transfer, handle the technical clean-up afterwards, and keep it current on a care plan with every account in your name." },
    ],
    related: [
      { label: "Your app developer disappeared: what to do next", href: "/insights/app-developer-disappeared" },
      { label: "How we take over an existing app", href: "/case-studies/taking-over-an-app" },
      { label: "Monthly care plans", href: "/care-plans" },
    ],
  },

  {
    slug: "custom-crm-vs-off-the-shelf",
    title: "Custom CRM or off-the-shelf? How to tell which one you need",
    seoTitle: "Custom CRM vs Off-the-Shelf CRM: How to Decide (and What Custom Costs)",
    description:
      "Off-the-shelf CRMs fit most businesses. A custom CRM makes sense when your workflow is the product, when you're paying for five tools that don't talk, or when per-seat fees outgrow the value. Here's how to decide.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 6,
    body: [
      { p: "We build custom CRMs (LaurelCRM for Laurel Medical, built in 2023 and still being extended, and TaskMerit for landscaping and snow-removal companies), and we still tell most people to start with an off-the-shelf tool. Here's the honest way to decide." },
      { h2: "Start off-the-shelf if…" },
      {
        ul: [
          "Your sales process looks like most sales processes: leads, deals, follow-ups, a pipeline.",
          "You have a handful of users, and per-seat pricing is a small line item.",
          "You don't have someone who'll own the system, or a budget to maintain software.",
          "You haven't run the process long enough to know exactly what you need.",
        ],
      },
      { h2: "Consider custom when…" },
      {
        ul: [
          "Your workflow is unusual and central to the business: properties instead of contacts, jobs and crews instead of deals, regulated records, field work.",
          "The team lives in spreadsheets and text threads because the CRM doesn't fit, so the expensive tool is barely used.",
          "You're paying for several tools that don't talk to each other, and someone re-types data between them every day.",
          "Per-seat fees and add-ons have grown past what a system you own would cost to build and maintain.",
          "You need customers or partners to log in (a portal) with exactly the access you decide.",
        ],
      },
      { h2: "What custom actually costs" },
      { p: "Every project is different, but from the quotes we've sent: small custom systems have mostly landed between about $8,000 and $20,000, and larger multi-milestone business systems with portals and integrations have been quoted around $50,000 to $60,000. After launch, budget for hosting and a monthly maintenance plan. Software you own still needs updates." },
      { h2: "A middle path" },
      { p: "Often the best answer is to keep the off-the-shelf CRM for what it does well and build a small custom piece around it: a dashboard that pulls from it, a portal for customers, or an integration that removes the re-typing. That's faster and cheaper than replacing everything." },
      { h2: "Questions to answer before you build" },
      {
        ul: [
          "Which three things do people do every day that the current tool makes painful?",
          "Who owns the system after launch, and who decides what changes?",
          "What data has to come across from the old tools, and who checks it?",
          "Which integrations are must-haves (accounting, email, payments, maps)?",
        ],
      },
      { h2: "How we work" },
      { p: "We start with a free call, then a fixed quote paid by milestone, with the first milestone being one workflow done well. You own the code and the data, and we can maintain it afterwards on a monthly plan." },
    ],
    related: [
      { label: "Custom CRMs and dashboards", href: "/services/custom-crm-dashboards" },
      { label: "How much does a custom app cost?", href: "/insights/how-much-does-a-custom-app-cost" },
      { label: "Monthly care plans", href: "/care-plans" },
    ],
  },

  {
    slug: "small-business-nonprofit-website-cost",
    title: "What a small business or nonprofit website costs in 2026",
    seoTitle: "How Much Does a Small Business or Nonprofit Website Cost in 2026?",
    description:
      "Honest ranges for a custom small business or nonprofit website, what drives the price up or down, and what it costs each month after launch, from a studio that builds and hosts them.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 5,
    body: [
      { p: "There are three very different things people call \"a website\": a do-it-yourself builder site you set up yourself, a template site a freelancer customizes, and a custom site designed and built around your organization. All three can be the right answer. Here's what each one involves and what we see custom sites actually cost." },
      { h2: "The three options" },
      {
        table: {
          head: ["Option", "Good for", "Watch out for"],
          rows: [
            ["DIY builder (a monthly subscription)", "A simple brochure site you're happy to update yourself", "Your time, design limits, and features that get locked behind higher tiers"],
            ["Customized template", "A modest budget and a standard layout", "Plugin sprawl, and nobody responsible for updates afterwards"],
            ["Custom design and build", "Organizations with real content, forms, donations or integrations, or accessibility requirements", "It costs more up front, so it needs a clear scope"],
          ],
        },
      },
      { h2: "What a custom site costs with us" },
      { p: "From the quotes we've sent over the past year, small custom websites and apps have mostly landed between about $8,000 and $20,000, with a fixed quote agreed before work starts and payments split by milestone. Very small, focused projects can come in under that. Large sites with portals or complex integrations go above it." },
      { h2: "What moves the price" },
      {
        ul: [
          "How many distinct page types there are (not how many pages: ten news posts share one design).",
          "Custom design versus adapting an existing look.",
          "Integrations: donations, events, newsletters, CRM, payments, booking.",
          "Accessibility to WCAG 2.2 AA, which nonprofits and public-facing organizations increasingly need. We build to it from the start rather than fixing it later.",
          "Moving content from an old site, and who writes the new words.",
          "How easily staff need to edit it without a developer.",
        ],
      },
      { h2: "What it costs after launch" },
      { p: "Every website needs hosting, security updates and the occasional change. With us, hosting starts at $40 a month, and the Care plan at $129 a month adds tested monthly updates, malware and uptime monitoring, and an hour of small changes each month. Domains and any paid plugins are billed at cost, in accounts you own." },
      { h2: "How to get an accurate number" },
      {
        ul: [
          "List the pages and the three or four things visitors most need to do.",
          "Note the tools it must connect to.",
          "Decide who will update it, and how often.",
          "Ask every vendor for a fixed quote, what's excluded, and who owns the accounts.",
        ],
      },
      { p: "If you'd like a fixed quote, book a free call. We'll tell you plainly if a builder site would serve you better." },
    ],
    related: [
      { label: "Website design and development", href: "/services/websites" },
      { label: "WordPress maintenance checklist", href: "/insights/wordpress-maintenance-checklist" },
      { label: "Monthly care plans", href: "/care-plans" },
    ],
  },

  {
    slug: "firebase-security-rules-mistakes",
    title: "Firebase security rules: the mistakes we keep finding in live apps",
    seoTitle: "Firebase Security Rules Mistakes in Live Apps (and How to Fix Them)",
    description:
      "Firestore and Firebase Storage rules are the only thing standing between your users' data and anyone with your app's config. These are the mistakes we see most often in apps built quickly, and how to check yours.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 6,
    body: [
      { p: "Firebase is a great way to ship fast. We run several of our own apps on it, and we've taken over client apps built on it. But with Firebase, the app talks to the database directly, so the security rules are the only lock on the door. The config values in your app aren't secret. Anyone can read them and call your database. Here's what we check first." },
      { h2: "1. Rules left in test mode" },
      { p: "Projects often start with rules that allow all reads and writes, sometimes with an expiry date someone extends rather than fixes. If your rules contain something like allow read, write: if true; (or a date check that keeps getting pushed back), every record is public." },
      { h2: "2. \"Signed in\" treated as \"allowed\"" },
      { p: "A rule that only checks request.auth != null lets any signed-up user read every other user's data. Most apps need the rule to compare the signed-in user's ID with the owner of the document (or their team or organization), not just check that someone is signed in." },
      { h2: "3. Users can edit fields they shouldn't" },
      { p: "If a user can update their own profile document, can they also change their role, plan, credits or isAdmin flag? Rules should limit which fields a user may change, and anything tied to payments or permissions should only be written by your server." },
      { h2: "4. Storage rules forgotten" },
      { p: "Firestore gets attention and Cloud Storage doesn't. Uploaded files (documents, photos, exports) often sit under rules that let any signed-in user read any path. Mirror your Firestore ownership checks in Storage." },
      { h2: "5. Server-only collections readable by the app" },
      { p: "Payment records, admin notes, internal logs and API keys stored in Firestore for a server function should be closed to the app entirely. Only the Admin SDK on your server should touch them." },
      { h2: "How to check your app" },
      {
        ul: [
          "Read the rules file line by line, together with a list of every collection and storage path the app uses.",
          "Test from a second account: try to read and write another user's documents and files.",
          "Use the Firebase emulator and rules unit tests so a later change can't quietly reopen a hole.",
          "Turn on budget alerts and App Check, which makes abuse with your config harder and noisier.",
        ],
      },
      { h2: "Want a second pair of eyes?" },
      { p: "Our Production health check is a one-week, read-only review for a fixed $990. Data access rules are the first thing on the list, followed by exposed keys, payments, backups and monitoring. You get a ranked fix list with a fixed price for each fix." },
    ],
    related: [
      { label: "Production health check", href: "/services/production-health-check" },
      { label: "Built your app with AI tools? What to check", href: "/insights/ai-built-app-checklist" },
      { label: "Monthly care plans", href: "/care-plans" },
    ],
  },
  {
    slug: "stripe-subscription-failed-payments",
    title: "Stripe subscriptions: handling failed payments without losing customers",
    seoTitle: "Stripe Subscriptions: How to Handle Failed Payments and Webhooks Properly",
    description:
      "Failed renewals quietly cost subscription businesses customers. Here's how to set up Stripe so access, retries and emails follow what actually happened to the payment, from a studio that runs paid subscriptions itself.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 6,
    body: [
      { p: "We run our own paid subscription products on Stripe and build billing for clients, and the same problems come up again and again. Cards expire, banks decline renewals, and the app either cuts people off too early or lets them use it unpaid for months. Most of it comes down to one rule." },
      { h2: "The rule: Stripe is the source of truth" },
      { p: "Your app shouldn't decide on its own who has paid. It should react to Stripe's webhooks (events like a subscription being created, updated or deleted, or an invoice being paid or failing) and store the result. The checkout page saying \"success\" isn't enough: payments can still fail, be disputed or be refunded later." },
      { h2: "Get the webhooks right" },
      {
        ul: [
          "Verify every webhook's signature, so nobody can fake a \"paid\" event.",
          "Handle events more than once safely (Stripe retries), and in any order.",
          "Store the subscription status, the current period's end and the plan on your user record, and grant access from that.",
          "Log every event you receive, so support can answer \"why was I cut off?\" in a minute.",
        ],
      },
      { h2: "Let Stripe retry before you cut access" },
      { p: "Stripe can retry failed renewals automatically over several days, and it can email customers to update their card. Turn those on, and decide how your app behaves while a payment is past due: usually keep access for a short grace period with a clear in-app banner, then restrict it. Cutting people off on the first failed charge loses customers whose card simply expired." },
      { h2: "Make updating a card easy" },
      { p: "Stripe's hosted customer portal lets customers update their card, change plans or cancel without you building any of it. Link to it from your app's billing page and from your failed-payment emails." },
      { h2: "Check the edge cases" },
      {
        ul: [
          "Upgrades and downgrades in the middle of a billing period (proration).",
          "Free trials that end without a card on file.",
          "Refunds and disputes: does access change, and should it?",
          "Usage-based charges with a monthly cap, if you meter usage.",
        ],
      },
      { h2: "How we can help" },
      { p: "If your billing logic was built quickly, our Production health check reviews payments alongside data access, backups and monitoring for a fixed $990, and gives you a fixed price to fix what's wrong." },
    ],
    related: [
      { label: "Production health check", href: "/services/production-health-check" },
      { label: "Web apps and SaaS", href: "/services" },
      { label: "Monthly care plans", href: "/care-plans" },
    ],
  },

  {
    slug: "firebase-bill-spike",
    title: "Why your Firebase bill spiked, and how to keep it under control",
    seoTitle: "Firebase Bill Spiked? Common Causes and How to Control Costs on Blaze",
    description:
      "On Firebase's pay-as-you-go Blaze plan, a budget alert tells you about spending but doesn't stop it. Here are the usual causes of surprise bills and the settings that keep costs predictable.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 5,
    body: [
      { p: "Firebase is cheap for most small apps until, one month, it isn't. We run several apps on Firebase and Google Cloud and keep budget and forecast alerts on every billed project, because surprises do happen. Here's what usually causes them and what actually limits them." },
      { h2: "First, know what a budget does (and doesn't)" },
      { p: "A Google Cloud budget on the Blaze plan sends alerts. On its own it doesn't stop spending. Firebase's documentation describes separate spend caps for a few services (Cloud Functions, App Hosting, Firebase AI Logic and Extensions), and anything beyond those needs either code that reacts to the alert or a person who acts on it quickly. Check Firebase's current \"spend caps\" and \"budget alerts\" pages for your project." },
      { h2: "The usual causes" },
      {
        ul: [
          "Database reads that grow with every user: screens that listen to a whole collection, or queries without limits, so each open app re-reads thousands of documents.",
          "A loop: a Cloud Function that writes to the same data that triggers it, running over and over.",
          "An API key used for something it shouldn't be. Keys shipped in an app can be copied, and if they're allowed to call paid APIs (AI models, maps) someone else can run up your bill.",
          "Bots or scrapers hammering an unauthenticated endpoint.",
          "Storage downloads of large images with no caching or resizing.",
        ],
      },
      { h2: "Settings that keep it predictable" },
      {
        ul: [
          "Budget and forecast alerts on every billed project, going to someone who will act on them.",
          "Spend caps on the services that support them.",
          "API key restrictions: limit each key to the specific APIs and apps it needs.",
          "App Check, so only your real app can call your backend.",
          "Query limits, pagination and caching in the app, so a busy day doesn't multiply reads.",
          "A monthly look at the usage graphs, not just the invoice.",
        ],
      },
      { h2: "If it's happening right now" },
      { p: "Find the service and the day the spike started in the billing reports, restrict or rotate any key that might be misused, and fix the query or function causing it. If the cause was abuse of a leaked key, contact Google Cloud billing support about the charges." },
      { h2: "A second pair of eyes" },
      { p: "Our $990 Production health check reviews running costs, exposed keys and data access rules on a live app and gives you a ranked fix list with fixed prices." },
    ],
    related: [
      { label: "Firebase security rules mistakes", href: "/insights/firebase-security-rules-mistakes" },
      { label: "Production health check", href: "/services/production-health-check" },
      { label: "Monthly care plans", href: "/care-plans" },
    ],
  },
  {
    slug: "apple-developer-membership-expired",
    title: "Your Apple Developer membership expired. What happens to your app?",
    seoTitle: "Apple Developer Program Membership Expired: What Happens to Your App",
    description:
      "When the Apple Developer Program membership behind your app lapses, the app comes off the App Store until it's renewed. Here's what stops, what keeps working and how to avoid it.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 4,
    body: [
      { p: "The Apple Developer Program costs $99 a year, and it renews against whoever's card is on the account. When a former developer's card expires or they let the account lapse, the business behind the app is often the last to know." },
      { h2: "What happens when it lapses" },
      {
        ul: [
          "The app is taken off the App Store, so new people can't find or download it.",
          "People who already installed it can usually keep using it.",
          "Nobody can upload an update or a fix until the membership is active again.",
          "Access to certificates and developer tools stops, which can affect things like push notifications as certificates expire.",
        ],
      },
      { h2: "Getting it back" },
      { p: "The account's Account Holder renews it at developer.apple.com. In most cases the apps return once the membership and agreements in App Store Connect are active again, but developers regularly report hiccups: a missing renew button, or a status that stays \"expired\" after paying. If that happens, contact Apple Developer Support. If the Account Holder is a former developer you can't reach, that's the bigger problem to solve." },
      { h2: "How to avoid it" },
      {
        ul: [
          "Make sure the developer account is in your company's name, with you as Account Holder.",
          "Put the renewal on a company card and a calendar reminder a month ahead.",
          "If the app lives under someone else's account, move it to yours with Apple's App Transfer.",
          "Do the same check for Google Play Console, domains and hosting.",
        ],
      },
      { h2: "We can help" },
      { p: "If your app's accounts aren't in your name, we can plan the move and keep the app current on a care plan with everything in your name." },
    ],
    related: [
      { label: "Move your app into your own Apple and Google accounts", href: "/insights/transfer-app-to-your-own-developer-account" },
      { label: "Your app developer disappeared: what to do next", href: "/insights/app-developer-disappeared" },
      { label: "Monthly care plans", href: "/care-plans" },
    ],
  },
  {
    slug: "inherited-codebase-first-30-days",
    title: "Inheriting someone else's codebase: what to do in the first 30 days",
    seoTitle: "Inherited a Codebase? A First-30-Days Plan for a Live App",
    description:
      "Taking over an app another team built? The first month should be about understanding and making it safe, not rewriting. Here's the order we work in.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 6,
    body: [
      { p: "We've taken over live products built by other teams, and the temptation on day one is always the same: \"this would be easier to rewrite.\" Sometimes that's true, but you can't know until you understand what's there. This is the order we work in for the first month." },
      { h2: "Week 1: access and inventory" },
      {
        ul: [
          "Get admin access to the code repository, hosting, database, app stores, domain, payments and email services, in the owner's name.",
          "Write down every service the app uses and what it costs each month.",
          "Find out how the app is deployed today, and whether that can be done from a clean machine.",
          "Make and test a backup before touching anything.",
        ],
      },
      { h2: "Week 2: read before you write" },
      {
        ul: [
          "Run the app locally and make a small, harmless change end to end, from code to a test deploy.",
          "Map the data: what's stored where, and who can read and write it.",
          "Read the error logs and support inbox for the last few months. That's where the real problems are.",
          "List secrets and keys, and where each is stored.",
        ],
      },
      { h2: "Week 3: make it safe" },
      {
        ul: [
          "Add error reporting and uptime alerts if they're missing.",
          "Fix anything that exposes data or money: open database rules, leaked keys, payment logic that trusts the app instead of the payment provider.",
          "Clear any store or platform deadlines that are close.",
        ],
      },
      { h2: "Week 4: plan, with the owner" },
      { p: "Write up what works, what's risky and what to change first, each with an estimate. Then agree on a routine: how changes are reviewed, tested and released, and who approves production changes. Only now is it fair to talk about a rewrite, and usually the answer is to improve the parts that hurt and leave the rest." },
      { h2: "How we do it for clients" },
      { p: "Our $990 Production health check covers weeks one to three as a fixed-fee, read-only review with a ranked fix list. A care plan keeps it running afterwards." },
    ],
    related: [
      { label: "How we take over an existing app", href: "/case-studies/taking-over-an-app" },
      { label: "Production health check", href: "/services/production-health-check" },
      { label: "Your app developer disappeared", href: "/insights/app-developer-disappeared" },
    ],
  },
  {
    slug: "old-react-native-expo-app-upgrade",
    title: "Why an old React Native or Expo app won't build anymore (and what fixing it involves)",
    seoTitle: "Old React Native or Expo App Won't Build? What an Upgrade Involves",
    description:
      "If your React Native or Expo app hasn't been touched in a year or two, it may not build with the tools the App Store and Google Play now require. Here's why, and what upgrading usually takes.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 5,
    body: [
      { p: "Many small business apps are built with React Native or Expo, and that's a good choice: one codebase for iPhone and Android. We build and maintain several apps this way. The catch is that these frameworks, and the stores, move every year. An app left alone for a year or two often can't be rebuilt as-is." },
      { h2: "Why it stops building" },
      {
        ul: [
          "The stores raise their minimums yearly. Apple now requires builds made with recent Xcode and SDK versions, and Google Play requires a recent Android target API level for updates.",
          "Newer Xcode and Android tools drop support for older framework versions, so the old app's toolchain stops working.",
          "Third-party libraries (maps, payments, notifications, analytics) release breaking changes or stop supporting old versions.",
          "Build services retire old images over time.",
        ],
      },
      { h2: "What an upgrade usually involves" },
      {
        ul: [
          "Moving React Native or the Expo SDK forward, sometimes several versions, one step at a time.",
          "Updating or replacing libraries that no longer fit.",
          "Fixing what the new platform rules change: permissions, notifications, background tasks, screen sizes.",
          "Testing on real current devices, then resubmitting to both stores.",
        ],
      },
      { p: "For an app that's a version or two behind, this is usually a contained job. For one that's several years behind, it can be a small project, which is still almost always cheaper than a rewrite." },
      { h2: "Watch out for" },
      {
        ul: [
          "Release builds behaving differently from development builds. We've seen code shrinking on Android silently break notifications unless the right keep rules are added.",
          "Push notification and sign-in keys that live in an account nobody can access anymore.",
          "Store listings that need new privacy or data-safety answers before an update is accepted.",
        ],
      },
      { h2: "How we help" },
      { p: "We start with a short review and a fixed quote for getting the app current, then keep it current on our Care Plus plan, which includes the yearly store updates." },
    ],
    related: [
      { label: "Google Play's 2026 target API rule", href: "/insights/google-play-target-api-requirement" },
      { label: "Apple's 2026 SDK rule", href: "/insights/apple-xcode-26-sdk-requirement" },
      { label: "Monthly care plans", href: "/care-plans" },
    ],
  },

  {
    slug: "app-store-rejection-reasons",
    title: "Why Apple rejects apps: the guidelines small app owners run into most",
    seoTitle: "Why Apple Rejected Your App: Common App Store Review Guidelines Explained",
    description:
      "An App Store rejection names a guideline number. Here's what the ones small businesses hit most often (2.1, 2.3, 3.1.1, 4.2, 4.3 and 5.1.1) usually mean in practice, from a studio that has been on the receiving end.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 6,
    body: [
      { p: "We've had our own apps rejected, including for missing in-app purchases and for being too similar to other apps, so this list comes from experience as much as from Apple's App Review Guidelines. The rejection message always names a guideline. Here's what the common ones usually mean." },
      { h2: "2.1 App Completeness" },
      { p: "Apple found something unfinished or broken: a crash, a placeholder screen, a login reviewers can't get past, or in-app purchases that weren't submitted for review with the build. Give reviewers a working demo account in the review notes, and make sure every purchase product is attached to the version you submit." },
      { h2: "2.3 Accurate Metadata" },
      { p: "The listing doesn't match the app: screenshots of features that aren't there, a description that promises too much, or mentions of other platforms in the iOS listing. Keep the listing literal." },
      { h2: "3.1.1 In-App Purchase" },
      { p: "Digital goods and subscriptions used inside the app generally have to be sold through Apple's in-app purchase. Linking out to a web checkout for digital content is the classic trigger. Physical goods and real-world services are different." },
      { h2: "4.2 Minimum Functionality" },
      { p: "The app is too thin: essentially a website in a wrapper, or a single feature that doesn't need to be an app. Add native value such as offline use, notifications or device features, or reconsider whether a website is the better product." },
      { h2: "4.3 Spam" },
      { p: "The app looks too similar to others, including apps from the same developer, or to a saturated category. It's hard to argue your way out of. Real differentiation helps more than appeals do, and repeated rejections here can put a developer account at risk, so pace resubmissions carefully." },
      { h2: "5.1.1 Data Collection and Storage" },
      { p: "Privacy problems: asking for permissions without a clear reason, requiring an account for features that don't need one, no way to delete an account, or a privacy policy that doesn't match what the app collects." },
      { h2: "How to respond" },
      {
        ul: [
          "Read the full message in App Store Connect, including any attached screenshots.",
          "Fix the actual issue, then explain the change briefly in the reply or review notes.",
          "Use the reply thread to ask for clarification if the reason is unclear. Polite, specific questions get answers.",
          "Don't resubmit the same build hoping for a different reviewer.",
        ],
      },
      { h2: "We can help" },
      { p: "If an update keeps getting rejected, we can review the app and the rejection history and get it through properly. Our Care Plus plan includes store submissions." },
    ],
    related: [
      { label: "Apple's 2026 SDK rule", href: "/insights/apple-xcode-26-sdk-requirement" },
      { label: "Monthly care plans", href: "/care-plans" },
      { label: "Production health check", href: "/services/production-health-check" },
    ],
  },
  {
    slug: "wcag-accessibility-small-organizations",
    title: "Website accessibility (WCAG) for small organizations: what it means and where to start",
    seoTitle: "WCAG Website Accessibility for Small Businesses and Nonprofits: Where to Start",
    description:
      "What WCAG 2.1 and 2.2 AA ask of a website in plain terms, who has a legal deadline, and the practical fixes that matter most for small businesses, nonprofits and public bodies.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 6,
    body: [
      { p: "Accessibility means people using screen readers, keyboards, magnification or captions can use your site. The common yardstick is WCAG (the Web Content Accessibility Guidelines), at Level AA. We build to WCAG 2.2 AA from the start, and we've worked on sites with automated accessibility tests in their build pipeline. Here's the practical version." },
      { h2: "Who has a deadline" },
      { p: "State and local government bodies in the US are covered by the Justice Department's ADA Title II rule, which adopts WCAG 2.1 AA. After a 2026 extension, the compliance date for larger entities (serving 50,000 people or more) is April 26, 2027, and smaller ones have later dates. Check the rule for your situation. Private businesses and nonprofits don't have that specific deadline, but accessibility complaints and lawsuits under the ADA are common, and many grants and public contracts now ask for WCAG conformance." },
      { h2: "What WCAG asks, in plain terms" },
      {
        ul: [
          "Text alternatives: images that carry meaning have useful alt text.",
          "Keyboard access: everything works without a mouse, with a visible focus outline.",
          "Contrast and resizing: text is readable at normal contrast and when zoomed to 200%.",
          "Structure: real headings, lists and labels, so screen readers can navigate.",
          "Forms: each field has a label, and errors say what's wrong and how to fix it.",
          "Media: videos have captions; nothing flashes or auto-plays with sound.",
          "WCAG 2.2 adds things like large enough tap targets, focus that isn't hidden behind sticky headers, and logins that don't require solving puzzles or remembering codes.",
        ],
      },
      { h2: "Where to start" },
      {
        ul: [
          "Run a free automated checker on your key pages. It catches many common issues, but not all of them.",
          "Try your site with only a keyboard, then with your phone's screen reader.",
          "Fix the templates (header, navigation, forms, footer) first, since every page inherits them.",
          "Add an accessibility statement with a way to report problems.",
          "Make accessibility part of every update, not a one-off project.",
        ],
      },
      { h2: "A note on overlay widgets" },
      { p: "Plugins that promise instant compliance by adding a toolbar don't fix the underlying code, and they aren't a substitute for an accessible site." },
      { h2: "How we help" },
      { p: "We build new sites to WCAG 2.2 AA, can review an existing site, and keep it accessible on a monthly care plan." },
    ],
    related: [
      { label: "Website design and development", href: "/services/websites" },
      { label: "What a small business or nonprofit website costs", href: "/insights/small-business-nonprofit-website-cost" },
      { label: "Monthly care plans", href: "/care-plans" },
    ],
  },

  {
    slug: "how-to-write-a-website-rfp",
    title: "How to write a website or app RFP that gets good bids",
    seoTitle: "How to Write a Website or App RFP That Gets Good Bids (Nonprofits & Public Bodies)",
    description:
      "From a studio that reads and answers RFPs every week: what to put in a website or app RFP, what quietly scares good small vendors away, and how to get quotes you can actually compare.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 6,
    body: [
      { p: "We read a lot of requests for proposals from nonprofits, workforce boards, libraries and public bodies, and we answer the ones that fit. The best ones get several strong, comparable bids. Others accidentally filter out the small, capable teams they'd probably like to hire. Here's what makes the difference." },
      { h2: "Say what the site or app is for" },
      {
        ul: [
          "Who uses it, and the three to five things they most need to do.",
          "What exists today (current platform, integrations, rough page count, traffic), plus a link.",
          "What success looks like a year after launch.",
        ],
      },
      { h2: "Give a budget range" },
      { p: "Even a wide range (\"$30,000 to $60,000 for the build\") saves everyone time and gets you proposals sized to what you can actually fund. Without one, quotes swing by a factor of five and are hard to compare." },
      { h2: "Ask for prices in a structure you can compare" },
      { p: "List the lines you want priced separately: design and build, migration, hosting, maintenance, training, optional extras. Ask vendors to answer each requirement as Included, Additional Cost or Exception. The best RFPs we've seen do exactly this." },
      { h2: "Be careful with paperwork that doesn't serve the project" },
      {
        ul: [
          "Insurance: requiring proof of high liability limits just to submit a bid rules out many small studios. If cover is needed, consider requiring it at contract, sized to the project.",
          "Signed reference letters, notarized forms and mandatory in-person pre-bid meetings all add cost for vendors and narrow your pool. Use them only where they truly matter.",
          "Paid document downloads and paid portal registration discourage bidders without improving quality.",
        ],
      },
      { h2: "Be realistic about service levels" },
      { p: "Round-the-clock staffed support costs real money. Many organizations are well served by 24/7 automated monitoring plus business-hours support. If you need true 24/7 response, say so and expect to pay for it. Inviting exceptions lets vendors be honest instead of overpromising." },
      { h2: "Make it easy to ask questions" },
      { p: "Publish a questions deadline and an answers date, and share answers with all bidders. A clear process gets you better-informed proposals." },
      { h2: "Ask for proof, not adjectives" },
      { p: "Ask for live examples, a short description of how the team works, who exactly will do the work, and references you can call. Weight accessibility, security and ongoing support, not just design." },
      { h2: "Need a second opinion on your RFP?" },
      { p: "If you're preparing a website or app RFP and want a sanity check on scope or budget before it goes out, we're happy to give honest feedback on a free call." },
    ],
    related: [
      { label: "Choosing an app developer for a nonprofit: a checklist", href: "/insights/nonprofit-app-developer-checklist" },
      { label: "What a small business or nonprofit website costs", href: "/insights/small-business-nonprofit-website-cost" },
      { label: "Website accessibility (WCAG) for small organizations", href: "/insights/wcag-accessibility-small-organizations" },
    ],
  },
  {
    slug: "freelancer-vs-agency-vs-small-studio",
    title: "Freelancer, agency or small studio: who should build your app?",
    seoTitle: "Freelancer vs Agency vs Small Studio: Who Should Build Your App or Website?",
    description:
      "An honest comparison of hiring a freelancer, a large agency or a small studio to build and run your app or website: cost, continuity, who actually does the work, and what happens after launch.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 5,
    body: [
      { p: "We're a small studio, so we have a bias, and we'll say so. But we've also taken over projects from freelancers and agencies, and each option is genuinely right for some projects. Here's how they compare." },
      {
        table: {
          head: ["", "Freelancer", "Large agency", "Small studio"],
          rows: [
            ["Typical cost", "Lowest", "Highest", "In between"],
            ["Who does the work", "The person you hired", "Often a rotating team; seniors in the pitch, juniors on the build", "The senior people you talk to"],
            ["Range of skills", "Usually one specialty", "Broad: design, dev, marketing, strategy", "Focused: design and development, sometimes more"],
            ["Continuity after launch", "Depends on one person's availability", "Strong process, but you're one of many accounts", "Usually long-term, with a monthly plan"],
            ["Process and paperwork", "Light", "Heavy", "Light but written down"],
          ],
        },
      },
      { h2: "When a freelancer makes sense" },
      { p: "A small, well-defined job (a landing page, a feature on an existing app) with someone whose past work you've seen. Protect yourself: make sure code, accounts and hosting are in your name from day one, and have a plan for if they become unavailable." },
      { h2: "When an agency makes sense" },
      { p: "A large program that needs many disciplines at once (brand, content, marketing, development) and a budget to match. Ask who will actually do the work, and meet them before signing." },
      { h2: "When a small studio makes sense" },
      { p: "A custom app, web app or website that has to keep running after launch, where you want direct access to the people building it and a predictable monthly plan afterwards. Ask how they handle vacations and emergencies, and who the backup is." },
      { h2: "Questions to ask any of them" },
      {
        ul: [
          "Who exactly will build this, and who covers when they're away?",
          "Will the code, app store accounts, domain and hosting be in my name?",
          "What does it cost per month after launch, and what does that include?",
          "Can I talk to a client whose project you've run for more than a year?",
          "What happens if we part ways? How do I get everything back?",
        ],
      },
      { h2: "How we work" },
      { p: "Elco Dev is a small studio near Nashville: fixed quotes paid by milestone, the developer you talk to does the work, everything in your name, and monthly care plans after launch. If that sounds like a fit, book a free call." },
    ],
    related: [
      { label: "How much does a custom app cost?", href: "/insights/how-much-does-a-custom-app-cost" },
      { label: "Your app developer disappeared: what to do next", href: "/insights/app-developer-disappeared" },
      { label: "Monthly care plans", href: "/care-plans" },
    ],
  },
  {
    slug: "google-play-12-testers-14-days",
    title: "Google Play's 12-tester rule: what it means for your first Android app",
    seoTitle: "Google Play 12 Testers for 14 Days: The Closed Testing Rule Explained",
    description:
      "New personal Google Play developer accounts must run a closed test with at least 12 testers opted in for 14 straight days before an app can go to production. Here's how the rule works and how to plan your launch around it.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 4,
    body: [
      { p: "If you open a new personal Google Play developer account and try to publish your first app, you'll find you can't go straight to production. Google requires a closed test first. Plan for it, because it adds at least two weeks to a first launch. This is how the rule works as of November 2026; Google's help page \"App testing requirements for new personal developer accounts\" is the final word." },
      { h2: "The rule in one paragraph" },
      { p: "Personal developer accounts created after November 13, 2023 must run a closed test with at least 12 testers who have been opted in continuously for at least 14 days. Only then can you apply for production access from the Play Console dashboard. Google says the review of that application usually takes seven days or less." },
      { h2: "The details that trip people up" },
      {
        ul: [
          "The 14 days must be continuous. A tester who opts in, leaves before 14 days and comes back later doesn't count until they've been in for 14 consecutive days.",
          "Invites aren't testers. Someone only counts once they've actually opted in to the test.",
          "Engagement matters. If testers barely use the app, Google can ask you to keep testing before it grants production access.",
          "The application asks real questions: how you recruited testers, how they used the app, what feedback you got, what you changed because of it, and how you decided the app was ready.",
        ],
      },
      { h2: "How to plan a launch around it" },
      {
        ul: [
          "Start the closed test as soon as you have a usable build, not the week you want to launch. Budget about three weeks: 14 days of testing plus the application review.",
          "Recruit testers who will really use it: staff, existing customers, members or volunteers. Ask for 15 to 20, so a couple of drop-outs don't reset your clock.",
          "Collect feedback in one place (a short form works) and keep notes on what you fixed. You'll need both for the production application.",
          "Keep shipping fixes to the closed track during the test. That's what it's for.",
        ],
      },
      { h2: "Does it apply to my business?" },
      { p: "The requirement is written for personal accounts. If you're publishing for a company or nonprofit, look at Google's account types before you register: organization accounts are verified differently and have their own requirements, including a D-U-N-S number. Whichever you choose, put the account in your organization's name, not your developer's." },
      { h2: "We can run it for you" },
      { p: "We publish and maintain our own apps on Google Play. For client launches we set up the closed test, help recruit and brief testers, track the feedback, and prepare the production application, so your 14 days aren't wasted." },
    ],
    related: [
      { label: "How to move your app into your own Apple and Google accounts", href: "/insights/transfer-app-to-your-own-developer-account" },
      { label: "Google Play's target API requirement", href: "/insights/google-play-target-api-requirement" },
      { label: "Mobile app development", href: "/services/mobile-app-development" },
    ],
  },
  {
    slug: "software-development-contract-checklist",
    title: "What to put in a software development contract",
    seoTitle: "Software Development Contract Checklist for Small Businesses and Nonprofits",
    description:
      "Before you sign with an app or web developer, check that the contract covers ownership of the code, the accounts, milestones and acceptance, changes, warranty and what happens if you part ways. A plain-English checklist.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 5,
    body: [
      { p: "Most disputes over software projects come down to something the contract never said: who owns the code, what \"done\" means, or what happens when the developer moves on. This is a plain-English checklist of what to look for before you sign. It isn't legal advice; for a large project, have your attorney read the final version." },
      { h2: "Ownership" },
      {
        ul: [
          "You own the code written for you once it's paid for. The contract should say so in plain words, and say when ownership passes (on each milestone payment is common).",
          "The developer can keep using their own general tools and libraries. That's normal, as long as you get a permanent licence to use them in your product.",
          "Open-source components are listed or at least allowed, and none of them restrict how you can use or sell the product.",
        ],
      },
      { h2: "Accounts and access" },
      {
        ul: [
          "The App Store, Google Play, domain, hosting, database and payment accounts are in your organization's name, with the developer added as a user.",
          "The code lives in a repository you own or can download at any time.",
          "Passwords and keys are handed over at the end, and the developer's access can be removed.",
        ],
      },
      { h2: "Scope, milestones and acceptance" },
      {
        ul: [
          "A written scope: the screens, features and integrations included, and a short list of what's not included.",
          "Milestones with a payment tied to each one, so you pay as working software is delivered.",
          "An acceptance step: how long you have to test each milestone, and what counts as a defect versus a new request.",
        ],
      },
      { h2: "Changes" },
      { p: "New ideas will come up. The contract should say that changes are quoted in writing before any work starts, and give the hourly rate for small extras. That keeps the budget predictable for both sides." },
      { h2: "Warranty and support" },
      {
        ul: [
          "A warranty period after launch (often 30 to 90 days) when bugs in delivered work are fixed at no charge.",
          "What ongoing support costs after that, and what it covers: store updates, security patches, hosting, small changes.",
          "Response times for urgent problems, if the app is critical to your business.",
        ],
      },
      { h2: "Confidentiality and data" },
      { p: "The developer keeps your business information and your users' data confidential, uses it only for your project, and follows any rules you're bound by. If AI tools are used in the work, the contract or proposal should say how your data is handled." },
      { h2: "Ending the relationship" },
      { p: "Either side can end the agreement with notice. You pay for work done to that point, and you receive the code, accounts and documentation for it. This clause matters most and is the one most often missing." },
      { h2: "How we do it" },
      { p: "Our proposals spell out scope, milestones, acceptance and the change process, and every account and repository is in the client's name from day one. If you have a contract from another developer you'd like a second opinion on, send it to us." },
    ],
    related: [
      { label: "How to write a website or app RFP", href: "/insights/how-to-write-a-website-rfp" },
      { label: "Freelancer vs agency vs small studio", href: "/insights/freelancer-vs-agency-vs-small-studio" },
      { label: "How to move your app into your own Apple and Google accounts", href: "/insights/transfer-app-to-your-own-developer-account" },
    ],
  },
  {
    slug: "what-to-send-a-developer-before-a-quote",
    title: "What to send a developer before asking for a quote",
    seoTitle: "What to Send an App or Web Developer Before Asking for a Quote",
    description:
      "A better brief gets you a faster, more accurate quote. Here's what to gather before you contact an app or website developer: the problem, the users, the must-haves, examples, existing systems, budget and timing.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 4,
    body: [
      { p: "You don't need a technical spec to get a useful quote. You need to explain the problem clearly. A page or two covering the points below lets a developer give you a real number instead of a wide range, and it makes the first call much more productive." },
      { h2: "1. The problem, in your words" },
      { p: "What's slow, manual, error-prone or missing today? \"We track 300 volunteers in three spreadsheets and double-book shifts every month\" is more useful than \"we need an app.\"" },
      { h2: "2. Who will use it" },
      { p: "List the types of users (staff, customers, members, admins), roughly how many of each, and whether they'll use phones, computers or both." },
      { h2: "3. Must-haves and nice-to-haves" },
      { p: "Split your feature list in two. The must-haves set the first version and the price; the nice-to-haves can be quoted as later phases." },
      { h2: "4. Examples you like (and don't)" },
      { p: "Links to apps or sites that work the way you want, with a note on what you like about each. Screenshots of what you use today help too." },
      { h2: "5. What it has to connect to" },
      { p: "Payment processor, accounting software, CRM, email platform, an existing database or website. Integrations often drive cost more than screens do." },
      { h2: "6. Anything you already have" },
      { p: "Existing code, designs, a domain, hosting or app store accounts, and who has the logins. If a previous developer built part of it, say so." },
      { h2: "7. Budget range and timing" },
      { p: "A rough range isn't a trap; it tells the developer whether to propose a lean first version or a fuller build. Include any hard date, such as a grant deadline, an event or a season." },
      { h2: "8. Who decides" },
      { p: "Who approves the quote and the work? If a board or committee is involved, mention when it meets." },
      { h2: "Send it to us" },
      { p: "Our first call is free, and we send a fixed quote after it. If you send these points ahead of time, we can often come to the call with a rough plan already sketched." },
    ],
    related: [
      { label: "How much does a custom app cost?", href: "/insights/how-much-does-a-custom-app-cost" },
      { label: "What to put in a software development contract", href: "/insights/software-development-contract-checklist" },
      { label: "Book a free call", href: "/contact" },
    ],
  },
  {
    slug: "website-accessibility-statement",
    title: "How to write a website accessibility statement",
    seoTitle: "How to Write a Website Accessibility Statement (With What to Include)",
    description:
      "An accessibility statement tells visitors how accessible your site is, what you're still fixing and how to get help. Here's what to include, how to keep it honest, and where to find a free template.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 4,
    body: [
      { p: "An accessibility statement is a short page, usually linked from your site footer, that explains your commitment to accessibility, how well the site currently meets it, and how people can get help if something doesn't work for them. It doesn't make a site accessible by itself, but an honest one builds trust and gives visitors a way to reach you." },
      { h2: "What to include" },
      {
        ul: [
          "Your commitment: a sentence or two saying you want the site to be usable by everyone, including people who use assistive technology.",
          "The standard you aim for, usually WCAG 2.1 or 2.2 Level AA.",
          "Where you are now: fully, partially or not yet conformant, in honest terms.",
          "Known limitations: specific parts that don't meet the standard yet (for example, older PDFs or a third-party booking widget), and what you're doing about them.",
          "How to get help: an email address and phone number, what information to include, and how quickly you aim to respond.",
          "Other formats: how someone can request content in another form, such as a phone call or an accessible document.",
          "The date the statement was last reviewed.",
        ],
      },
      { h2: "Keep it honest" },
      { p: "Don't claim full conformance unless the site has actually been tested against the standard, by people as well as automated tools. Saying \"partially conformant\" and listing the known gaps is better than an over-promise that a visitor discovers in the first minute. Avoid phrases like \"100% compliant\" or \"ADA certified\"; there's no official certification for websites." },
      { h2: "A free template" },
      { p: "The W3C's Web Accessibility Initiative publishes guidance and a free accessibility statement generator. Search for \"W3C generate an accessibility statement.\" It walks you through each section and produces a page you can edit." },
      { h2: "Keep it up to date" },
      { p: "Review the statement when the site changes in a big way and at least once a year. Update the known-limitations list as you fix things, and make sure the contact address actually reaches someone." },
      { h2: "We can help" },
      { p: "We build and maintain accessible websites, run accessibility reviews, and fix what they find. If you need a statement you can stand behind, we can test the site first and write it with you." },
    ],
    related: [
      { label: "WCAG accessibility for small organizations", href: "/insights/wcag-accessibility-small-organizations" },
      { label: "Website design and development", href: "/services/websites" },
      { label: "WordPress maintenance checklist", href: "/insights/wordpress-maintenance-checklist" },
    ],
  },
  {
    slug: "web-app-vs-mobile-app",
    title: "Web app or mobile app: which does your business need?",
    seoTitle: "Web App vs Mobile App: Which Does Your Business Need?",
    description:
      "A web app runs in the browser on any device; a mobile app is installed from the App Store or Google Play. Here's how to choose between them, based on who uses it, where, and what it needs to do.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 4,
    body: [
      { p: "Many projects start with \"we need an app,\" but the right answer is often a web app, a mobile app, or a web app first with a mobile app later. The choice changes the cost, the timeline and how people find and use what you build." },
      { h2: "The difference" },
      { p: "A web app runs in the browser at a web address, on phones and computers alike. You update it once and everyone has the new version. A mobile app is installed from the App Store or Google Play, can use more of the phone (camera, notifications, offline storage, location in the background), and lives on the home screen, but each release goes through store review and users have to update." },
      { h2: "A web app is usually right when" },
      {
        ul: [
          "Most use happens at a desk: admin tools, dashboards, CRMs, portals, scheduling for staff.",
          "Users visit occasionally (pay a bill, check a status, book once a month) and won't want to install anything.",
          "You need it live quickly and want to change it often.",
          "The budget covers one version, not two.",
        ],
      },
      { h2: "A mobile app is usually right when" },
      {
        ul: [
          "People use it daily or on the move: field crews, drivers, members, customers who come back often.",
          "It needs the phone itself: the camera, reliable push notifications, offline use, barcode scanning, Bluetooth.",
          "Being on the home screen and in the app stores matters for your customers.",
        ],
      },
      { h2: "Often the answer is both, in order" },
      { p: "A common path is a web app for staff or admins first, then a mobile app for the people in the field or your customers, both sharing the same backend and data. Modern cross-platform tools also let one codebase serve iPhone and Android, which keeps the second step affordable." },
      { h2: "Questions to settle first" },
      {
        ul: [
          "Who uses it, how often, and on what device?",
          "Does it need to work without a signal?",
          "Do you need notifications that reliably reach people?",
          "Who will keep it updated each year? Mobile apps need yearly store updates.",
        ],
      },
      { h2: "We build both" },
      { p: "We build web apps, iPhone and Android apps, and the backends behind them, and we run our own apps in both stores. On a free call we'll tell you which we'd build first for your situation, and why." },
    ],
    related: [
      { label: "How much does a custom app cost?", href: "/insights/how-much-does-a-custom-app-cost" },
      { label: "Web app development", href: "/services/web-app-development" },
      { label: "Mobile app development", href: "/services/mobile-app-development" },
    ],
  },
  {
    slug: "website-redesign-without-losing-seo",
    title: "How to redesign your website without losing your Google rankings",
    seoTitle: "Website Redesign SEO Checklist: Keep Your Google Rankings",
    description:
      "A redesign can wipe out years of search traffic if old pages disappear. Here's a plain checklist for keeping your rankings: inventory your URLs, redirect every old page, keep what works, and check after launch.",
    published: "2026-11-05",
    updated: "2026-11-05",
    readMinutes: 5,
    body: [
      { p: "The most common way a new website loses traffic isn't the design. It's that old page addresses stop working, so the links and search results pointing to them lead nowhere. With a little planning, a redesign can keep, and often improve, the search traffic you already have." },
      { h2: "Before you start" },
      {
        ul: [
          "Make a list of every page on the current site. Your sitemap and Google Search Console's Pages report are good places to start.",
          "Note which pages bring the most visitors and which have links from other sites. Those are the ones to protect most carefully.",
          "Save a copy of the current page titles, descriptions and main text, so nothing important is lost by accident.",
        ],
      },
      { h2: "During the build" },
      {
        ul: [
          "Keep the same addresses where you can. If a URL has to change, map the old one to its closest new page.",
          "Set up permanent (301) redirects from every old address to its new one. Don't send everything to the homepage.",
          "Keep the content that ranks. Rewriting a page that does well is fine, but keep what it covers.",
          "Give every page a clear title and description, and use real headings.",
          "Keep the new site off search engines while it's being built (a staging address with indexing blocked), and remember to remove that block at launch.",
        ],
      },
      { h2: "Launch day" },
      {
        ul: [
          "Test the redirects: open a sample of old addresses and confirm they land on the right new pages.",
          "Make sure the site can be indexed and the new sitemap is live, then submit it in Google Search Console and Bing Webmaster Tools.",
          "Check that analytics is recording visits on the new site.",
        ],
      },
      { h2: "The first few weeks" },
      { p: "Watch Search Console for pages that return errors, and fix any missed redirects. Some movement in rankings right after a launch is normal; a steady drop on a particular page usually points to a missing redirect or missing content." },
      { h2: "We can handle it" },
      { p: "When we rebuild a website, we start with a URL inventory and a redirect map, and we check the search data after launch. If you're planning a redesign, we can review your current site first and tell you what to protect." },
    ],
    related: [
      { label: "Website design and development", href: "/services/websites" },
      { label: "How much does a small business or nonprofit website cost?", href: "/insights/small-business-nonprofit-website-cost" },
      { label: "WordPress maintenance checklist", href: "/insights/wordpress-maintenance-checklist" },
    ],
  },
  {
    slug: "own-your-domain-hosting-and-accounts",
    title: "Who should own your domain, hosting and app accounts? (You should)",
    seoTitle: "Own Your Domain, Hosting and Accounts: A Checklist for Business Owners",
    description:
      "If your developer or agency holds your domain, hosting or app store accounts, you can lose your website or app the day the relationship ends. Here's what you should own, how to check, and how to move it safely.",
    published: "2026-11-06",
    updated: "2026-11-06",
    readMinutes: 5,
    body: [
      { p: "Many small businesses and nonprofits find out who really controls their website only when something goes wrong: the developer stops answering, the agency closes, or a renewal lapses. If the accounts are in someone else's name, getting them back can take weeks. Owning them from the start costs almost nothing." },
      { h2: "What you should own" },
      {
        ul: [
          "Your domain name, registered in your organization's name with an email address you control.",
          "Your DNS: whoever controls DNS controls where your website and email point.",
          "Your hosting account, or at least an owner-level login to it.",
          "Your email service (Google Workspace, Microsoft 365 or similar).",
          "Your Apple Developer and Google Play accounts, if you have an app.",
          "Your code repository (GitHub, GitLab or Bitbucket), with the developer added as a collaborator.",
          "Payment, analytics and other third-party accounts your site or app depends on (Stripe, Google Analytics, Search Console, Firebase and so on).",
        ],
      },
      { h2: "How to check in ten minutes" },
      {
        ul: [
          "Look up your domain at your registrar, or ask your developer which registrar it's with and whose account it's in.",
          "Search your inbox for renewal notices for the domain and hosting. If you never get them, they go to someone else.",
          "Ask for a list of every account the project uses and who the owner is on each.",
          "Confirm you can log in to each one yourself, with two-factor authentication on your own device.",
        ],
      },
      { h2: "How to move accounts into your name" },
      { p: "Most of this is routine and doesn't touch the live site. Domains can be pushed to your own account at the same registrar, or transferred to a new registrar with an authorization code. Hosting, analytics and code repositories usually let the current owner add you as an owner and then step down. App store accounts have formal transfer processes; we've written a separate guide for those." },
      {
        ul: [
          "Do one account at a time, and write down each login in a password manager your organization controls.",
          "Don't change DNS settings during a transfer unless you know what each record does; email often breaks this way.",
          "Turn on auto-renew for the domain and keep a payment card on file that won't expire soon.",
        ],
      },
      { h2: "A fair setup with your developer" },
      { p: "You own the accounts; your developer gets their own login with the access they need. That keeps changes traceable, lets you remove access when the work ends, and means no one person's inbox stands between you and your website. A good developer will welcome this." },
      { h2: "How we work" },
      { p: "Wherever we can, we set accounts up in the client's name and use our own logins inside them. If you've inherited a site or app and aren't sure who owns what, we can do the inventory with you on a free call." },
    ],
    related: [
      { label: "How to move your app into your own Apple and Google accounts", href: "/insights/transfer-app-to-your-own-developer-account" },
      { label: "What to do if your app developer disappeared", href: "/insights/app-developer-disappeared" },
      { label: "Care plans", href: "/care-plans" },
    ],
  },
  {
    slug: "choosing-website-hosting",
    title: "Shared, managed or VPS: how to choose website hosting",
    seoTitle: "Shared vs Managed vs VPS Hosting: How to Choose for a Small Business Website",
    description:
      "A plain guide to the main kinds of website hosting (shared, managed WordPress, VPS and cloud platforms), what each is good for, what it really costs to run, and the questions to ask before you pick one.",
    published: "2026-11-06",
    updated: "2026-11-06",
    readMinutes: 5,
    body: [
      { p: "Hosting is the computer your website runs on. The cheapest plan is fine for some sites and a real risk for others. What matters is how much traffic you get, what the site does, and who will look after it." },
      { h2: "The main options" },
      {
        table: {
          head: ["Type", "Good for", "Watch out for"],
          rows: [
            ["Shared hosting", "Small brochure sites with modest traffic", "Your site shares a server with many others; slowdowns and security issues next door can affect you"],
            ["Managed WordPress", "WordPress sites where you want updates, backups and caching handled", "Plugin and visit limits on lower tiers; check what \"managed\" actually covers"],
            ["VPS (virtual private server)", "Busier sites, custom apps, or anything that needs its own isolated server", "Someone has to patch, monitor and back it up; that's ongoing work, not a one-time setup"],
            ["Cloud platforms (Vercel, Netlify, Firebase and similar)", "Modern web apps and fast static sites", "Usage-based bills can grow with traffic; set budget alerts"],
          ],
        },
      },
      { h2: "What actually matters more than the plan" },
      {
        ul: [
          "Backups you've tested: a backup you've never restored from is a hope, not a plan.",
          "Updates: an out-of-date site on great hosting is still the easiest target.",
          "A content delivery network (CDN) in front of the site, which speeds it up and absorbs traffic spikes.",
          "Uptime monitoring, so someone knows the site is down before your customers tell you.",
          "Owning the account yourself, so the site doesn't leave with your developer.",
        ],
      },
      { h2: "Questions to ask before you choose" },
      {
        ul: [
          "Roughly how many visitors do we get a month, and do we have busy seasons?",
          "Does the site take payments, logins or forms with personal information?",
          "Who installs updates and checks backups, and how often?",
          "What happens, and what does it cost, if traffic doubles?",
          "How do we get our site and data out if we leave this host?",
        ],
      },
      { h2: "What we use" },
      { p: "For client WordPress sites we typically use Hostinger, choosing between its managed plans and a VPS depending on traffic and requirements, with a CDN in front. Modern web apps often run on Vercel or Firebase. Hosting can be included in a care plan, or run in your own account with any upgrades billed at cost, and our care plans cover the updates, backups and monitoring that keep it healthy." },
    ],
    related: [
      { label: "WordPress maintenance checklist", href: "/insights/wordpress-maintenance-checklist" },
      { label: "How much does a small business website cost?", href: "/insights/small-business-nonprofit-website-cost" },
      { label: "Care plans", href: "/care-plans" },
    ],
  },
  {
    slug: "shopify-vs-custom-ecommerce",
    title: "Shopify or a custom online store? How to decide",
    seoTitle: "Shopify vs Custom E-commerce: Which Is Right for Your Business?",
    description:
      "Shopify is the right answer for most online stores, but not all. Here's how to tell when a hosted platform fits, when a custom build pays for itself, and the middle path most businesses miss.",
    published: "2026-11-06",
    updated: "2026-11-06",
    readMinutes: 5,
    body: [
      { p: "If you sell products online, Shopify (or a similar hosted platform) is usually the right place to start. It handles checkout, payments, taxes, hosting and security for a monthly fee. A custom store only makes sense when your business doesn't fit the shape those platforms expect." },
      { h2: "Shopify is usually right when" },
      {
        ul: [
          "You sell physical or digital products at fixed prices, one cart, one checkout.",
          "Your catalog, shipping and discounts work within the platform's settings or a well-supported app.",
          "You want to launch in weeks and change things yourself without a developer.",
          "Monthly platform and app fees are small next to what a developer would cost to maintain a custom store.",
        ],
      },
      { h2: "A custom build starts to make sense when" },
      {
        ul: [
          "Pricing is complex: quotes, contract or tiered pricing per customer, configure-to-order products, or dealer portals.",
          "Ordering is tied into your own systems (inventory, ERP, scheduling, a CRM) in ways an off-the-shelf app can't handle cleanly.",
          "The \"store\" is really a booking, membership or service workflow with a payment at the end.",
          "App and transaction fees have grown large enough that owning the software is cheaper over a few years.",
        ],
      },
      { h2: "The middle path" },
      { p: "Most businesses don't need to choose all or nothing. Keep Shopify for the catalog and checkout, and add a small custom piece where you're different: a private app that syncs orders to your back office, a custom quote builder that creates draft orders, or a separate portal for wholesale customers. You keep the platform's reliability and only pay to build what's unique to you." },
      { h2: "Questions to answer before you decide" },
      {
        ul: [
          "What does your checkout need to do that a standard cart can't?",
          "Which of your systems must the store talk to, and how often?",
          "What are you paying each month in platform, app and transaction fees, and how fast is that growing?",
          "Who will maintain a custom store after launch, and what will that cost per year?",
        ],
      },
      { h2: "How we help" },
      { p: "We'll tell you honestly if Shopify plus a few well-chosen apps is enough, which it often is. When it isn't, we build the custom piece, keep it in accounts you own, and look after it on a care plan. A free call is usually enough to know which way to go." },
    ],
    related: [
      { label: "How much does a custom app cost?", href: "/insights/how-much-does-a-custom-app-cost" },
      { label: "Custom CRM or off-the-shelf?", href: "/insights/custom-crm-vs-off-the-shelf" },
      { label: "Care plans", href: "/care-plans" },
    ],
  },
  {
    slug: "how-long-does-it-take-to-build-an-app",
    title: "How long does it take to build an app?",
    seoTitle: "How Long Does It Take to Build an App in 2026? Realistic Timelines",
    description:
      "Realistic timelines for building an app or web app in 2026: what a focused first version takes, what stretches a project to months, and the steps (like app store review) people forget to plan for.",
    published: "2026-11-06",
    updated: "2026-11-06",
    readMinutes: 5,
    body: [
      { p: "The honest answer is \"it depends on scope,\" but that isn't much use when you're planning a launch. Here's how the time actually breaks down, from a small studio that ships its own apps and builds them for clients." },
      { h2: "Typical timelines" },
      {
        table: {
          head: ["Project", "What it usually is", "Typical time to launch"],
          rows: [
            ["Focused MVP", "One core workflow, sign-in, payments if needed", "About 14 days of build time"],
            ["First full version", "Several user types, admin screens, a few integrations", "A few weeks to a few months, in milestones"],
            ["Larger business system", "Dashboards, documents, integrations with existing systems", "Several months, delivered in stages"],
          ],
        },
      },
      { p: "Those are build times once the scope is agreed. The calendar time around them is often what surprises people." },
      { h2: "What adds time people forget" },
      {
        ul: [
          "Decisions: waiting on feedback, content or approvals is the most common delay, and it's on the client side.",
          "App store review: Apple and Google review new apps before release. A new Google Play developer account also has to run a closed test with real testers for 14 days before it can publish to everyone.",
          "Developer accounts: setting up Apple and Google accounts in your organization's name can take days, sometimes longer for verification.",
          "Integrations: getting access and test credentials for other systems (payments, accounting, an existing database) can take longer than the integration itself.",
          "Content and data: writing copy, gathering photos and migrating old records.",
        ],
      },
      { h2: "How to get to launch faster" },
      {
        ul: [
          "Cut the first version to the one workflow that proves the idea. Everything else goes on a list for version two.",
          "Name one person who can make decisions quickly.",
          "Start developer-account and store paperwork on day one, in parallel with the build.",
          "Prefer a web app or one cross-platform codebase over two native apps when the app doesn't need special device features.",
        ],
      },
      { h2: "Getting a real estimate" },
      { p: "A timeline is only as good as the scope behind it. Send us who the users are, the must-have features and your deadline, and we'll come back with a fixed price and a schedule we can stand behind." },
    ],
    related: [
      { label: "MVP development", href: "/mvp" },
      { label: "What to send a developer before asking for a quote", href: "/insights/what-to-send-a-developer-before-a-quote" },
      { label: "Google Play's 12-tester rule", href: "/insights/google-play-12-testers-14-days" },
    ],
  },
  {
    slug: "what-to-cut-from-your-first-app",
    title: "What to leave out of the first version of your app",
    seoTitle: "MVP Scope: What to Leave Out of the First Version of Your App",
    description:
      "The fastest way to launch an app on budget is to decide what not to build yet. Here are the features small businesses most often add too early, and what to build instead.",
    published: "2026-11-06",
    updated: "2026-11-06",
    readMinutes: 4,
    body: [
      { p: "Most first versions run over budget for the same reason: they try to be version three. A good first version does one job well for one kind of user, and teaches you what to build next." },
      { h2: "Features that can usually wait" },
      {
        ul: [
          "A full admin dashboard. Early on, a simple list view or a spreadsheet export often does the job.",
          "Every sign-in option. Email or one social sign-in is plenty to start.",
          "In-app chat and messaging. Email or SMS notifications cover most early needs.",
          "Detailed analytics screens. A few tracked events and a weekly report tell you more at this stage.",
          "Multiple languages, themes and fine-grained settings. Add them when real users ask.",
          "Automating rare tasks. If it happens twice a month, someone can do it by hand for now.",
        ],
      },
      { h2: "What the first version does need" },
      {
        ul: [
          "The one workflow that proves the idea, start to finish.",
          "Sign-in and data that's stored securely, with backups.",
          "Payments, if charging is part of what you're testing.",
          "A way to hear from users: a feedback link and basic usage tracking.",
          "Accounts in your own name, so you own what you've paid for.",
        ],
      },
      { h2: "A simple test for each feature" },
      { p: "Ask: if this were missing on launch day, would the first users fail to get the main job done? If not, it goes on the list for later. You'll launch sooner, spend less, and make the next round of decisions with real usage instead of guesses." },
      { h2: "How we scope a first version" },
      { p: "On a free call we'll help you separate must-haves from later, then quote the first version as a fixed price. Focused MVPs typically take about 14 days to build." },
    ],
    related: [
      { label: "MVP development", href: "/mvp" },
      { label: "How long does it take to build an app?", href: "/insights/how-long-does-it-take-to-build-an-app" },
      { label: "How much does a custom app cost?", href: "/insights/how-much-does-a-custom-app-cost" },
    ],
  },
  {
    slug: "church-parish-website-checklist",
    title: "What a church or parish website needs (and what it doesn't)",
    seoTitle: "Church Website Checklist: What a Parish Website Really Needs",
    description:
      "A practical checklist for church and parish websites: the pages visitors actually look for, online giving, bulletins and calendars, accessibility, and how to keep it easy for volunteers to update.",
    published: "2026-11-06",
    updated: "2026-11-06",
    readMinutes: 5,
    body: [
      { p: "Most people visit a church website for a handful of reasons: when is Mass or the service, where do I park, how do I give, and who do I call. A good parish site answers those in seconds on a phone, and stays easy for the office staff or a volunteer to keep current." },
      { h2: "The pages visitors look for first" },
      {
        ul: [
          "Service and Mass times, including holy days and holiday changes, on the home page.",
          "Address, parking and accessibility information, with a map link.",
          "Online giving that works on a phone in a few taps.",
          "The weekly bulletin, easy to find and readable on a phone.",
          "Sacraments and life events: baptism, weddings, funerals, confession times, with who to contact.",
          "A short \"New here?\" page that says what to expect.",
          "Staff and office contacts with office hours.",
        ],
      },
      { h2: "What can usually wait" },
      {
        ul: [
          "A custom app. A fast mobile website does most of what a parish app would, without App Store upkeep.",
          "Long history pages and every ministry's sub-site on day one.",
          "Complex member portals, unless the parish already has the staff to run them.",
        ],
      },
      { h2: "Keep it easy to update" },
      { p: "The best church website is one the office can update without calling anyone. Use a mainstream platform such as WordPress, give each editor their own login, and set up simple templates for announcements, events and the bulletin. One calendar that feeds the home page saves a lot of double entry." },
      { h2: "Accessibility and trust" },
      {
        ul: [
          "Readable text sizes and strong contrast for older parishioners.",
          "Real text, not images of text, so screen readers and search engines can read it.",
          "Captions on video homilies and livestream recordings where possible.",
          "A privacy page and secure (https) giving, so people trust the site with their details.",
        ],
      },
      { h2: "Who should own the accounts" },
      { p: "Register the domain, hosting and giving accounts in the parish's name, not a volunteer's. Volunteers move on; the parish shouldn't lose its website when they do." },
      { h2: "How we can help" },
      { p: "We build and look after websites for small businesses and nonprofits, and we make Liturgical Living, a free Catholic calendar app and website. Our care plans keep a parish site updated, backed up and secure for a flat monthly fee." },
    ],
    related: [
      { label: "What a small business or nonprofit website costs", href: "/insights/small-business-nonprofit-website-cost" },
      { label: "Who should own your domain and accounts?", href: "/insights/own-your-domain-hosting-and-accounts" },
      { label: "Care plans", href: "/care-plans" },
    ],
  },
  {
    slug: "how-to-protect-your-app-idea",
    title: "How to protect your app idea before you talk to developers",
    seoTitle: "How to Protect Your App Idea: NDAs, Code Ownership and What Actually Matters",
    description:
      "Worried a developer will steal your app idea? Here's what actually protects you: owning the code and accounts, a clear contract, and moving fast. Plus when an NDA helps and when it just slows things down.",
    published: "2026-11-06",
    updated: "2026-11-06",
    readMinutes: 4,
    body: [
      { p: "It's natural to worry that sharing your idea means losing it. In practice, ideas are rarely what gets copied. What protects a new product is owning what gets built, a clear contract, and getting it in front of customers quickly. This isn't legal advice; for anything specific, talk to a lawyer." },
      { h2: "What actually protects you" },
      {
        ul: [
          "Owning the code: your contract should say the code and designs you pay for belong to you once paid.",
          "Owning the accounts: domain, hosting, app store and code repository accounts in your name, with the developer invited in.",
          "Confidentiality in the contract: a reasonable developer will agree not to share your business details.",
          "Speed: the first working version, real users and their feedback are a bigger head start than any secret.",
        ],
      },
      { h2: "When an NDA helps" },
      { p: "An NDA makes sense when you're sharing genuinely confidential material: customer data, financials, a proprietary process or unreleased partnerships. For an early conversation about the idea itself, many developers will sign a short, mutual NDA, but some won't before a first call, simply because they hear many similar ideas. A better approach is to describe the problem and the users first, and save the sensitive details for after you've chosen who to work with." },
      { h2: "Questions to ask any developer" },
      {
        ul: [
          "Who owns the code and designs when the project is paid for?",
          "Will the accounts be set up in my name?",
          "Do you reuse code from other projects, and is any of it licensed differently?",
          "Who else will work on my project, and are they bound by the same terms?",
        ],
      },
      { h2: "How we work" },
      { p: "With us, you own the code and designs you pay for, and accounts are set up in your name wherever we can. Start with a free call about the problem you're solving." },
    ],
    related: [
      { label: "What to put in a software development contract", href: "/insights/software-development-contract-checklist" },
      { label: "Who should own your domain and accounts?", href: "/insights/own-your-domain-hosting-and-accounts" },
      { label: "What to send a developer before asking for a quote", href: "/insights/what-to-send-a-developer-before-a-quote" },
    ],
  },
  {
    "slug": "printable-advent-planner-catholic-family",
    "title": "A printable Advent planner for Catholic families (2026)",
    "seoTitle": "Printable Advent Planner for Catholic Families 2026 (PDF)",
    "description": "A 16-page printable Advent 2026 planner for Catholic families: wreath-lighting schedule, daily family checklist, Jesse tree and St Andrew Christmas Novena trackers, the O Antiphons and weekly planning pages.",
    "published": "2026-11-06",
    "updated": "2026-11-06",
    "readMinutes": 4,
    "answer": "Advent 2026 runs from Sunday, November 29 to December 24. The Liturgical Living Advent Family Planner is a 16-page printable PDF ($9) for Catholic families. It has a wreath-lighting schedule, a daily checklist, a Jesse tree tracker, the St Andrew Christmas Novena with a 25-day tracker, the O Antiphons for December 17–23 and weekly planning pages. You download it right after paying and print it at home.",
    "body": [
      {
        "h2": "What families usually want from an Advent planner"
      },
      {
        "ul": [
          "Which wreath candle to light each Sunday, and who lights and reads.",
          "A simple daily checklist the kids can tick off.",
          "Somewhere to plan the feasts, Mass and confession times for each week.",
          "A way to keep up with the Jesse tree and the St Andrew Christmas Novena without losing count."
        ]
      },
      {
        "h2": "What's in the Liturgical Living planner"
      },
      {
        "ul": [
          "Advent 2026 at a glance: all 26 days, the four Sundays, US feasts and holy days of obligation.",
          "Wreath-lighting schedule with candle colors.",
          "A two-page daily checklist: wreath, family prayer, Mass reading, good deed, Jesse ornament and St Andrew prayer tallies.",
          "Four weekly planning pages for feasts, meals, Mass and confession times.",
          "A Jesse tree tracker with an ornament theme and a Scripture reference for each day (references only).",
          "The St Andrew Christmas Novena, word for word with its source, and a 25-day tracker.",
          "The O Antiphons for December 17–23, from a public-domain source.",
          "Pages for intentions, resolutions, gifts and charity, and your parish's Christmas Mass times."
        ]
      },
      {
        "h2": "Printing tips"
      },
      {
        "p": "It's US Letter and prints on A4 with \"fit to page.\" The design uses light ink so it's friendly to home printers. Print the daily checklist once per child if you like."
      }
    ],
    "faq": [
      {
        "q": "When does Advent 2026 start?",
        "a": "The First Sunday of Advent is November 29, 2026, and Advent runs until Christmas Eve, December 24."
      },
      {
        "q": "Is the planner a physical product?",
        "a": "No. It's a PDF you download right after paying and print at home."
      },
      {
        "q": "Does it include the full Scripture readings?",
        "a": "No. Scripture appears as references only, so you can read from your own Bible or the Liturgical Living app. The St Andrew novena and the O Antiphons are printed from traditional public-domain sources."
      },
      {
        "q": "Can I share it with my parish?",
        "a": "It's licensed for personal and family use, so please don't share the file. Each family can buy its own copy."
      }
    ],
    "product": {
      "name": "Advent Family Planner 2026",
      "href": "https://liturgicalliving.app/advent-planner",
      "blurb": "16 printable pages for Catholic families, November 29 to December 24. $9, instant download.",
      "cta": "See inside the planner"
    },
    "related": [
      {
        "label": "All printables",
        "href": "/apps/downloads"
      },
      {
        "label": "Liturgical Living",
        "href": "/apps/liturgical-living"
      }
    ]
  },
  {
    "slug": "printable-lent-planner-catholic-family",
    "title": "A printable Lent planner for Catholic families (2027)",
    "seoTitle": "Printable Lent Planner for Catholic Families 2027 (PDF)",
    "description": "A 20-page printable Lent 2027 planner for Catholic families, Ash Wednesday (Feb 10) to Easter (Mar 28): fasting and abstinence days, Gospel references, a daily checklist, Stations of the Cross tracker and almsgiving jar.",
    "published": "2026-11-06",
    "updated": "2026-11-06",
    "readMinutes": 4,
    "answer": "Lent 2027 begins on Ash Wednesday, February 10, and Easter Sunday is March 28. The Liturgical Living Lent Family Planner is a 20-page printable PDF ($9). It covers the fasting and abstinence days with their sources, Sunday and Holy Week Gospel references, a daily family checklist, six weekly planning pages, a Stations of the Cross tracker and an almsgiving jar.",
    "body": [
      {
        "h2": "What's inside"
      },
      {
        "ul": [
          "Lent 2027 at a glance: every day from Ash Wednesday to Easter, including Laetare Sunday, St Joseph and the Triduum.",
          "The US fasting and abstinence rules stated plainly, with sources (USCCB; canons 1250–1253).",
          "Sunday and Holy Week Gospel references (Lectionary Year B).",
          "A four-page daily checklist and six weekly planning pages: prayer, promises, giving, kind deeds and meatless Friday meals.",
          "A Stations of the Cross tracker for every Friday of Lent.",
          "An almsgiving jar, Lenten promises, a confession plan and pages for your parish's Holy Week and Easter times."
        ]
      },
      {
        "h2": "Why plan Lent on paper"
      },
      {
        "p": "A page on the fridge keeps the whole family on the same Lent: which days are fast days, what everyone gave up, and what's planned for each Friday. Paper also works for children who don't have phones."
      }
    ],
    "faq": [
      {
        "q": "When does Lent 2027 start?",
        "a": "Ash Wednesday is February 10, 2027, and Easter Sunday is March 28, 2027."
      },
      {
        "q": "Does it include prayer texts?",
        "a": "No. The planner names the readings and devotions so your family can pray them from your own books or the Liturgical Living app."
      },
      {
        "q": "Will the dates match my diocese?",
        "a": "Dates follow the US calendar. Check your diocese for any local differences."
      },
      {
        "q": "What if the file won't open or print?",
        "a": "Email support@elcodev.com and we'll fix it or refund you."
      }
    ],
    "product": {
      "name": "Lent Family Planner 2027",
      "href": "https://liturgicalliving.app/lent-planner",
      "blurb": "20 printable pages, Ash Wednesday to Easter. $9, instant download.",
      "cta": "See inside the planner"
    },
    "related": [
      {
        "label": "Advent planner for Catholic families",
        "href": "/insights/printable-advent-planner-catholic-family"
      },
      {
        "label": "All printables",
        "href": "/apps/downloads"
      }
    ]
  },
  {
    "slug": "crohns-food-symptom-journal-printable",
    "title": "A printable food and symptom journal for Crohn's and colitis",
    "seoTitle": "Printable Crohn's Food & Symptom Journal (30-Day PDF with Bristol Scale)",
    "description": "A 43-page printable 30-day food, symptom and Bristol stool journal for Crohn's disease, ulcerative colitis and other gut conditions, with weekly reviews and a one-page doctor-visit summary.",
    "published": "2026-11-06",
    "updated": "2026-11-06",
    "readMinutes": 4,
    "answer": "A food and symptom journal helps you and your care team spot patterns between what you eat and how you feel. The 30-Day Food, Symptom & Bristol Stool Journal from Crohn's Food Tracker is a 43-page printable PDF ($7). It has 30 daily logs, 4 weekly reviews, a medicines list, a 30-day calendar and a one-page summary to bring to your next appointment. It's for keeping a record, not medical advice.",
    "body": [
      {
        "h2": "What to track each day"
      },
      {
        "ul": [
          "Meals, with a quick fine / meh / nope rating for how each one sat.",
          "Symptoms and how severe they were.",
          "Bowel movements, using the Bristol Stool Form Scale.",
          "Medicines, stress, sleep, water and movement."
        ]
      },
      {
        "h2": "What's in the journal"
      },
      {
        "ul": [
          "30 daily log pages covering meals, 14 symptoms with severity, Bristol scale, medicines, stress, sleep, water and movement.",
          "4 weekly reviews: the week at a glance, foods to discuss with your doctor, patterns and questions for your care team.",
          "A medicines and supplements list with a changes log, allergies and care-team contacts.",
          "A 30-days-at-a-glance calendar, a foods tally and a one-page doctor-visit summary.",
          "A Bristol Stool Form Scale reference with plain descriptions."
        ]
      },
      {
        "h2": "Paper or app?"
      },
      {
        "p": "Some people find paper easier on bad days; others prefer a phone. The journal's fields match the Crohn's Food Tracker app, so you can switch between them. There's also a free 7-day log on the Crohn's Food Tracker site if you want to try the format first."
      }
    ],
    "faq": [
      {
        "q": "Is this medical advice?",
        "a": "No. The journal is for keeping a record. Talk to your doctor or IBD care team about your diet and treatment."
      },
      {
        "q": "Does it work for ulcerative colitis or IBS?",
        "a": "Yes. It's designed for Crohn's disease, ulcerative colitis and other gut conditions."
      },
      {
        "q": "How do I get it?",
        "a": "Buy the PDF and download it right away. It's US Letter and prints on A4 with \"fit to page.\""
      }
    ],
    "product": {
      "name": "30-Day Food, Symptom & Bristol Stool Journal",
      "href": "https://crohnsfoodtracker.app/printables/30-day-journal",
      "blurb": "43 printable pages with weekly reviews and a doctor-visit summary. $7, instant download.",
      "cta": "See inside the journal"
    },
    "related": [
      {
        "label": "Flare-day meal planner",
        "href": "/insights/flare-day-meal-planner-printable"
      },
      {
        "label": "Crohn's Food Tracker app",
        "href": "/apps/crohns-food-tracker"
      }
    ]
  },
  {
    "slug": "flare-day-meal-planner-printable",
    "title": "A printable flare-day meal planner for Crohn's and colitis",
    "seoTitle": "Flare-Day Meal Planner for Crohn's & Colitis (Printable PDF)",
    "description": "A 16-page printable planner for Crohn's and colitis flare days: write down your care team's plan, list the foods that have sat fine for you, prepare simple go-to meals and log each flare day.",
    "published": "2026-11-06",
    "updated": "2026-11-06",
    "readMinutes": 4,
    "answer": "A flare-day meal plan is easiest to make before a flare, from your care team's guidance and the foods you know sit fine for you. The Flare-Day Meal Planner from Crohn's Food Tracker is a 16-page printable PDF ($6). It has pages for your care team's plan, your own safe-foods lists, four go-to meal cards, pantry and shopping lists, and seven flare-day logs. It doesn't tell you what to eat, and it isn't medical advice.",
    "body": [
      {
        "h2": "Why plan ahead"
      },
      {
        "p": "On a flare day you have little energy to decide what to eat. Writing down your care team's advice, your safe foods and a few simple meals in advance means you can follow your own plan instead of guessing."
      },
      {
        "h2": "What's inside"
      },
      {
        "ul": [
          "My flare-day plan: who to call, and what your care team told you about eating, drinking and medicines, in their words.",
          "Foods that sat fine for me: blank lists by meal, filled in from your own records.",
          "Four go-to meal cards, a pantry and freezer list, and a shopping list.",
          "Seven flare-day logs and a week review: what you ate and how it sat, drinks, 14 symptoms with severity, energy and questions for your care team."
        ]
      }
    ],
    "faq": [
      {
        "q": "Does the planner suggest foods?",
        "a": "No. It helps you write down your own care team's guidance and the foods that have worked for you."
      },
      {
        "q": "Is this medical advice?",
        "a": "No. Talk to your doctor or IBD care team about what to eat during a flare. Seek urgent care for severe pain, persistent bleeding, a high fever or signs of obstruction."
      },
      {
        "q": "Can I use it with the food journal?",
        "a": "Yes. The 30-day food and symptom journal records your patterns; the flare-day planner turns them into a plan for hard days."
      }
    ],
    "product": {
      "name": "Flare-Day Meal Planner",
      "href": "https://crohnsfoodtracker.app/printables/flare-day-meal-planner",
      "blurb": "16 printable pages for planning and logging flare days. $6, instant download.",
      "cta": "See inside the planner"
    },
    "related": [
      {
        "label": "30-day food and symptom journal",
        "href": "/insights/crohns-food-symptom-journal-printable"
      },
      {
        "label": "All printables",
        "href": "/apps/downloads"
      }
    ]
  },
  {
    "slug": "claude-code-multi-agent-dashboard",
    "title": "How to run several Claude Code agents with one dashboard",
    "seoTitle": "Claude Code Multi-Agent Dashboard: Run Agents as a Team on Your Mac",
    "description": "How to run several Claude Code sessions as a small team on a Mac: separate lanes and rules, a shared log and task board, scheduled workdays, and one inbox for the decisions only you can make.",
    "published": "2026-11-06",
    "updated": "2026-11-06",
    "readMinutes": 5,
    "answer": "To run several Claude Code agents without babysitting each terminal, give each agent its own lane (a working folder, a persona and standing rules), put shared state in a team log and task board, start them on a schedule, and route their questions to a single inbox you can answer from your phone. Elco Console is a self-hosted kit for Mac ($99 one-time) that does this using your own Claude plan.",
    "body": [
      {
        "h2": "The problems with many terminals"
      },
      {
        "ul": [
          "You can't tell which agent is waiting on you.",
          "Agents step on each other's files and work.",
          "Nothing runs unless you're at the keyboard to start it.",
          "Context is lost between days."
        ]
      },
      {
        "h2": "What a multi-agent setup needs"
      },
      {
        "ul": [
          "Lanes: each agent gets a folder, a persona and rules such as \"drafts only, never send\" or \"never push to main.\"",
          "A shared team log and a per-day task board so agents can hand work to each other.",
          "A schedule: agents start at the hour you set, continue between tasks, respect a daily cap and write a handoff at the end of the day.",
          "One inbox: each agent's question becomes a one-line item with Yes/No or option buttons, and your answer goes back to the agent that asked."
        ]
      },
      {
        "h2": "How Elco Console does it"
      },
      {
        "p": "Elco Console runs the official claude command you've already signed in to, as named lanes on your Mac. It ships with three starter personas (coordinator, builder, reviewer), a standing-rules template, the elco-msg and elco-task command-line tools, and a setup guide, including an optional recipe for reaching it from your phone through your own authenticated tunnel. We run our own business on it every day."
      }
    ],
    "faq": [
      {
        "q": "Do I need an Anthropic API key?",
        "a": "No. Elco Console runs the official claude command on your own Claude plan and never sees or stores your credentials."
      },
      {
        "q": "Does my code leave my Mac?",
        "a": "No. Everything runs and is stored on your Mac; there's no Elco Dev server in the loop."
      },
      {
        "q": "Will it use up my plan's limits?",
        "a": "Running several agents uses more of your plan. You choose how many agents run and each one's daily cap."
      },
      {
        "q": "Is it made by Anthropic?",
        "a": "No. It's an independent tool by Elco Dev that runs Claude Code, and isn't affiliated with or endorsed by Anthropic."
      }
    ],
    "product": {
      "name": "Elco Console kit",
      "href": "/apps/console",
      "blurb": "Run your Claude Code agents like a small team, with one inbox for your decisions. $99 one-time, Mac only.",
      "cta": "See Elco Console"
    },
    "related": [
      {
        "label": "Elco Console docs and guides",
        "href": "/apps/console"
      },
      {
        "label": "Built your app with AI tools? Check these first",
        "href": "/insights/ai-built-app-checklist"
      }
    ]
  },
  {
    "slug": "record-samsung-dex-on-mac",
    "title": "How to record Samsung DeX on a Mac",
    "seoTitle": "How to Record Samsung DeX on a Mac (Screen Recording to MP4)",
    "description": "How to record your Samsung DeX desktop on a Mac as an MP4 for tutorials, demos and bug reports, using Deskbridge Pro's one-click recording.",
    "published": "2026-11-06",
    "updated": "2026-11-06",
    "readMinutes": 3,
    "answer": "With Deskbridge, Samsung DeX opens in a window on your Mac. Deskbridge Pro ($5 a year, on top of the $12 Deskbridge license) adds one-click recording: choose Start Recording in the Deskbridge menu or press ⌥⇧⌘R, and the MP4 is saved to Movies › Deskbridge when you stop.",
    "body": [
      {
        "h2": "Steps"
      },
      {
        "ul": [
          "Install Deskbridge (1.5 or later) and connect your Galaxy phone so DeX opens in a Mac window.",
          "Add Deskbridge Pro and activate the key in Deskbridge.",
          "Choose Start Recording in the Deskbridge menu, or press ⌥⇧⌘R.",
          "Use DeX as normal; a small bar shows the recording time.",
          "Choose Stop Recording. The MP4 is in your Movies › Deskbridge folder."
        ]
      },
      {
        "h2": "What it's good for"
      },
      {
        "p": "Tutorials and how-to videos, demos of Android apps running in DeX, and bug reports you can send to a developer. DeX keeps running while you record."
      },
      {
        "h2": "Without Pro"
      },
      {
        "p": "Deskbridge's $12 license keeps every core feature without Pro: DeX in a Mac window, your Mac's keyboard and trackpad, notifications, calls and more. Pro is an optional add-on for extra tools like recording and more display sizes."
      }
    ],
    "faq": [
      {
        "q": "Which phones work?",
        "a": "Samsung Galaxy phones with One UI 8 or later, on a Mac running macOS 13 or later (Apple silicon or Intel)."
      },
      {
        "q": "How much is Deskbridge Pro?",
        "a": "$5 a year, renewing until you cancel. It needs a $12 Deskbridge license."
      },
      {
        "q": "Can I try Deskbridge first?",
        "a": "Yes. There's a free 7-day trial with every feature, no card or sign-up."
      }
    ],
    "product": {
      "name": "Deskbridge Pro",
      "href": "/apps/deskbridge/pro",
      "blurb": "One-click recording of your phone desktop to MP4, plus extra display sizes. $5/year add-on to Deskbridge.",
      "cta": "See Deskbridge Pro"
    },
    "related": [
      {
        "label": "Deskbridge: Samsung DeX on your Mac",
        "href": "/apps/deskbridge"
      },
      {
        "label": "Deskbridge guides",
        "href": "/apps/deskbridge/guides"
      }
    ]
  },
  {
    "slug": "sports-schedule-csv-download",
    "title": "Where to download full sports schedules as CSV",
    "seoTitle": "Download NFL, NBA, NHL, MLB & Soccer Schedules as CSV or JSON",
    "description": "How to get full-season sports schedules (NFL, college football, NBA, NHL, MLB, college basketball and soccer) as CSV or JSON for spreadsheets, apps and sites, free per week or as one file per league.",
    "published": "2026-11-06",
    "updated": "2026-11-06",
    "readMinutes": 4,
    "answer": "Realtime Sports API publishes free schedule pages by week, date and team, each with a CSV and JSON download. For every game of the season in one file per league, its season export covers 13 leagues (NFL, college football, NBA, NHL, MLB, men's college basketball and seven soccer leagues) as CSV and JSON, rebuilt daily, for $49 once with re-downloads for 365 days.",
    "body": [
      {
        "h2": "Free: one week, date or team"
      },
      {
        "p": "The schedule pages show games with start times in US Eastern, TV, venue and final scores, and every page has a CSV and JSON download for that view. That's enough if you only need your team or this week."
      },
      {
        "h2": "The full-season export"
      },
      {
        "ul": [
          "One row per game: game id, start time in UTC and US Eastern, week where the league has weeks, status, both teams with abbreviations and scores once played, venue, city and TV networks where published.",
          "13 leagues, each as its own CSV and JSON file.",
          "Rebuilt every day, so reschedules and final scores show up when you re-download.",
          "Licensed for use in your own apps, sites, sheets and products; you can't resell the files as a dataset."
        ]
      },
      {
        "h2": "Need live updates in code?"
      },
      {
        "p": "If you need scores as games happen, the Realtime Sports API itself has a free tier, with webhooks and WebSocket push on paid plans."
      }
    ],
    "faq": [
      {
        "q": "Is the schedule download free?",
        "a": "Single weeks, dates and teams are free on the schedule pages. The full-season export of every game is $49 once."
      },
      {
        "q": "Can I use it commercially?",
        "a": "Yes, in your own apps, sites, sheets and products. Don't resell the raw files as a dataset."
      },
      {
        "q": "Do I need an API key?",
        "a": "No. The export is a one-time purchase with no account."
      }
    ],
    "product": {
      "name": "Season schedule export",
      "href": "https://www.realtimesportsapi.com/schedule-export",
      "blurb": "Every game of the season for 13 leagues, CSV and JSON, rebuilt daily. $49 once.",
      "cta": "See the season export"
    },
    "related": [
      {
        "label": "Realtime Sports API",
        "href": "https://www.realtimesportsapi.com"
      },
      {
        "label": "Free schedule pages",
        "href": "https://www.realtimesportsapi.com/schedules"
      }
    ]
  },
  {
    "slug": "market-holiday-settlement-date-api",
    "title": "How to check market holidays and settlement dates in code",
    "seoTitle": "Market Holiday & Settlement Date API: Is the Market Open? When Does It Settle?",
    "description": "How to answer \"is the market open?\" and \"when does this trade settle?\" in code for 29 exchanges, including early closes and the EU/UK move to T+1 in October 2027, with SettleDate's free tier.",
    "published": "2026-11-06",
    "updated": "2026-11-06",
    "readMinutes": 4,
    "answer": "SettleDate is a JSON API for exchange holidays, trading hours and settlement dates across 29 exchanges, 52 countries and the US, euro and UK payment calendars, 2020 to 2030. Its free plan covers 5,000 calls a month, and free calendars answer 60 keyless calls an hour. It also builds in the EU move to T+1 settlement on 11 October 2027.",
    "body": [
      {
        "h2": "The questions it answers"
      },
      {
        "ul": [
          "Is a given day a trading day, and is the market open right now (or on lunch break)?",
          "What's the next or previous trading day, or the date N trading days from now?",
          "When does a trade settle (T+1, T+2), using the market calendar and the cash-leg calendar together?",
          "What are the session hours, including early closes, in local time and UTC?"
        ]
      },
      {
        "h2": "Why settlement dates are tricky"
      },
      {
        "p": "A US trade can't settle on a day the Fed is closed, even when the NYSE is open (Columbus Day and Veterans Day). From 11 October 2027, EU trades move from T+2 to T+1, so trades on Friday the 8th and Monday the 11th both settle on Tuesday the 12th. SettleDate joins the right calendars and picks the cycle by trade date."
      },
      {
        "h2": "Where the data comes from"
      },
      {
        "p": "Exchange sessions come from the open-source exchange_calendars project, country holidays from python-holidays, and the Fed calendar from the Federal Reserve's published rule. Core exchanges are checked against the exchange's own holiday notices, and every calendar lists its source."
      }
    ],
    "faq": [
      {
        "q": "Is there a free tier?",
        "a": "Yes. 5,000 calls a month with all country calendars plus NYSE, Nasdaq, LSE, Xetra, Tokyo and the US Fed, TARGET2 and UK payment calendars. Free calendars also answer 60 keyless calls an hour."
      },
      {
        "q": "What happens at my limit?",
        "a": "The API returns 429 until the 1st of the month. Nothing is billed automatically beyond your plan."
      },
      {
        "q": "Can I get it through RapidAPI?",
        "a": "SettleDate is also listed on RapidAPI if you already bill through it, or you can get a free key directly on settledate.dev."
      }
    ],
    "product": {
      "name": "SettleDate",
      "href": "https://settledate.dev",
      "blurb": "Exchange holidays, trading hours and settlement dates in one JSON API. Free key, no card.",
      "cta": "Get a free key"
    },
    "related": [
      {
        "label": "T+1 settlement in 2027",
        "href": "https://settledate.dev/t1-settlement-2027"
      },
      {
        "label": "Exchange holiday calendars",
        "href": "https://settledate.dev/holidays"
      }
    ]
  },
  {
    "slug": "pickleball-round-robin-printable",
    "title": "Printable pickleball round-robin sheets for open play",
    "seoTitle": "Printable Pickleball Round Robin & Open-Play Sheets (4–12 Courts)",
    "description": "Printable sign-in sheets, checked round-robin rotations for 4 to 12 courts, a court board, scorecards, a ladder and standings for running pickleball open play or a league night.",
    "published": "2026-11-06",
    "updated": "2026-11-06",
    "readMinutes": 3,
    "answer": "For pickleball open play, you need a sign-in sheet, a fair rotation so everyone plays with and against different people, and a way to track scores. The Paddle Rack Pickleball Open-Play & League Organizer Kit is a 22-page printable PDF ($9) with sign-in sheets, checked round-robin rotations for 4 to 12 courts, a court board, scorecards, a ladder and standings.",
    "body": [
      {
        "h2": "What's in the kit"
      },
      {
        "ul": [
          "Sign-in sheets for open play.",
          "Checked round-robin rotations for 4 to 12 courts.",
          "A court board to post who's on which court.",
          "Scorecards, a ladder and standings sheets for league nights."
        ]
      },
      {
        "h2": "Paper or phone?"
      },
      {
        "p": "Paper is easiest when the venue has poor signal or organizers rotate. If you'd rather run rotations on a phone, Paddle Rack is a free open-play organizer app for one court and eight players, with a Club upgrade for more."
      }
    ],
    "faq": [
      {
        "q": "Is it a digital download?",
        "a": "Yes. Pay once, download right away and print at home."
      },
      {
        "q": "How many courts does it support?",
        "a": "The checked rotations cover 4 to 12 courts."
      }
    ],
    "product": {
      "name": "Pickleball Open-Play & League Organizer Kit",
      "href": "/apps/paddlerack/organizer-kit",
      "blurb": "22 printable pages for open play and league nights. $9, instant download.",
      "cta": "See the kit"
    },
    "related": [
      {
        "label": "Paddle Rack app",
        "href": "/apps/paddlerack"
      },
      {
        "label": "All printables",
        "href": "/apps/downloads"
      }
    ]
  },
  {
    "slug": "custom-erp-small-business",
    "title": "Custom ERP for a small or mid-sized business: when it makes sense",
    "seoTitle": "Custom ERP Development for Small Businesses: When It Makes Sense (Tennessee & Remote)",
    "description": "When a small or mid-sized business should build a custom ERP or operations system instead of buying NetSuite, Odoo or another package: the signs, the usual middle path, what drives cost, and how to start small.",
    "published": "2026-11-06",
    "updated": "2026-11-06",
    "readMinutes": 5,
    "answer": "Most small businesses shouldn't build a full ERP from scratch. Start with accounting software you already trust (QuickBooks, Xero) and build a custom operations system around it: jobs, inventory, scheduling, field work and dashboards, synced to accounting. That gets the fit of custom software without rebuilding the parts packages already do well.",
    "body": [
      {
        "h2": "Signs your business has outgrown off-the-shelf tools"
      },
      {
        "ul": [
          "The same order, job or customer gets typed into two or three systems.",
          "One person's spreadsheet is the only place the real numbers live.",
          "You pay per-seat fees for an ERP module nobody uses, and still work around it.",
          "The office can't see what crews or the warehouse did until someone calls.",
          "Month-end is the first time you find out how the month went."
        ]
      },
      {
        "h2": "Buy, build, or both"
      },
      {
        "table": {
          "head": [
            "Option",
            "Good when",
            "Watch out for"
          ],
          "rows": [
            [
              "Packaged ERP (NetSuite, Odoo, Acumatica and others)",
              "Your processes are fairly standard and you can adapt to the software",
              "Implementation partners, per-user fees and customizations that are hard to change later"
            ],
            [
              "Custom system on top of your accounting",
              "Your operations are what makes you different, and accounting is standard",
              "You need someone to maintain it; plan for a care plan from day one"
            ],
            [
              "Fully custom ERP",
              "Rarely the right first step for a small business",
              "Rebuilding accounting, tax and payroll is costly and risky"
            ]
          ]
        }
      },
      {
        "h2": "What drives the cost"
      },
      {
        "ul": [
          "How many kinds of users (office, field, warehouse, customers) need their own screens and permissions.",
          "Which systems it must connect to: accounting, payments, e-commerce, shipping, existing databases.",
          "How much historical data needs to move over.",
          "Whether it starts as one workflow or tries to replace everything at once."
        ]
      },
      {
        "h2": "Start small"
      },
      {
        "p": "The projects that go well pick the one workflow that causes the most re-keying, build that first in a few milestones, and connect it to accounting. Once that's in daily use, the next module is easier to scope and cheaper to build."
      },
      {
        "h2": "How we work"
      },
      {
        "p": "We're a small studio in Lebanon, Tennessee, working with clients remotely across the US. We build custom CRMs, internal tools, field apps and dashboards, quote a fixed price per milestone, and set everything up in accounts you own."
      }
    ],
    "faq": [
      {
        "q": "Is custom ERP more expensive than buying one?",
        "a": "Up front it often is; over a few years it can be cheaper if per-seat fees and workarounds are high. The cheapest path for most small businesses is a custom operations layer connected to standard accounting software."
      },
      {
        "q": "Can a custom system connect to QuickBooks?",
        "a": "Usually yes. QuickBooks Online and Xero both have APIs for syncing customers, invoices and payments."
      },
      {
        "q": "Do you work with businesses outside Tennessee?",
        "a": "Yes. We're based near Nashville and work remotely with clients across the US."
      },
      {
        "q": "Who owns the software?",
        "a": "You do: the code, the data and the hosting accounts."
      }
    ],
    "product": {
      "name": "Custom CRMs, internal tools and dashboards",
      "href": "/services/custom-crm-dashboards",
      "blurb": "One system shaped around how your team works, connected to the tools you already use. Fixed quotes before work starts.",
      "cta": "See how we build them"
    },
    "related": [
      {
        "label": "Custom CRM or off-the-shelf?",
        "href": "/insights/custom-crm-vs-off-the-shelf"
      },
      {
        "label": "How much does a custom app cost?",
        "href": "/insights/how-much-does-a-custom-app-cost"
      },
      {
        "label": "Who should own your software accounts?",
        "href": "/insights/own-your-domain-hosting-and-accounts"
      }
    ]
  },
  {
    "slug": "automate-social-posts-for-your-product",
    "title": "How to keep your product's social accounts posting, safely, with AI agents",
    "seoTitle": "Automate Threads, Bluesky & Mastodon Posts With AI Agents (With Guardrails)",
    "description": "How to let AI agents keep your product's Threads, Bluesky and Mastodon accounts active without posting something you'd regret: a queue file per account, guardrails before anything posts, natural scheduling, and official APIs only.",
    "published": "2026-11-06",
    "updated": "2026-11-06",
    "readMinutes": 4,
    "answer": "The safe way to automate social posts with AI agents is to separate writing from posting. Agents write two weeks of posts into a queue file per account. A scheduler publishes them at natural times through each platform's official API, and every post passes guardrails first: your never-list, contact details, secrets and length limits. The Agent Social Kit is a self-hosted Mac kit ($49 one-time) that does this for Threads, Bluesky and Mastodon, and crossposts guides to Dev.to and Hashnode.",
    "body": [
      {
        "h2": "Why not let the agent post directly?"
      },
      {
        "p": "An agent writing and publishing in one step leaves no point where a mistake gets caught: a client's name, a wrong price, a link posted five times in a row. Writing into a queue first gives you a file you can read, lint and dry-run before anything goes out."
      },
      {
        "h2": "The setup that works"
      },
      {
        "ul": [
          "One queue file per account, filled two weeks ahead by an agent or by you.",
          "A scheduler that posts 1–3 times a day at varied times inside a window you choose, never twice within 75 minutes, and holds dated posts until their date.",
          "No repeats: the same text never twice, and the same link not twice in three days.",
          "Guardrails on every post: your never-list (client names, competitors, anything you add), plus email addresses, phone numbers, secret-looking strings and posts over each platform's length limit.",
          "A dry run first, a kill-switch file that stops everything, and a daily report of what went out."
        ]
      },
      {
        "h2": "Crossposting guides without hurting SEO"
      },
      {
        "p": "Crossposting your articles to Dev.to and Hashnode can bring readers, as long as each copy sets canonical_url to your own page so search engines credit your site. The kit converts existing HTML guides to Markdown, keeps links absolute and publishes one article a day."
      },
      {
        "h2": "Stay within platform rules"
      },
      {
        "p": "Use official APIs only (Meta's Threads API with your own app, Bluesky app passwords, Mastodon accounts marked as automated), keep daily limits conservative, and don't send automated replies to people. Check each platform's current rules for your use, especially for health, finance or other regulated topics."
      }
    ],
    "faq": [
      {
        "q": "Do I need Elco Console?",
        "a": "No. The Agent Social Kit runs on its own on any Mac with Python 3 and launchd. If you use Elco Console, one setting sends the daily post report into its team log."
      },
      {
        "q": "Which platforms does it post to?",
        "a": "Threads, Bluesky and Mastodon for scheduled posts, and Dev.to and Hashnode for crossposting your own articles with canonical links."
      },
      {
        "q": "Where are my tokens stored?",
        "a": "In one private file on your Mac. Nothing is sent to Elco Dev."
      },
      {
        "q": "How much does it cost?",
        "a": "$49 one-time, or $29 if you already own Elco Console, or $129 for both kits. Email within 14 days for a full refund if it doesn't work for you."
      }
    ],
    "product": {
      "name": "Agent Social Kit",
      "href": "/apps/social-kit",
      "blurb": "Let your agents keep your product's social accounts alive, with guardrails. $49 one-time, Mac.",
      "cta": "See the Agent Social Kit"
    },
    "related": [
      {
        "label": "How to run several Claude Code agents with one dashboard",
        "href": "/insights/claude-code-multi-agent-dashboard"
      },
      {
        "label": "Elco Console",
        "href": "/apps/console"
      }
    ]
  },
];

export const insightBySlug = (slug: string) => INSIGHTS.find((i) => i.slug === slug);
