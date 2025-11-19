import { motion } from 'framer-motion';
import { FaCode, FaMicrochip, FaTools } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <FaCode />,
      skills: ["Python", "JavaScript", "Java", "C", "HTML/CSS", "MATLAB"]
    },
    {
      title: "Hardware",
      icon: <FaMicrochip />,
      skills: ["Arduino", "3D Printing", "Fusion 360"]
    },
    {
      title: "Tools",
      icon: <FaTools />,
      skills: ["Git", "MongoDB", "FastAPI", "Flask"]
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '30px'
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
                padding: '40px',
                borderRadius: '15px',
                textAlign: 'center',
                border: '1px solid #333',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
              }}
            >
              <div style={{
                fontSize: '3rem',
                color: 'var(--accent-pink)',
                marginBottom: '20px'
              }}>
                {category.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '25px' }}>{category.title}</h3>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '10px'
              }}>
                {category.skills.map((skill, i) => (
                  <li key={i} style={{
                    background: '#333',
                    padding: '8px 15px',
                    borderRadius: '20px',
                    fontSize: '0.9rem',
                    color: '#eee'
                  }}>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
