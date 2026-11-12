import { BookOpen, CalendarDays, Check, GraduationCap } from 'lucide-react'
import Reveal from '../components/Reveal'
import { education, learning } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">04 — Education</span>
          <h2 className="section-title">Education & learning</h2>
          <p className="section-sub">
            Where I am studying, and what I am learning outside the classroom.
          </p>
        </Reveal>

        <div className="education-grid">
          {education.map((item) => (
            <Reveal key={item.degree} delay={0.05}>
              <article className="edu-card">
                <span className="edu-marker" aria-hidden="true" />
                <div className="edu-top">
                  <span className="edu-icon">
                    <GraduationCap size={24} />
                  </span>
                  <span className="edu-badge">{item.status}</span>
                </div>
                <h3 className="edu-degree">{item.degree}</h3>
                <p className="edu-institute">{item.institute}</p>
                <p className="edu-period">
                  <CalendarDays size={14} /> {item.period}
                </p>
                <p className="edu-desc">{item.description}</p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.15}>
            <article className="learning-card">
              <h3 className="learning-title">
                <span className="learning-icon">
                  <BookOpen size={18} />
                </span>
                Currently learning
              </h3>
              <ul className="learning-list">
                {learning.map((topic) => (
                  <li key={topic}>
                    <span className="learning-check">
                      <Check size={13} />
                    </span>
                    {topic}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
