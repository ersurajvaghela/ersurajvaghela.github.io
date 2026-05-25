const projects = [
  {
    title: 'Enterprise Web Applications',
    description:
      'Led development of scalable web applications serving 10,000+ users with complex business logic, real-time features, and cloud integration.',
    technologies: ['Node.js', 'Laravel', 'AWS', 'PostgreSQL', 'Socket.io'],
    stats: [
      { number: '15+', label: 'Projects' },
      { number: '10K+', label: 'Users' },
      { number: '99.9%', label: 'Uptime' },
    ],
  },
  {
    title: 'Cloud Architecture & APIs',
    description:
      'Designed and implemented serverless architecture using AWS Lambda, microservices, and RESTful APIs for high-performance applications.',
    technologies: ['AWS Lambda', 'API Gateway', 'DynamoDB', 'Node.js', 'GraphQL'],
    stats: [
      { number: '20+', label: 'APIs' },
      { number: '40%', label: 'Performance Boost' },
      { number: '5M+', label: 'API Calls/Month' },
    ],
  },
  {
    title: 'Team Leadership & Mentoring',
    description:
      'Led cross-functional development teams, established coding standards, and mentored junior developers to enhance overall team productivity.',
    technologies: ['Agile', 'Code Review', 'CI/CD', 'Git', 'Project Management'],
    stats: [
      { number: '8+', label: 'Team Members' },
      { number: '30%', label: 'Efficiency Gain' },
      { number: '100%', label: 'On-time Delivery' },
    ],
  },
]

const ProjectsSection = () => {
  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Key Projects & Achievements</h2>
          <p className="section-subtitle">
            Showcase of impactful projects demonstrating technical expertise,
            leadership capabilities, and business value delivery.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="project-stats">
                {project.stats.map((stat, i) => (
                  <div key={i} className="project-stat">
                    <span className="project-stat-number">{stat.number}</span>
                    <span className="project-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection