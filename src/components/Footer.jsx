import { ArrowUp, Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/BrandIcons'
import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-watermark" aria-hidden="true">
        SHIVAM.DEV
      </span>

      <div className="container footer-inner">
        <div className="footer-left">
          <a href="#home" className="brand footer-brand">
            <span className="brand-mark">&lt;/&gt;</span> shivam
            <span className="brand-dot">.dev</span>
          </a>

          <div className="footer-socials">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <GithubIcon size={17} />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={17} />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail size={17} />
            </a>
          </div>
        </div>

        <p className="footer-copy">
          © {new Date().getFullYear()} Shivam Kumar. Built with React, Vite and
          a lot of curiosity.
        </p>

        <a href="#home" className="back-to-top">
          Back to top <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  )
}
