import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Cloud, Trophy, Calendar, MapPin, User, Lock, Copy, Check } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [copiedField, setCopiedField] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [showCertModal, setShowCertModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    });
  };

  const openCertModal = (cert) => {
    setSelectedCert(cert);
    setShowCertModal(true);
  };

  const closeCertModal = () => {
    setShowCertModal(false);
    setSelectedCert(null);
  };

  const projects = [
    {
      title: "Travel Management System",
      description: "End-to-end Salesforce application with custom objects, async Apex, and external API integration for flight details. Built during hackathon with complete automation workflows.",
      tech: ["Salesforce", "Apex", "Lightning Web Components", "REST API", "Async Processing"],
      username: "testuser@gmail.com",
      password: "project123",
      note: "The project may take a few moments to load. Please be patient.",
      demo: "https://brave-koala-adftk0-dev-ed.trailblaze.my.site.com/WanderRoasterLwc/s/",
      type: "Salesforce Development"
    },
    {
      title: "Hospital Management System",
      description: "Comprehensive Salesforce app to manage internal operation of a hospital, built in a short time for a college project.",
      note: "The project may take a few moments to load. Please be patient.",
      tech: ["Salesforce", "Apex", "Lightning Web Components", "REST API", "Async Processing"],
      username: "testuser@gmail.com",
      password: "project123",
      demo: "https://playful-raccoon-uzwfy3-dev-ed.trailblaze.my.site.com/AiMedico/s/",
      type: "Computer Science"
    },
  ];

  const skills = [
    // Salesforce Skills
    { name: "Apex", category: "Salesforce", icon: <Cloud size={20} />, color: "#0176D3" },
    { name: "Lightning Web Components", category: "Salesforce", icon: <Cloud size={20} />, color: "#0176D3" },
    { name: "SOQL", category: "Salesforce", icon: <Database size={20} />, color: "#0176D3" },
    { name: "Triggers", category: "Salesforce", icon: <Code size={20} />, color: "#0176D3" },
    { name: "Flows", category: "Salesforce", icon: <Cloud size={20} />, color: "#0176D3" },
    { name: "Platform Events", category: "Salesforce", icon: <Cloud size={20} />, color: "#0176D3" },
    
    // Development Skills
    { name: "JavaScript", category: "Development", icon: <Code size={20} />, color: "#F7DF1E" },
    { name: "HTML/CSS", category: "Development", icon: <Code size={20} />, color: "#E34F26" },
    { name: "React", category: "Development", icon: <Code size={20} />, color: "#61DAFB" },
    { name: "REST APIs", category: "Development", icon: <ExternalLink size={20} />, color: "#10b981" },
    { name: "JSON", category: "Development", icon: <Code size={20} />, color: "#10b981" },
    
    // Database Skills
    { name: "Data Modeling", category: "Database", icon: <Database size={20} />, color: "#a855f7" },
    { name: "Relationships", category: "Database", icon: <Database size={20} />, color: "#a855f7" },
    { name: "Security", category: "Database", icon: <Database size={20} />, color: "#a855f7" },
    
    // Tools
    { name: "VS Code", category: "Tools", icon: <Code size={20} />, color: "#007ACC" },
    { name: "Git", category: "Tools", icon: <Code size={20} />, color: "#F05032" },
    { name: "GitHub", category: "Tools", icon: <Github size={20} />, color: "#181717" },
    { name: "Workbench", category: "Tools", icon: <ExternalLink size={20} />, color: "#f97316" },
    { name: "Developer Console", category: "Tools", icon: <ExternalLink size={20} />, color: "#f97316" }
  ];

  const certifications = [
    { 
      name: "Platform Developer I", 
      issuer: "Salesforce", 
      date: "2025", 
      verified: true,
      certificateUrl: "certifications/pd1.png" // Add your certificate image path here
    },
    {
      name: "AgentForce Specialist", 
      issuer: "Salesforce", 
      date: "2025", 
      verified: true,
      certificateUrl: "certifications/image.png" // Add your certificate image path here
    },
    { 
      name: "Java Data Structures and Algorithm Master Class", 
      issuer: "Udemy", 
      date: "2024", 
      verified: true,
      certificateUrl: "certifications/Screenshot 2025-08-03 115027.png" // Add your certificate image path here
    },
    { 
      name: "Build Your First Agent with Agentforce", 
      issuer: "salesforce", 
      date: "2025", 
      verified: true,
      certificateUrl: "certifications/Screenshot 2025-08-03 115258.png" // Add your certificate image path here
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Salesforce': return '#0176D3';
      case 'Development': return '#10b981';
      case 'Database': return '#a855f7';
      case 'Tools': return '#f97316';
      default: return '#60a5fa';
    }
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      width: '100%',
      overflowX: 'hidden'
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      transition: 'all 0.3s ease',
      backgroundColor: 'rgba(15, 23, 42, 0.95)',
      backdropFilter: isScrolled ? 'blur(8px)' : 'none',
      boxShadow: isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1rem 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap'
    },
    navLinks: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap',
      justifyContent: 'center'
    },
    navLink: {
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      textTransform: 'capitalize',
      transition: 'color 0.3s ease',
      fontSize: 'clamp(0.9rem, 3vw, 1rem)',
      padding: '0.5rem'
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 1rem',
      textAlign: 'center'
    },
    nameLogo: {
      fontSize: 'clamp(3rem, 11vw, 5rem)',
      fontWeight: 'bold',
      background: 'linear-gradient(90deg, rgb(255, 255, 255), rgb(14, 52, 98), rgb(58, 13, 238))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    heroTitle: {
      fontSize: 'clamp(2rem, 8vw, 4rem)',
      fontWeight: 'bold',
      marginBottom: '0.2rem',
      background: 'linear-gradient(90deg, rgb(255, 255, 255), rgb(14, 52, 98), rgb(58, 13, 238))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    heroSubtitle: {
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      color: '#d1d5db',
      marginBottom: '2rem',
      maxWidth: '90%',
      margin: '0 auto 2rem'
    },
    buttonPrimary: {
      padding: '0.75rem 1.5rem',
      background: 'linear-gradient(135deg, rgb(133, 157, 209), #7c3aed)',
      border: 'none',
      borderRadius: '0.5rem',
      color: 'white',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: 'clamp(0.9rem, 3vw, 1rem)',
      minWidth: '120px'
    },
    socialLinks: {
      display: 'flex',
      gap: '0.75rem',
      marginTop: '1rem',
      justifyContent: 'center'
    },
    socialLink: {
      padding: '0.5rem',
      backgroundColor: '#1e293b',
      borderRadius: '0.5rem',
      color: 'white',
      textDecoration: 'none',
      transition: 'background-color 0.3s ease'
    },
    section: {
      padding: 'clamp(2rem, 5vw, 5rem) 1rem'
    },
    sectionAlt: {
      padding: 'clamp(2rem, 5vw, 5rem) 1rem',
      backgroundColor: 'rgba(30, 41, 59, 0.3)'
    },
    sectionTitle: {
      fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '2rem',
      background: 'linear-gradient(90deg, #60a5fa, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    grid: {
      display: 'grid',
      gap: '1.5rem'
    },
    gridCols2: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
    },
    gridCols3: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
    },
    gridCols4: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))'
    },
    skillsGrid: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: '1rem'
    },
    card: {
      backgroundColor: 'rgba(30, 41, 59, 0.5)',
      borderRadius: '0.75rem',
      padding: '1rem',
      border: '1px solid #475569',
      transition: 'all 0.3s ease'
    },
    skillTile: {
      backgroundColor: 'rgba(30, 41, 59, 0.5)',
      borderRadius: '0.75rem',
      padding: '1rem',
      border: '1px solid #475569',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      cursor: 'pointer',
      minHeight: '60px'
    },
    skillIcon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '40px',
      height: '40px',
      borderRadius: '0.5rem',
      backgroundColor: 'rgba(96, 165, 250, 0.1)',
      flexShrink: 0
    },
    skillContent: {
      flex: 1
    },
    skillName: {
      fontSize: 'clamp(0.9rem, 2.5vw, 1rem)',
      fontWeight: '600',
      color: 'white',
      marginBottom: '0.25rem'
    },
    skillCategory: {
      fontSize: '0.75rem',
      color: '#9ca3af',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1rem',
      flexWrap: 'wrap'
    },
    cardTitle: {
      fontSize: 'clamp(1rem, 3vw, 1.25rem)',
      fontWeight: '600',
      color: 'white'
    },
    badge: {
      fontSize: '0.75rem',
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      color: '#60a5fa',
      padding: '0.25rem 0.5rem',
      borderRadius: '9999px'
    },
    cardDescription: {
      color: '#d1d5db',
      marginBottom: '1rem',
      fontSize: 'clamp(0.8rem, 2.5vw, 0.875rem)'
    },
    techTags: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1rem'
    },
    techTag: {
      fontSize: '0.75rem',
      backgroundColor: 'rgba(168, 85, 247, 0.2)',
      color: '#c4b5fd',
      padding: '0.25rem 0.5rem',
      borderRadius: '0.25rem'
    },
    credentialsSection: {
      backgroundColor: 'rgba(15, 23, 42, 0.5)',
      borderRadius: '0.5rem',
      padding: '0.75rem',
      marginBottom: '1rem',
      border: '1px solid #334155'
    },
    credentialsTitle: {
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#60a5fa',
      marginBottom: '0.75rem',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem'
    },
    credentialItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: '0.5rem',
      padding: '0.5rem',
      backgroundColor: 'rgba(30, 41, 59, 0.3)',
      borderRadius: '0.25rem'
    },
    credentialLabel: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      fontSize: '0.875rem',
      color: '#d1d5db'
    },
    credentialValue: {
      fontFamily: 'monospace',
      fontSize: '0.875rem',
      color: '#e2e8f0'
    },
    copyButton: {
      background: 'none',
      border: 'none',
      color: '#9ca3af',
      cursor: 'pointer',
      padding: '0.25rem',
      borderRadius: '0.25rem',
      transition: 'color 0.3s ease'
    },
    projectLinks: {
      display: 'flex',
      gap: '0.75rem'
    },
    projectLink: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.25rem',
      color: '#9ca3af',
      textDecoration: 'none',
      fontSize: '0.875rem',
      transition: 'color 0.3s ease'
    },
    certCard: {
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))',
      border: '1px solid rgba(59, 130, 246, 0.3)',
      borderRadius: '0.75rem',
      padding: '1rem',
      maxWidth: '90%',
      textAlign: 'center'
    },
    certHeader: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      marginBottom: '0.5rem'
    },
    certTitle: {
      fontSize: 'clamp(1rem, 3vw, 1.125rem)',
      fontWeight: '600'
    },
    contactButtons: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      alignItems: 'center'
    },
    contactButton: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.75rem 1.5rem',
      borderRadius: '0.5rem',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
      fontSize: 'clamp(0.9rem, 3vw, 1rem)',
      width: 'min(70%, 200px)',
      justifyContent: 'center'
    },
    contactButtonPrimary: {
      background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
      color: 'white'
    },
    contactButtonSecondary: {
      border: '1px solid #6b7280',
      color: 'white'
    },
    footer: {
      padding: '2rem 1rem',
      borderTop: '1px solid #475569',
      textAlign: 'center',
      color: '#9ca3af',
      fontSize: 'clamp(0.8rem, 2.5vw, 0.9rem)'
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1rem'
    },
    modalContent: {
      backgroundColor: '#1e293b',
      borderRadius: '0.75rem',
      padding: '1.5rem',
      maxWidth: '90vw',
      maxHeight: '90vh',
      overflow: 'auto',
      position: 'relative',
      border: '1px solid #475569'
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '1rem',
      borderBottom: '1px solid #475569',
      paddingBottom: '1rem'
    },
    modalTitle: {
      fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
      fontWeight: '600',
      color: 'white'
    },
    closeButton: {
      background: 'none',
      border: 'none',
      color: '#9ca3af',
      cursor: 'pointer',
      padding: '0.5rem',
      borderRadius: '0.25rem',
      transition: 'color 0.3s ease',
      fontSize: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    certificateImage: {
      width: '100%',
      height: 'auto',
      borderRadius: '0.5rem',
      border: '1px solid #475569',
      marginBottom: '1rem'
    },
    certificateInfo: {
      color: '#d1d5db',
      fontSize: '1rem',
      lineHeight: '1.6'
    },
    placeholderImage: {
      width: '100%',
      height: '300px',
      backgroundColor: 'rgba(59, 130, 246, 0.1)',
      border: '2px dashed #60a5fa',
      borderRadius: '0.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#60a5fa',
      fontSize: '1.125rem',
      marginBottom: '1rem'
    }
  };

  // Media query styles for mobile
  const mobileStyles = `
    @media (max-width: 768px) {
      .nav-container {
        padding: 0.5rem 1rem;
      }
      .nav-links {
        gap: 0.5rem;
        flex-direction: row;
        flex-wrap: wrap;
        justifyContent: center;
      }
      .nav-link {
        font-size: clamp(0.8rem, 2.5vw, 0.9rem);
        padding: 0.3rem;
      }
      .hero {
        padding: 0 0.5rem;
        min-height: 80vh;
      }
      .section, .section-alt {
        padding: clamp(1.5rem, 4vw, 3rem) 0.5rem;
      }
      .section-title {
        font-size: clamp(1.5rem, 4vw, 2rem);
        margin-bottom: 1.5rem;
      }
      .grid-cols-2, .grid-cols-3, .grid-cols-4, .skills-grid {
        grid-template-columns: 1fr;
      }
      .skills-grid {
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        gap: 0.75rem;
      }
      .skill-tile {
        padding: 0.75rem;
        min-height: 50px;
      }
      .skill-icon {
        width: 32px;
        height: 32px;
      }
      .skill-name {
        font-size: clamp(0.8rem, 2vw, 0.9rem);
      }
      .card {
        padding: 0.75rem;
      }
      .card-title {
        font-size: clamp(0.9rem, 2.5vw, 1rem);
      }
      .card-description {
        font-size: clamp(0.75rem, 2vw, 0.8rem);
      }
      .cert-card {
        max-width: 100%;
        padding: 0.75rem;
      }
      .contact-button {
        width: 90%;
        padding: 0.5rem 1rem;
        font-size: clamp(0.8rem, 2.5vw, 0.9rem);
      }
      .hero-subtitle {
        max-width: 95%;
      }
      .button-primary {
        padding: 0.5rem 1rem;
        font-size: clamp(0.8rem, 2.5vw, 0.9rem);
      }
      .social-links {
        gap: 0.5rem;
      }
      .social-link {
        padding: 0.4rem;
      }
    }
  `;

  return (
    <>
      <style>{mobileStyles}</style>
      <div style={styles.container}>
        <nav style={styles.nav}>
          <div style={styles.navContainer} className="nav-container">
            <div style={styles.navLinks} className="nav-links">
              {['home', 'about', 'experience', 'projects', 'skills', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  style={{
                    ...styles.navLink,
                    color: activeSection === item ? '#60a5fa' : 'white'
                  }}
                  onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                  onMouseLeave={(e) => e.target.style.color = activeSection === item ? '#60a5fa' : 'white'}
                  className="nav-link"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <section id="home" style={styles.hero} className="hero">
          <div>
            <div style={styles.nameLogo}>Naveen</div>
            <div style={styles.heroTitle}>Salesforce Developer</div>
            <p style={styles.heroSubtitle} className="hero-subtitle">
              Building scalable cloud solutions with Salesforce Platform. Passionate about automation, integration, and creating exceptional user experiences.
            </p>
            <div>
              <button
                onClick={() => scrollToSection('projects')}
                style={styles.buttonPrimary}
                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                className="button-primary"
              >
                View My Work
              </button>
             <div style={styles.socialLinks}>
  <button
    style={styles.socialLink}
    className="social-link"
    onClick={() => window.open('https://www.linkedin.com/in/inboxnaveen', '_blank')}
    aria-label="Visit LinkedIn profile"
  >
    <Linkedin size={24} />
  </button>
   <button
    style={styles.socialLink}
    className="social-link"
    onClick={() => window.open('https://github.com/Naveens-tech-projects', '_blank')}
    aria-label="Visit GitHub profile"
  >
    <Github size={24} />
  </button>

  <button
    style={styles.socialLink}
    className="social-link"
    onClick={() => (window.location.href = 'mailto:inboxnaveen.r@gmail.com')}
    aria-label="Send email"
  >
    <Mail size={24} />
  </button>

  {/* Trailhead Button */}
  <div style={{ position: 'relative' }}>
    <button
      style={styles.socialLink}
      className="social-link"
      onClick={() =>
        window.open('https://www.salesforce.com/trailblazer/hzuyecx72f77d86xz6', '_blank')
      }
      aria-label="Trailhead"
      onMouseEnter={(e) => {
        e.currentTarget.nextSibling.style.opacity = 1;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.nextSibling.style.opacity = 0;
      }}
    >
      <Cloud size={24} />
    </button>
    <span
      style={{
        position: 'absolute',
        top: '50%',
        left: '110%',
        transform: 'translateY(-50%)',
        backgroundColor: '#1e293b',
        color: 'white',
        fontSize: '0.75rem',
        padding: '4px 8px',
        borderRadius: '4px',
        opacity: 0,
        transition: 'opacity 0.3s ease'
      }}
    >
      Trailhead
    </span>
  </div>
</div>

            </div>
          </div>
        </section>

        <section id="about" style={styles.section} className="section">
          <div style={styles.container}>
            <h2 style={styles.sectionTitle} className="section-title">About Me</h2>
            <div style={{...styles.grid, ...styles.gridCols2}} className="grid-cols-2">
              <div>
                <p style={{fontSize: 'clamp(1rem, 3vw, 1.125rem)', color: '#d1d5db', marginBottom: '1.5rem'}}>
                  Aspiring Salesforce Developer with a passion for cloud technology and automation. Currently building expertise through hands-on projects and continuous learning.
                </p>
                <p style={{fontSize: 'clamp(1rem, 3vw, 1.125rem)', color: '#d1d5db', marginBottom: '1.5rem'}}>
                  I combine technical skills with business understanding to create solutions that drive real value. My approach focuses on scalable architecture, clean code, and user-centric design.
                </p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                    <MapPin color="#60a5fa" size={20} />
                    <span>Ooty, Tamil Nadu, India</span>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                    <Trophy color="#a855f7" size={20} />
                    <span>Platform Developer I Certified</span>
                  </div>
                  <div style={{display: 'flex', alignItems: 'center', gap: '0.75rem'}}>
                    <Calendar color="#10b981" size={20} />
                    <span>Available for opportunities</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 style={{fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: '600', marginBottom: '1rem'}}>Current Focus</h3>
                <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                  <div style={styles.card} className="card">
                    <h4 style={{fontWeight: '600', color: '#60a5fa', marginBottom: '0.5rem'}}>Building Portfolio Projects</h4>
                    <p style={{color: '#d1d5db', fontSize: 'clamp(0.8rem, 2.5vw, 0.875rem)'}} className="card-description">
                      Creating comprehensive Salesforce applications showcasing integration, automation, and Lightning development.
                    </p>
                  </div>
                  <div style={styles.card} className="card">
                    <h4 style={{fontWeight: '600', color: '#a855f7', marginBottom: '0.5rem'}}>Preparing for Platform Developer II</h4>
                    <p style={{color: '#d1d5db', fontSize: 'clamp(0.8rem, 2.5vw, 0.875rem)'}} className="card-description">
                      Advancing technical skills in advanced Apex, integration patterns, and application architecture.
                    </p>
                  </div>
                  <div style={styles.card} className="card">
                    <h4 style={{fontWeight: '600', color: '#10b981', marginBottom: '0.5rem'}}>Learning Data Structures & Algorithms</h4>
                    <p style={{color: '#d1d5db', fontSize: 'clamp(0.8rem, 2.5vw, 0.875rem)'}} className="card-description">
                      Strengthening computer science fundamentals to excel in technical interviews.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" style={styles.sectionAlt} className="section-alt">
          <div style={styles.container}>
            <h2 style={styles.sectionTitle} className="section-title">Experience</h2>
            <div style={{ ...styles.grid, ...styles.gridCols2 }} className="grid-cols-2">
              <div style={styles.card} className="card">
                <h3 style={styles.cardTitle} className="card-title">Cognizant Technology Solutions</h3>
                <span style={styles.badge}>Internship</span>
                <p style={styles.cardDescription} className="card-description">
                  Completed a 4-month internship, gaining hands-on experience in the Salesforce ecosystem.  
                  Learned Apex, Lightning Web Components (LWC), SOQL, Flows, and integration concepts.
                </p>
                <ul style={{ color: '#d1d5db', fontSize: 'clamp(0.8rem, 2.5vw, 0.875rem)', marginLeft: '1rem' }}>
                  <li>✔ Developed triggers and asynchronous Apex classes.</li>
                  <li>✔ Built Lightning Web Components for dynamic UIs.</li>
                  <li>✔ Implemented automation using Flows and Process Builder.</li>
                </ul>
                <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.5rem' }}>Dec 2025 – Apr 2025</p>
              </div>
              <div style={styles.card} className="card">
                <h3 style={styles.cardTitle} className="card-title">Salesforce Project Deployment</h3>
                <span style={styles.badge}>Full-time Project</span>
                <p style={styles.cardDescription} className="card-description">
                  Worked on a live Salesforce project at Cognizant for 3 months, implementing custom business solutions for a client.
                </p>
                <ul style={{ color: '#d1d5db', fontSize: 'clamp(0.8rem, 2.5vw, 0.875rem)', marginLeft: '1rem' }}>
                  <li>✔ Built custom objects and implemented complex validation rules.</li>
                  <li>✔ Created custom Lightning pages using LWC and Aura Components.</li>
                  <li>✔ Created validation rules and flows to meet the business requirements</li>
                </ul>
                <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.5rem' }}>May 2025 – Jul 2025</p>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" style={styles.sectionAlt} className="section-alt">
          <div style={styles.container}>
            <h2 style={styles.sectionTitle} className="section-title">Featured Projects</h2>
            <div style={{...styles.grid, ...styles.gridCols3}} className="grid-cols-3">
              {projects.map((project, index) => (
                <div
                  key={index}
                  style={styles.card}
                  className="card"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#60a5fa80';
                    e.currentTarget.style.transform = 'scale(1.02)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#475569';
                    e.currentTarget.style.transform = 'scale(1)';
                  }}
                >
                  <div style={styles.cardHeader} className="card-header">
                    <h3 style={styles.cardTitle} className="card-title">{project.title}</h3>
                    <span style={styles.badge}>{project.type}</span>
                  </div>
                  <p style={styles.cardDescription} className="card-description">{project.description}</p>
                  <p style={styles.cardDescription} className="card-description">
                    <mark style={{ backgroundColor: '#a855f7', color: 'white', padding: '2px 4px', borderRadius: '4px' }}>
                      {project.note}
                    </mark>
                  </p>
                  <div style={styles.techTags}>
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} style={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                  <div style={styles.credentialsSection}>
                    <div style={styles.credentialsTitle}>
                      <Lock size={16} />
                      Demo Credentials
                    </div>
                    <div style={styles.credentialItem}>
                      <div style={styles.credentialLabel}>
                        <User size={14} />
                        Username:
                      </div>
                      <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                        <span style={styles.credentialValue}>{project.username}</span>
                        <button
                          onClick={() => copyToClipboard(project.username, `${index}-username`)}
                          style={styles.copyButton}
                          onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                          onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                        >
                          {copiedField === `${index}-username` ? <Check size={14} /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>
                    <div style={styles.credentialItem}>
                      <div style={styles.credentialLabel}>
                        <Lock size={14} />
                        Password:
                      </div>
                      <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem'}}>
                        <span style={styles.credentialValue}>{project.password}</span>
                        <button
                          onClick={() => copyToClipboard(project.password, `${index}-password`)}
                          style={styles.copyButton}
                          onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                          onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                        >
                          {copiedField === `${index}-password` ? <Check size={14} /> : <Copy size={14} />}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div style={styles.projectLinks}>
                    {project.github && (
                      <a href={project.github} style={styles.projectLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                        <Github size={16} />
                        <span>GitHub</span>
                      </a>
                    )}
                    <a href={project.demo} style={styles.projectLink} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" style={styles.section} className="section">
          <div style={styles.container}>
            <h2 style={styles.sectionTitle} className="section-title">Technical Skills</h2>
            <div style={{...styles.grid, ...styles.skillsGrid, marginBottom: '3rem'}} className="skills-grid">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.skillTile,
                    borderColor: getCategoryColor(skill.category) + '40'
                  }}
                  className="skill-tile"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = getCategoryColor(skill.category);
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = `0 4px 12px ${getCategoryColor(skill.category)}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = getCategoryColor(skill.category) + '40';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div style={{
                    ...styles.skillIcon,
                    backgroundColor: getCategoryColor(skill.category) + '20',
                    color: getCategoryColor(skill.category)
                  }}>
                    {skill.icon}
                  </div>
                  <div style={styles.skillContent}>
                    <div style={styles.skillName} className="skill-name">{skill.name}</div>
                    <div style={styles.skillCategory}>{skill.category}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{textAlign: 'center'}}>
              <h3 style={{fontSize: 'clamp(1.25rem, 3vw, 1.5rem)', fontWeight: '600', marginBottom: '2rem'}}>Certifications</h3>
              <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem'}}>
                {certifications.map((cert, index) => (
                   <div 
                    key={index} 
                    style={{
                      ...styles.certCard,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }} 
                    className="cert-card"
                    onClick={() => openCertModal(cert)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.02)';
                      e.currentTarget.style.boxShadow = '0 8px 25px rgba(59, 130, 246, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={styles.certHeader}>
                      <Trophy color="#fbbf24" size={24} />
                      <h4 style={styles.certTitle} className="cert-title">{cert.name}</h4>
                    </div>
                    <p style={{color: '#d1d5db'}}>by {cert.issuer}</p>
                    <p style={{fontSize: '0.875rem', color: '#9ca3af'}}>{cert.date}</p>
                    {cert.verified && (
                      <div style={{marginTop: '0.5rem'}}>
                        <span style={{
                          fontSize: '0.75rem',
                          backgroundColor: 'rgba(16, 185, 129, 0.2)',
                          color: '#10b981',
                          padding: '0.25rem 0.5rem',
                          borderRadius: '9999px'
                        }}>
                          Verified
                        </span>
                      </div>
                    )}
                     <div style={{
                      marginTop: '0.75rem',
                      fontSize: '0.875rem',
                      color: '#60a5fa',
                      textAlign: 'center',
                      fontWeight: '500'
                    }}>
                      👆 Click to view certificate
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" style={styles.sectionAlt} className="section-alt">
          <div style={{...styles.container, textAlign: 'center'}}>
            <h2 style={styles.sectionTitle} className="section-title">Let's Connect</h2>
            <p style={{fontSize: 'clamp(1rem, 3vw, 1.25rem)', color: '#d1d5db', marginBottom: '2rem'}}>
              Open to new opportunities and always excited to discuss Salesforce, technology, and innovation.
            </p>
            <div style={styles.contactButtons} className="contact-buttons">
              <a
                href="mailto:inboxnaveen.r@gmail.com"
                style={{...styles.contactButton, ...styles.contactButtonPrimary}}
                className="contact-button"
              >
                <Mail size={20} />
                <span>Send Email</span>
              </a>
              <a href="https://www.salesforce.com/trailblazer/hzuyecx72f77d86xz6"
                 style={{ ...styles.contactButton, border: "1px solid gray", color: "white" }}>
                <Cloud size={20} /> Trailhead
          </a>
              <a
                href="https://www.linkedin.com/in/inboxnaveen"
                style={{...styles.contactButton, ...styles.contactButtonSecondary}}
                className="contact-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://leetcode.com/u/naveen_program_scripts/"
                style={{...styles.contactButton, ...styles.contactButtonSecondary}}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-button"
              >
                <Code size={20} />
                <span>LeetCode</span>
              </a>
            </div>
          </div>
        </section>

        <footer style={styles.footer} className="footer">
          <p>© 2025 Naveen. Built with React, Please reach out for further details.</p>
        </footer>

        {/* Certificate Modal */}
        {showCertModal && (
          <div 
            style={styles.modal}
            onClick={closeCertModal}
          >
            <div 
              style={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={styles.modalHeader}>
                <h3 style={styles.modalTitle}>{selectedCert?.name}</h3>
                <button
                  style={styles.closeButton}
                  onClick={closeCertModal}
                  onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                  onMouseLeave={(e) => e.target.style.color = '#9ca3af'}
                >
                  ✕
                </button>
              </div>
              
              {selectedCert?.certificateUrl ? (
                <img 
                  src={selectedCert.certificateUrl} 
                  alt={`${selectedCert.name} Certificate`}
                  style={styles.certificateImage}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}
              
              <div 
                style={{
                  ...styles.placeholderImage,
                  display: selectedCert?.certificateUrl ? 'none' : 'flex'
                }}
              >
                📄 Certificate image will be displayed here
              </div>
              
              <div style={styles.certificateInfo}>
                <p><strong>Certification:</strong> {selectedCert?.name}</p>
                <p><strong>Issued by:</strong> {selectedCert?.issuer}</p>
                <p><strong>Date:</strong> {selectedCert?.date}</p>
                {selectedCert?.verified && (
                  <p><strong>Status:</strong> <span style={{color: '#10b981'}}>✓ Verified</span></p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Portfolio;