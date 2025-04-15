import React from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Skills.module.css';
import { useRef } from 'react';

const skills = [
  'React', 'TypeScript', 'CSS', 'JavaScript', 'Framer Motion', 'HTML'
];

const Skills: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className={styles.skills} ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className={styles.title}
      >
        My Skills
      </motion.h2>
      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {skills.map((skill) => (
          <motion.div
            key={skill}
            className={styles.skillCard}
            variants={skillVariants}
            whileHover={{ scale: 1.1, rotate: 5, transition: { duration: 0.3 } }}
          >
            {skill}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;