export const GROUPS = {
  Frontend: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3', 'Framer Motion', 'Responsive Design'],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'API Integration', 'Authentication', 'CRUD Operations'],
  Languages: ['JavaScript (ES6+)', 'TypeScript'],
  Database: ['MongoDB', 'Mongoose'],
  Libraries: ['Framer Motion', 'GSAP', 'Three.js', 'ShadCN UI', 'Lucide Icons'],
  'Tools & DevOps': ['Git', 'GitHub', 'Figma (Design to Code)', 'VS Code', 'Postman', 'Chrome DevTools', 'Vercel', 'Netlify'],
};
export const SKILLS = Object.entries(GROUPS).flatMap(([g, ws]) => ws.map((w) => ({ w, g })));

export const PROJECTS = [
  {
    tag: 'E-commerce · Next.js',
    title: 'Trending',
    em: 'Jewellers',
    desc: 'Responsive e-commerce platform with dynamic product catalogs, REST API integration for categories and pricing, search, filtering, and image galleries.',
    stack: ['Next.js', 'React.js', 'Tailwind CSS', 'REST APIs', 'Figma'],
  },
  {
    tag: 'Full Stack · CRM',
    title: 'Enterprise',
    em: 'CRM',
    desc: 'Scalable CRM platform featuring interactive business dashboards, forms, tables, secure authentication, and optimized frontend business workflows.',
    stack: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
  },
  {
    tag: 'Frontend · AI Assistant',
    title: 'Interactive',
    em: 'Portfolio',
    desc: 'Modern, high-performance portfolio featuring responsive modular architecture, AI chatbot integration for visitors, and smooth 3D motion transitions.',
    stack: ['React.js', 'Three.js', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
  },
];

export const STATS = [
  { label: 'Projects Built', value: 12, suffix: '+', h: 4.5 },
  { label: 'UI Components', value: 85, suffix: '+', h: 5.2 },
  { label: 'GitHub Repos', value: 25, suffix: '+', h: 3.8 },
  { label: 'Figma to Code', value: 100, suffix: '%', h: 4.8 },
];

export const JOURNEY = [
  { year: '2022', role: 'B.Sc Computer Science', place: 'Sri Ramakrishna Mission Vidyalaya College', note: '2022 — 2025 · College of Arts and Science' },
  { year: '2025', role: 'MERN Stack Developer Certification', place: 'KGiSL Micro College', note: 'June 2025 — Dec 2025 · Full Stack Web Engineering' },
  { year: '2026', role: 'FullStack Developer', place: 'Xorticantechlogic & Xplore Intellects', note: '2026 — Present · Client apps, CRM platforms & modern UI' },
];

export const CERTS = [
  ['KGiSL Micro College', 'MERN Stack Development'],
  ['Sri Ramakrishna Mission', 'B.Sc Computer Science'],
  ['React.js & Next.js', 'Modern Frontend Architecture'],
  ['Node.js & Express', 'RESTful API Engineering'],
  ['MongoDB & Mongoose', 'Database Modeling & CRUD'],
  ['Figma to Code', 'Responsive UI & Design Systems'],
  ['Git & GitHub', 'Collaborative Version Control'],
  ['Modern Web', 'Performance & State Management'],
];
