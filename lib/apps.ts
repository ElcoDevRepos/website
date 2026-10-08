/**
 * App pages under /apps/<slug>: the public home of every app Elco Dev runs
 * (Oct 2026 rule: only Crohn's Food Tracker, Starter Set and NicDrop keep a
 * domain of their own; every other app lives here).
 *
 * - Product facts (name, summary, screenshots, store links) come from
 *   PROJECTS in lib/site.ts; this file adds what only the app page needs.
 * - `content`: apps with a large web companion (Liturgical Living, Paddle
 *   Rack, Scripted's KJV Bible). Those pages are built and deployed by the app's own Vercel project
 *   and served at /apps/<slug>/… through the rewrites in next.config.mjs;
 *   keep `origin` in step with that file.
 * - `legal`: the privacy policy, support page and terms the App Store and
 *   Google Play listings link to (/apps/<slug>/privacy, /support, /terms).
 *   Privacy facts are plain statements checked against each app's code.
 */
import { APP_PROJECTS, SITE, type Project } from "./site";

export type Section = { h: string; p?: string; list?: string[] };

export type AppPage = {
  slug: string;
  /** Store or brand name, when it differs from the project name. */
  storeName?: string;
  /** Large web companion served under /apps/<slug>/… from another Vercel project. */
  content?: { origin: string; title: string; lead: string; sections: { label: string; path: string; blurb: string }[] };
  /** Where the app itself runs, for web apps and apps that keep their own domain. */
  external?: { label: string; url: string };
  legal?: {
    updated: string;
    contact: string;
    privacyIntro: string;
    privacy: Section[];
    support: Section[];
    /** What is sold, for the terms page. */
    purchases: string;
  };
};

const CONTACT = SITE.email;

const STORE_PURCHASES: Section = {
  h: "Purchases",
  p: "Purchases are processed by Apple or Google; we never see your payment details. The app uses RevenueCat, Inc. to confirm purchases and unlock paid features. RevenueCat receives an anonymous app user ID, your purchase history for this app and basic device information (such as app version, OS version and storefront country), not your name, email or content. See RevenueCat's privacy policy at revenuecat.com/privacy.",
};

const RESTORE: Section = {
  h: "Restoring a purchase",
  p: "Open the app's settings and tap Restore Purchases, signed in to the same Apple Account or Google account you bought with.",
};
const CANCEL: Section = {
  h: "Cancelling a subscription",
  p: "On iPhone, open Settings › your name › Subscriptions, choose the app and tap Cancel. On Android, open the Google Play app, tap your profile picture, then Payments & subscriptions › Subscriptions. You keep access until the end of the period you paid for.",
};
const REFUNDS: Section = {
  h: "Refunds",
  p: "Apple handles App Store refunds at reportaproblem.apple.com; Google handles Google Play refunds through Google Play Help. We can't issue store refunds ourselves.",
};

function studioPrivacy(name: string, details: Section[]): Section[] {
  return [
    { h: "The short version", list: ["No account, no sign-in, no ads, no tracking and no selling of data.", `What you make in ${name} is stored on your device. We don't run a server that receives it.`, "Purchases are processed by Apple or Google, and RevenueCat confirms them."] },
    ...details,
    STORE_PURCHASES,
    { h: "Children", p: `${name} is not directed at children under 13, and we don't knowingly collect personal information from children.` },
    { h: "Deleting your data", p: "Everything the app stores lives on your device; deleting the app deletes it. To ask RevenueCat to delete your purchase record, email us." },
    { h: "Changes", p: "If this policy changes we'll update this page and the date above." },
  ];
}

export const APP_PAGES: AppPage[] = [
  {
    slug: "liturgical-living",
    content: {
      origin: "https://living-liturgically.vercel.app",
      title: "Liturgical Living on the web",
      lead: "The liturgical calendar, saints, novenas, prayers and apologetics from the app, free to read in the browser, plus two daily games.",
      sections: [
        { label: "Advent 2026", path: "/advent", blurb: "Every day of Advent, from Nov 29 to Christmas Eve, with the wreath and the O Antiphons." },
        { label: "Novena calendar", path: "/novena-calendar", blurb: "When each novena starts this year, with a calendar you can subscribe to." },
        { label: "All Saints & All Souls", path: "/all-saints", blurb: "Nov 1 and 2: what the days mean and how to pray for the dead." },
        { label: "Today", path: "/today", blurb: "Today's feast, season and liturgical colour." },
        { label: "Liturgical calendar", path: "/calendar", blurb: "Every day of the Church year, with US holy days." },
        { label: "Saints", path: "/saints", blurb: "Biographies for the saints of the Roman Calendar." },
        { label: "Novenas", path: "/novenas", blurb: "Traditional novenas with all nine days in full." },
        { label: "Prayers", path: "/prayers", blurb: "The Rosary, the Angelus and the prayers Catholics know by heart." },
        { label: "Apologetics", path: "/apologetics", blurb: "The Catholic answer on 16 questions, with Scripture quoted in full." },
        { label: "Daily Word", path: "/play/word", blurb: "A five-letter Catholic word game, new every day." },
        { label: "Daily Trivia", path: "/play/trivia", blurb: "Five Catholic trivia questions a day." },
        { label: "For parishes", path: "/parishes", blurb: "Bring the app to your parish." },
      ],
    },
    legal: {
      updated: "October 4, 2026",
      contact: CONTACT,
      privacyIntro:
        "Liturgical Living is made by Elco Dev, LLC (\"we\"). It works without an account, and most of what you do in it, from your journal to your prayer logs, never leaves your phone. A few online features talk to our server; this policy says exactly what they send.",
      privacy: [
        { h: "No account", p: "The app has no sign-up or sign-in, and we never ask for your name, email address or phone number." },
        { h: "What stays on your device", p: "Journal entries, prayer intentions, Rosary and prayer logs, streaks, your sacramental log, your confession list, bookmarks, settings and Screen Time figures are stored only on your device. We have no copy of them." },
        { h: "Anonymous usage counts", p: "When the app asks our server for online content (podcasts, audio, the catalog or a shared link), the server adds one to a daily count for that feature and to a count of the general platform (Android, iOS or web). We don't store IP addresses, device IDs or what you asked for, and the counts are deleted after 120 days." },
        { h: "Shared prayer intentions", p: "If you choose to share an intention, its text and any name you type are sent to our server so the people you send the link to can read it and tap \"I prayed for this\". Nothing else about you is stored, a tap only moves a counter, and the intention is deleted after 60 days. Intentions you don't share never leave your phone." },
        { h: "Shared playlists", p: "If you share a listening queue, the list of episodes and any name you give it are stored under a random link for one year. Nothing about you is attached." },
        { h: "Parish codes", p: "If you redeem a parish code, the code and your anonymous purchase ID are sent to RevenueCat to unlock Plus, and we keep that anonymous ID with the code so the parish's seats can be counted. We don't receive your name or contact details." },
        { h: "Purchases", p: "Payments go through Google Play or the App Store; we never see your payment details. RevenueCat manages your Plus status with an anonymous ID it creates. See revenuecat.com/privacy." },
        { h: "Content from other sites", p: "The app streams or downloads some content directly from its publishers, such as the Liturgy of the Hours audio, daily reflections and readings sources, Wikimedia Commons art, and podcast and radio hosts. Those services receive an ordinary web request (which includes your IP address) under their own policies." },
        { h: "Location", p: "If you allow it, your approximate location is used on your device only to sort the cathedrals list by distance. It is never stored or sent." },
        { h: "Notifications", p: "Reminders are scheduled on your device. We don't send push notifications." },
        { h: "Backups", p: "You can export an encrypted backup that only your passphrase can open and keep it wherever you choose. Android's own device backup may include the app's settings, but not its main database or your confession list." },
        { h: "Crash logs", p: "Crash reports are saved on your device and are only sent if you choose to share one with us." },
        { h: "What we don't do", list: ["No ads and no ad tracking.", "No analytics or tracking SDKs in the app.", "No selling or sharing of your data with data brokers."] },
        { h: "Deleting your data", p: "Uninstall the app or clear its storage to delete everything on your device. Shared intentions delete themselves after 60 days and shared playlists after a year; email us to have one removed sooner." },
        { h: "Children", p: "Liturgical Living is a general-audience app and is not directed at children under 13." },
        { h: "Changes", p: "If this policy changes we'll update this page and the date above." },
      ],
      support: [
        { h: "Get in touch", p: `Questions, corrections or ideas? Email ${CONTACT} and a person will reply, usually within a day or two.` },
        { h: "Restoring Plus", p: "On Android open Settings › Plus › Restore purchases; on iPhone open the Plus panel and tap Restore purchases. Use the same Google or Apple account you bought with." },
        CANCEL,
        REFUNDS,
        { h: "Moving to a new phone", p: "Export an encrypted backup from the app's settings, then restore it on the new phone with the same passphrase." },
      ],
      purchases: "Liturgical Living is free. Liturgical Living Plus is sold as an auto-renewing monthly subscription and as a one-time lifetime purchase.",
    },
  },
  {
    slug: "paddlerack",
    storeName: "Paddle Rack: Pickleball Mixer",
    content: {
      origin: "https://elcodev-paddlerack.vercel.app",
      title: "Free pickleball tools",
      lead: "The same fair rotation engine as the app, free in the browser: print a round robin, look up a schedule, or read how open play works.",
      sections: [
        { label: "Round robin generator", path: "/generator", blurb: "Printable schedules for open play, mixers, fixed partners, Americano, Mexicano and king of the court." },
        { label: "Schedules by players and courts", path: "/round-robin", blurb: "Ready-made round robins for 4 to 24 players on 1 to 6 courts." },
        { label: "Guides", path: "/guides", blurb: "Running open play, paddle stacking rules, Americano vs Mexicano and more." },
        { label: "How the rotation stays fair", path: "/rotation-algorithm", blurb: "The rules the engine follows, with a worked example." },
      ],
    },
    legal: {
      updated: "October 4, 2026",
      contact: CONTACT,
      privacyIntro: "Paddle Rack is made by Elco Dev, LLC (\"we\"). It works offline with no account, and your rosters stay on your phone. This policy explains what that means.",
      privacy: studioPrivacy("Paddle Rack", [
        { h: "What the app stores", p: "Sessions, scores, standings, saved groups (player names and optional skill ratings), ladders, player stats and settings are stored on your device. There is no Paddle Rack server and no account. Player names and ratings are typed in by the organizer and never leave the phone unless the organizer shares them. Your phone's own iCloud or Google backup may include this data, under your control." },
        { h: "Things you choose to share", p: "Results cards, PDFs, CSV files, copied text and backup files are created on the device and handed to the system share sheet; you decide where they go. Importing a backup reads only the file you pick." },
        { h: "What the app doesn't do", list: ["No accounts, sign-in or contact details.", "No analytics or crash-reporting SDKs, no advertising and no ad identifiers.", "No location, camera, microphone, contacts or photo-library access."] },
      ]),
      support: [
        { h: "Get in touch", p: `Questions, bugs or ideas? Email ${CONTACT} and we'll get back to you, usually within a day or two.` },
        RESTORE,
        CANCEL,
        REFUNDS,
        { h: "Moving to a new phone", p: "Export a backup file from the app's settings, then import it on the new phone." },
      ],
      purchases: "Paddle Rack is free for one court and eight players. Club is sold as a one-time purchase or as an auto-renewing yearly subscription.",
    },
  },
  {
    slug: "spotted",
    storeName: "Spotted: Daily Photo Hunt",
    legal: {
      updated: "October 4, 2026",
      contact: CONTACT,
      privacyIntro: "Spotted is made by Elco Dev, LLC (\"we\"). It has no account and no server of its own, and your photos never leave your phone. This policy explains what that means.",
      privacy: studioPrivacy("Spotted", [
        { h: "Your photos stay on your phone", p: "Photos you take or pick for a hunt are downscaled and saved in the app's private storage on your device. They are never uploaded, and deleting the app deletes them." },
        { h: "Photo checking happens on the device", p: "Each photo is checked on the device by the phone's built-in image recognition (Apple's Vision framework on iPhone, Google's on-device ML Kit on Android) plus a simple colour check. No image or result leaves the phone." },
        { h: "Camera and photo library", p: "The camera is used only when you tap a prompt to snap a find; Spotted works without it. Picking a photo uses the system photo picker, which gives the app only the photo you choose. The app reads that photo's capture date to check it was taken today." },
        { h: "Hunt history and reminders", p: "Which prompts you found, your times and streaks are stored on your device. The optional daily reminder is scheduled on your device and only requested if you turn reminders on." },
      ]),
      support: [
        { h: "Get in touch", p: `Questions, bugs or ideas? Email ${CONTACT} and we'll get back to you, usually within a day or two.` },
        { h: "A find wasn't recognised", p: "Try again with the thing filling more of the frame and good light. If the checker still misses it, use \"Trust me\" (twice per hunt); honor finds show as yellow squares in your grid." },
        RESTORE,
        CANCEL,
        REFUNDS,
      ],
      purchases: "Spotted is free to play daily. Spotted Plus is sold as auto-renewing subscriptions and a one-time lifetime purchase, and themed packs are sold as one-time purchases.",
    },
  },
  {
    slug: "blackout",
    storeName: "Blackout Daily: Found Poetry",
    legal: {
      updated: "October 4, 2026",
      contact: CONTACT,
      privacyIntro: "Blackout Daily is made by Elco Dev, LLC (\"we\"). It works without an account, and your poems stay on your iPhone. This policy explains what that means.",
      privacy: studioPrivacy("Blackout Daily", [
        { h: "Your poems stay on your device", p: "Finished poems, drafts, your streak and your style choices are stored in the app's private storage on your iPhone. They are not uploaded anywhere, deleting the app deletes them, and they are included in your own device backup like any app data." },
        { h: "Camera (optional, Plus \"Scan a page\")", p: "Used only when you tap Scan with camera, to photograph a book page. The image is read on the device by Apple's Vision text recognition; neither the photo nor the text leaves your iPhone, and the photo isn't kept after the text is read." },
        { h: "Photos (optional)", p: "Choose a photo uses the system photo picker, which gives the app only the photo you pick. If you save a share card or video, iOS asks for add-only permission to save it to your library." },
        { h: "Notifications (optional)", p: "Only if you turn on the morning reminder. Reminders are scheduled on your device; no push server is involved." },
        { h: "Network use", p: "Only the App Store and RevenueCat purchase calls. The daily pages are bundled in the app." },
      ]),
      support: [
        { h: "Get in touch", p: `Questions, bugs or ideas? Email ${CONTACT} and we'll get back to you, usually within a day or two.` },
        RESTORE,
        CANCEL,
        REFUNDS,
      ],
      purchases: "The daily page is free. Blackout Plus is sold as auto-renewing yearly (with a free trial) and monthly subscriptions and as a one-time lifetime purchase.",
    },
  },
  {
    slug: "rhinestoned",
    storeName: "Rhinestoned: Bedazzle Photos",
    legal: {
      updated: "October 4, 2026",
      contact: CONTACT,
      privacyIntro: "Rhinestoned is made by Elco Dev, LLC (\"we\"). It has no accounts, no ads, no analytics and no tracking, and your photos never leave your iPhone.",
      privacy: studioPrivacy("Rhinestoned", [
        { h: "Your creations", p: "For each creation the app keeps a copy of the photo, the gem layout and a thumbnail in its private storage on your device. They are removed when you delete the creation or the app, and may be included in your own device backup. We never receive them. Exports are written to a temporary folder for sharing and saved to your photo library only when you tap Save to Photos." },
        { h: "Camera and photos", p: "The camera is used only when you tap Take a photo. Picking a photo uses Apple's system photo picker, which gives the app only the photo you choose. Add-only photo-library permission is requested only when you tap Save to Photos; the app can't read your library." },
        { h: "On-device processing and motion", p: "Object detection runs on the device with Apple's Vision framework; nothing is uploaded. Motion sensors are used only while you edit, to make the gems sparkle as you tilt, and motion data is never stored or sent. You can turn it off in Settings." },
        { h: "Not collected", p: "No contact information, location, advertising identifiers, browsing history, diagnostics or analytics." },
      ]),
      support: [
        { h: "Get in touch", p: `Questions, bugs or ideas? Email ${CONTACT} and we'll get back to you, usually within a day or two.` },
        RESTORE,
        CANCEL,
        REFUNDS,
      ],
      purchases: "Rhinestoned is free to try. Rhinestoned Pro is sold as auto-renewing yearly (with a free trial) and weekly subscriptions.",
    },
  },
  {
    slug: "homeshelf",
    storeName: "HomeShelf - Homeschool Library",
    legal: {
      updated: "September 29, 2026",
      contact: "hello@elcodev.com",
      privacyIntro:
        "Homeshelf is made by Elco Dev, LLC (\"we\"). It keeps a catalog of your family's books and your homeschool reading plans, and shares them between your family's devices. The short version: your library is stored so your family can share it, only people you invite can see it, and we don't sell or advertise with it.",
      privacy: [
        { h: "No account, no email", p: "Homeshelf doesn't ask for your email or a password. Each device signs in anonymously with a random ID (Google Firebase Authentication), and your household is linked to those IDs." },
        { h: "What your family library stores", p: "So everyone in your household sees the same library, Homeshelf stores in Google Cloud Firestore: your household name and the names you give yourselves; your children's first names and grades; your books (titles, authors, ISBNs, covers, subjects, levels, shelves, tags, notes); reading plans, reading logs and terms; and lending records (who borrowed a book and when). Only devices that have joined your household with an invite code can read or change it. Invite codes expire after 48 hours." },
        { h: "Children", p: "Homeshelf is used by parents. Children's first names and grades are entered by a parent to organise reading plans; children don't use accounts, and we don't knowingly collect information from children themselves. Parents can edit or delete this at any time." },
        { h: "Book lookups and the shared book cache", p: "When you scan or search for a book, Homeshelf looks up its public details (title, author, cover) from Google Books and Open Library. To make scanning faster for everyone, the public details of a book (never who owns it) are cached by ISBN and shared between all Homeshelf users." },
        { h: "Camera", p: "The camera is only used to read barcodes, on your device. No photos or video are saved or uploaded." },
        { h: "Purchases", p: "Homeshelf Plus is sold through Google Play or the App Store. We use RevenueCat to confirm purchases for your household; it receives your household's random ID, purchase history, country and app version, not your name or payment details." },
        { h: "Anonymous usage statistics", p: "Homeshelf sends anonymous usage events (such as \"scanned a book\" or \"opened the upgrade screen\") with a random ID so we can improve the app. They never include book titles, names or notes. You can turn them off in Family › Settings." },
        { h: "What we don't do", list: ["No advertising or ad tracking.", "No selling or sharing of your data with data brokers.", "No third-party analytics SDKs."] },
        { h: "Keeping and deleting your data", p: "Your library is kept while your household uses Homeshelf. Leaving a household removes your device from it. To delete your household and everything in it, email hello@elcodev.com from the app's Support link and we'll erase it within 30 days. You can export your whole library at any time." },
        { h: "Changes", p: "If this policy changes, we'll update the date above." },
      ],
      support: [
        { h: "Get in touch", p: "Questions or ideas? Email hello@elcodev.com and a person will reply." },
        { h: "Scanning", p: "Hold the barcode on the back of the book in the frame with good light. Books without a barcode can be added by title or by hand." },
        { h: "Sharing with your family", p: "On a phone that's already in your library, open Family › Invite family and share the code. On the other phone choose \"Join a family library\" and type the code within 48 hours." },
        { h: "Homeshelf Plus", p: "One purchase covers everyone in your family library. To restore it on a new phone, join your library, then Family › Restore purchases. Cancel a subscription in Google Play › Payments & subscriptions or iPhone Settings › Subscriptions, at least 24 hours before it renews." },
        { h: "Your data", p: "Family › Export gives you a spreadsheet or a full backup of your library at any time." },
      ],
      purchases: "Homeshelf is free for up to 250 books. Homeshelf Plus is sold as auto-renewing yearly (with a free trial) and monthly subscriptions and as a one-time lifetime purchase, and one purchase covers the whole household.",
    },
  },
  {
    slug: "scripted",
    storeName: "Scripted - Bible Annotation",
    content: {
      origin: "https://scripted-bible.vercel.app",
      title: "Read the King James Bible free",
      lead: "The complete King James Version, the same text that's free in the app: all 66 books and 1,189 chapters, with a link for every verse.",
      sections: [
        { label: "All 66 books", path: "/bible", blurb: "The Old and New Testaments, book by book and chapter by chapter." },
        { label: "John 3", path: "/bible/john/3", blurb: "\"For God so loved the world…\" and the rest of the chapter." },
        { label: "Psalm 23", path: "/bible/psalms/23", blurb: "\"The LORD is my shepherd; I shall not want.\"" },
        { label: "Popular verses", path: "/bible#popular", blurb: "Jeremiah 29:11, Philippians 4:13 and more of the most-loved verses, each in context." },
      ],
    },
    legal: {
      updated: "October 4, 2026",
      contact: CONTACT,
      privacyIntro: "Scripted is made by Elco Dev, LLC (\"we\"). You can read and mark up Scripture without an account; an optional account syncs your marks between devices. This policy explains what each choice involves.",
      privacy: [
        { h: "Without an account", p: "You can read and annotate without an account. Your drawings, highlights and notes are then stored only on your device." },
        { h: "Optional account", p: "If you create an account, your email address and an account ID are stored with Google Firebase Authentication, with a profile record noting when it was created and last updated." },
        { h: "Synced annotations", p: "While you're signed in, your drawings, highlights and notes, and which Bible version, book and chapter they belong to, are stored in Google Cloud Firestore so they sync to your other devices. Only your account can read them." },
        { h: "Analytics (Android)", p: "The Android app sends usage events to Google Firebase Analytics, such as app opens, screens viewed, Bible versions chosen or downloaded, purchases started or completed, and when you create an annotation (including the book and chapter). If you're signed in, these events are linked to your account ID, and Firebase may also collect your device's advertising identifier. The iPhone app doesn't use analytics." },
        { h: "Purchases", p: "Payments go through Google Play or the App Store; we never see your payment details. RevenueCat keeps your purchase history so credits and unlocked translations can be restored. It uses an anonymous ID, or your account ID once you sign in. See revenuecat.com/privacy." },
        { h: "Bible downloads", p: "Additional translations are downloaded from GitHub, which receives an ordinary web request." },
        { h: "What we don't do", list: ["No ads in the app.", "No location, camera, contacts or notifications.", "No selling of your data."] },
        { h: "Deleting your data", p: `Settings › Delete Account permanently removes your account and your synced annotations. Local data is removed when you uninstall. For purchase or analytics records, email ${CONTACT}.` },
        { h: "Children", p: "Scripted is a general-audience app and is not directed at children under 13." },
        { h: "Changes", p: "If this policy changes we'll update this page and the date above." },
      ],
      support: [
        { h: "Get in touch", p: `Questions, bugs or ideas? Email ${CONTACT} and we'll get back to you, usually within a day or two.` },
        { h: "Restoring purchases", p: "Tap Restore Purchases on the Bible version screen or in the credits sheet, signed in to the same Apple or Google account you bought with." },
        { h: "Syncing between devices", p: "Create an account or sign in with the same email on each device; your marks sync while you're signed in." },
        REFUNDS,
      ],
      purchases: "Scripted is free with the King James Version. Other translations are sold as one-time purchases and credits; there is no subscription.",
    },
  },
  { slug: "nicdrop", external: { label: "Visit nicdrop.app", url: "https://nicdrop.app" } },
  { slug: "starter-set", external: { label: "Visit starterset.app", url: "https://starterset.app" } },
  { slug: "crohns-food-tracker", external: { label: "Visit crohnsfoodtracker.app", url: "https://crohnsfoodtracker.app" } },
];

export const appPageBySlug = (slug: string) => APP_PAGES.find((a) => a.slug === slug);

export type AppEntry = { project: Project; page: AppPage };

/** Every app listed under /apps, with its page config (an empty one if none). */
export const APP_ENTRIES: AppEntry[] = APP_PROJECTS.map((project) => ({ project, page: appPageBySlug(project.slug) ?? { slug: project.slug } }));
export const appEntryBySlug = (slug: string) => APP_ENTRIES.find((e) => e.project.slug === slug);
export const LEGAL_APPS = APP_ENTRIES.filter((e) => e.page.legal);
export const appPath = (slug: string) => `/apps/${slug}`;
