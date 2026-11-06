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
];

export const insightBySlug = (slug: string) => INSIGHTS.find((i) => i.slug === slug);
