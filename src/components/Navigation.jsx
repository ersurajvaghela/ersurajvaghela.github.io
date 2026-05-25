import { useState, useEffect } from 'react'

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  const navLinks = ['about', 'skills', 'experience', 'projects', 'contact']

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="logo code-font">{'<SurajDev />'}</a>

        {/* Hamburger button — mobile only */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>

        {/* Desktop nav */}
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link}`} onClick={() => scrollToSection(link)}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile dropdown */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'active' : ''}`}>
        <ul className="nav-links">
          {navLinks.map((link) => (
            <li key={link}>
              <a href={`#${link}`} onClick={() => scrollToSection(link)}>
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navigation