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
    <section id="awards" className="section-padding bg-black relative overflow-hidden">
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
            Achievements
          </span>
          <h2 className="heading-lg">
            Certificates & <span className="text-accent">Awards</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto mt-4">
            Continuous learning and professional development through certifications and recognitions.
          </p>
        </motion.div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="px-12"
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {awards.map((award, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-2">
                    <div className="relative rounded-xl overflow-hidden bg-white shadow-lg aspect-[4/3] flex items-center justify-center p-4 group hover:shadow-xl hover:shadow-accent/10 transition-all duration-300">
                      <img
                        src={award.img}
                        alt={award.alt}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-center text-white/60 text-sm mt-3 px-2">
                      {award.alt}
                    </p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-black/50 border-white/20 text-white hover:bg-accent hover:text-black hover:border-accent" />
            <CarouselNext className="bg-black/50 border-white/20 text-white hover:bg-accent hover:text-black hover:border-accent" />
          </Carousel>
        </motion.div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="glass-card p-6">
            <span className="text-3xl font-bold text-accent">6+</span>
            <p className="text-white/60 text-sm mt-2">Technical Certifications</p>
          </div>
          <div className="glass-card p-6">
            <span className="text-3xl font-bold text-accent">2</span>
            <p className="text-white/60 text-sm mt-2">Biliteracy Seals</p>
          </div>
          <div className="glass-card p-6">
            <span className="text-3xl font-bold text-accent">3</span>
            <p className="text-white/60 text-sm mt-2">Languages Spoken</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
