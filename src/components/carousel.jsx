import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

const Carousel = ({
  images,
  className,
  cardWidth = "280px",
  cardHeight = "200px",
  duration = 0.5,
  rotationAngle = 35
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalItems = images.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Get previous, current, and next items
  const items = [];
  for (let i = -1; i <= 1; i++) {
    const index = (currentIndex + i + totalItems) % totalItems;
    items.push({
      item: images[index],
      index: index,
      position: i + 1,
      isCenter: i === 0,
    });
  }

  return (
    <div className={cn("flex flex-col items-center gap-8", className)}>
      <div
        className="flex items-center justify-center gap-2 md:gap-4"
        style={{
          perspective: "1200px",
          transformStyle: "preserve-3d",
        }}>
        {items.map((item) => (
          <motion.div
            key={item.index}
            initial={{
              scale: 0.8,
              rotateY:
                item.position === 0
                  ? rotationAngle
                  : item.position === 2
                    ? -rotationAngle
                    : 0,
            }}
            animate={{
              scale: item.isCenter ? 1 : 0.85,
              opacity: item.isCenter ? 1 : 0.5,
              rotateY:
                item.position === 0
                  ? rotationAngle
                  : item.position === 2
                    ? -rotationAngle
                    : 0,
            }}
            transition={{
              duration: duration,
            }}
            style={{
              width: cardWidth,
              height: cardHeight,
            }}
            className={cn(
              item.isCenter ? "z-10" : "z-0",
              "relative flex-shrink-0 hidden md:block"
            )}>
            <div className="relative w-full h-full rounded-xl overflow-hidden bg-white shadow-xl">
              <img
                src={item.item.img}
                alt={item.item.alt}
                className="w-full h-full object-contain p-2"
              />
            </div>
          </motion.div>
        ))}
        
        {/* Mobile view - single card */}
        <motion.div
          key={`mobile-${currentIndex}`}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          className="md:hidden relative rounded-xl overflow-hidden bg-white shadow-xl"
          style={{ width: cardWidth, height: cardHeight }}>
          <img
            src={images[currentIndex].img}
            alt={images[currentIndex].alt}
            className="w-full h-full object-contain p-2"
          />
        </motion.div>
      </div>
      
      {/* Navigation dots */}
      <div className="flex items-center gap-3">
        <button 
          onClick={handlePrev}
          className="p-2 text-white/60 hover:text-accent transition-colors"
          aria-label="Previous"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className="flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                index === currentIndex 
                  ? "bg-accent w-6" 
                  : "bg-white/20 hover:bg-white/40"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button 
          onClick={handleNext}
          className="p-2 text-white/60 hover:text-accent transition-colors"
          aria-label="Next"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      
      {/* Caption */}
      <AnimatePresence mode="wait">
        <motion.p
          key={currentIndex}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-center text-white/60 text-sm max-w-xs"
        >
          {images[currentIndex].alt}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default Carousel;
