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

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <>
      <nav className="navbar-container">
        {navItems.map((item) => (
          <div 
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
            className="nav-item-container"
          >
            <div className="nav-label" style={{
              opacity: hoveredItem === item.id ? 1 : 0,
              transform: hoveredItem === item.id ? 'translateX(0)' : 'translateX(10px)',
            }}>
              {item.label}
            </div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className="nav-icon"
              style={{
                background: activeSection === item.id ? 'var(--accent-pink)' : 'rgba(255, 255, 255, 0.1)',
              }}
            >
              {item.icon}
            </motion.div>
          </div>
        ))}
      </nav>
      <style>{`
        .navbar-container {
          position: fixed;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 1000;
          display: flex;
          flex-direction: column;
          gap: 15px;
        }

        .nav-item-container {
          position: relative;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: flex-end;
        }

        .nav-label {
          position: absolute;
          right: 50px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 5px 12px;
          border-radius: 5px;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          white-space: nowrap;
          pointer-events: none;
        }

        .nav-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: background 0.3s;
        }

        @media (max-width: 768px) {
          .navbar-container {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
