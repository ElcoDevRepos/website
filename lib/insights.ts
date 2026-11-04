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
      { label: "Case studies", href: "/case-studies" },
    ],
  },
];

export const insightBySlug = (slug: string) => INSIGHTS.find((i) => i.slug === slug);
