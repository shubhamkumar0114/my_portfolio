import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
    <div className="px-8 w-full md:w-7xl  m-auto pt-12 mt-1 pb-2">
      <div className="text-center mt-4 flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-blue-500">About Me</h2>
        
      </div>

      {/* ===============About-box============== */}
      <div className="flex md:flex-row flex-col justify-around mt-8 ">
        {/* <div className="w-full md:w-[34vw] h-[50vh] md:h-[80vh] border border-gray-400 rounded-lg">
          <img src="543" alt="shubham" />
        </div> */}
        <div className="w-full md:w-[45vw] flex flex-col gap-3 md:mt-0 mt-4">
          <h2 className="text-gray-300">Bio</h2>
          <p className="text-gray-400 text-[0.9rem]">
            My name is Shubham kumar. I am Full Stack Developer, i am fresher
            and i have 3 months exprience in MY EDU GALAXY PVT. LTD. Building
            web application and mobile application and skilled in frontend
            framework like Reactjs and backend technologies nodejs
          </p>

          <div className="flex flex-wrap gap-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="md:w-50  bg-zinc-900 rounded-md p-4 flex flex-col gap-3"
            >
              <p className="text-violet-600">icon</p>
              <h3 className="font-semibold">Innovative</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9 }}
              whileHover={{ scale: 1.1 }}
              className="md:w-50 bg-zinc-900 rounded-md p-4 flex flex-col gap-3"
            >
              <p className="text-violet-600">icon</p>
              <h3 className="font-semibold">Innovative</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeIn", duration: 0.7 }}
              className="md:w-50  bg-zinc-900 rounded-md p-4 flex flex-col gap-3"
            >
              <p className="text-violet-600">icon</p>
              <h3 className="font-semibold">Innovative</h3>
              <p className="text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
