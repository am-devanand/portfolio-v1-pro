/* ─────────────────────────────────────────────
   SEO Utility — Dynamic meta tags + JSON-LD
   ───────────────────────────────────────────── */

const DEFAULT_TITLE = 'Dev Anand | Full Stack Developer';
const DEFAULT_DESCRIPTION = 'Full Stack Developer crafting premium digital experiences.';
const DEFAULT_IMAGE = '/favicon.svg';
const DEFAULT_URL = 'https://am-devanand.github.io/portfolio-v1-pro/';

const pageMeta = {
  '/': {
    title: 'Dev Anand | Full Stack Developer',
    description: 'Full Stack Developer crafting premium digital experiences.',
  },
  '/about': {
    title: 'About | Dev Anand',
    description:
      'Learn about Dev Anand S — a passionate full-stack developer building scalable digital products with clean architecture and modern technologies.',
  },
  '/skills': {
    title: 'Skills | Dev Anand',
    description:
      'Modern technologies and tools I use to design, build and ship production-ready software.',
  },
  '/work': {
    title: 'Projects | Dev Anand',
    description:
      'A selection of real-world projects, open-source work, and experiments showcasing my engineering approach.',
  },
  '/services': {
    title: 'Services | Dev Anand',
    description:
      'Professional development services including web apps, APIs, and technical consulting.',
  },
  '/journey': {
    title: 'Journey | Dev Anand',
    description:
      'The professional journey and career timeline of Dev Anand S — from first commit to full-stack developer.',
  },
  '/contact': {
    title: 'Contact | Dev Anand',
    description:
      'Get in touch with Dev Anand S for freelance work, collaboration, or new opportunities.',
  },
};

/**
 * Update document title and meta tags for the current page.
 * Call on every route change.
 */
export function updateMeta({ title, description, image, url } = {}) {
  const finalTitle = title || DEFAULT_TITLE;
  const finalDesc = description || DEFAULT_DESCRIPTION;
  const finalImage = image || DEFAULT_IMAGE;
  const finalUrl = url || DEFAULT_URL;

  document.title = finalTitle;

  const tags = {
    description: finalDesc,
    'og:title': finalTitle,
    'og:description': finalDesc,
    'og:image': finalImage,
    'og:url': finalUrl,
    'og:type': 'website',
    'twitter:card': 'summary_large_image',
    'twitter:title': finalTitle,
    'twitter:description': finalDesc,
    'theme-color': '#7d1f24',
  };

  Object.entries(tags).forEach(([name, content]) => {
    const attr = name.startsWith('og:') || name.startsWith('twitter:') ? 'property' : 'name';
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  });
}

/**
 * Inject JSON-LD structured data once on app mount.
 * Injects Person, WebSite, and CollectionPage schemas.
 */
export function injectJsonLd() {
  const schemas = [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Dev Anand S',
      url: DEFAULT_URL,
      jobTitle: 'Full Stack Developer',
      sameAs: [
        'https://github.com/am-devanand',
        'https://linkedin.com/in/dev-anand-ba846a359',
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Dev Anand | Full Stack Developer',
      url: DEFAULT_URL,
      description: DEFAULT_DESCRIPTION,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Portfolio',
      url: DEFAULT_URL,
      about: 'Software engineering portfolio of Dev Anand S',
    },
  ];

  schemas.forEach((schema) => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  });
}

/**
 * Get page meta by route pathname.
 * Returns { title, description } or defaults.
 */
export function getPageMeta(pathname) {
  return (
    pageMeta[pathname] || {
      title: DEFAULT_TITLE,
      description: DEFAULT_DESCRIPTION,
    }
  );
}
