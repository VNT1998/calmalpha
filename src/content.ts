/**
 * Calm Alpha - Canonical Content Store
 * Every word of copy lives here so it can be reviewed and edited in one place.
 * 
 * Aligned with the Claude Startups & Technical Reviewer Audit.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables?: string[];
}

export interface ProcessStep {
  stepNumber: string;
  name: string;
  description: string;
}

export interface TechGroup {
  category: string;
  items: string[];
}

export interface PrincipleItem {
  number: string;
  title: string;
  description: string;
}

export interface LabProject {
  id: string;
  name: string;
  description: string;
  statusBadge: string;
  repoUrl: string;
  demoUrl?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  title: string;
  bio: string;
  photoUrl: string;
  links: {
    portfolio: string;
    github: string;
    linkedin: string;
  };
}

export interface CompanyFact {
  label: string;
  value: string;
}

export interface FlagshipScreenshot {
  id: string;
  title: string;
  caption: string;
  imageSrc: string;
}

export const content = {
  global: {
    companyName: 'Calm Alpha',
    siteTitleSuffix: ' | Calm Alpha',
    email: 'vinit.k@calmalpha.in',
    location: 'Mumbai, India',
    founded: '2026',
    canonicalUrl: 'https://calmalpha.in',
    socialLinks: {
      github: 'https://github.com/VNT1998',
      linkedin: 'https://linkedin.com/in/vinitkarkera',
      founderPortfolio: 'https://me.calmalpha.in',
    },
  },

  header: {
    nav: [
      { label: 'Flagship', href: '#flagship' },
      { label: 'Services', href: '#services' },
      { label: 'Process', href: '#process' },
      { label: 'Technology', href: '#technology' },
      { label: 'Lab', href: '#lab' },
      { label: 'Team', href: '#team' },
      { label: 'Contact', href: '#contact' },
    ] as NavLink[],
  },

  home: {
    meta: {
      title: 'Calm Alpha | Software development and AI solutions, Mumbai',
      description:
        'Calm Alpha is a Mumbai-based software and AI solutions studio. We build practical AI products, agentic workflows, and reliable full-stack applications.',
    },
    hero: {
      eyebrow: 'AI Product & Software Studio • Mumbai, India',
      headline: 'We build AI systems that make complex work simpler.',
      subhead:
        'Calm Alpha designs and builds reliable software, agentic workflows, and document intelligence platforms for businesses that want results they can rely on. Our current flagship focus is OpsPilot AI—an enterprise document and operational workflow platform.',
      primaryButton: {
        text: 'Explore OpsPilot AI',
        href: '#flagship',
      },
      secondaryButton: {
        text: 'Start a conversation',
        href: '#contact',
      },
    },

    flagship: {
      badge: 'Flagship Project Showcase',
      name: 'OpsPilot AI',
      subtitle: 'Enterprise Document & Operational Workflow Agent Platform',
      status: 'In active development • Open Core',
      repoUrl: 'https://github.com/VNT1998/opspilot-ai',
      overview:
        'Accounts Payable (AP) and Purchase Order (PO) invoice automation serves as the primary reference workflow, demonstrating how modern agentic AI can be safely deployed inside mission-critical business environments.',
      principleTitle: 'The System of Record Principle',
      principleQuote:
        'The database and deterministic code are authoritative; the LLM only proposes. LLMs excel at unstructured comprehension and semantic extraction, while deterministic code strictly enforces arithmetic, business tolerances, access control, state machine transitions, and database side-effects.',
      points: [
        {
          title: 'The Problem',
          description:
            'Manual document reconciliation across varied invoices and PO formats is slow, error-prone, and brittle under traditional OCR templates.',
        },
        {
          title: 'Our Architecture',
          description:
            'A LangGraph state machine orchestrates document segmentation, schema-guided extraction, mathematical cross-validation, and database integrity checks.',
        },
        {
          title: 'Human-in-the-Loop',
          description:
            'Automated straight-through processing for high-confidence documents; automatic escalation to an approval console whenever tolerances or tolerances mismatch.',
        },
      ],
      stack: [
        'Python 3.12',
        'FastAPI',
        'LangGraph',
        'React 19',
        'TypeScript',
        'Docker Compose',
        'PostgreSQL',
      ],
      screenshots: [
        {
          id: 'review-console',
          title: 'Review Console',
          caption: 'Human-in-the-loop review interface showing token-level bounding box provenance and field approvals.',
          imageSrc: '/projects/opspilot/review_console.webp',
        },
        {
          id: 'dashboard',
          title: 'Operations Dashboard',
          caption: 'Real-time invoice ingestion metrics, tolerance pass rates, and human escalation queues.',
          imageSrc: '/projects/opspilot/dashboard.webp',
        },
        {
          id: 'agent-telemetry',
          title: 'Agent Telemetry',
          caption: 'State transition logs, step latencies, token consumption, and audit trails for LangGraph executions.',
          imageSrc: '/projects/opspilot/agent_telemetry.webp',
        },
        {
          id: 'documents-pipeline',
          title: 'Document Pipeline',
          caption: 'Multi-stage processing: page segmentation, multimodal OCR, structured Pydantic extraction, and matching.',
          imageSrc: '/projects/opspilot/documents_pipeline.webp',
        },
      ] as FlagshipScreenshot[],
    },

    services: {
      sectionTitle: 'What we do',
      intro: 'End-to-end software and AI engineering, from first idea to production.',
      items: [
        {
          id: 'custom-software',
          title: 'Custom software development',
          description:
            'Web applications, APIs, internal tools and full-stack products, from architecture through deployment.',
          deliverables: ['Production web apps', 'Internal admin portals', 'Scalable REST/Async APIs'],
        },
        {
          id: 'ai-agents',
          title: 'AI agents and automation',
          description:
            'Multi-step agents that plan, use tools and hand off to people when it matters, built with explicit state so behaviour is traceable and testable.',
          deliverables: ['LangGraph state machines', 'Tool execution sandboxes', 'Human escalation gates'],
        },
        {
          id: 'voice-conversational',
          title: 'Voice and conversational AI',
          description:
            'Phone and chat agents for outreach, support and scheduling, with defined call flows, fallbacks and human escalation.',
          deliverables: ['Inbound/outbound call flows', 'Low-latency telephony', 'Deterministic fallback paths'],
        },
        {
          id: 'knowledge-retrieval',
          title: 'Knowledge and retrieval systems',
          description:
            'Retrieval-augmented assistants grounded in your own content, such as websites and documents, with answers you can trace back to a source.',
          deliverables: ['Chunking & hybrid search', 'Source token citations', 'Evaluation datasets'],
        },
        {
          id: 'ai-strategy',
          title: 'AI strategy and architecture',
          description:
            'Model selection, cost optimization, evaluation design and build-versus-buy advice, so AI spending turns into outcomes.',
          deliverables: ['Model routing architecture', 'Cost-per-task profiling', 'Evaluation benchmarks'],
        },
        {
          id: 'delivery-cloud',
          title: 'Delivery and cloud',
          description:
            'Containerized deployments, CI/CD pipelines and production hardening, so what we build keeps running.',
          deliverables: ['Dockerized environments', 'Automated CI/CD pipelines', 'Telemetry & monitoring'],
        },
      ] as ServiceItem[],
    },

    process: {
      sectionTitle: 'How we work with you',
      steps: [
        {
          stepNumber: '1',
          name: 'Discover',
          description:
            'We learn the problem, the users and the constraints, and agree what success looks like.',
        },
        {
          stepNumber: '2',
          name: 'Design',
          description:
            'We propose the architecture, scope and timeline, and prototype the riskiest parts first.',
        },
        {
          stepNumber: '3',
          name: 'Build',
          description:
            'We deliver in short iterations you can see and test, with code you own.',
        },
        {
          stepNumber: '4',
          name: 'Ship and support',
          description:
            'We deploy, monitor and improve, and hand over documentation your team can use.',
        },
      ] as ProcessStep[],
    },

    technology: {
      sectionTitle: 'How we build',
      paragraph:
        'We favour well-understood engineering around fast-moving models: typed code, explicit state, evaluation before launch, and model routing that sends simple work to efficient models and reserves frontier models for tasks that truly need reasoning.',
      groupedChips: [
        {
          category: 'Agents and LLMs',
          items: [
            'LangGraph',
            'retrieval-augmented generation',
            'tool use',
            'multi-model routing',
          ],
        },
        {
          category: 'Backend',
          items: ['Python', 'Node.js', 'Express', 'REST APIs'],
        },
        {
          category: 'Frontend',
          items: ['React', 'TypeScript', 'Vite'],
        },
        {
          category: 'Delivery',
          items: ['Docker', 'Jenkins CI/CD'],
        },
        {
          category: 'Voice',
          items: ['Retell AI'],
        },
      ] as TechGroup[],
      note: {
        title: 'AI-assisted engineering',
        text: 'We use Claude Code as a developer tool in our engineering workflow to iterate and test faster. Design decisions, architecture reviews, and production accountability stay strictly with our engineers.',
      },
    },

    principles: {
      sectionTitle: 'Principles',
      items: [
        {
          number: '1',
          title: 'Calm over hype.',
          description: 'We say what a system can and cannot do, and we measure it.',
        },
        {
          number: '2',
          title: 'Reliable before clever.',
          description:
            'Simple, testable logic wherever the problem is well-defined; models where judgement is needed.',
        },
        {
          number: '3',
          title: 'Cost is a feature.',
          description:
            'Every pipeline is designed with a cost per task in mind.',
        },
        {
          number: '4',
          title: 'People stay in the loop.',
          description:
            'Agents escalate to humans for decisions that matter.',
        },
      ] as PrincipleItem[],
    },

    lab: {
      sectionTitle: 'From the lab',
      intro: 'Projects we are building in the open. Work in progress, not finished products.',
      projects: [
        {
          id: 'opspilot',
          name: 'OpsPilot',
          description:
            'Enterprise document and operational workflow agent platform for accounts payable and invoice automation, built with LangGraph and deterministic validation.',
          statusBadge: 'In development',
          repoUrl: 'https://github.com/VNT1998/opspilot-ai',
        },
        {
          id: 'nuvorix',
          name: 'Nuvorix',
          description:
            'Self-service production platform for building, evaluating, deploying, and operating ML and LLM workloads.',
          statusBadge: 'In development',
          repoUrl: 'https://github.com/VNT1998/nuvorix',
        },
        {
          id: 'better-life',
          name: 'BetterLife',
          description:
            'Clinical evidence intelligence and laboratory blood report analysis platform with interactive clinical follow-up Q&A.',
          statusBadge: 'In development',
          repoUrl: 'https://github.com/VNT1998/better-life',
        },
      ] as LabProject[],
    },

    team: {
      sectionTitle: 'Team',
      founder: {
        name: 'Vinit Karkera',
        role: 'Founder',
        title: 'AI Lead and Full-Stack AI Engineer',
        bio: 'Vinit has about seven years of software and AI engineering experience, most recently leading a ten-person engineering team building agentic, voice and retrieval-based products. He works across the stack, from system architecture and model orchestration to the interfaces people actually use.',
        photoUrl: '/founder.webp',
        links: {
          portfolio: 'https://me.calmalpha.in',
          github: 'https://github.com/VNT1998',
          linkedin: 'https://linkedin.com/in/vinitkarkera',
        },
      } as TeamMember,
    },

    companyFacts: {
      sectionTitle: 'Company',
      facts: [
        { label: 'Name', value: 'Calm Alpha' },
        { label: 'Founded', value: '2026' },
        { label: 'Based in', value: 'Mumbai, India' },
        { label: 'Founder', value: 'Vinit Karkera' },
        { label: 'Legal status', value: '{{CONFIRM: add once registered}}' },
      ] as CompanyFact[],
    },

    contact: {
      sectionTitle: 'Contact',
      text: 'Have a software or AI project in mind? Tell us what you are trying to achieve and we will reply with how we would approach it.',
      email: 'vinit.k@calmalpha.in',
      links: [
        { label: 'GitHub', href: 'https://github.com/VNT1998' },
        { label: 'LinkedIn', href: 'https://linkedin.com/in/vinitkarkera' },
      ],
    },
  },

  footer: {
    companyName: 'Calm Alpha',
    city: 'Mumbai, India',
    legalLinks: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Responsible AI', href: '/responsible-ai' },
    ],
    contactEmail: 'vinit.k@calmalpha.in',
  },

  privacy: {
    meta: {
      title: 'Privacy Policy | Calm Alpha',
      description: 'How Calm Alpha handles personal information on calmalpha.in.',
    },
    heading: 'Privacy Policy',
    overview:
      'This policy explains how Calm Alpha ("we", "us") handles information when you visit calmalpha.in.',
    sections: [
      {
        title: 'Information we collect.',
        content:
          'This website does not use accounts, advertising trackers or analytics cookies. We do not collect personal information automatically. If you email us, we receive your email address and whatever you choose to include in your message.',
      },
      {
        title: 'How we use it.',
        content:
          'We use information you send us only to respond to you and to manage our business relationship with you. We do not sell your information.',
      },
      {
        title: 'Hosting and logs.',
        content:
          'Our hosting provider may keep standard server logs (such as IP address and request time) for security and reliability.',
      },
      {
        title: 'Third-party links.',
        content:
          'The site links to services such as GitHub and LinkedIn. Their privacy practices are their own.',
      },
      {
        title: 'Your rights.',
        content:
          'You can ask us to access, correct or delete personal information we hold about you by emailing vinit.k@calmalpha.in.',
      },
      {
        title: 'Changes.',
        content:
          'We may update this policy and will change the date above when we do.',
      },
    ],
    disclaimer: '(Draft for owner review. Not legal advice.)',
  },

  terms: {
    meta: {
      title: 'Terms of Use | Calm Alpha',
      description: 'Terms for using the Calm Alpha website.',
    },
    heading: 'Terms of Use',
    sections: [
      {
        title: 'Use of the site.',
        content:
          'By using calmalpha.in you agree to these terms. The site is provided for general information about Calm Alpha and its services. It is not an offer or contract for services; engagements are governed by a separate written agreement.',
      },
      {
        title: 'No warranty.',
        content:
          'Content is provided "as is". We aim to keep it accurate but make no guarantees of completeness or fitness for a particular purpose.',
      },
      {
        title: 'Intellectual property.',
        content:
          'The Calm Alpha name, logo and site content belong to Calm Alpha unless stated otherwise. Open-source projects linked from this site are governed by their own licences.',
      },
      {
        title: 'Acceptable use.',
        content:
          'Do not misuse the site, attempt to disrupt it, or use it to violate any law.',
      },
      {
        title: 'Liability.',
        content:
          'To the extent permitted by law, Calm Alpha is not liable for losses arising from use of this site.',
      },
      {
        title: 'Governing law.',
        content: 'These terms are governed by the laws of India.',
      },
      {
        title: 'Contact.',
        content: 'vinit.k@calmalpha.in',
      },
    ],
    disclaimer: '(Draft for owner review. Not legal advice.)',
  },

  responsibleAi: {
    meta: {
      title: 'Responsible AI | Calm Alpha',
      description: 'How Calm Alpha approaches safe, accountable AI development.',
    },
    heading: 'Responsible AI',
    introTitle: 'Our approach.',
    introText:
      'We build AI systems that people can understand, check and control. These are the commitments we hold ourselves to.',
    commitments: [
      {
        number: '1',
        title: 'Human oversight.',
        description:
          'Systems that act on behalf of people include clear escalation to a human for consequential decisions.',
      },
      {
        number: '2',
        title: 'Transparency.',
        description:
          'Users are told when they are interacting with an AI system, including on voice and chat agents.',
      },
      {
        number: '3',
        title: 'Accuracy and grounding.',
        description:
          'Where possible, answers are grounded in source material the user can inspect, and we test for errors before release.',
      },
      {
        number: '4',
        title: 'Privacy.',
        description:
          'We collect the minimum data a system needs, and we do not train models on client data without explicit agreement.',
      },
      {
        number: '5',
        title: 'Acceptable use.',
        description:
          'We do not build systems for deception, harassment, unlawful surveillance or other harmful uses, and we follow the usage policies of the model providers we rely on.',
      },
      {
        number: '6',
        title: 'Accountability.',
        description:
          'If something goes wrong, we investigate, fix it and tell affected parties.',
      },
    ],
    reportText: 'Report a concern. Email vinit.k@calmalpha.in.',
    reportEmail: 'vinit.k@calmalpha.in',
  },

  notFound: {
    meta: {
      title: 'Page Not Found | Calm Alpha',
      description: 'This page does not exist. Return to Calm Alpha home.',
    },
    heading: 'Page not found',
    text: "This page doesn't exist. Head back to the home page.",
    buttonText: 'Go home',
    buttonHref: '/',
  },
};

/**
 * Utility helper to determine if a string is an unresolved confirmation token
 */
export function isConfirmationToken(value: string | undefined | null): boolean {
  if (!value) return false;
  return /\{\{CONFIRM:.*?\}\}/.test(value) || /\{\{.*?\}\}/.test(value);
}
