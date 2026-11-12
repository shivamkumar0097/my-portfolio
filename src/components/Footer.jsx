import { ArrowUp } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <a href="#home" className="brand footer-brand">
          <span className="brand-mark">&lt;/&gt;</span> shivam
          <span className="brand-dot">.dev</span>
        </a>

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
