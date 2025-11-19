import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaLaptopCode, FaBriefcase, FaDumbbell, FaAward, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // activeSection will be updated by the scroll listener
    }
  };

  const navItems = [
    { id: 'home', icon: <FaHome />, label: 'Home' },
    { id: 'about', icon: <FaUser />, label: 'About' },
    { id: 'projects', icon: <FaLaptopCode />, label: 'Projects' },
    { id: 'experience', icon: <FaBriefcase />, label: 'Experience' },
    { id: 'skills', icon: <FaDumbbell />, label: 'Skills' },
    { id: 'awards', icon: <FaAward />, label: 'Awards' },
    { id: 'contact', icon: <FaEnvelope />, label: 'Contact' },
  ];

  return (
    <nav style={{
      position: 'fixed',
      right: '20px',
      top: '50%',
      transform: 'translateY(-50%)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      gap: '15px'
    }}>
      {navItems.map((item) => (
        <div 
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          style={{
            position: 'relative',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end'
          }}
          className="nav-item"
        >
          <span className="label" style={{
            position: 'absolute',
            right: '40px',
            background: 'var(--accent-pink)',
            color: 'white',
            padding: '5px 10px',
            borderRadius: '5px',
            fontSize: '0.8rem',
            opacity: 0,
            pointerEvents: 'none',
            transition: 'opacity 0.3s',
            whiteSpace: 'nowrap'
          }}>
            {item.label}
          </span>
          <motion.div
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: activeSection === item.id ? 'var(--accent-pink)' : 'rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
              transition: 'background 0.3s'
            }}
          >
            {item.icon}
          </motion.div>
        </div>
      ))}
      <style>{`
        .nav-item:hover .label {
          opacity: 1;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
