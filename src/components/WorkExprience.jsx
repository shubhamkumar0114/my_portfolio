import { motion } from 'motion/react'
import React from 'react'
import WorkExprienceCard from './cards/WorkExprienceCard'

const WorkExprience = () => {
  return (
    <div className="md:px-8 w-full md:w-7xl h-auto m-auto pt-12 mt-1 pb-2">
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

      <section>
        <div className="mt-5 md:w-5xl m-auto flex flex-wrap gap-8 justify-center">
            <WorkExprienceCard/>
        </div>
      </section>
    </div>
  )
}

export default WorkExprience
