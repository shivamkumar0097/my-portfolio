import { useMemo, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { GithubIcon } from '../components/BrandIcons'
import { projects } from '../data/portfolio'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'vanilla', label: 'HTML · CSS · JS' },
  { id: 'react', label: 'React' },
]

function getDomain(url) {
  return url.replace(/^https?:\/\//, '')
}

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const visible = useMemo(
    () =>
      filter === 'all'
        ? projects
        : projects.filter((project) => project.tag === filter),
    [filter],
  )

  const handleSpotlight = (event) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    card.style.setProperty('--mx', `${event.clientX - rect.left}px`)
    card.style.setProperty('--my', `${event.clientY - rect.top}px`)
  }

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">03 — Projects</span>
          <h2 className="section-title">Selected work</h2>
          <p className="section-sub">
            A few things I have built while learning and experimenting with the
            web. Every project taught me something new.
          </p>
        </Reveal>

        <Reveal className="project-filters" delay={0.05}>
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`project-filter${filter === item.id ? ' active' : ''}`}
              onClick={() => setFilter(item.id)}
              aria-pressed={filter === item.id}
            >
              {item.label}
            </button>
          ))}
        </Reveal>

        <div className="projects-grid" key={filter}>
          {visible.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <article
                className="project-card"
                style={{ '--project-accent': project.accent, '--i': index }}
                onMouseMove={handleSpotlight}
              >
                <a
                  className="project-preview"
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title} live demo`}
                >
                  <div className="project-window">
                    <div className="project-window-bar">
                      <span className="dot dot-red" />
                      <span className="dot dot-yellow" />
                      <span className="dot dot-green" />
                    </div>
                    <div className="project-window-body">
                      <span className="project-initial">
                        {project.title.charAt(0)}
                      </span>
                      <span className="project-domain">
                        {getDomain(project.live)}
                      </span>
                    </div>
                  </div>
                  <span className="project-visit">
                    View live <ArrowUpRight size={15} />
                  </span>
                </a>

                <div className="project-info">
                  <div className="project-top">
                    <h3 className="project-title">{project.title}</h3>
                    <span className="project-num">0{index + 1}</span>
                  </div>
                  <p className="project-desc">{project.description}</p>
                  <ul className="project-stack">
                    {project.stack.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div className="project-links">
                    <a
                      className="project-link"
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo <ArrowUpRight size={15} />
                    </a>
                    {project.source && (
                      <a
                        className="project-link"
                        href={project.source}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Code <GithubIcon size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
