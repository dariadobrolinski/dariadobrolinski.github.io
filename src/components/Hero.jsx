import { motion } from 'framer-motion';
import { AuroraBackground } from './ui/aurora-background';

const Hero = () => {
  return (
    <section id="home">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center text-white">
            Hi, I'm Daria Dobrolinski
          </div>

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
              marginTop: '20px',
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
        </motion.div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#282828] to-transparent pointer-events-none" />
      </AuroraBackground>
    </section>
  );
};

export default Hero;


