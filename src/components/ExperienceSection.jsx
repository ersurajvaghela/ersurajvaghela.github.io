const experiences = [
  {
    title: 'Associate Manager - Software Development',
    level: 'Development & Leadership',
    company: 'GenXAI Softgrid Pvt. Ltd',
    location: 'Indore, Madhya Pradesh',
    duration: 'November 2025 – Present',
    year: '2025 - Present',
    icon: 'fas fa-crown',
    achievements: [
      'Leading development team creating <strong>scalable web applications</strong> using PHP, Laravel, and Node.js',
      'Contributing to software development while reviewing existing code and providing feedback to improve performance and maintainability.',
      'Strengthened database performance through advanced SQL optimization, accelerating application response by 60-80%.',
    ],
    stats: [
      { number: '2+', label: 'Projects Led' },
      { number: '2+', label: 'Team Members' },
      { number: '100%', label: 'On-Time Delivery' },
    ],
  },
  {
    title: 'Module Lead & Team Lead',
    level: 'Leadership',
    company: 'BitCot Technologies Pvt Ltd',
    location: 'Indore, Madhya Pradesh',
    duration: 'August 2022 – November 2025',
    year: '2022 - 2025',
    icon: 'fas fa-crown',
    achievements: [
      'Leading development team creating <strong>scalable web applications</strong> using PHP, Laravel, and Node.js',
      'Improved <strong>development efficiency by 30%</strong> through structured processes and workflows',
      'Conducted comprehensive project estimation and requirements analysis for <strong>15+ client projects</strong>',
      'Optimized SQL queries and database performance, achieving <strong>40% improvement</strong> in response times',
      'Mentored and trained <strong>8+ junior developers</strong> contributing to team skill development',
      'Maintained <strong>100% on-time project delivery</strong> record through effective coordination',
    ],
    stats: [
      { number: '15+', label: 'Projects Led' },
      { number: '8+', label: 'Team Members' },
      { number: '100%', label: 'On-Time Delivery' },
    ],
  },
  {
    title: 'Senior Software Engineer',
    level: 'Senior',
    company: 'Space-O Technologies',
    location: 'Ahmedabad, Gujarat',
    duration: 'August 2018 – July 2022',
    year: '2018 - 2022',
    icon: 'fas fa-code',
    achievements: [
      'Developed <strong>complex web applications</strong> and RESTful web services using PHP frameworks',
      'Designed system architecture and operational workflows for <strong>20+ client projects</strong>',
      'Performed detailed project estimation and <strong>technical requirements analysis</strong>',
      'Achieved <strong>95% client satisfaction rate</strong> through quality deliverables',
      'Implemented <strong>best practices in code development</strong> and maintained clean codebases',
      'Collaborated with cross-functional teams to deliver <strong>high-quality solutions</strong>',
    ],
    stats: [
      { number: '20+', label: 'Client Projects' },
      { number: '95%', label: 'Satisfaction Rate' },
      { number: '4', label: 'Years Experience' },
    ],
  },
  {
    title: 'Web Developer',
    level: 'Developer',
    company: 'Random Soft Solution',
    location: 'Indore, Madhya Pradesh',
    duration: 'February 2017 – July 2018',
    year: '2017 - 2018',
    icon: 'fas fa-laptop-code',
    achievements: [
      'Built <strong>responsive web applications</strong> using PHP, MySQL, JavaScript, and jQuery',
      'Developed <strong>10+ dynamic websites</strong> with focus on user experience optimization',
      'Contributed to <strong>25% reduction in page load times</strong> through optimization techniques',
      'Worked with various <strong>PHP frameworks</strong> to create robust backend systems',
      'Gained foundational experience in <strong>full-stack web development</strong>',
    ],
    stats: [
      { number: '10+', label: 'Websites Built' },
      { number: '25%', label: 'Performance Boost' },
      { number: '1.5', label: 'Years Growth' },
    ],
  },
]

const ExperienceSection = () => {
  return (
    <section className="section" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Professional Journey</h2>
          <p className="section-subtitle">
            A progressive career path from developer to team leader, consistently delivering
            high-quality solutions and driving technical excellence across diverse projects.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-year">{exp.year}</div>
              <div className="timeline-marker">
                <i className={exp.icon}></i>
              </div>
              <div className="timeline-content">
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="job-title">
                      {exp.title}
                      <span className="job-level">{exp.level}</span>
                    </h3>
                    <div className="company">
                      <i className="fas fa-building"></i>
                      {exp.company}
                    </div>
                  </div>
                  <div className="experience-meta">
                    <div className="duration">
                      <i className="fas fa-calendar-alt"></i>
                      {exp.duration}
                    </div>
                    <div className="location">
                      <i className="fas fa-map-marker-alt"></i>
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} dangerouslySetInnerHTML={{ __html: achievement }} />
                  ))}
                </ul>

                <div className="experience-stats">
                  {exp.stats.map((stat, i) => (
                    <div key={i} className="experience-stat">
                      <span className="experience-stat-number">{stat.number}</span>
                      <span className="experience-stat-label">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection