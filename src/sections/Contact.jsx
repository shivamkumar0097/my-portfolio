import { useState } from 'react'
import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react'
import Reveal from '../components/Reveal'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { profile } from '../data/portfolio'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const subject = encodeURIComponent(
      `Portfolio message from ${form.name || 'a visitor'}`,
    )
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`,
    )
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <Reveal className="contact-copy">
          <span className="eyebrow">05 — Contact</span>
          <h2 className="contact-title">
            Let&apos;s build
            <br />
            something <span className="text-gradient">great</span>.
          </h2>
          <p className="contact-sub">
            I&apos;m open to internships, freelance work and collaborations.
            Have an idea or just want to say hi? My inbox is always open.
          </p>

          <a className="contact-email" href={`mailto:${profile.email}`}>
            <Mail size={17} />
            {profile.email}
            <ArrowUpRight size={15} />
          </a>

          <div className="contact-socials">
            <a
              className="contact-social"
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon size={16} /> GitHub
            </a>
            <a
              className="contact-social"
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
            <span className="contact-social contact-location">
              <MapPin size={16} /> {profile.location}
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <form className="contact-form" onSubmit={handleSubmit}>
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
                placeholder="Tell me about your idea or project..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </label>

            <button type="submit" className="btn btn-primary">
              Send message <Send size={16} />
            </button>
            <p className="form-note">
              This opens your email app with the message ready to send.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
