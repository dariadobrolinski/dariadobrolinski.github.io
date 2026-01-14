import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import pythonImg from '../assets/python3.png';
import mongoImg from '../assets/mongoDB.png';
import genAIImg from '../assets/genAI.png';
import javaImg from '../assets/java.png';
import cImg from '../assets/c.png';
import htmlImg from '../assets/html.png';
import spanishImg from '../assets/spanish.png';
import polishImg from '../assets/polish.png';

const Awards = () => {
  const [width, setWidth] = useState(0);
  const carouselRef = useRef();

  useEffect(() => {
    setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
  }, []);

  const awards = [
    { img: pythonImg, alt: "Python 3 Course Certificate" },
    { img: mongoImg, alt: "MongoDB Course Certificate" },
    { img: genAIImg, alt: "Generative AI Course Certificate" },
    { img: javaImg, alt: "Java Course Certificate" },
    { img: cImg, alt: "C Course Certificate" },
    { img: htmlImg, alt: "HTML Course Certificate" },
    { img: spanishImg, alt: "Seal of Biliteracy in Spanish" },
    { img: polishImg, alt: "Seal of Biliteracy in Polish" },
  ];

  return (
    <section id="awards" style={{
      padding: '100px 20px',
      background: 'var(--bg-color)',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ fontSize: '3rem', textAlign: 'center', marginBottom: '60px' }}
        >
          Certificates & <span style={{ color: 'var(--accent-pink)' }}>Awards</span>
        </motion.h2>

        <motion.div 
          ref={carouselRef} 
          whileTap={{ cursor: "grabbing" }}
          style={{ cursor: "grab", overflow: "hidden" }}
        >
          <motion.div 
            drag="x" 
            dragConstraints={{ right: 0, left: -width }}
            style={{ display: 'flex', gap: '40px' }}
          >
            {awards.map((award, index) => (
              <motion.div 
                key={index} 
                style={{ 
                  minWidth: '300px', 
                  height: '200px',
                  background: '#fff',
                  borderRadius: '10px',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img 
                  src={award.img} 
                  alt={award.alt} 
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    objectFit: 'contain',
                    pointerEvents: 'none' 
                  }} 
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <p style={{ textAlign: 'center', marginTop: '20px', color: '#888', fontSize: '0.9rem' }}>
          Drag to explore
        </p>
      </div>
    </section>
  );
};

export default Awards;
