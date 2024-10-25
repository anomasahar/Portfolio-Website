"use client";

import React from 'react';
import { projectdata } from '@/utils/data';
import ProjectCard from '@/components/ProjectCard';
import { motion, useInView } from "framer-motion";

export default function ProjectsSection() {
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  // Select only the top 6 projects
  const topProjects = projectdata.slice(0, 6);

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">My Projects</h2>
      <ul className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {topProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.3, delay: index * 0.2 }} // Adjusted delay for smoother appearance
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image.src}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
