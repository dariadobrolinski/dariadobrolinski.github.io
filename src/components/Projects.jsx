import { motion } from 'framer-motion';
import { Spotlight } from './Spotlight';

const projects = [
  {
    title: "Elara AI",
    description: "Collaborated on building a Python FastAPI backend for Elara AI, an intelligent chatbot that suggests natural remedies for medical concerns. Built using MongoDB, Vertex AI (Gemini), and deployed on Google Cloud.",
    tags: ["Python", "FastAPI", "MongoDB", "Vertex AI", "Google Cloud"],
    github: "https://github.com/dariadobrolinski/elaraBackend",
    live: "https://elarafrontend-114195159699.us-east1.run.app/",
    collaborator: { name: "Edward Gaibor", url: "https://edwardgaibor.me/" },
    achievement: "3rd place in the GC × MongoDB hackathon out of 7k participants",
    featured: true
  },
  {
    title: "Brutal Notes",
    description: "Built the backend for an offline-first note app using FastAPI, SQLAlchemy, and Supabase Auth with AI proofreading, summarization, and audio-to-notes features. Submitted to Google Chrome Built in AI Hackathon of 14k+ participants.",
    tags: ["Python", "FastAPI", "SQLAlchemy", "Supabase", "AI"],
    github: "https://github.com/dariadobrolinski/brutalNotesBackend",
    live: "https://brutalnote.com/#",
    collaborator: { name: "Edward Gaibor", url: "https://edwardgaibor.me/" }
  },
  {
    title: "ASL Recognition with TTS",
    description: "Built a real-time ASL recognition system using Python, MediaPipe, Random Forest classifier, and OpenCV featuring custom dataset collection and text-to-speech integration for accessible ASL-to-audio translation.",
    tags: ["Python", "MediaPipe", "OpenCV", "Machine Learning", "TTS"],
    github: "https://github.com/dariadobrolinski/ASLrecognition"
  },
  {
    title: "Myndavals",
    description: "A web application that allows users to share images and have friends select their favorite ones. A fun, social way to get opinions on your photos.",
    tags: ["HTML/CSS", "Python", "Flask", "Web App"],
    github: "https://github.com/dariadobrolinski/myndavalsShare",
    live: "https://sharefavorites-billowing-darkness-1530.fly.dev/",
    collaborator: { name: "Edward Gaibor", url: "https://edwardgaibor.me/" }
  },
  {
    title: "Embrace Every You",
    description: "A website dedicated to raising awareness and providing information about anorexia nervosa, including symptoms, treatment options, and support resources.",
    tags: ["HTML", "CSS", "JavaScript", "Awareness"],
    github: "https://github.com/dariadobrolinski/embraceEveryYou",
    live: "http://dariadobrolinski.me/embraceEveryYou/"
  }
];

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative h-full"
    >
      <div className="relative rounded-xl sm:rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-6 md:p-8 transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.04] h-full flex flex-col">
        {/* Spotlight effect */}
        <Spotlight size={300} className="z-10" />
        
        {/* Project number */}
        <span className="absolute top-4 right-4 sm:top-6 sm:right-6 text-3xl sm:text-4xl md:text-5xl font-bold text-white/[0.03] select-none">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Content */}
        <div className="relative z-20 flex flex-col flex-grow">
          {/* Title */}
          <div className="flex items-start sm:items-center gap-2 mb-2 sm:mb-3">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            {project.featured && (
              <motion.svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-1 sm:mt-0"
                fill="currentColor"
                viewBox="0 0 24 24"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </motion.svg>
            )}
          </div>

          {/* Achievement */}
          {project.achievement && (
            <p className="text-accent text-xs sm:text-sm font-medium mb-2 sm:mb-3 flex items-start sm:items-center gap-1">
              <svg className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0 mt-0.5 sm:mt-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
              <span>{project.achievement}</span>
            </p>
          )}

          {/* Description */}
          <p className="text-white/60 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 flex-grow">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-3 sm:gap-4">
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 text-white/60 hover:text-white transition-colors text-xs sm:text-sm"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 sm:gap-2 text-white/60 hover:text-accent transition-colors text-xs sm:text-sm"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>

          {/* Collaborator */}
          {project.collaborator && (
            <p className="text-white/50 text-xs sm:text-sm mt-3 sm:mt-4">
              Collaborated with{' '}
              <a
                href={project.collaborator.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-light transition-colors underline underline-offset-2"
              >
                {project.collaborator.name}
              </a>
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-black relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/4 right-0 w-48 sm:w-64 md:w-80 lg:w-96 h-48 sm:h-64 md:h-80 lg:h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10 px-4 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <span className="inline-block text-accent text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
            Portfolio
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Selected <span className="text-accent">Projects</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto mt-3 sm:mt-4 px-4">
            A collection of projects that showcase my skills in full-stack development, 
            machine learning, and creative problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 auto-rows-fr">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* View All Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-8 sm:mt-12"
        >
          <a 
            href="https://github.com/dariadobrolinski"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors group text-sm sm:text-base"
          >
            <span>View all projects on GitHub</span>
            <svg 
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
