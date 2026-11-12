import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Code2, Mail, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { profile } from '../data/portfolio'

const roles = ['Frontend Developer', 'React Developer', 'BCA Student']

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
}

function Hero() {
  const [text, setText] = useState('')
  const [roleIndex, setRoleIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[roleIndex]
    let delay = deleting ? 45 : 90

    if (!deleting && text === current) delay = 1600
    else if (deleting && text === '') delay = 320

    const timer = setTimeout(() => {
      if (!deleting && text === current) {
        setDeleting(true)
        return
      }
      if (deleting && text === '') {
        setDeleting(false)
        setRoleIndex((index) => (index + 1) % roles.length)
        return
      }
      setText(
        deleting
          ? current.slice(0, text.length - 1)
          : current.slice(0, text.length + 1),
      )
    }, delay)

    return () => clearTimeout(timer)
  }, [text, deleting, roleIndex])

  return (
    <section id="home" className="hero">
      <div className="hero-glow" aria-hidden="true" />

      <div className="container hero-inner">
        <motion.div
          className="hero-copy"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="status-pill">
            <span className="status-dot" aria-hidden="true" />
            Available for work
          </motion.div>

          <motion.h1 variants={item} className="hero-title">
            Hi, I&apos;m <span className="text-gradient">Shivam Kumar</span>
          </motion.h1>

          <motion.div variants={item} className="hero-role" aria-live="polite">
            <span className="role-text">{text}</span>
            <span className="caret" aria-hidden="true" />
          </motion.div>

          <motion.p variants={item} className="hero-bio">
            {profile.bio}
          </motion.p>

          <motion.div variants={item} className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight size={17} />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Let&apos;s talk
            </a>
          </motion.div>

          <motion.div variants={item} className="hero-meta">
            <a href={`mailto:${profile.email}`} className="meta-chip">
              <Mail size={15} /> {profile.email}
            </a>
            <span className="meta-chip">
              <MapPin size={15} /> {profile.location}
            </span>
          </motion.div>

          <motion.div variants={item} className="hero-socials">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon size={19} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={19} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={19} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="hero-photo-wrap">
            <div className="hero-photo">
              <img
                src={profile.photo}
                alt={`${profile.name} — ${profile.role}`}
              />
            </div>
            <span className="photo-badge photo-badge-top">
              <Code2 size={14} /> {profile.role}
            </span>
            <span className="photo-badge photo-badge-bottom">
              <span className="status-dot" aria-hidden="true" /> Open to work
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
