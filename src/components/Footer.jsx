const Footer = () => {
  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi Suraj! I'm interested in ")
    window.open(`https://wa.me/919098111143?text=${message}`, '_blank')
  }

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Suraj Vaghela</h4>
            <p>
              Full-Stack Software Engineer passionate about creating scalable solutions
              and leading high-performing development teams.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {['about', 'skills', 'experience', 'contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link}`} onClick={() => scrollToSection(link)}>
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-section">
            <h4>Technologies</h4>
            <ul className="footer-links">
              <li><a href="#">Node.js & Express.js, Nest.js</a></li>
              <li><a href="#">PHP & Laravel, Codeigniter</a></li>
              <li><a href="#">AWS & Cloud Services</a></li>
              <li><a href="#">Database Optimization</a></li>
              <li><a href="#">Microservices Architecture</a></li>
              <li><a href="#">AI Tools</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Connect</h4>
            <ul className="footer-links">
              <li><a href="mailto:vaghelasuraj@ymail.com">Email</a></li>
              <li><a href="#" onClick={openWhatsApp}>WhatsApp</a></li>
              <li><a href="tel:+919098111143">Phone</a></li>
              <li>
                <a href="https://www.linkedin.com/in/ersurajvaghela/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ersurajvaghela/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://github.com/ersurajvaghela" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Suraj Vaghela. All rights reserved. Ready to build something amazing together!</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer