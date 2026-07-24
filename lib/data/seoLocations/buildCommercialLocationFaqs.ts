import type { FAQItem } from '@/lib/faqData';

const localContext = {
  UAE: 'national and Emirate-level audiences across the United Arab Emirates',
  Dubai: 'Dubai audiences as well as regional buyers who use the city as a commercial hub',
  'Abu Dhabi': 'Abu Dhabi audiences across government, enterprise, professional-service, and consumer categories',
  Sharjah: 'Sharjah audiences while keeping wider UAE demand in view',
  Ajman: 'Ajman audiences while keeping the campaign connected to wider UAE demand',
} as const;

export function buildCommercialLocationFaqs(
  place: keyof typeof localContext,
  count = 12,
): FAQItem[] {
  const items: FAQItem[] = [
    {
      question: `What does a digital marketing agency in ${place} help with?`,
      answer: 'Impulse Digital can connect market and customer intelligence, campaign planning, AI-enabled marketing systems, SEO, social media, websites, brand identity, content, and measurement. The scope is selected around the business problem rather than forcing every service into one engagement.',
    },
    {
      question: `How is a ${place} strategy made locally relevant?`,
      answer: `We examine the category, audience, competitors, language needs, channels, and current performance for ${localContext[place]}. Local relevance comes from evidence and useful market distinctions, not from replacing a city name in a generic plan.`,
    },
    {
      question: 'Can one engagement cover strategy and execution?',
      answer: 'Yes. An engagement can connect research, planning, creative systems, channel execution, and measurement. Responsibilities, dependencies, approval points, and expected outputs are defined before work begins.',
    },
    {
      question: 'Which services can be selected?',
      answer: 'The available capabilities sit across Growth Intelligence, AI Marketing Systems, and Brand Infrastructure. A programme may use one focused capability or combine several where the business problem genuinely crosses channels.',
    },
    {
      question: 'How do you decide which channels to use?',
      answer: 'Channel choices follow audience behaviour, the decision journey, available evidence, creative requirements, measurement readiness, and budget. A channel is not included simply because it is popular.',
    },
    {
      question: 'How is performance measured?',
      answer: 'Measurement starts with agreed business and marketing outcomes. Depending on the scope, reporting may include qualified reach, engagement, search visibility, leads, sales actions, conversion rate, cost efficiency, and the quality of the next decision.',
    },
    {
      question: 'Do you guarantee a particular marketing result?',
      answer: 'No. Market response, platforms, competition, implementation, budgets, and sales follow-up all affect outcomes. We define the method, execute the agreed work, measure evidence, and improve the programme without promising results outside any provider’s control.',
    },
    {
      question: 'Can you work with an existing internal marketing team?',
      answer: 'Yes. The working model can complement internal strategy, creative, media, technology, sales, or analytics teams. Clear ownership prevents duplicated work and helps decisions move faster.',
    },
    {
      question: `Do you only work with organisations physically based in ${place}?`,
      answer: `No. The page describes services for organisations targeting ${place}. Delivery can support local, UAE-wide, regional, or international priorities, subject to the agreed market scope and verified business facts.`,
    },
    {
      question: 'How is a programme scoped?',
      answer: 'Scoping begins with objectives, current constraints, priority audiences, required capabilities, timelines, access, and measurement readiness. A proposal then defines the work, outputs, responsibilities, and commercial terms.',
    },
    {
      question: 'How quickly can work begin?',
      answer: 'Timelines depend on scope, access, approvals, tracking readiness, and production needs. The first phase usually establishes the baseline and resolves the information needed for responsible planning before major execution begins.',
    },
    {
      question: `What should we prepare before speaking to a digital marketing agency in ${place}?`,
      answer: 'Bring the business objective, priority products or services, target audiences, current channel information, available analytics, known constraints, and the decision-makers who will approve the work. Gaps can be documented rather than filled with assumptions.',
    },
  ];

  return items.slice(0, count);
}
