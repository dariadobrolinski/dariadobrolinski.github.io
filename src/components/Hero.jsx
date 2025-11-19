import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Hello, I'm Daria Dobrolinski.";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section id="home" style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          background: '#1e1e1e',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
          maxWidth: '800px',
          width: '100%',
          border: '1px solid #333'
        }}
      >
        <div style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '20px'
        }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }}></div>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }}></div>
        </div>
        <div style={{
          fontFamily: 'monospace',
          fontSize: '1.5rem',
          minHeight: '60px',
          color: '#fff',
          textAlign: 'left'
        }}>
          <span style={{ color: 'var(--accent-pink)', marginRight: '10px' }}>$</span>
          {text}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            style={{ display: 'inline-block', width: '10px', height: '1.5rem', background: 'var(--accent-pink)', verticalAlign: 'middle', marginLeft: '5px' }}
          />
        </div>
      </motion.div>
      
      <motion.a
        href="/images/daria-dobrolinski.pdf"
        download
        whileHover={{ 
          scale: 1.05,
          boxShadow: "0 0 25px var(--accent-pink)",
          backgroundColor: "var(--accent-pink-dark)",
          color: "#fff"
        }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          boxShadow: ["0 0 0px rgba(255, 182, 193, 0)", "0 0 20px rgba(255, 182, 193, 0.5)", "0 0 0px rgba(255, 182, 193, 0)"]
        }}
        transition={{ 
          opacity: { duration: 0.8, delay: 0.5 },
          y: { duration: 0.8, delay: 0.5 },
          boxShadow: { duration: 2, repeat: Infinity }
        }}
        style={{
          marginTop: '40px',
          display: 'inline-block',
          padding: '15px 40px',
          background: 'transparent',
          border: '2px solid var(--accent-pink)',
          color: 'var(--accent-pink)',
          borderRadius: '30px',
          textDecoration: 'none',
          fontWeight: 'bold',
          fontSize: '1.1rem',
          letterSpacing: '1px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        Download Resume
      </motion.a>
    </section>
  );
};

export default Hero;
