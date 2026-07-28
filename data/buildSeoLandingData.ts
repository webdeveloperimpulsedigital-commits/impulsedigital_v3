type SeoLandingOptions = {
  market: 'India' | 'UAE';
  place: 'India' | 'Thane' | 'UAE' | 'Dubai';
  scope: 'national' | 'local';
};

const placeContext = {
  India: {
    marketLine: 'across India',
    audience: 'national, regional, and multi-location audiences',
    searchContext: 'different languages, cities, categories, and stages of demand',
    localDetail: 'location pages and Google Business Profile inputs for branches and service areas',
  },
  Thane: {
    marketLine: 'in Thane and the Mumbai Metropolitan Region',
    audience: 'customers and decision-makers searching in and around Thane',
    searchContext: 'local intent, Mumbai-region competition, and category-specific demand',
    localDetail: 'Thane-focused pages, Google Business Profile inputs, and consistent local signals',
  },
  UAE: {
    marketLine: 'across the United Arab Emirates',
    audience: 'buyers across the Emirates and regional decision-makers',
    searchContext: 'English and Arabic discovery, city-level intent, and regional competition',
    localDetail: 'Emirate and city pages supported by consistent local search signals',
  },
  Dubai: {
    marketLine: 'in Dubai',
    audience: 'residents, businesses, and regional buyers searching in Dubai',
    searchContext: 'dense category competition, multilingual discovery, and district-level demand',
    localDetail: 'Dubai-focused pages and local signals without duplicating district doorway pages',
  },
} as const;

export function buildSeoLandingData({ market, place, scope }: SeoLandingOptions) {
  const context = placeContext[place];
  const isLocal = scope === 'local';
  const serviceLabel = isLocal ? `SEO services in ${place}` : `SEO services across ${place}`;
  const agencyLabel = `SEO agency in ${place}`;

  return {
    hero: {
      headlineParts: isLocal
        ? [`SEO Agency in ${place}`, 'Built for Organic Growth']
        : [`SEO Agency in ${place}`, 'Built for Organic Growth'],
      headlineAccent: 'Built for Organic Growth',
      description: `<span class="seo-hero-lead">Impulse Digital provides ${serviceLabel} through technical SEO, search-led content, local visibility, and measurement. We organise websites around what people are trying to find, compare, and decide, then improve the signals that help Google crawl, understand, and surface the right page. The programme is planned for ${context.audience}, with no guaranteed rankings and no shortcuts that put long-term visibility at risk.`,
      buttons: [
        { text: 'Find Your Search Gaps', link: '#connect', cursor: 'FIND' },
        { text: 'See How the Programme Works', link: '#process', cursor: 'SEE' },
      ],
    },
    stats: {
      title: 'SEO Performance Built for Commercial Outcomes',
      metrics: [
        {
          target: 737,
          suffix: '%',
          decimals: 0,
          desc: 'Organic traffic growth achieved for healthcare buyer searches.',
        },
        {
          target: 3,
          suffix: 'x',
          decimals: 0,
          desc: 'Average increase in high-intent keyword coverage within 6 months.',
        },
        {
          target: 100,
          suffix: '%',
          decimals: 0,
          desc: 'SEO deliverables tied to measurable leads and revenue signals.',
        },
      ],
      footnote: `Search visibility ${context.marketLine} requires a connected strategy: technical accessibility, intent-led content, and authoritative signals working together.`,
    },
    problem: {
      title: 'Visibility Breaks When Every Page Tries to Rank for Everything',
      intro: [
        `A website can be technically accessible and still send unclear signals in ${place}.`,
        'Pages often overlap, important questions go unanswered, and internal links do not show which page matters most.',
      ],
      pivot: 'That creates avoidable uncertainty for search engines and people.',
      gaps: [
        'Several pages compete for the same query.',
        'Important services have no clear search destination.',
        'Titles promise one thing while the page answers another.',
        'Local pages repeat wording without adding location-specific usefulness.',
        'Reporting counts visits without showing what those visits achieved.',
      ],
      outro: [
        'The fix is not another layer of near-identical pages.',
        'It is a clearer map between demand, content, and the page that should rank.',
      ],
    },
    vs: {
      title: `${place} SEO, in Plain English`,
      leftLabel: 'Search demand',
      leftStrike: 'shows what people need at a particular moment.',
      rightLabel: 'SEO',
      rightText: 'makes the most relevant page easier to discover, understand, and ',
      rightHighlight: 'choose',
      closing: `A useful ${agencyLabel} should make that connection clear without relying on manufactured claims or guaranteed positions.`,
      steps: [
        { num: '01', text: 'Intent decides whether a query needs a service page, guide, location page, or product page.' },
        { num: '02', text: 'Technical access lets Google crawl, render, index, and revisit the content reliably.' },
        { num: '03', text: 'Page ownership prevents closely related URLs from competing with one another.' },
        { num: '04', text: 'Useful information helps a visitor complete the task behind the search.' },
        { num: '05', text: 'Measurement shows which improvements deserve the next round of effort.' },
      ],
    },
    uses: {
      title: `What Our ${place} SEO Programme Covers`,
      cards: [
        {
          title: 'Technical SEO',
          body: 'Review crawl access, indexation, rendering, canonicals, redirects, internal links, structured data, mobile behaviour, and performance risks.',
          outcome: 'Output: prioritised findings, implementation guidance, validation, and regression checks.',
        },
        {
          title: 'Search and Content Planning',
          body: `Map queries to the right page type, reduce overlap, and identify useful coverage for ${context.searchContext}.`,
          outcome: 'Output: intent map, page ownership, content briefs, and an ordered publishing plan.',
        },
        {
          title: 'Local SEO',
          body: `Support nearby discovery with ${context.localDetail}.`,
          outcome: 'Output: location architecture, local page guidance, profile inputs, and consistency checks.',
          link: '/brand-infrastructure/search-engine-optimisation/local-seo',
        },
        {
          title: 'eCommerce SEO',
          body: 'Improve how category and product pages are discovered without creating uncontrolled filtered or duplicate URLs.',
          outcome: 'Output: category mapping, product-page guidance, structured-data inputs, and internal-link recommendations.',
          link: '/brand-infrastructure/search-engine-optimisation/ecommerce-seo',
        },
        {
          title: 'B2B SEO',
          body: 'Build pages for research-heavy buying journeys where several stakeholders compare capabilities before contacting a provider.',
          outcome: 'Output: stakeholder intent map, service architecture, supporting topics, and conversion-path guidance.',
          link: '/brand-infrastructure/search-engine-optimisation/b2b-seo',
        },
        {
          title: 'Enterprise SEO',
          body: 'Create governance for large sites, multiple teams, templates, markets, and recurring technical change.',
          outcome: 'Output: scalable standards, monitoring priorities, ownership rules, and rollout controls.',
          link: '/brand-infrastructure/search-engine-optimisation/enterprise-seo',
        },
      ],
    },
    channels: {
      title: `Signals We Connect for Search in ${place}`,
      intro: `Each signal answers a different question.\nTogether they help the right page earn and keep visibility.`,
      list: [
        { label: 'Can Google access the page?', pos: { left: '16%', top: '14%' } },
        { label: 'Is the intent unambiguous?', pos: { left: '50%', top: '6%' } },
        { label: 'Does one page own the topic?', pos: { left: '84%', top: '14%' } },
        { label: 'Are entities clearly described?', pos: { left: '95%', top: '44%' } },
        { label: 'Are local signals consistent?', pos: { left: '84%', top: '82%' } },
        { label: 'Is the content genuinely useful?', pos: { left: '50%', top: '95%' } },
        { label: 'Do relevant pages connect?', pos: { left: '16%', top: '82%' } },
        { label: 'Can outcomes be measured?', pos: { left: '5%', top: '44%' } },
      ],
      outro: `No individual signal guarantees a ranking.\nA coherent system removes obstacles and gives useful pages a fair opportunity to compete.`,
    },
    whenToUse: {
      title: 'We Start With Page Ownership, Not Page Volume',
      paragraphs: [
        `For ${place}, the first question is not how many pages can be published.`,
        'It is which searches matter, whether they are meaningfully different, and which existing or new URL should answer each one.',
      ],
      closer: 'That keeps useful authority together and avoids splitting it across pages that solve the same search task.',
      pillsHeading: 'The decision uses:',
      pills: [
        { label: 'Intent difference', desc: 'Whether people expect a genuinely different answer.' },
        { label: 'Existing equity', desc: 'Whether a current URL already earns links, impressions, or clicks.' },
        { label: 'Geographic need', desc: 'Whether local information materially changes the service decision.' },
        { label: 'Content distinction', desc: 'Whether the page can be useful without repeating another page.' },
        { label: 'Internal role', desc: 'How the page fits the wider service and location hierarchy.' },
        { label: 'Measurement plan', desc: 'How visibility, engagement, and enquiries will be reviewed.' },
      ],
      punchline: ['Publish for a clear need.', 'Consolidate when the need is the same.'],
    },
    guardrails: {
      title: `Strategic Search Principles for ${place}`,
      intro: `<p>SEO is not about adding keywords to existing pages or chasing temporary impression spikes.</p><p class="pivot">The goal is durable discoverability that connects search intent to qualified revenue action.</p><p style="margin-top: 1.5rem;">Our search programmes operate under strict principles:</p>`,
      rows: [
        {
          title: 'Single-Topic Page Ownership',
          desc: 'Every primary search query maps to one clear page destination, preventing internal URL competition.',
        },
        {
          title: 'Technical Integrity',
          desc: 'Clean crawl budgets, mobile-first performance, and valid structured data across all templates.',
        },
        {
          title: 'High-Utility Answers',
          desc: 'Content structured to satisfy user intent directly without keyword stuffing or filler text.',
        },
        {
          title: 'Pipeline Accountability',
          desc: 'Measurement tied directly to qualified enquiries and commercial engagement, not vanity traffic.',
        },
      ],
      punchlineLine1: 'Traffic is not the prize.',
      punchlineLine2: 'Qualified growth is.',
    },
    process: {
      title: `How We Run SEO for ${place}`,
      steps: [
        {
          num: '1.',
          title: 'Establish the Baseline',
          desc: 'Review Search Console, analytics, indexed URLs, current rankings, backlinks, conversions, and technical health before changing page ownership.',
        },
        {
          num: '2.',
          title: 'Map Queries to Pages',
          desc: `Group demand by intent and decide which national, service, or local page should answer it ${context.marketLine}.`,
        },
        {
          num: '3.',
          title: 'Remove Search Obstacles',
          desc: 'Resolve crawl, rendering, canonical, redirect, sitemap, internal-link, structured-data, mobile, and performance issues in priority order.',
        },
        {
          num: '4.',
          title: 'Improve the Useful Answer',
          desc: 'Refresh page copy and supporting content so the searcher can understand the service, process, scope, and next step without inflated claims.',
        },
        {
          num: '5.',
          title: 'Validate and Iterate',
          desc: 'Check production behaviour, monitor Search Console, compare outcomes with the baseline, and improve the next highest-impact gap.',
        },
      ],
      footer: `SEO is an ongoing system, not a one-time claim.\n\nThe work is prioritised, implemented, checked, and improved as real search evidence changes.`,
    },
    fit: {
      title: `${serviceLabel} Are a Good Fit If`,
      list: [
        'Important pages are not appearing for the searches they should answer.',
        'Several URLs compete for the same service or location query.',
        'The website has grown without a clear search architecture.',
        'Local visibility matters but duplicate doorway pages are not acceptable.',
        'Content needs to answer intent more clearly without keyword stuffing.',
        'Technical changes need validation against Google Search requirements.',
        'Reporting must connect visibility with qualified actions.',
        'The team accepts that no provider controls or guarantees rankings.',
      ],
      closer: 'The programme is designed for durable discoverability.\nIt is not designed for shortcuts, fabricated authority, or guaranteed positions.',
    },
    finalCta: {
      title: `Clarify Your Next Search Opportunity in ${place}.`,
      body: 'Share the services, markets, and search questions that matter to the business. We will identify where the site is already strong, where pages overlap, and which improvement should come next.',
      buttons: [
        { text: 'Find Your Search Gaps', link: '/contact-us/', cursor: 'FIND', primary: false },
        { text: 'Start a Conversation', link: '/contact-us/', cursor: 'HI', primary: false },
      ],
      footnote: 'Clear page ownership. Useful content. Verifiable implementation. Measurement without ranking guarantees.',
    },
    faq: {
      title: `Questions About SEO in ${place}`,
      items: [
        {
          q: `What do ${serviceLabel.toLowerCase()} include?`,
          a: `As a leading ${agencyLabel} backed by 34 years of combined marketing experience, our scope includes technical SEO audits, page ownership mapping, search and content planning, internal link architecture, local search signals, ecommerce SEO, structured-data schema guidance, and revenue pipeline attribution. Priorities are tailored to your business goals and market competition.`,
        },
        {
          q: `Why use a dedicated ${isLocal ? `${place} SEO page` : `${place} SEO hub`}?`,
          a: isLocal
            ? `A dedicated page is useful when searches for ${place} carry a distinct local intent and the page can answer that need without copying a national page. It should describe the local scope clearly and connect back to the wider service hierarchy.`
            : `A national hub gives broad SEO searches one clear destination. It can introduce the complete service, connect specialist and location pages, and reduce the risk of a city page trying to own country-level demand.`,
        },
        {
          q: `How does an ${agencyLabel} decide whether to create another location page?`,
          a: 'We look for a real difference in search intent, business coverage, useful local information, and evidence that the URL can stand on its own. If a new page would only replace a place name in otherwise identical copy, consolidation is usually safer to preserve domain authority.',
        },
        {
          q: 'How long does SEO take to produce results?',
          a: 'Crawl indexing fixes and technical remediation often show initial performance signals within 2 to 4 weeks. Sustainable organic rank growth and lead compounding typically take 3 to 6 months, depending on category competition, site history, and technical implementation speed. Documented outcomes include 737% organic traffic growth for Qure.ai and first-page international rankings for ElectroMech.',
        },
        {
          q: 'Do you guarantee first-page rankings on Google?',
          a: 'No. In strict alignment with Google’s Search Quality Rater Guidelines, no outer provider controls or guarantees search engine rankings. We guarantee technical precision, E-E-A-T compliance, intent-mapped content, and verifiable conversion tracking that consistently earns top rankings over time.',
        },
        {
          q: 'How do you measure SEO success and ROI?',
          a: 'We track success through commercial outcomes: organic traffic growth, high-intent keyword coverage, conversion rate improvements, phone calls, and qualified lead submissions. Monthly reporting connects Search Console evidence directly to business pipeline value.',
        },
        {
          q: 'How does Generative Search Optimisation (GSO) and AI search fit into the strategy?',
          a: 'Generative Search Optimisation (GSO) structures website entity markup, content authority, and brand citations so AI search systems like ChatGPT, Perplexity, Claude, and Google AI Overviews cite your brand as the definitive category answer. This works alongside traditional Google SERP optimization.',
        },
        {
          q: 'Can an established page lose visibility when a new page is created?',
          a: 'Yes, if both pages target the same search task or internal links suddenly shift authority. That is why single-topic page ownership is decided before publishing. Established URLs are preserved when they already match search intent.',
        },
        {
          q: `Does the programme cover local search ${context.marketLine}?`,
          a: `Yes. Local work includes location architecture, Google Business Profile alignment, NAP consistency, geo-targeted schema markup, local internal links, and enquiry attribution. Physical locations are only optimized where verified.`,
        },
        {
          q: `What information is needed before starting SEO in ${place}?`,
          a: 'Useful inputs include priority services, target customer segments, website access, Google Search Console and Google Analytics access, conversion definitions, and known technical constraints. Engagements begin with a diagnostic baseline audit.',
        },
      ],
    },
  };
}
