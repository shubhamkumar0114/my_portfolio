import React from "react";
import { motion } from "motion/react";
import { FaReact } from "react-icons/fa";
import { FaServer } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaTools } from "react-icons/fa";

const skills = [
  {
    icon: <FaReact />,
    name: "Frontend Development",
    des: "Building responsive and interactive user interfaces with modern frameworks.",
    button: [{ btnName: "ReactJs" }, { btnName: "NextJs" }],
  },
  {
    icon: <FaServer />,
    name: "Backend Development",
    des: "Creating robust server-side application and Restful APIs.",
    button: [{ btnName: "Nodejs" }, { btnName: "Express" }],
  },
  {
    icon: <FaDatabase />,
    name: "Database Management",
    des: "Designing and optimizing databases for performance and scalability.",
    button: [{ btnName: "MongoDB" }],
  },
  {
    icon: <FaTools />,
    name: "Tools & Technologies",
    des: "Essential tools and technologies I use in my development work flow.",
    button: [{ btnName: "Git & GitHub" }],
  },
];

const Skills = () => {
  return (
    <div className="px-8 md:w-7xl h-auto m-auto pt-12 mt-1 pb-2">
      <div className="text-center  mt-4 flex flex-col  gap-2 ">
        <h2 className="text-xl font-semibold text-blue-500 text-effect">
          My Skills
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

      <div
      className="mt-5 md:w-6xl m-auto flex flex-wrap gap-8 justify-center">
        {skills?.map((i, index) => (
          <motion.div 
          whileHover={{y: -8 }}
          transition={{duration: 0.2}}
            key={index}
            className="md:w-64 bg-[#111] shadow shadow-amber-800 rounded-lg p-4 flex flex-wrap flex-col gap-5"
          >
            <div className="flex gap-3 items-center text-[1.8rem] text-blue-500">
              {i.icon}
              <h4 className="text-gray-300 text-[1rem] font-semibold">{i.name}</h4>
            </div>
            <p className="text-[0.9rem] text-gray-400">{i?.des}</p>

            <div className="flex flex-wrap gap-2">
              {i.button.map((btn, index) => (
                <button
                  key={index}
                  className="bg-zinc-900 text-gray-400 text-[0.9rem] px-1.5 py-0.5 rounded-md"
                >
                  {btn?.btnName}
                </button>
              ))}
            </div>
          </motion.div>
        ))}
       
      </div>
    </div>
  );
};

export default Skills;
