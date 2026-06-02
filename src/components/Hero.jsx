import { motion } from 'framer-motion';
import DancingLetters from './dancing-letters';
import { InteractiveGridBackground } from './interactive-grid-background';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Interactive Grid Background */}
      <InteractiveGridBackground 
        className="absolute inset-0"
        gridGap={50}
        dotSize={1}
        color="#333333"
        highlightColor="#FFB6C1"
        radius={200}
      >
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6">
          {/* Main content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center pointer-events-auto w-full max-w-4xl"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-accent text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 tracking-widest uppercase"
            >
              Hello, I'm
            </motion.p>

            {/* Name with Dancing Letters */}
            <div className="mb-4 sm:mb-6">
              <DancingLetters 
                text="DARIA" 
                className="mb-1 sm:mb-2"
                letterClassName="text-white"
              />
              <DancingLetters 
                text="DOBROLINSKI" 
                letterClassName="text-accent"
              />
            </div>

            {/* Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mb-8 sm:mb-10"
            >
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 font-light tracking-wide">
                Full Stack Developer
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col items-center justify-center gap-3 sm:gap-4"
            >
              <motion.a
                href="/images/daria-dobrolinski.pdf"
                download
                className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 overflow-hidden rounded-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Animated border */}
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-accent-dark to-accent p-[2px]">
                  <span className="absolute inset-0 rounded-full bg-black" />
                </span>
                
                <span className="relative flex items-center gap-2 text-accent text-sm sm:text-base font-medium">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Resume
                </span>
              </motion.a>

              <motion.button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm sm:text-base"
                whileHover={{ y: 2 }}
              >
                View Work
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>

        </div>
      </InteractiveGridBackground>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
