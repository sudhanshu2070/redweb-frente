import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../../components/Hero/Hero';
import Skills from '../../components/Skills/Skills';
import Projects from '../../components/Projects/Projects';
import styles from './ShowcasePage.module.css';

const ShowcasePage: React.FC = () => {
  return (
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
  );
};

export default ShowcasePage;