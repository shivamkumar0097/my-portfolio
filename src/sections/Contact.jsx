import { useState } from 'react'
import {
  ArrowUpRight,
  CalendarCheck,
  Check,
  Clock,
  Copy,
  Mail,
  MapPin,
  Send,
  Sparkles,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { profile } from '../data/portfolio'

const projectTypes = ['Landing Page', 'Full Website', 'Bug Fixes', 'Other']

const hirePoints = [
  {
    icon: Sparkles,
    title: 'Modern frontends',
    text: 'Clean, responsive interfaces built with React, HTML, CSS and JavaScript.',
  },
  {
    icon: CalendarCheck,
    title: 'Fast turnaround',
    text: 'Clear milestones, regular updates and delivery right on schedule.',
  },
  {
    icon: Clock,
    title: 'Real communication',
    text: 'You talk to the person actually building your product — no handoffs.',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [projectType, setProjectType] = useState(projectTypes[0])
  const [copied, setCopied] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(
      `Portfolio inquiry from ${form.name || 'a visitor'}`,
    )
    const body = encodeURIComponent(
      `${form.message}\n\nProject type: ${projectType}\n— ${form.name}\n${form.email}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="contact-aurora" aria-hidden="true" />

      <div className="container">
        <Reveal className="hire-head">
          <span className="eyebrow">
            <Sparkles size={14} /> 05 - Hire Me
          </span>
          <h2 className="hire-title">
            Let&apos;s build
            <br />
            something <span className="text-gradient">great</span>.
          </h2>
          <p className="hire-sub">
            Open for internships, freelance projects and long-term
            collaborations. Tell me about your idea and I&apos;ll get back to
            you within 24 hours.
          </p>
        </Reveal>

        <div className="hire-layout">
          <Reveal className="hire-copy" delay={0.1}>
            <div className="hire-availability">
              <span className="status-dot" aria-hidden="true" />
              Available for new work
            </div>

            <ul className="hire-points">
              {hirePoints.map(({ icon: Icon, title, text }) => (
                <li key={title} className="hire-point">
                  <span className="hire-point-icon">
                    <Icon size={17} />
                  </span>
                  <div className="hire-point-body">
                    <strong>{title}</strong>
                    <span>{text}</span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="hire-stats">
              <div className="hire-stat">
                <strong>{'3+'}</strong>
                <span>Live projects</span>
              </div>
              <div className="hire-stat">
                <strong>&lt; 24h</strong>
                <span>Reply time</span>
              </div>
              <div className="hire-stat">
                <strong>100%</strong>
                <span>Handcrafted UI</span>
              </div>
            </div>

            <div className="hire-actions">
              <a className="hire-action" href={`mailto:${profile.email}`}>
                <Mail size={17} />
                <span>Email me</span>
                <ArrowUpRight size={15} />
              </a>
              {profile.resume && (
                <a className="hire-action" href={profile.resume} download>
                  <ArrowUpRight size={17} />
                  <span>Resume</span>
                </a>
              )}
              <button
                type="button"
                className="hire-action"
                onClick={copyEmail}
                aria-live="polite"
              >
                {copied ? <Check size={17} /> : <Copy size={17} />}
                <span>{copied ? 'Copied' : 'Copy email'}</span>
              </button>
              <a
                className="hire-action"
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
                <ArrowUpRight size={15} />
              </a>
              <a
                className="hire-action"
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
                <ArrowUpRight size={15} />
              </a>
            </div>

            <div className="hire-location">
              <MapPin size={15} /> {profile.location}
            </div>
          </Reveal>

          <Reveal className="hire-form-wrap" delay={0.18}>
            <div className="hire-form-card">
              <div className="hire-form-head">
                <div>
                  <h3>Start a project</h3>
                  <p>Fill this in and it opens in your mail app, ready to send.</p>
                </div>
                <span className="hire-form-badge">
                  <span className="status-dot" aria-hidden="true" />
                  Online
                </span>
              </div>

              <form className="hire-form" onSubmit={handleSubmit}>
                <div className="hire-types" role="group" aria-label="Project type">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      className={`hire-type${projectType === type ? ' active' : ''}`}
                      onClick={() => setProjectType(type)}
                      aria-pressed={projectType === type}
                    >
                      {type}
                    </button>
                  ))}
                </div>

                <div className="form-row">
                  <label className="field">
                    Name
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </label>
                  <label className="field">
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>

                <label className="field">
                  Message
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell me about your idea, timeline and budget..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </label>

                <button type="submit" className="btn btn-primary hire-submit">
                  Send message <Send size={16} />
                </button>
                <p className="form-note">
                  Usually replies within 24 hours · No spam, ever.
                </p>
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
