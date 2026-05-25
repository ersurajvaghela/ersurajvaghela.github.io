import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectsSection from './components/ProjectsSection';

function App() {
  const downloadResume = async () => {
    try {
      const pdfUrl = 'https://ersurajvaghela.github.io/public/suraj_vaghela_9_years23-May-2026.pdf'
      const response = await fetch(pdfUrl)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'suraj_vaghela_9_years23-May-2026.pdf'
      link.style.display = 'none'

      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error downloading PDF resume:', error)
      alert('Resume download temporarily unavailable. Please contact directly at vaghelasuraj@ymail.com')
    }
  }


  return (
    <div className="portfolio">
      <Navigation />
      <HeroSection onDownloadResume={downloadResume} />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}

export default App