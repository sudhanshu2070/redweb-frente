import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  const floatVariants = {
    animate: {
      y: [-10, 10],
      transition: {
        y: { repeat: Infinity, repeatType: 'reverse', duration: 2 },
      },
    },
  };

  return (
    <section className={styles.hero}>
      <motion.h1
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className={styles.title}
      >
        Hey, I'm <motion.span variants={floatVariants} animate="animate" className={styles.name}>Vemy Salavtore</motion.span>!
      </motion.h1>
      <motion.p
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className={styles.subtitle}
      >
        A Frontend Developer crafting delightful, animated experiences.
      </motion.p>
    </section>
  );
};

export default Hero;