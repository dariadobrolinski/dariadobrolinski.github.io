import { motion } from 'framer-motion';
import { FaCode, FaDesktop, FaDatabase, FaCloud } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      icon: <FaCode />,
      skills: ["Python", "C", "Java", "JavaScript", "TypeScript", "MATLAB"]
    },
    {
      title: "Frontend",
      icon: <FaDesktop />,
      skills: ["React", "HTML/CSS", "Figma"]
    },
    {
      title: "Backend & Databases",
      icon: <FaDatabase />,
      skills: ["FastAPI", "MongoDB", "SQLAlchemy", "Supabase"]
    },
    {
      title: "Tools & Cloud",
      icon: <FaCloud />,
      skills: ["Git", "Docker", "VS Code", "Google Cloud (Vertex AI, Cloud Run, Cloud Storage)"]
    }
  ];

  return (
    <section id="skills" style={{
      padding: '100px 20px',
      background: '#222'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '60px', color: 'var(--accent-pink-dark)' }}
        >
          Skills
        </motion.h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px'
        }}>
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{
                background: 'var(--bg-color)',
                padding: '25px',
                borderRadius: '15px',
                textAlign: 'center',
                border: '1px solid #333',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                color: 'var(--accent-pink)',
                marginBottom: '15px'
              }}>
                {category.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>{category.title}</h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '8px'
              }}>
                {category.skills.map((skill, i) => (
                  <li key={i} style={{
                    background: '#333',
                    padding: '6px 12px',
                    borderRadius: '15px',
                    fontSize: '0.8rem',
                    color: '#eee'
                  }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <style>{`
          @media (max-width: 1024px) {
            #skills > div > div {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
          @media (max-width: 600px) {
            #skills > div > div {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Skills;
