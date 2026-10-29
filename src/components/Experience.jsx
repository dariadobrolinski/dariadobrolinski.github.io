import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';
import { FiBookOpen, FiUsers } from 'react-icons/fi';
import { GiBrain } from 'react-icons/gi';

const MotionLi = motion.li;

const linkClass = "text-white/90 underline decoration-accent/60 decoration-1 underline-offset-[3px] hover:text-white hover:decoration-accent transition-colors";

const experiences = [
  {
    title: "Software Development",
    company: "Lumen Technologies",
    date: "Aug 2026 – Present",
    icon: FaCode,
    description: "Modernizing legacy ARM inventory APIs on MITCH, a telecom service-automation platform, by routing requests to modern services with backward-compatible responses."
  },
  {
    title: "Software Development Intern",
    company: "Lumen Technologies",
    date: "May 2026 – Aug 2026",
    icon: FaCode,
    description: "Built a Terraform-based Datadog monitoring framework for 18+ services that cut monitor setup from up to 2 hours to ~2 minutes, and automated multi-cloud secret rotation across AWS, Azure, GCP, and Oracle."
  },
  {
    title: "Course Assistant",
    company: "University of Massachusetts Boston",
    date: "Feb 2026 – Present",
    icon: FiUsers,
    description: "Hold office hours and run plagiarism checks for CS 210: Intermediate Computing with Data Structures."
  },
  {
    title: "Research Assistant",
    company: (
      <>
        <a href="https://www1.coe.neu.edu/~rampersad/index.html" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-accent-light">
          BSS Lab
        </a>
        {' · '}University of Massachusetts Boston
      </>
    ),
    date: "Jan 2025 – Present",
    icon: GiBrain,
    description: (
      <>
        Building a head-modeling pipeline that corrects MRI partial-volume loss via SPHARM-based gyral-width scaling, and extending the open-source mesh-repair library{' '}
        <a href="https://github.com/dariadobrolinski/fixmesh" target="_blank" rel="noopener noreferrer" className={linkClass}>
          fixmesh
        </a>{' '}
        to fix self-intersecting surfaces and produce TetGen-ready meshes for{' '}
        <a href="https://github.com/SCIInstitute/SCIRun" target="_blank" rel="noopener noreferrer" className={linkClass}>
          SCIRun
        </a>{' '}
        brain-stimulation simulations.
      </>
    ),
    researchLink: true
  },
  {
    title: "B.S. Computer Science",
    company: "University of Massachusetts Boston",
    date: "Jan 2024 – May 2027",
    icon: FiBookOpen,
    description: (
      <>
        <span className="block">
          <a href="https://hluce.org/programs/clare-boothe-luce/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            Clare Boothe Luce Fellow
          </a>
          <span className="text-white/40"> · Spring 2026</span>
        </span>
        <span className="block">
          <a href="https://www.umb.edu/science-mathematics/student-success-center/career--research-opportunities/urf/" target="_blank" rel="noopener noreferrer" className={linkClass}>
            CSM Undergraduate Research Fellow
          </a>
          <span className="text-white/40"> · Fall 2025, Fall 2026</span>
        </span>
        <span className="block">
          <span className="text-white/90">Dean's List</span>
          <span className="text-white/40"> · Fall 2024, Spring 2025</span>
        </span>
      </>
    )
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
        <ol className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const isLast = index === experiences.length - 1;

            return (
              <MotionLi
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="grid grid-cols-[auto_1fr] sm:grid-cols-[8.5rem_auto_1fr] gap-x-4 sm:gap-x-6"
              >
                {/* Date (desktop) */}
                <p className="hidden sm:block text-right text-white/50 text-sm pt-2.5">
                  {exp.date}
                </p>

                {/* Icon + connector */}
                <div className="flex flex-col items-center">
                  <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-accent text-black shadow-lg shadow-accent/30 flex-shrink-0">
                    <Icon className="w-4 h-4 sm:w-[18px] sm:h-[18px]" />
                  </span>
                  {!isLast && <span className="w-px flex-1 bg-white/10 my-2" />}
                </div>

                {/* Content */}
                <div className={isLast ? 'pt-1' : 'pt-1 pb-8 sm:pb-10'}>
                  <p className="sm:hidden text-white/50 text-xs mb-1">{exp.date}</p>
                  <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">{exp.title}</h3>
                  <p className="text-accent text-sm font-medium">{exp.company}</p>
                  <p className="text-white/60 text-xs sm:text-sm leading-relaxed mt-2">{exp.description}</p>
                  {exp.researchLink && (
                    <a
                      href="#projects"
                      onClick={() => window.dispatchEvent(new Event('show-research-projects'))}
                      className="inline-flex items-center gap-1 text-accent hover:text-accent-light text-xs sm:text-sm font-medium mt-2 group"
                    >
                      View my research projects
                      <span className="transform group-hover:translate-x-0.5 transition-transform">→</span>
                    </a>
                  )}
                </div>
              </MotionLi>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
