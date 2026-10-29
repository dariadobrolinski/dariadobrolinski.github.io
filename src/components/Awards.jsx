import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
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
import syncAwardImg from '../assets/sync-award.jpeg';

const awards = [
  { img: syncAwardImg, alt: "People's Choice Award - UMass Boston AI Symposium (Team Sync)" },
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
  const [selectedIndex, setSelectedIndex] = useState(null);
  const selectedAward = selectedIndex === null ? null : awards[selectedIndex];

  const showPrevious = () => setSelectedIndex((i) => (i - 1 + awards.length) % awards.length);
  const showNext = () => setSelectedIndex((i) => (i + 1) % awards.length);

  useEffect(() => {
    if (selectedIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      } else if (event.key === 'ArrowLeft') {
        showPrevious();
      } else if (event.key === 'ArrowRight') {
        showNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

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
                    <button
                      type="button"
                      onClick={() => setSelectedIndex(index)}
                      aria-label={`Enlarge ${award.alt}`}
                      className="relative w-full rounded-lg sm:rounded-xl overflow-hidden bg-white shadow-lg aspect-[4/3] flex items-center justify-center p-2 sm:p-4 group hover:shadow-xl hover:shadow-accent/10 transition-all duration-300 cursor-zoom-in">
                      <img
                        src={award.img}
                        alt={award.alt}
                        className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </button>
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

      {selectedAward && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80"
          role="dialog"
          aria-modal="true"
          aria-label={selectedAward.alt}
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="w-full max-w-4xl mx-4 flex flex-col rounded-xl overflow-hidden border border-white/10 max-h-[calc(100dvh-2rem)]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-3 px-4 py-2 bg-zinc-900 border-b border-white/10 flex-shrink-0">
              <span className="text-white/60 text-xs truncate">
                {selectedAward.alt}
                <span className="text-white/30 ml-2">{selectedIndex + 1} / {awards.length}</span>
              </span>
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="rounded-full bg-white/10 text-white/70 hover:text-white hover:bg-white/20 transition-colors px-4 py-1.5 text-sm font-medium flex-shrink-0"
              >
                Close
              </button>
            </div>
            <div className="relative overflow-auto bg-white flex items-center justify-center">
              <img
                src={selectedAward.img}
                alt={selectedAward.alt}
                className="max-w-full max-h-[calc(100dvh-6rem)] object-contain"
              />
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous award"
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/60 text-white hover:bg-accent hover:text-black transition-colors flex items-center justify-center"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                type="button"
                onClick={showNext}
                aria-label="Next award"
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-black/60 text-white hover:bg-accent hover:text-black transition-colors flex items-center justify-center"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
};

export default Awards;
