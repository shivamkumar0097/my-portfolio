export const profile = {
  name: 'Shivam Kumar',
  firstName: 'Shivam',
  role: 'Frontend Developer',
  tagline: 'I build clean, fast & modern web experiences.',
  bio: 'BCA student and frontend developer who loves turning ideas into clean, fast and user-friendly web experiences. I build modern interfaces with HTML, CSS, JavaScript and React. Right now I am sharpening my skills by building real projects and solving real problems.',
  location: 'Dhanbad, India',
  email: 'shivamkr8135@gmail.com',
  photo: '/photo.jpg',
  socials: {
    github: 'https://github.com/shivamkumar0097',
    linkedin: 'https://www.linkedin.com/in/shivamkumar0097',
  },
  resume: null,
}

export const skills = [
  { name: 'HTML', label: 'Semantic Markup', color: '#e34f26', icon: 'html', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML', level: 95 },
  { name: 'CSS', label: 'Modern Styling', color: '#2965f1', icon: 'css', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS', level: 90 },
  { name: 'JavaScript', label: 'Core Logic', color: '#f7df1e', icon: 'js', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', level: 82 },
  { name: 'React', label: 'UI Library', color: '#61dafb', icon: 'react', url: 'https://react.dev', level: 72 },
]

export const services = [
  {
    icon: 'layout',
    title: 'Landing Pages',
    text: 'Single-page sites that look premium and convert visitors into leads.',
  },
  {
    icon: 'code',
    title: 'Full Websites',
    text: 'Multi-page, fully responsive websites built from scratch with clean structure.',
  },
  {
    icon: 'react',
    title: 'React Interfaces',
    text: 'Component-based UIs with state, effects and real API integration.',
  },
  {
    icon: 'tool',
    title: 'Fixes & Polish',
    text: 'Responsive bugs, layout glitches, animation and performance cleanups.',
  },
]

export const projects = [
  {
    title: 'Weather Check',
    description:
      'A real-time weather app that shows current conditions and a clean, responsive forecast UI for any city.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    tag: 'vanilla',
    live: 'https://today-weathercheck.netlify.app',
    source: null,
    accent: '#61dafb',
  },
  {
    title: 'Movie Search',
    description:
      'A movie discovery app where you can search any movie and instantly browse posters, titles and details.',
    stack: ['React', 'JavaScript', 'CSS'],
    tag: 'react',
    live: 'https://search-any-moviee.netlify.app',
    source: null,
    accent: '#818cf8',
  },
  {
    title: 'WebCar Official',
    description:
      'A modern car showcase website with a clean layout, smooth sections and a responsive browsing experience.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    tag: 'vanilla',
    live: 'https://webcarofficial.netlify.app',
    source: null,
    accent: '#5eead4',
  },
]

export const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institute: 'G.N. College, Dhanbad',
    status: '1st Semester',
    period: '2026 — Present',
    description:
      'Building a strong foundation in programming, computer fundamentals and modern web development.',
  },
]

export const learning = [
  'React components, state and modern patterns',
  'Responsive layouts with modern CSS',
  'Fetching data from APIs and handling it cleanly',
  'Writing cleaner, more maintainable code',
]

export const stats = [
  { value: '3+', label: 'Projects shipped' },
  { value: '4', label: 'Core technologies' },
  { value: '100%', label: 'Responsive builds' },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
