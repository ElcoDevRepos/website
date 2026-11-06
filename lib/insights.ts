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
];

export const insightBySlug = (slug: string) => INSIGHTS.find((i) => i.slug === slug);
