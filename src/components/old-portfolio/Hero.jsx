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
          <div className="text-center">
            <h1 style={{
              fontSize: 'clamp(2.5rem, 8vw, 5rem)',
              fontWeight: '800',
              color: 'white',
              marginBottom: '0.5rem',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              background: 'linear-gradient(135deg, #ffffff 0%, var(--accent-pink) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 40px rgba(255, 182, 193, 0.3)',
            }}>
              DARIA DOBROLINSKI
            </h1>
            <p style={{
              fontSize: 'clamp(1.2rem, 3vw, 2rem)',
              fontWeight: '300',
              color: 'rgba(255, 255, 255, 0.9)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginTop: '1rem',
            }}>
              Full Stack Developer
            </p>
          </div>

          <motion.a
            href="/images/daria_dobrolinski.pdf"
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


