export interface ProjectMetric {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  category: string;
  services: string[];
  outcome: string;
  highlight: string;
  stack: string[];
  problem: string;
  solution: string[];
  results: string[];
  before: string[];
  after: string[];
  // Add only verified figures. Metric tiles render only when this array has entries.
  metrics?: ProjectMetric[];
  featured: boolean;
  accent: string;
}

export const projects: Project[] = [
  {
    slug: 'request-hub',
    title: 'Request Hub',
    category: 'Internal platform',
    services: ['azure-devops', 'managed-it'],
    outcome: 'A single place to raise, route, and track requests, with live dashboards for every role.',
    highlight: 'Real-time dashboards',
    stack: ['Azure App Service', 'Static Web Apps', 'Role-based access', 'Dashboards'],
    problem:
      'Requests arrived through email threads and chat messages. Nobody had a reliable view of what was open, who owned it, or how long it had been waiting.',
    solution: [
      'Designed a ticketing and request-management platform with role-based workflows',
      'Hosted on Azure App Service and Static Web Apps with automated deployments',
      'Built real-time dashboards so leads can see workload and bottlenecks at a glance',
    ],
    results: [
      'One source of truth for every request',
      'Clear ownership and status at each step',
      'Managers see workload and ageing in real time',
    ],
    before: ['Requests scattered across email and chat', 'No ownership or status tracking', 'Reporting compiled manually'],
    after: ['Single request portal with routing', 'Role-based workflow with clear owners', 'Live dashboards, no manual reports'],
    featured: true,
    accent: '#1769e0',
  },
  {
    slug: 'azure-csp-calculator',
    title: 'Azure CSP Calculator',
    category: 'Pricing tool',
    services: ['managed-it'],
    outcome: 'Consistent Cloud Solution Provider quotes without spreadsheet back-and-forth.',
    highlight: 'Consistent quoting',
    stack: ['Pricing engine', 'CSP workflow', 'Azure'],
    problem:
      'CSP licensing quotes were assembled by hand in spreadsheets, so the same request could produce different numbers depending on who prepared it.',
    solution: [
      'Built a cost-estimation engine for Cloud Solution Provider licensing',
      'Standardized pricing inputs and margin rules in one place',
      'Produced clean, shareable quote outputs',
    ],
    results: ['Repeatable quotes from shared pricing rules', 'Less manual spreadsheet work', 'Faster turnaround on licensing requests'],
    before: ['Spreadsheet-based quoting', 'Inconsistent numbers between preparers', 'Slow turnaround'],
    after: ['Central pricing engine', 'Same inputs → same quote', 'Faster quote preparation'],
    featured: true,
    accent: '#0b8f83',
  },
  {
    slug: 'learning-portal',
    title: 'Learning & Development Portal',
    category: 'Learning platform',
    services: ['support', 'azure-devops'],
    outcome: 'Structured learning paths with progress tracking and rich content delivery.',
    highlight: 'Tracked learning paths',
    stack: ['Learning platform', 'Progress tracking', 'Azure'],
    problem:
      'Training material lived in shared folders with no structure, and there was no way to see who had completed what.',
    solution: [
      'Built a learning platform with structured paths and modules',
      'Added progress tracking for learners and managers',
      'Delivered rich content in a consistent, accessible format',
    ],
    results: ['Clear learning paths instead of loose files', 'Visible progress for learners and leads', 'Easier onboarding for new team members'],
    before: ['Files in shared folders', 'No completion visibility', 'Ad-hoc onboarding'],
    after: ['Structured learning paths', 'Progress tracking per learner', 'Repeatable onboarding'],
    featured: true,
    accent: '#6e56cf',
  },
  {
    slug: 'putocopy',
    title: 'PutoCopy',
    category: 'Productivity utility',
    services: ['ai-automation'],
    outcome: 'A focused utility that removes repetitive document-copy steps from everyday workflows.',
    highlight: 'Fewer manual steps',
    stack: ['Productivity', 'Workflow automation'],
    problem: 'Copying and reformatting content between documents was a repetitive, error-prone daily task.',
    solution: [
      'Designed a single-purpose utility around the exact repetitive workflow',
      'Kept the interface minimal so it is usable without training',
    ],
    results: ['Repetitive copy steps reduced to a single action', 'Fewer formatting mistakes'],
    before: ['Manual copy and reformat', 'Frequent formatting errors'],
    after: ['One-step content copy', 'Consistent output every time'],
    featured: false,
    accent: '#ff8a4c',
  },
];
