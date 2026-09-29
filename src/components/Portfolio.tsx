import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * The work, newest first. "Our own apps" are products Elco Dev builds, launches
 * and runs itself (store listings, subscriptions, analytics, ads); the grid
 * below is platforms, APIs, websites and earlier client work.
 */

type StoreLinks = { appStore?: string; googlePlay?: string };

interface App {
  name: string;
  icon: string;
  image: string;
  tagline: string;
  description: string;
  platforms: string[];
  tech: string[];
  site: string;
  stores: StoreLinks;
  note?: string;
}

interface Project {
  title: string;
  image: string;
  description: string;
  category: 'SaaS & APIs' | 'Websites' | 'Mobile & web apps';
  tech: string[];
  link?: string;
  year: string;
  ours?: boolean;
}

const OWN_APPS: App[] = [
  {
    name: 'NicDrop',
    icon: '/icons/nicdrop.webp',
    image: '/portfolio/nicdrop.webp',
    tagline: 'Quit nicotine with a plan',
    description: 'A taper plan that steps nicotine pouches, vapes or cigarettes down to a quit date, one-tap logging, a three-minute craving timer and an AI coach for the hard moments.',
    platforms: ['iOS'],
    tech: ['React Native', 'Firebase', 'RevenueCat', 'Claude AI'],
    site: 'https://nicdrop.app',
    stores: { appStore: 'https://apps.apple.com/app/id6813736340' },
  },
  {
    name: "Crohn's Food Tracker",
    icon: '/icons/crohns.webp',
    image: '/portfolio/crohns.webp',
    tagline: 'Find the foods that flare you',
    description: "A two-tap food and symptom diary for Crohn's, colitis and IBS that ranks likely trigger foods and builds a one-page report for the doctor. On the App Store since 2017.",
    platforms: ['iOS', 'Android'],
    tech: ['Mobile', 'Subscriptions', 'Health data'],
    site: 'https://crohnsfoodtracker.app',
    stores: {
      appStore: 'https://apps.apple.com/us/app/crohns-tracker-food-ibd/id1250276026',
      googlePlay: 'https://play.google.com/store/apps/details?id=com.austinhunter.crohnsFoodTracker',
    },
  },
  {
    name: 'Starter Set',
    icon: '/icons/starterset.webp',
    image: '/portfolio/starterset.webp',
    tagline: 'A workout coach for the gear you own',
    description: 'Beginner home workouts built from your own dumbbells, bike or walking pad, a plan that adapts after every session, and a camera coach that counts reps and checks form on the phone.',
    platforms: ['iOS', 'Android'],
    tech: ['React Native', 'On-device AI', 'Pose tracking', 'RevenueCat'],
    site: 'https://starterset.app',
    stores: {},
    note: 'Launching on the App Store and Google Play',
  },
  {
    name: 'Liturgical Living',
    icon: '/icons/liturgical-living.webp',
    image: '/portfolio/liturgical-living.webp',
    tagline: 'The Catholic day, in one app',
    description: 'Daily Mass readings, the Liturgy of the Hours with audio, the Rosary, novenas and the full Bible, following the liturgical calendar. Free, with no ads.',
    platforms: ['iOS', 'Android'],
    tech: ['Native Android (Kotlin)', 'Native iOS', 'Audio'],
    site: 'https://liturgicalliving.app',
    stores: {
      appStore: 'https://apps.apple.com/us/app/liturgical-living/id6775888958',
      googlePlay: 'https://play.google.com/store/apps/details?id=com.elcodev.lection',
    },
  },
];

const PROJECTS: Project[] = [
  {
    title: 'Realtime Sports API',
    image: '/portfolio/realtime-sports-api.webp',
    description: 'A live sports data API for developers: NFL and college football scores, play-by-play, betting odds and webhooks, with a free tier and self-serve keys.',
    category: 'SaaS & APIs',
    tech: ['Node.js', 'Next.js', 'Real-time data', 'Webhooks'],
    link: 'https://realtimesportsapi.com',
    year: '2026',
    ours: true,
  },
  {
    title: 'ClientPing',
    image: '/portfolio/clientping.webp',
    description: 'Turns a week of GitHub activity into a client-ready update in a minute, for freelancers and engineering managers.',
    category: 'SaaS & APIs',
    tech: ['Next.js', 'GitHub API', 'AI'],
    link: 'https://client-ping.elcodev.com',
    year: '2026',
    ours: true,
  },
  {
    title: 'EquiDesk',
    image: '/portfolio/equidesk.webp',
    description: 'Operations software for equestrian barns: horses, boarders, lessons, billing and messaging in one mobile-friendly app.',
    category: 'SaaS & APIs',
    tech: ['Next.js', 'SaaS', 'Billing'],
    link: 'https://equi-desk.com',
    year: '2026',
  },
  {
    title: 'Peerless Development',
    image: '/portfolio/peerless-development.webp',
    description: 'Website for a Nashville design-build remodeling contractor, with project galleries, service areas and consultation requests.',
    category: 'Websites',
    tech: ['Next.js', 'SEO', 'Lead capture'],
    link: 'https://peerlessdevelopment.com',
    year: '2026',
  },
  {
    title: 'Peerless Properties',
    image: '/portfolio/peerless-properties.webp',
    description: 'Website for a Wilson County real estate investment firm, built to bring in sellers and off-market deals.',
    category: 'Websites',
    tech: ['Next.js', 'SEO', 'Lead capture'],
    link: 'https://peerlesspropertiestn.com',
    year: '2026',
  },
  {
    title: 'LaurelCRM',
    image: '/portfolio/laurel-crm-optimized.jpg',
    description: 'An internal CRM for Laurel Medical, built from the ground up as their workload grew.',
    category: 'Mobile & web apps',
    tech: ['Angular', 'TypeScript', 'REST APIs'],
    year: '2023',
  },
  {
    title: 'Penalty Verdict',
    image: '/portfolio/penalty-verdict-optimized.jpg',
    description: 'Football fans vote on referee calls in real time; penalties and game incidents tracked live.',
    category: 'Mobile & web apps',
    tech: ['Ionic', 'Capacitor', 'Node.js', 'Firebase'],
    link: 'https://penaltyverdict.com',
    year: '2022',
  },
  {
    title: 'CCS',
    image: '/portfolio/ccs-trash-optimized.jpg',
    description: 'Valet trash operations for apartment communities: route optimization, service verification and a customer portal.',
    category: 'Mobile & web apps',
    tech: ['Flutter', 'Next.js', 'Firebase', 'Google Maps'],
    link: 'https://go-ccs.com',
    year: '2022',
  },
  {
    title: 'Canvenient',
    image: '/portfolio/canvenient-optimized.jpg',
    description: 'SaaS for apartment communities to run valet trash service, with live service tracking and resident management.',
    category: 'Mobile & web apps',
    tech: ['Angular', 'Firebase', 'Cloud Functions'],
    link: 'https://canvenient.com',
    year: '2021',
  },
  {
    title: 'MD Virtual Care',
    image: '/portfolio/md-virtual-care-optimized.jpg',
    description: 'A virtual-first healthcare platform: patient apps and a web portal with secure records and real-time messaging.',
    category: 'Mobile & web apps',
    tech: ['Ionic', 'Capacitor', 'Next.js', 'Node.js'],
    year: '2021',
  },
  {
    title: 'SynctUp',
    image: '/portfolio/synctup-optimized.jpg',
    description: 'Contact sharing and sync across devices, with real-time updates.',
    category: 'Mobile & web apps',
    tech: ['Ionic', 'Capacitor', 'MongoDB', 'Node.js'],
    link: 'https://app.synctup.com',
    year: '2020',
  },
];

const CATEGORIES = ['All', 'SaaS & APIs', 'Websites', 'Mobile & web apps'] as const;

const Tag: React.FC<{ children: React.ReactNode; tone?: 'blue' | 'gray' }> = ({ children, tone = 'gray' }) => (
  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${tone === 'blue' ? 'bg-blue-50 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>{children}</span>
);

const StoreButton: React.FC<{ href: string; store: 'appStore' | 'googlePlay'; app: string }> = ({ href, store, app }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${app} on ${store === 'appStore' ? 'the App Store' : 'Google Play'}`}
    className="inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white rounded-lg px-3 py-2 text-xs font-semibold transition-colors"
  >
    {store === 'appStore' ? (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16.37 12.64c-.02-2.3 1.88-3.4 1.96-3.46-1.07-1.56-2.73-1.78-3.32-1.8-1.41-.14-2.76.83-3.47.83-.72 0-1.82-.81-3-.79-1.54.02-2.96.9-3.76 2.28-1.6 2.78-.41 6.9 1.15 9.16.76 1.1 1.67 2.34 2.86 2.3 1.15-.05 1.58-.74 2.97-.74 1.38 0 1.77.74 2.98.72 1.23-.02 2.01-1.12 2.76-2.23.87-1.28 1.23-2.51 1.25-2.58-.03-.01-2.4-.92-2.38-3.69zM14.1 5.9c.63-.77 1.06-1.83.94-2.9-.91.04-2.01.61-2.66 1.37-.58.67-1.09 1.76-.95 2.8 1.01.08 2.04-.51 2.67-1.27z" />
      </svg>
    ) : (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M3.6 2.3c-.3.3-.4.7-.4 1.2v17c0 .5.1.9.4 1.2l9.3-9.7-9.3-9.7zm10.4 10.8 2.6 2.7-11.1 6.4 8.5-9.1zm0-2.2L5.5 1.8l11.1 6.4-2.6 2.7zm3.8-1.6 3 1.7c.9.5.9 1.4 0 1.9l-3 1.7-2.9-2.6 2.9-2.7z" />
      </svg>
    )}
    {store === 'appStore' ? 'App Store' : 'Google Play'}
  </a>
);

const Portfolio: React.FC = () => {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>('All');
  const shown = useMemo(() => (category === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === category)), [category]);

  return (
    <section id="portfolio" className="py-20 bg-gray-50 scroll-mt-16">
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">Our Work</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Apps and platforms we've shipped</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mobile apps in the App Store and Google Play, SaaS platforms, APIs and websites, for clients and for ourselves.
          </p>
        </motion.div>

        {/* Our own apps */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Our own apps</h3>
              <p className="text-gray-600 mt-1 max-w-2xl">
                We build, launch and grow apps of our own: store listings, subscriptions, analytics and ads. Your app gets the same playbook.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {OWN_APPS.map((app, i) => (
              <motion.article
                key={app.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
              >
                <a href={app.site} target="_blank" rel="noopener noreferrer" className="block overflow-hidden aspect-[16/10] bg-gray-100 group">
                  <img src={app.image} alt={`${app.name} website`} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                </a>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <img src={app.icon} alt="" className="w-12 h-12 rounded-xl shadow-sm" loading="lazy" />
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 leading-tight">{app.name}</h4>
                      <p className="text-sm text-blue-700 font-medium">{app.tagline}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{app.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {app.platforms.map((p) => <Tag key={p} tone="blue">{p}</Tag>)}
                    {app.tech.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                  <div className="mt-auto flex flex-wrap items-center gap-3">
                    {app.stores.appStore && <StoreButton href={app.stores.appStore} store="appStore" app={app.name} />}
                    {app.stores.googlePlay && <StoreButton href={app.stores.googlePlay} store="googlePlay" app={app.name} />}
                    {app.note && <span className="text-sm text-gray-500">{app.note}</span>}
                    <a href={app.site} target="_blank" rel="noopener noreferrer" className="ml-auto text-blue-600 hover:text-blue-800 text-sm font-medium">
                      {app.site.replace('https://', '')} ↗
                    </a>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Everything else */}
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Platforms, APIs and websites</h3>
              <p className="text-gray-600 mt-1">Recent builds and the client projects that got us here.</p>
            </div>
            <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  role="tab"
                  aria-selected={category === c}
                  onClick={() => setCategory(c)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${category === c ? 'bg-blue-600 text-white shadow' : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {shown.map((p) => {
              const Wrapper: React.ElementType = p.link ? 'a' : 'div';
              return (
                <Wrapper
                  key={p.title}
                  {...(p.link ? { href: p.link, target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-gray-100">
                    <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h4 className="text-lg font-bold text-gray-900">{p.title}</h4>
                      <span className="text-xs text-gray-500 mt-1 whitespace-nowrap">{p.ours ? 'Our product · ' : ''}{p.year}</span>
                    </div>
                    <p className="text-gray-600 text-sm mb-4">{p.description}</p>
                    <div className="mt-auto flex flex-wrap gap-2">
                      {p.tech.map((t) => <Tag key={t}>{t}</Tag>)}
                    </div>
                    {p.link && <span className="mt-4 text-sm font-medium text-blue-600 group-hover:text-blue-800">{p.link.replace(/^https:\/\/(www\.)?/, '')} ↗</span>}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Have an app or platform in mind?</h3>
            <p className="text-gray-600 mb-6">We've built plenty that isn't shown here. Tell us what you're planning and we'll walk you through similar work.</p>
            <a href="#contact" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors font-medium">
              Schedule a Consultation →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
