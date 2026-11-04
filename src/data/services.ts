import type { IconName } from '../components/Icon.astro';

export interface Service {
  slug: string;
  title: string;
  short: string;
  icon: IconName;
  headline: string;
  summary: string;
  outcomes: string[];
  deliverables: string[];
  stack: string[];
  stage: 'Assess' | 'Migrate' | 'Automate' | 'Operate' | 'Optimize';
  relatedProject?: string;
}

export const services: Service[] = [
  {
    slug: 'cloud-migration',
    title: 'Cloud Migration',
    short: 'Migration',
    icon: 'cloudUp',
    headline: 'Move to Azure without the downtime drama.',
    summary:
      'Plan and execute a move to Azure that is sequenced around your business, with a secure landing zone, clear cutover steps, and a rollback path at every stage.',
    outcomes: [
      'A landing zone with identity, networking, and guardrails ready before the first workload moves',
      'Workloads migrated in planned waves with tested cutover and rollback',
      'Cost visibility from day one instead of a surprise first invoice',
    ],
    deliverables: ['Current-state assessment', 'Target architecture', 'Migration wave plan', 'Landing zone (IaC)', 'Cutover runbooks'],
    stack: ['Azure Migrate', 'Landing Zones', 'Entra ID', 'Bicep'],
    stage: 'Migrate',
  },
  {
    slug: 'azure-devops',
    title: 'Azure & DevOps',
    short: 'DevOps',
    icon: 'pipeline',
    headline: 'Ship changes daily, with confidence.',
    summary:
      'Replace fragile manual changes with versioned infrastructure and dependable delivery pipelines your own team can read, review, and extend.',
    outcomes: [
      'Every environment reproducible from code',
      'Pull-request based changes with automated checks',
      'Faster, lower-risk releases with clear audit history',
    ],
    deliverables: ['Infrastructure as code', 'CI/CD pipelines', 'Environment strategy', 'Container workflows', 'Team handover'],
    stack: ['Terraform', 'Bicep', 'GitHub Actions', 'Azure DevOps', 'Containers'],
    stage: 'Automate',
    relatedProject: 'request-hub',
  },
  {
    slug: 'managed-it',
    title: 'Managed IT & Cloud Ops',
    short: 'Managed IT',
    icon: 'shieldPulse',
    headline: 'We watch your platform so your team doesn’t have to.',
    summary:
      'Ongoing operation of your Azure environment: monitoring, security posture, patch oversight, backup checks, and monthly cost reviews.',
    outcomes: [
      'Issues spotted from monitoring, not from customers',
      'A security posture that is reviewed, not assumed',
      'Monthly cost and performance recommendations you can act on',
    ],
    deliverables: ['Monitoring & alerting', 'Security posture reviews', 'Backup & recovery checks', 'Monthly ops report', 'Cost optimization'],
    stack: ['Azure Monitor', 'Defender for Cloud', 'Azure Policy', 'Azure Backup'],
    stage: 'Operate',
    relatedProject: 'azure-csp-calculator',
  },
  {
    slug: 'ai-automation',
    title: 'AI & Automation',
    short: 'AI',
    icon: 'spark',
    headline: 'Turn repetitive work into reliable workflows.',
    summary:
      'Practical automation and Azure OpenAI integrations where they clearly save time, with security, cost, and data boundaries designed in.',
    outcomes: [
      'Repetitive manual work replaced by dependable automation',
      'AI features grounded in your own data, kept inside your tenant',
      'Clear guardrails for cost, privacy, and access',
    ],
    deliverables: ['Use-case assessment', 'Automation workflows', 'Azure OpenAI integration', 'Guardrails & monitoring'],
    stack: ['Azure OpenAI', 'Azure Functions', 'Logic Apps', 'Power Platform'],
    stage: 'Optimize',
    relatedProject: 'putocopy',
  },
  {
    slug: 'support',
    title: 'Support & Advisory',
    short: 'Support',
    icon: 'headset',
    headline: 'A real engineer when you need one.',
    summary:
      'Direct access to the engineer who knows your environment, for questions, incidents, design reviews, and planning the next step.',
    outcomes: [
      'Answers from someone who already knows your setup',
      'Architecture and design reviews before you commit',
      'A practical roadmap that matches your budget',
    ],
    deliverables: ['Technical support', 'Architecture reviews', 'Roadmap planning', 'Knowledge transfer'],
    stack: ['Microsoft Azure', 'Microsoft 365', 'Entra ID'],
    stage: 'Assess',
  },
];

export const journey = ['Assess', 'Migrate', 'Automate', 'Operate', 'Optimize'] as const;
