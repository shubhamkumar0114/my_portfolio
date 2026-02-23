import React, { memo } from "react";

const WorkExprienceCard = () => {
  return (
    <div className="flex gap-6">
      <div className="progress-work"></div>
      <div className="md:w-2xl w-76 rounded-lg p-4 bg-zinc-900 h-30">
        <div className="flex justify-between items-center">
            <h3 className="font-semibold">Frontend Developer</h3>
            <button className="bg-zinc-950 px-2 text-violet-500 rounded-md">2025</button>
        </div>
      </div>
    </div>
  );
};

export default memo(WorkExprienceCard);
