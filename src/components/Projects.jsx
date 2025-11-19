import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import elaraImg from '../assets/elaraAI.png';
import myndavalsImg from '../assets/myndavals.png';
import embraceImg from '../assets/embraceEveryYou.png';
import plantImg from '../assets/plant.png';

const Projects = () => {
  const projects = [
    {
      title: "Elara AI",
      description: "Collaborated and built a Python FastAPI backend for Elara AI, a chatbot that suggests natural remedies for medical concerns. Built using MongoDB, Vertex AI (Gemini), and deployed on Google Cloud.",
      image: elaraImg,
      link: "https://elarafrontend-114195159699.us-east1.run.app/",
      github: "https://github.com/dariadobrolinski/elaraBackend",
      tags: ["Python", "FastAPI", "MongoDB", "Vertex AI"]
    },
    {
      title: "ASL Recognition with TTS",
      description: "Built a real-time ASL recognition system using Python, MediaPipe, Random Forest classifier, and OpenCV featuring custom dataset collection and text-to-speech integration for accessible ASL-to-audio translation.",
      iframe: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7317400353879048192?compact=1",
      github: "https://github.com/dariadobrolinski/ASLrecognition",
      tags: ["Python", "MediaPipe", "OpenCV", "ML"]
    },
    {
      title: "Myndavals",
      description: "A web application that allows users to share images and have friends select their favorite ones. Created using HTML and CSS for frontend and Python for backend.",
      image: myndavalsImg,
      link: "https://sharefavorites-billowing-darkness-1530.fly.dev/",
      github: "https://github.com/dariadobrolinski/myndavalsShare",
      tags: ["HTML/CSS", "Python", "Web App"]
    },
    {
      title: "Embrace Every You",
      description: "A website to raise awareness and provide information about anorexia nervosa, including symptoms, treatment, and resources. Created using HTML, CSS, and JavaScript.",
      image: embraceImg,
      link: "http://dariadobrolinski.me/embraceEveryYou/",
      github: "https://github.com/dariadobrolinski/embraceEveryYou",
      tags: ["HTML", "CSS", "JavaScript"]
    },
    {
      title: "Automatic Irrigation System",
      description: "Developed an Arduino-based irrigation system using soil moisture sensors and water pumps, reducing manual watering efforts by over 50%. Engineered and 3D-printed a protective enclosure in Fusion 360.",
      image: plantImg,
      slideshow: "images/automatic-irigation-system.pdf", // Note: this might need to be moved to public if it's a PDF link or imported if possible, but PDF is better in public
      tags: ["Arduino", "C++", "Fusion 360", "Hardware"]
    }
  ];

  return (
    <section id="projects" style={{
      padding: '100px 20px',
      background: '#222'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '60px' }}
        >
          My <span style={{ color: 'var(--accent-pink)' }}>Projects</span>
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '100px' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                display: 'grid',
                gridTemplateColumns: index % 2 === 0 ? '1.2fr 0.8fr' : '0.8fr 1.2fr',
                gap: '50px',
                alignItems: 'center',
                direction: index % 2 === 1 ? 'rtl' : 'ltr'
              }}
              className="project-card"
            >
              <div style={{ direction: 'ltr' }}> {/* Image/Media Side */}
                {project.iframe ? (
                   <iframe src={project.iframe} height="325" width="100%" frameBorder="0" allowFullScreen="" title="Embedded post" style={{borderRadius: '10px', border: 'none'}}></iframe>
                ) : (
                  <div style={{
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: '15px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                  }}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      style={{ 
                        width: '100%', 
                        height: '100%', 
                        aspectRatio: '16/9',
                        objectFit: 'cover',
                        display: 'block', 
                        transition: 'transform 0.5s' 
                      }}
                      className="project-img"
                    />
                    <div className="overlay" style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      background: 'rgba(255, 107, 107, 0.2)',
                      opacity: 0,
                      transition: 'opacity 0.3s'
                    }}></div>
                  </div>
                )}
              </div>

              <div style={{ direction: 'ltr', textAlign: index % 2 === 1 ? 'right' : 'left' }}> {/* Content Side */}
                <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--text-color)' }}>{project.title}</h3>
                <div style={{
                  background: '#2a2a2a',
                  padding: '25px',
                  borderRadius: '10px',
                  marginBottom: '20px',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
                  position: 'relative',
                  zIndex: 2
                }}>
                  <p style={{ color: '#ccc', lineHeight: '1.6' }}>{project.description}</p>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  gap: '15px', 
                  marginBottom: '25px', 
                  justifyContent: index % 2 === 1 ? 'flex-end' : 'flex-start',
                  flexWrap: 'wrap'
                }}>
                  {project.tags.map((tag, i) => (
                    <span key={i} style={{ 
                      color: 'var(--accent-pink)', 
                      fontFamily: 'monospace',
                      fontSize: '0.9rem'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ 
                  display: 'flex', 
                  gap: '20px',
                  justifyContent: index % 2 === 1 ? 'flex-end' : 'flex-start'
                }}>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem' }}>
                      <FaGithub />
                    </a>
                  )}
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.5rem' }}>
                      <FaExternalLinkAlt />
                    </a>
                  )}
                  {project.slideshow && (
                    <a href={project.slideshow} target="_blank" rel="noopener noreferrer" className="btn">
                      Slideshow
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .project-card:hover .project-img {
          transform: scale(1.05);
        }
        .project-card:hover .overlay {
          opacity: 1;
        }
        @media (max-width: 968px) {
          .project-card {
            grid-template-columns: 1fr !important;
            direction: ltr !important;
            gap: 30px !important;
          }
          .project-card > div {
            text-align: left !important;
            justify-content: flex-start !important;
          }
          .project-card div[style*="justify-content"] {
            justify-content: flex-start !important;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
