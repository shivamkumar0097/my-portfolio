import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../data/portfolio'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')
  const close = () => setOpen(false)

  useEffect(() => {
    const ids = ['home', ...navLinks.map((link) => link.href.slice(1))]
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const isActive = (href) => active === href.slice(1)

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#home" className="brand" onClick={close}>
          <span className="brand-mark">&lt;/&gt;</span> shivam
          <span className="brand-dot">.dev</span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-link${isActive(link.href) ? ' active' : ''}`}
              aria-current={isActive(link.href) ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta">
            Hire me
          </a>
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="nav-mobile">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`nav-mobile-link${isActive(link.href) ? ' active' : ''}`}
              onClick={close}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary" onClick={close}>
            Hire me
          </a>
        </div>
      )}
    </header>
  )
}
