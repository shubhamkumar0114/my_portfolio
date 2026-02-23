import React from "react";
import TypingTextAuto from "../components/TypingTextAuto";
import { motion } from "motion/react";
import About from "../components/About";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full md:w-6xl md:h-[96vh] h-screen m-auto pt-2 mt-1 pb-2 flex flex-col md:flex-row gap-15 md:justify-between pl-2 pr-2 items-center">
        <div className="w-full md:w-xl flex flex-col gap-5 pl-8">
          <motion.h1
            initial={{ opacity: 0, y: -80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ easeInOut: 0.2, delay: 0.2 }}
            className="md:text-4xl text-3xl font-semibold mt-14 md:mt-0"
          >
            Hi, I'm <span className="text-violet-400">Shubham kumar</span>
          </motion.h1>
          <div>
            <TypingTextAuto />
          </div>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ease: "easeInOut", delay: 0.6 }}
            className="text-[1rem] text-gray-400 text-left"
          >
            I am Full-Stack_development and building scalable web and mobile
            application. Skilleds in modern frontend frameworks like Reactjs, and Backend
            technologies like Nodejs.
          </motion.p>

          <div className="flex items-center gap-4">
            <motion.button
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 2, all: 0.3 }}
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeInOut", delay: 0.2 }}
              className="md:px-4 md:py-2 px-8 py-4 rounded-md bg-linear-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-600 text-white cursor-pointer font-semibold"
            >
              View Work
            </motion.button>
            <motion.button
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 2, all: 0.3 }}
              whileHover={{ scale: 1.1 }}
              transition={{ ease: "easeInOut", delay: 0.3 }}
              className="md:px-4 md:py-2 px-8 py-4 rounded-md bg-linear-to-r from-green-400 to-blue-800 hover:from-pink-500 hover:to-yellow-600 text-white cursor-pointer font-semibold"
            >
              <Link to={"/contact"}> Contact Me</Link>
            </motion.button>
          </div>

          <div className="flex gap-4 items-center">
            <button>
              <Link to={"https://www.linkedin.com/in/shubham-kuma-0b14722a2/"} target="_blank">github</Link>
            </button>
            <button>
              <Link>Linkdin</Link>
            </button>
            <button></button>
          </div>
        </div>
        <motion.div
          animate={{ scale: 1.1 }}
          transition={{ ease: "easeInOut" }}
          className="box-shadow w-65 md:w-65 h-65 md:h-65 rounded-full bg-cyan-500 md:mr-35  overflow-hidden"
        >
          <img
            className="opacity-80 w-full h-full"
            src="./public/aarav.png"
            alt="image"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
