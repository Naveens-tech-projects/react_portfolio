import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Cloud, Trophy, Calendar, MapPin } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Travel Management System",
      description: "End-to-end Salesforce application with custom objects, async Apex, and external API integration for flight details. Built during hackathon with complete automation workflows.",
      tech: ["Salesforce", "Apex", "Lightning Web Components", "REST API", "Async Processing"],
      github: "#",
      demo: "#",
      type: "Salesforce Development"
    },
    {
      title: "Integration Hub (In Progress)",
      description: "Multi-system integration platform using Platform Events, Batch Apex, and REST APIs. Showcases enterprise-level data synchronization patterns.",
      tech: ["Platform Events", "Batch Apex", "REST API", "JSON Parsing", "Error Handling"],
      github: "#",
      demo: "#",
      type: "Integration & APIs"
    },
    {
      title: "Data Structures & Algorithms",
      description: "Comprehensive DSA course completion with hands-on problem solving. Strengthening algorithmic thinking and optimization skills.",
      tech: ["Python", "Algorithms", "Data Structures", "Problem Solving"],
      github: "#",
      demo: "#",
      type: "Computer Science"
    }
  ];

  const skills = [
    { category: "Salesforce", items: ["Apex", "Lightning Web Components", "SOQL", "Triggers", "Flows", "Platform Events"] },
    { category: "Development", items: ["JavaScript", "HTML/CSS", "React", "REST APIs", "JSON"] },
    { category: "Database", items: ["SOQL", "Data Modeling", "Relationships", "Security"] },
    { category: "Tools", items: ["VS Code", "Git", "GitHub", "Workbench", "Developer Console"] }
  ];

  const certifications = [
    {
      name: "Platform Developer I",
      issuer: "Salesforce",
      date: "2024",
      verified: true
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    nav: {
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 50,
      transition: 'all 0.3s ease',
      backgroundColor:'rgba(15, 23, 42, 0.95)',
      backdropFilter: isScrolled ? 'blur(8px)' : 'none',
      boxShadow: isScrolled ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none'
    },

    nameLogo: { // New style for your name
  fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
      fontWeight: 'bold',
      background: 'linear-gradient(90deg, rgb(255, 255, 255), rgb(14, 52, 98), rgb(58, 13, 238))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
},
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1rem 1.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    // Removed the 'logo' style block
    navLinks: {
      display: 'flex',
      gap: '2rem'
    },
    navLink: {
      background: 'none',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      textTransform: 'capitalize',
      transition: 'color 0.3s ease',
      fontSize: '1rem'
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 1.5rem',
      textAlign: 'center'
    },
    avatar: {
      width: '8rem',
      height: '8rem',
      margin: '0 auto 1.5rem',
      background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '2.5rem',
      marginTop: '5rem',
      fontWeight: 'bold'
    },
    heroTitle: {
      fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
      fontWeight: 'bold',
      marginBottom: '0.2rem',
      background: 'linear-gradient(90deg, rgb(255, 255, 255), rgb(14, 52, 98), rgb(58, 13, 238))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    heroSubtitle: {
      fontSize: 'clamp(1.125rem, 4vw, 1.5rem)',
      color: '#d1d5db',
      marginBottom: '2rem',
      maxWidth: '48rem',
      margin: '0 auto 2rem'
    },
    buttonPrimary: {
      padding: '0.75rem 2rem',
      background: 'linear-gradient(135deg,rgb(133, 157, 209), #7c3aed)',
      border: 'none',
      borderRadius: '0.5rem',
      color: 'white',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontSize: '1rem'
    },
    socialLinks: {
      display: 'flex',
      gap: '1rem',
      marginTop: '1rem'
    },
    socialLink: {
      padding: '0.75rem',
      backgroundColor: '#1e293b',
      borderRadius: '0.5rem',
      color: 'white',
      textDecoration: 'none',
      transition: 'background-color 0.3s ease'
    },
    section: {
      padding: '5rem 1.5rem'
    },
    sectionAlt: {
      padding: '5rem 1.5rem',
      backgroundColor: 'rgba(30, 41, 59, 0.3)'
    },
    // The duplicate 'container' style block was removed. Keeping the first one.
    sectionTitle: {
      fontSize: '2.5rem',
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: '4rem',
      background: 'linear-gradient(90deg, #60a5fa, #a855f7)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    grid: {
      display: 'grid',
      gap: '2rem'
    },
    gridCols2: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    },
    gridCols3: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
    },
    gridCols4: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'
    },
    card: {
      backgroundColor: 'rgba(30, 41, 59, 0.5)',
      borderRadius: '0.75rem',
      padding: '1.5rem',
      border: '1px solid #475569',
      transition: 'all 0.3s ease'
    },
    cardHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: '1rem'
    },
    cardTitle: {
      fontSize: '1.25rem',
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
      fontSize: '0.875rem'
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
    skillCategory: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      marginBottom: '1rem'
    },
    skillTitle: {
      fontSize: '1.125rem',
      fontWeight: '600'
    },
    skillItems: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    skillItem: {
      color: '#d1d5db',
      fontSize: '0.875rem'
    },
    certCard: {
      background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(168, 85, 247, 0.2))',
      border: '1px solid rgba(59, 130, 246, 0.3)',
      borderRadius: '0.75rem',
      padding: '1.5rem',
      maxWidth: '24rem',
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
      fontSize: '1.125rem',
      fontWeight: '600'
    },
    contactButtons: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
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
      fontSize: '1rem'
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
      padding: '2rem 1.5rem',
      borderTop: '1px solid #475569',
      textAlign: 'center',
      color: '#9ca3af'
    }
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          {/* Removed the logo div here */}
          <div style={styles.navLinks}>
            {['home', 'about', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                style={{
                  ...styles.navLink,
                  color: activeSection === item ? '#60a5fa' : 'white'
                }}
                onMouseEnter={(e) => e.target.style.color = '#60a5fa'}
                onMouseLeave={(e) => e.target.style.color = activeSection === item ? '#60a5fa' : 'white'}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div>
          <div style={styles.nameLogo}>Naveen</div>
          <div style={styles.heroTitle}>Salesforce Developer</div>
          
          <p style={styles.heroSubtitle}>
            Building scalable cloud solutions with Salesforce Platform. Passionate about automation, integration, and creating exceptional user experiences.
          </p>
          <div>
            <button
              onClick={() => scrollToSection('projects')}
              style={styles.buttonPrimary}
              onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            >
              View My Work
            </button>
            <div style={styles.socialLinks}>
              <a href="#" style={styles.socialLink}>
                <Github size={24} />
              </a>
              <a href="#" style={styles.socialLink}>
                <Linkedin size={24} />
              </a>
              <a href="#" style={styles.socialLink}>
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          <div style={{...styles.grid, ...styles.gridCols2, alignItems: 'center'}}>
            <div>
              <p style={{fontSize: '1.125rem', color: '#d1d5db', marginBottom: '1.5rem'}}>
                Aspiring Salesforce Developer with a passion for cloud technology and automation. Currently building expertise through hands-on projects and continuous learning.
              </p>
              <p style={{fontSize: '1.125rem', color: '#d1d5db', marginBottom: '1.5rem'}}>
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
              <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem'}}>Current Focus</h3>
              <div style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <div style={styles.card}>
                  <h4 style={{fontWeight: '600', color: '#60a5fa', marginBottom: '0.5rem'}}>Building Portfolio Projects</h4>
                  <p style={{color: '#d1d5db', fontSize: '0.875rem'}}>Creating comprehensive Salesforce applications showcasing integration, automation, and Lightning development.</p>
                </div>
                <div style={styles.card}>
                  <h4 style={{fontWeight: '600', color: '#a855f7', marginBottom: '0.5rem'}}>Preparing for Platform Developer II</h4>
                  <p style={{color: '#d1d5db', fontSize: '0.875rem'}}>Advancing technical skills in advanced Apex, integration patterns, and application architecture.</p>
                </div>
                <div style={styles.card}>
                  <h4 style={{fontWeight: '600', color: '#10b981', marginBottom: '0.5rem'}}>Learning Data Structures & Algorithms</h4>
                  <p style={{color: '#d1d5db', fontSize: '0.875rem'}}>Strengthening computer science fundamentals to excel in technical interviews.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.sectionAlt}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Featured Projects</h2>
          <div style={{...styles.grid, ...styles.gridCols3}}>
            {projects.map((project, index) => (
              <div
                key={index}
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#60a5fa80';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#475569';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                <div style={styles.cardHeader}>
                  <h3 style={styles.cardTitle}>{project.title}</h3>
                  <span style={styles.badge}>{project.type}</span>
                </div>
                <p style={styles.cardDescription}>{project.description}</p>
                <div style={styles.techTags}>
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} style={styles.techTag}>{tech}</span>
                  ))}
                </div>
                <div style={styles.projectLinks}>
                  
                  <a href={project.demo} style={styles.projectLink}>
                    <ExternalLink size={16} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.section}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Technical Skills</h2>
          <div style={{...styles.grid, ...styles.gridCols4, marginBottom: '3rem'}}>
            {skills.map((skillGroup, index) => (
              <div key={index} style={styles.card}>
                <div style={styles.skillCategory}>
                  {skillGroup.category === 'Salesforce' && <Cloud color="#60a5fa" size={24} />}
                  {skillGroup.category === 'Development' && <Code color="#10b981" size={24} />}
                  {skillGroup.category === 'Database' && <Database color="#a855f7" size={24} />}
                  {skillGroup.category === 'Tools' && <ExternalLink color="#f97316" size={24} />}
                  <h3 style={styles.skillTitle}>{skillGroup.category}</h3>
                </div>
                <div style={styles.skillItems}>
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} style={styles.skillItem}>{skill}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Certifications */}
          <div style={{textAlign: 'center'}}>
            <h3 style={{fontSize: '1.5rem', fontWeight: '600', marginBottom: '2rem'}}>Certifications</h3>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              {certifications.map((cert, index) => (
                <div key={index} style={styles.certCard}>
                  <div style={styles.certHeader}>
                    <Trophy color="#fbbf24" size={24} />
                    <h4 style={styles.certTitle}>{cert.name}</h4>
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.sectionAlt}>
        <div style={{...styles.container, textAlign: 'center'}}>
          <h2 style={styles.sectionTitle}>Let's Connect</h2>
          <p style={{fontSize: '1.25rem', color: '#d1d5db', marginBottom: '3rem'}}>
            Open to new opportunities and always excited to discuss Salesforce, technology, and innovation.
          </p>
          <div style={styles.contactButtons}>
            <a
              href="mailto:inboxnaveen.r@gmail.com"
              style={{...styles.contactButton, ...styles.contactButtonPrimary}}
            >
              <Mail size={20} />
              <span>Send Email</span>
            </a>
            <a
  href="https://www.linkedin.com/in/inboxnaveen" // Added https://
  style={{...styles.contactButton, ...styles.contactButtonSecondary}}
>
  <Linkedin size={20} />
  <span>LinkedIn</span>
</a>
         <a
  href="https://leetcode.com/u/naveen_program_scripts/" // Use this URL
  style={{...styles.contactButton, ...styles.contactButtonSecondary}}
  target="_blank"
  rel="noopener noreferrer"
>
  <Code size={20} />
  <span>LeetCode</span>
</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; 2024 Your Name. Built with React and passion for cloud technology.</p>
      </footer>
    </div>
  );
};

export default Portfolio;