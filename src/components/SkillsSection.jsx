const skillsData = [
  {
    icon: 'fas fa-server',
    title: 'Backend Development',
    skills: ['Node.js', 'Express.js', 'NestJS', 'PHP', 'Laravel', 'CodeIgniter', 'Yii2'],
  },
  {
    icon: 'fas fa-code',
    title: 'Frontend Development',
    skills: [
      'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js',
      'jQuery', 'HTML5', 'CSS3', 'Responsive Design', 'Tailwindcss',
    ],
  },
  {
    icon: 'fas fa-database',
    title: 'Database Management',
    skills: ['PostgreSQL', 'MySQL', 'MS SQL', 'Firestore', 'MongoDB', 'Elasticsearch', 'Query Optimization'],
  },
  {
    icon: 'fas fa-cloud',
    title: 'Cloud & DevOps',
    skills: [
      'AWS Lambda', 'AWS S3', 'AWS EC2', 'AWS Cognito',
      'AWS CloudFormation', 'AWS CloudFront', 'AWS RDS',
      'AWS CodeCommit', 'Firebase', 'Google Cloud',
    ],
  },
  {
    icon: 'fas fa-tools',
    title: 'Development Tools',
    skills: ['Git', 'Bitbucket', 'GitHub', 'GraphQL', 'RESTful APIs', 'Socket.io', 'Web Services', 'Microservices'],
  },
  {
    icon: 'fas fa-users',
    title: 'Leadership & Management',
    skills: ['Team Leadership', 'Project Management', 'Mentoring', 'Agile', 'Code Review'],
  },
]

const SkillsSection = () => {
  return (
    <section className="section" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Expertise</h2>
          <p className="section-subtitle">
            Comprehensive skill set spanning full-stack development, cloud architecture,
            and team leadership with focus on scalable, high-performance solutions.
          </p>
        </div>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon">
                  <i className={skill.icon}></i>
                </div>
                <h3 className="skill-title">{skill.title}</h3>
              </div>
              <div className="skill-tags">
                {skill.skills.map((tag, i) => (
                  <span key={i} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection