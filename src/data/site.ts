export const site = {
  name: 'Clouditech',
  legalName: 'Clouditech Information Technology Solutions',
  url: 'https://clouditechsolution.com',
  tagline: 'Managed Azure services for secure, maintainable, and cost-aware cloud operations.',
  email: 'lloydismael@gmail.com',
  phone: '+63 912 350 7286',
  phoneHref: 'tel:+639123507286',
  location: 'Makati City, Philippines',
  github: 'https://github.com/lloydismael',
  founder: 'Lloyd Christian Ismael',
  registration: 'DTI #8167987 · Business ID #10900534',
  // Set this to the real Microsoft Bookings / Calendly URL. While empty, CTAs fall back to email.
  schedulerUrl: '',
};

export const bookingHref =
  site.schedulerUrl || `mailto:${site.email}?subject=${encodeURIComponent('Azure assessment request')}`;

export const nav = [
  { href: '/services/', label: 'Services' },
  { href: '/projects/', label: 'Projects' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Contact' },
];

// Only publish verifiable numbers here. Leave the array empty to hide the stats band.
export const stats: { value: number; suffix?: string; label: string }[] = [
  { value: 9, suffix: '+', label: 'Years of hands-on cloud & IT engineering' },
  { value: 4, label: 'Products designed, built, and shipped' },
  { value: 5, label: 'Managed service lines on Microsoft Azure' },
];

// Add real, approved client quotes. The section stays hidden while this is empty.
export const testimonials: { quote: string; name: string; role: string; company: string }[] = [];

// Platforms we work with. Rendered as text wordmarks, so no partner-logo rights are needed.
export const technologies = [
  'Microsoft Azure', 'Microsoft 365', 'Azure DevOps', 'GitHub Actions', 'Terraform', 'Bicep',
  'Kubernetes', 'Docker', 'Azure OpenAI', 'Entra ID', 'Azure Monitor', 'Power Platform',
];
