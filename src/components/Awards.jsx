import { motion } from 'framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel';

import pythonImg from '../assets/python3.png';
import mongoImg from '../assets/mongoDB.png';
import genAIImg from '../assets/genAI.png';
import javaImg from '../assets/java.png';
import cImg from '../assets/c.png';
import htmlImg from '../assets/html.png';
import spanishImg from '../assets/spanish.png';
import polishImg from '../assets/polish.png';

const awards = [
  { img: pythonImg, alt: "Python 3 Certification" },
  { img: mongoImg, alt: "MongoDB Certification" },
  { img: genAIImg, alt: "Generative AI Certification" },
  { img: javaImg, alt: "Java Certification" },
  { img: cImg, alt: "C Programming Certification" },
  { img: htmlImg, alt: "HTML Certification" },
  { img: spanishImg, alt: "Seal of Biliteracy - Spanish" },
  { img: polishImg, alt: "Seal of Biliteracy - Polish" },
];

const Awards = () => {
  return (
    <section id="awards" className="py-16 sm:py-20 md:py-28 lg:py-32 bg-black relative overflow-hidden">
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
            Achievements
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
            Certificates & <span className="text-accent">Awards</span>
          </h2>
          <p className="text-white/60 text-sm sm:text-base max-w-2xl mx-auto mt-3 sm:mt-4 px-4">
            Continuous learning and professional development through certifications and recognitions.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="px-8 sm:px-10 md:px-12"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 sm:-ml-4">
              {awards.map((award, index) => (
                <CarouselItem key={index} className="pl-2 sm:pl-4 basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-1 sm:p-2">
                    <div className="relative rounded-lg sm:rounded-xl overflow-hidden bg-white shadow-lg aspect-[4/3] flex items-center justify-center p-2 sm:p-4 group hover:shadow-xl hover:shadow-accent/10 transition-all duration-300">
                      <img
                        src={award.img}
                        alt={award.alt}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-center text-white/60 text-xs sm:text-sm mt-2 sm:mt-3 px-1 sm:px-2 line-clamp-2">
                      {award.alt}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-black/50 border-white/20 text-white hover:bg-accent hover:text-black hover:border-accent -left-3 sm:-left-4 md:-left-5 h-8 w-8 sm:h-10 sm:w-10" />
            <CarouselNext className="bg-black/50 border-white/20 text-white hover:bg-accent hover:text-black hover:border-accent -right-3 sm:-right-4 md:-right-5 h-8 w-8 sm:h-10 sm:w-10" />
          </Carousel>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 sm:mt-12 md:mt-16 grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-center"
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
