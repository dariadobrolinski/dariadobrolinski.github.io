import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

export default function FeatureSteps({
  features,
  className,
  autoPlayInterval = 5000,
  imageClassName = "h-[400px]"
}) {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
      setProgressKey((prev) => prev + 1);
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [autoPlayInterval, currentFeature, features.length]);

  return (
    <div
      className={cn(
        "flex flex-col lg:flex-row w-full lg:items-stretch",
        className
      )}>
      {/* Left Column: Feature List */}
      <div
        className="flex flex-col w-full lg:w-1/2 border border-white/10 divide-y divide-white/10">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            onClick={() => {
              setCurrentFeature(index);
              setProgressKey((prev) => prev + 1);
            }}
            className={cn(
              "p-6 md:p-8 relative cursor-pointer transition-colors duration-300",
              index === currentFeature ? "bg-white/5" : "hover:bg-white/[0.02]"
            )}>
            <div className="flex items-start gap-4">
              <span className="text-accent font-mono text-sm mt-1">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex-1">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-white/60 leading-relaxed">
                  {feature.content}
                </p>
                {feature.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {feature.tags.map((tag, i) => (
                      <span 
                        key={i}
                        className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                {feature.links && (
                  <div className="flex gap-4 mt-4">
                    {feature.links.github && (
                      <a 
                        href={feature.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        Code
                      </a>
                    )}
                    {feature.links.live && (
                      <a 
                        href={feature.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/60 hover:text-accent transition-colors text-sm flex items-center gap-1"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
            {index === currentFeature && (
              <motion.div
                key={progressKey}
                className="absolute h-[2px] bottom-0 left-0 bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: autoPlayInterval / 1000,
                  ease: "linear",
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
      
      {/* Right Column: Image/Content Display */}
      <div
        className={cn(
          "w-full lg:w-1/2 border border-white/10 lg:border-l-0 border-t-0 lg:border-t relative overflow-hidden bg-black/50",
          imageClassName
        )}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentFeature}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="relative w-full h-full flex items-center justify-center p-4 md:p-6">
            {features[currentFeature].iframe ? (
              <iframe 
                src={features[currentFeature].iframe}
                className="w-full h-full rounded-lg border-0"
                allowFullScreen
                title={features[currentFeature].title}
              />
            ) : features[currentFeature].image ? (
              <img
                src={features[currentFeature].image}
                alt={features[currentFeature].title}
                className="w-full h-full object-contain rounded-lg"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-3xl text-accent">
                      {String(currentFeature + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <p className="text-white/40 text-sm">Preview not available</p>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
