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
  { name: 'HTML', label: 'Semantic Markup', color: '#e34f26', icon: 'html' },
  { name: 'CSS', label: 'Modern Styling', color: '#2965f1', icon: 'css' },
  { name: 'JavaScript', label: 'Core Logic', color: '#f7df1e', icon: 'js' },
  { name: 'React', label: 'UI Library', color: '#61dafb', icon: 'react' },
]

export const projects = [
  {
    title: 'Weather Check',
    description:
      'A real-time weather app that shows current conditions and a clean, responsive forecast UI for any city.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://today-weathercheck.netlify.app',
    source: null,
    accent: '#61dafb',
  },
  {
    title: 'Movie Search',
    description:
      'A movie discovery app where you can search any movie and instantly browse posters, titles and details.',
    stack: ['React', 'JavaScript', 'CSS'],
    live: 'https://search-any-moviee.netlify.app',
    source: null,
    accent: '#818cf8',
  },
  {
    title: 'WebCar Official',
    description:
      'A modern car showcase website with a clean layout, smooth sections and a responsive browsing experience.',
    stack: ['HTML', 'CSS', 'JavaScript'],
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

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
