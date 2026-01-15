import { motion } from 'framer-motion';
import aboutImg from '../assets/about.jpg';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-black relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 left-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="section-container relative z-10 px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-none mx-auto"
          >
            {/* Decorative frame */}
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 border border-accent/20 rounded-2xl transform rotate-3 group-hover:rotate-0 transition-transform duration-500" />
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 border border-accent/10 rounded-2xl transform -rotate-3 group-hover:rotate-0 transition-transform duration-500" />
            
            {/* Image container */}
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={aboutImg}
                alt="Daria Dobrolinski"
                className="w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative text-center lg:text-left"
          >
            {/* Section label */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block text-accent text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4"
            >
              About Me
            </motion.span>

            {/* Heading */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
              Passionate about creating
              <span className="text-accent"> impactful</span> digital experiences
            </h2>

            {/* Description */}
            <div className="space-y-3 sm:space-y-4 text-white/70 text-sm sm:text-base md:text-lg leading-relaxed">
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
                with a deep passion for web development, software engineering, and machine learning. This summer, I'll be joining{' '}
                <a 
                  href="https://www.lumen.com/en-us/home.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="link-accent"
                >
                  Lumen Technologies
                </a>{' '}
                as a Software Development Intern, where I'll be developing and deploying software solutions using Python and Java.
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
                where I work on cutting-edge 3D brain reconstruction methods, combining my technical expertise with meaningful scientific research.
              </p>
              <p>
                What drives me most is my love for learning new things.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
