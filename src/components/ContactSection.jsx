import { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const openWhatsApp = () => {
    const message = encodeURIComponent('Hi Suraj! I saw your portfolio and would like to discuss ')
    window.open(`https://wa.me/919098111143?text=${message}`, '_blank')
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill in all required fields.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address.')
      return
    }

    const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}\n\n---\nSent from Portfolio Website`
    )

    window.location.href = `mailto:vaghelasuraj@ymail.com?subject=${subject}&body=${body}`

    setTimeout(() => {
      if (confirm('Email client opened! Would you also like to send a WhatsApp message for faster response?')) {
        const whatsappMessage = encodeURIComponent(
          `Hi Suraj!\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\n\n${formData.message}`
        )
        window.open(`https://wa.me/919098111143?text=${whatsappMessage}`, '_blank')
      }
    }, 1000)

    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const contactItems = [
    { icon: 'fas fa-phone', label: 'Phone', value: '+91 9098 111 143' },
    { icon: 'fas fa-envelope', label: 'Email', value: 'vaghelasuraj@ymail.com' },
    { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'Indore, Madhya Pradesh' },
    { icon: 'fas fa-clock', label: 'Response Time', value: 'Within 24 hours' },
  ]

  return (
    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Let's Work Together</h2>
          <p className="section-subtitle">
            Ready to bring your ideas to life? Let's discuss your project and
            explore how I can help you achieve your goals.
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h3>Get In Touch</h3>
            {contactItems.map((item, i) => (
              <div key={i} className="contact-item">
                <div className="contact-icon">
                  <i className={item.icon}></i>
                </div>
                <div>
                  <strong>{item.label}</strong>
                  <p>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h3>Send Message</h3>
            <div>
              <div className="form-group">
                <label className="form-label">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Subject *</label>
                <input
                  type="text"
                  name="subject"
                  className="form-input"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="e.g., Web Development Project"
                  required
                />
              </div>
              <div className="form-group">
                <label className="form-label">Message/Description *</label>
                <textarea
                  name="message"
                  className="form-textarea"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project or requirements..."
                  required
                />
              </div>
              <div className="form-actions">
                <button type="button" className="btn btn-success" onClick={handleSubmit}>
                  <i className="fas fa-paper-plane"></i>
                  Send Message
                </button>
                <button type="button" className="btn btn-whatsapp" onClick={openWhatsApp}>
                  <i className="fab fa-whatsapp"></i>
                  WhatsApp Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection