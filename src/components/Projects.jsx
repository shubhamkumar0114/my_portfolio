import React from "react";
import { motion } from "motion/react";
import ProjectCard from "./cards/ProjectCard";

const Projects = () => {
  return (
    <div className="px-8 w-7xl h-auto m-auto pt-12 mt-1 pb-2">
      <div className="text-center  mt-4 flex flex-col  gap-2 ">
        <h2 className="text-xl font-semibold text-blue-500 text-effect">
          My Projects
        </h2>

        <motion.p
          initial={{ opacity: 0, x: -700 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="tracking-tight "
        >
          Lorem ipsum dolor sit amet.
        </motion.p>
      </div>

      <div className=" py-4 mt-5 w-5xl m-auto flex flex-wrap gap-8 justify-center">
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{y: -5}}
        >
          <ProjectCard />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 , delay: 0.2}}
          whileHover={{y: -5}}
        >
          <ProjectCard />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{y: -5}}
        >
          <ProjectCard />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
