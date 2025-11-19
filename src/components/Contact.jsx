import { motion } from 'framer-motion';
import { FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <footer id="contact" style={{
      padding: '80px 20px',
      background: '#1a1a1a',
      borderTop: '1px solid #333'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '2.5rem', marginBottom: '50px' }}
        >
          Let's <span style={{ color: 'var(--accent-pink)' }}>Connect</span>
        </motion.h2>

        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          gap: '40px',
          marginBottom: '60px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.2rem' }}>
            <FaEnvelope style={{ color: 'var(--accent-pink)' }} />
            <a href="mailto:dsdobrolinski@gmail.com" style={{ color: '#ccc', textDecoration: 'none' }}>
              dsdobrolinski@gmail.com
            </a>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.2rem' }}>
            <FaMapMarkerAlt style={{ color: 'var(--accent-pink)' }} />
            <span style={{ color: '#ccc' }}>Boston, MA</span>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
          <a 
            href="https://www.linkedin.com/in/daria-dobrolinski/" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 25px',
              background: '#0077b5',
              color: 'white',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            <FaLinkedin size={20} />
            LinkedIn
          </a>
          <a 
            href="https://github.com/dariadobrolinski" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 25px',
              background: '#333',
              color: 'white',
              borderRadius: '30px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            <FaGithub size={20} />
            GitHub
          </a>
        </div>
        
        <p style={{ marginTop: '60px', color: '#666', fontSize: '0.9rem' }}>
          &copy; {new Date().getFullYear()} Daria Dobrolinski. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
