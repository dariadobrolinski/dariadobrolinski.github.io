import { motion } from 'framer-motion';
import { Spotlight } from './Spotlight';

const projects = [
  {
    title: "Elara AI",
    description: "Collaborated on building a Python FastAPI backend for Elara AI, an intelligent chatbot that suggests natural remedies for medical concerns. Built using MongoDB, Vertex AI (Gemini), and deployed on Google Cloud.",
    tags: ["Python", "FastAPI", "MongoDB", "Vertex AI", "Google Cloud"],
    github: "https://github.com/dariadobrolinski/elaraBackend",
    live: "https://elarafrontend-114195159699.us-east1.run.app/",
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
  },
  {
    title: "Automatic Irrigation System",
    description: "Developed an Arduino-based irrigation system using soil moisture sensors and water pumps, reducing manual watering by over 50%. Engineered and 3D-printed a protective enclosure in Fusion 360.",
    tags: ["Arduino", "C++", "Fusion 360", "3D Printing", "Hardware"],
    github: "#"
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
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-6 md:p-8 transition-all duration-300 hover:border-accent/30 hover:bg-white/[0.04] h-full flex flex-col">
        {/* Spotlight effect */}
        <Spotlight size={300} className="z-10" />
        
        {/* Project number */}
        <span className="absolute top-6 right-6 text-5xl font-bold text-white/[0.03] select-none">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Content */}
        <div className="relative z-20 flex flex-col flex-grow">
          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-accent transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6 flex-grow">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex items-center gap-4">
            {project.github && project.github !== "#" && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
                className="flex items-center gap-2 text-white/60 hover:text-accent transition-colors text-sm"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>

          {/* Collaborator */}
          {project.collaborator && (
            <p className="text-white/50 text-sm mt-4">
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
    <section id="projects" className="section-padding bg-black relative">
      {/* Background accent */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-accent text-sm tracking-widest uppercase mb-4">
            Portfolio
          </span>
          <h2 className="heading-lg">
            Selected <span className="text-accent">Projects</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-4">
            A collection of projects that showcase my skills in full-stack development, 
            machine learning, and creative problem-solving.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 auto-rows-fr">
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
          className="text-center mt-12"
        >
          <a 
            href="https://github.com/dariadobrolinski"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/60 hover:text-accent transition-colors group"
          >
            <span>View all projects on GitHub</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
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
