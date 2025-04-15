import React from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Projects.module.css';
import { useRef } from 'react';

interface Project {
  title: string;
  description: string;
  link: string;
}

const projects: Project[] = [
  {
    title: 'Project One',
    description: 'A cool app with interactive animations.',
    link: '#',
  },
  {
    title: 'Project Two',
    description: 'A sleek dashboard with real-time data.',
    link: '#',
  },
  {
    title: 'Project Three',
    description: 'An e-commerce site with smooth UX.',
    link: '#',
  },
];

const Projects: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className={styles.projects} ref={ref}>
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className={styles.title}
      >
        My Projects
      </motion.h2>
      <motion.div
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            className={styles.projectCard}
            variants={projectVariants}
            whileHover={{
              scale: 1.05,
              rotateX: 10,
              rotateY: 10,
              transition: { duration: 0.4 },
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className={styles.link}>
              View Project
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Projects;