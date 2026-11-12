import Reveal from '../components/Reveal'
import { skillIcons } from '../components/skillIconMap'
import { skills } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">02 — Skills</span>
          <h2 className="section-title">My tech stack</h2>
          <p className="section-sub">
            Tools and technologies I use to design and build modern web
            interfaces.
          </p>
        </Reveal>

        <div className="skills-grid">
          {skills.map((skill, index) => {
            const Icon = skillIcons[skill.icon]

            return (
              <Reveal key={skill.name} delay={index * 0.07}>
                <article
                  className="skill-card"
                  style={{ '--skill-color': skill.color }}
                >
                  <span className="skill-icon">
                    <Icon />
                  </span>
                  <span className="skill-body">
                    <h3 className="skill-name">{skill.name}</h3>
                    <p className="skill-label">{skill.label}</p>
                  </span>
                  <span className="skill-index">0{index + 1}</span>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
