import { motion } from 'framer-motion';
import aboutImg from '../assets/about.jpg';

const About = () => {
  return (
    <section id="about" style={{
      minHeight: '100vh',
      padding: '100px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--bg-color)'
    }}>
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '50px',
        alignItems: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div style={{ position: 'relative' }}>
            <div style={{
              position: 'absolute',
              top: '20px',
              left: '20px',
              width: '100%',
              height: '100%',
              border: '2px solid var(--accent-pink)',
              borderRadius: '10px',
              zIndex: 0
            }}></div>
            <img 
              src={aboutImg} 
              alt="About Daria" 
              style={{
                width: '100%',
                borderRadius: '10px',
                position: 'relative',
                zIndex: 1,
                filter: 'grayscale(20%)',
                transition: 'filter 0.3s'
              }}
              onMouseOver={(e) => e.currentTarget.style.filter = 'grayscale(0%)'}
              onMouseOut={(e) => e.currentTarget.style.filter = 'grayscale(20%)'}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 style={{ 
            fontSize: '3rem', 
            marginBottom: '30px',
            position: 'relative',
            display: 'inline-block'
          }}>
            About <span style={{ color: 'var(--accent-pink)' }}>Me</span>
          </h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc', marginBottom: '20px' }}>
            I am a passionate Computer Science student at <a href="https://www.umb.edu/" target="_blank" rel="noopener noreferrer">UMass Boston</a> with a strong interest in web development, 
            software engineering, and machine learning.
          </p>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#ccc' }}>
            I have also developed research skills through my work at the <a href="https://www1.coe.neu.edu/~rampersad/index.html" target="_blank" rel="noopener noreferrer">BSS lab</a> where I am working on 3D brain reconstruction methods.
          </p>
        </motion.div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          #about > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};

export default About;
