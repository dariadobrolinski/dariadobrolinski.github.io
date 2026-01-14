import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [showNav, setShowNav] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past the hero section (100vh)
      const heroHeight = window.innerHeight;
      setShowNav(window.scrollY > heroHeight * 0.8);
      
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(item.id);
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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Navigation - Top */}
      <AnimatePresence>
        {showNav && (
          <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 z-50 hidden md:flex justify-center py-4 bg-black/80 backdrop-blur-xl border-b border-white/5"
          >
            <div className="flex items-center gap-1 px-2 py-2 rounded-full">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full",
                    activeSection === item.id 
                      ? "text-black" 
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute inset-0 bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Mobile Navigation - Top */}
      <AnimatePresence>
        {showNav && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={cn(
              "fixed top-0 left-0 right-0 z-50 md:hidden flex justify-center py-4 transition-all duration-300",
              "bg-black/80 backdrop-blur-xl border-b border-white/5"
            )}
          >
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300",
                isMobileMenuOpen
                  ? "bg-accent text-black"
                  : "bg-white/10 text-white"
              )}
            >
              <span className="font-medium">Menu</span>
              <motion.svg
                animate={{ rotate: isMobileMenuOpen ? 45 : 0 }}
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </motion.svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden flex items-center justify-center pt-20"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="flex flex-col items-center gap-6"
            >
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "text-2xl font-medium transition-colors duration-200",
                    activeSection === item.id 
                      ? "text-accent" 
                      : "text-white/70 hover:text-white"
                  )}
                >
                  {item.label}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
