import {
  ArrowUpRight,
  GraduationCap,
  Mail,
  MapPin,
  Sparkles,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import { profile } from '../data/portfolio'

const facts = [
  {
    icon: GraduationCap,
    label: 'Education',
    value: 'BCA — 1st Semester',
  },
  { icon: MapPin, label: 'Location', value: profile.location },
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  { icon: Sparkles, label: 'Focus', value: 'React & modern UI' },
]

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">01 — About</span>
          <h2 className="section-title">A little about me</h2>
        </Reveal>

        <div className="about-grid">
          <Reveal className="about-copy" delay={0.05}>
            <p>
              I&apos;m Shivam, a BCA student and self-driven frontend developer
              based in Dhanbad, India. I enjoy the process of turning a simple
              idea into a working product — from the first line of markup to the
              final smooth animation.
            </p>
            <p>
              I mostly build with HTML, CSS, JavaScript and React. My focus is on
              clean layouts, smooth interactions and websites that feel fast and
              effortless on every screen.
            </p>
            <p>
              Right now I&apos;m a first-semester BCA student at G.N. College,
              Dhanbad, learning something new every day and building projects to
              sharpen my skills.
            </p>
            <a href="#contact" className="about-link">
              Let&apos;s build something together <ArrowUpRight size={16} />
            </a>
          </Reveal>

          <Reveal className="about-facts" delay={0.15}>
            {facts.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <span className="fact-icon">
                    <Icon size={18} />
                  </span>
                  <span className="fact-body">
                    <span className="fact-label">{label}</span>
                    <span className="fact-value">{value}</span>
                  </span>
                </>
              )

              return href ? (
                <a key={label} className="fact" href={href}>
                  {content}
                </a>
              ) : (
                <div key={label} className="fact">
                  {content}
                </div>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
