const HeroSection = ({ onDownloadResume }) => {
  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi Suraj! I saw your portfolio and would like to discuss ')
    window.open(`https://wa.me/919098111143?text=${message}`, '_blank')
  }

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="animate-fadeInUp">
            Hi, I'm <span className="highlight">Suraj Vaghela</span>
          </h1>
          <p className="animate-fadeInUp animate-delay-1">
            Senior Full-Stack Software Engineer with 8+ years of experience building
            scalable web applications, leading development teams, and architecting
            cloud-based solutions using modern technologies.
          </p>

          <div className="hero-stats animate-fadeInUp animate-delay-2">
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">35+</span>
              <span className="stat-label">Projects Delivered</span>
            </div>
          </div>

          <div className="hero-actions animate-fadeInUp animate-delay-3">
            <button className="btn btn-primary" onClick={onDownloadResume}>
              <i className="fas fa-download"></i>
              Download Resume
            </button>
            <button className="btn btn-outline" onClick={openWhatsApp}>
              <i className="fab fa-whatsapp"></i>
              Let's Talk
            </button>
          </div>
        </div>

        {/* Decorative code window */}
        <div className="hero-visual animate-fadeInUp animate-delay-2">
          <div className="code-window">
            <div className="window-header">
              <div className="window-controls">
                <div className="control close"></div>
                <div className="control minimize"></div>
                <div className="control maximize"></div>
              </div>
              <div className="window-title">suraj-portfolio.js</div>
            </div>
            <div className="code-content">
              <span className="code-line code-comment">// Full-Stack Developer Profile</span>
              <span className="code-line">
                <span className="code-keyword">const</span>{' '}
                <span className="code-function">developer</span> = {'{'}
              </span>
              <span className="code-line">
                {'  '}name: <span className="code-string">"Suraj Vaghela"</span>,
              </span>
              <span className="code-line">
                {'  '}role: <span className="code-string">"Module Lead"</span>,
              </span>
              <span className="code-line">
                {'  '}experience: <span className="code-string">"8+ years"</span>,
              </span>
              <span className="code-line">{'  '}skills: [</span>
              <span className="code-line">
                {'    '}
                <span className="code-string">"Node.js"</span>,{' '}
                <span className="code-string">"React"</span>,{' '}
                <span className="code-string">"PHP"</span>,
              </span>
              <span className="code-line">
                {'    '}
                <span className="code-string">"Laravel"</span>,{' '}
                <span className="code-string">"AWS"</span>,{' '}
                <span className="code-string">"Leadership"</span>
              </span>
              <span className="code-line">{"  '],"}</span>
              <span className="code-line">
                {'  '}passion:{' '}
                <span className="code-string">
                  "Building reliable and scalable software solutions"
                </span>
              </span>
              <span className="code-line">{'};'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection