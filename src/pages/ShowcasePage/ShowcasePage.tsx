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
  const { name } = location.state || {}; 
  const devName = 'Vemy Salvatore';
  
  const hasShownToast = useRef(false); // to persist between renders
  
  useEffect(() => {
    if (name !== devName && !hasShownToast.current) {
      
      toast.error('❌ Developer not available', {
        style: {
          borderRadius: '10px',
          background: '#1f1f1f',
          color: '#fff',
          boxShadow: '0px 5px 20px rgba(0,0,0,0.35)',
          transform: 'rotateX(5deg)', // subtle 3D style
        },
        icon: '🚫',
      });
      hasShownToast.current = true; // toast only once
    }
  }, [name, devName]);

  if (name !== devName) {
    return (
      <>
        <Toaster position="top-center" reverseOrder={false} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            textAlign: 'center',
            fontSize: '1.5rem',
            color: '#d3d3d3', 
            background: 'linear-gradient(135deg, #4b4b4b, #6e6e6e)', 
            padding: '20px',
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.5)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
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
              understanding. ↟ 𖣂 ᨒ↟ 𖠰
            </p>
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