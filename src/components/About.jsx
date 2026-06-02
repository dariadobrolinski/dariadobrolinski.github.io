import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-black relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="section-container relative z-10 px-4 sm:px-6">
        <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-accent text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight"
          >
            About Me
          </motion.h2>

          <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 w-full">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative group w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md mx-auto lg:mx-0"
            >
              {/* Decorative frame */}
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 border border-accent/20 rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500" />
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 border border-accent/10 rounded-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500" />
              
              {/* Image container */}
              <div className="relative overflow-hidden rounded-2xl">
                <img
                  src="/images/me.jpg"
                  alt="Daria Dobrolinski"
                  className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl space-y-3 sm:space-y-4 text-white/70 text-sm sm:text-base md:text-lg leading-relaxed"
            >
              <p>
                I'm a Computer Science student at{' '}
                <a 
                  href="https://www.umb.edu/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  UMass Boston
                </a>{' '}
                with a deep passion for coding. I’m well‑rounded across web design, backend systems, and software development, and I love trying new things. This summer, I am working at {' '}
                <a 
                  href="https://www.lumen.com/en-us/home.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  Lumen Technologies
                </a>{' '}
                as a Software Development Intern, where I'll be developing and deploying software solutions using Go, Java and Python.
              </p>
              <p>
                Currently, I'm honing my research skills at the{' '}
                <a 
                  href="https://www1.coe.neu.edu/~rampersad/index.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  BSS Lab
                </a>{' '}
                where I work on developing a computational pipeline to reconstruct and manipulate cortical brain surfaces using Spherical Harmonic analysis, investigating how variations in gyral morphology influence neural stimulation outcomes. I’m also a{' '}
                <a
                  href="https://hluce.org/programs/clare-boothe-luce/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  Clare Boothe Luce Fellow
                </a>
                .
              </p>
              <p>
                On a personal level, I enjoy running, swimming and learning about new things whenever I can!
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
