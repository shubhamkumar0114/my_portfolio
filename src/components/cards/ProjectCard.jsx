import React, { memo } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const ProjectCard = () => {
  return (
    <motion.div 
    className="bg-[#111] w-64 shadow shadow-amber-700 rounded-2xl overflow-hidden flex flex-col gap-4 pb-4">
      <div className="w-full h-50 ">
        <img src="5454" alt="img" />
      </div>
      <div className="flex flex-col gap-2 px-4">
        <h3 className="text-gray-300 font-semibold">E-commerce Website</h3>
        <p className="text-[0.9rem] text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          vitae.
        </p>
        <div className="flex flex-wrap gap-2">
          <button className="bg-zinc-900 text-gray-400 text-[0.9rem] px-1.5 py-0.5 rounded-md">
            Reactjs
          </button>
          <button className="bg-zinc-900 text-gray-400 text-[0.9rem] px-1.5 py-0.5 rounded-md">
            Nodejs
          </button>
          <button className="bg-zinc-900 text-gray-400 text-[0.9rem] px-1.5 py-0.5 rounded-md">
            MongoDB
          </button>
        </div>

        <div className="flex items-center gap-4">
          <Link className="bg-violet-600 font-semibold text-white py-1 rounded-md px-2">
            View Demo
          </Link>
          <Link className="border border-blue-500 font-semibold text-white py-1 rounded-md px-8">
            Code
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default memo(ProjectCard);
