import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { toast, Toaster } from 'react-hot-toast';
import Hero from '../../components/Hero/Hero';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import styles from './ShowcasePage.module.css';
import { useLocation } from 'react-router-dom';

const ShowcasePage: React.FC = () => {

  const location = useLocation();
  const { namefromParam } = location.state || {}; 
  const devName = 'Vemy Salvatore';
  
  const hasShownToast = useRef(false); // to persist between renders
  
  useEffect(() => {
    if (namefromParam !== devName && !hasShownToast.current) {
      
      toast.error('Nope, not today! 𓍊𓋼𓍊𓋼𓍊', {
        style: {
          borderRadius: '10px',
          background: '#1f1f1f',
          color: '#fff',
          boxShadow: '0px 5px 20px rgba(0,0,0,0.35)',
        },
      });
      hasShownToast.current = true; // toast only once
    }
  }, [namefromParam, devName]);

  if (namefromParam !== devName) {
    return (
      <>
        <Toaster position="top-center" reverseOrder={false} />
        <div className={styles.errorContainer}>
          <motion.div
            className={styles.motionWrapper}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.42, 0, 0.58, 1] }}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              padding: '20px 30px',
              borderRadius: '10px',
              boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
            }}
          >
        <h1 style={{ margin: 0, fontSize: '2rem', fontWeight: 'bold' }}>
          Contributor Unavailable
        </h1>
        <p style={{ marginTop: '10px', fontSize: '1.2rem', lineHeight: '1.5' }}>
          Please check back later. We appreciate your patience and
          unerstanding. ↟ 𖣂 ᨒ↟ 𖠰d
        </p>
        <button
          onClick={() => (window.location.href = '/contributors')}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            fontSize: '1rem',
            fontWeight: 'bold',
            color: '#fff',
            background: 'linear-gradient(135deg, #6e6e6e, #4b4b4b)',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
            transition: 'transform 0.2s ease',
          }}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        >
          Go Back to Home
        </button>
          </motion.div>
        </div>
      </>
    );
  }

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <Skills />
        <Projects /> 
      </motion.div>
    </>
  );
};


export default ShowcasePage;