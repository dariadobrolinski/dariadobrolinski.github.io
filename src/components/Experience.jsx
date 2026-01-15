import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Software Development Intern",
    company: "Lumen Technologies",
    date: "May 2026 - August 2026",
    details: [
      "Will develop and deploy software solutions and data-driven reports using Python/Java, supporting business and platform decision-making.",
      "Will collaborate with cross-functional teams to translate requirements into scalable applications while adapting to cloud, AI, and reporting technologies."
    ],
    current: false,
    upcoming: true
  },
  {
    title: "Research Assistant",
    company: "University of Massachusetts Boston",
    date: "January 2025 - Present",
    details: [
      "Refactoring a MATLAB codebase by modularizing functions and adding clear docs/tests, making the cortical-mesh pipeline easier to read, run, and extend.",
      "Utilize MATLAB and mesh processing tools to create precise surface and volume models for improved geometric detail in MRI-based reconstructions.",
      "Implement advanced algorithms to adjust sulci and gyri widths, aiming to reduce data loss and support more accurate biomedical research."
    ],
    current: true
  },
  {
    title: "Undergraduate Student",
    company: "University of Massachusetts Boston",
    date: "January 2024 - May 2027",
    details: [
      "On track to receive a Bachelor of Science in Computer Science.",
      "Completed courses including Data Structures, Algorithms, Calculus 1 & 2, Physics 1 & 2, Discrete Math, and Introduction to Electrical & Computer Engineering."
    ],
    current: true
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 left-1/4 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="inline-block text-accent text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
            Journey
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Experience & <span className="text-accent">Education</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-accent/50 to-transparent md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10 md:mb-12 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 sm:w-4 sm:h-4 bg-accent rounded-full md:-translate-x-1/2 shadow-lg shadow-accent/50">
                  {(exp.current || exp.upcoming) && (
                    <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-50" />
                  )}
                </div>

                {/* Content */}
                <div className={`ml-6 sm:ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'}`}>
                  <div className="glass-card p-4 sm:p-5 md:p-6 hover-lift">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-0 mb-3 sm:mb-4">
                      <div>
                        <h3 className="text-base sm:text-lg md:text-xl font-semibold text-white">{exp.title}</h3>
                        <p className="text-accent text-sm sm:text-base font-medium">{exp.company}</p>
                      </div>
                      {exp.current && (
                        <span className="self-start px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-accent/10 text-accent rounded-full border border-accent/20 whitespace-nowrap">
                          Current
                        </span>
                      )}
                      {exp.upcoming && (
                        <span className="self-start px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs bg-accent/20 text-accent rounded-full border border-accent/30 whitespace-nowrap">
                          Upcoming
                        </span>
                      )}
                    </div>
                    
                    <p className="text-white/50 text-xs sm:text-sm mb-3 sm:mb-4">{exp.date}</p>
                    
                    <ul className="space-y-2 sm:space-y-3">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="flex gap-2 sm:gap-3 text-white/70 text-xs sm:text-sm">
                          <span className="text-accent mt-1 sm:mt-1.5 flex-shrink-0">
                            <svg className="w-2 h-2 sm:w-3 sm:h-3" fill="currentColor" viewBox="0 0 8 8">
                              <circle cx="4" cy="4" r="3" />
                            </svg>
                          </span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
