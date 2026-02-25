import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openDrawerHandler = () => {
    setOpen(!open);
  };

  return (
    <div className="py-3 fixed left-0 top-0 right-0 z-50 md:px-0 ">
      <header className="mobile-nav-link">
        <nav className="flex justify-between px-2 ">
          <div className="font-semibold text-[1.4rem]">SK</div>

          <motion.ul className="flex nav-hidden-css items-center font-medium gap-8 text-[#c2b9b9] cursor-pointer pr-5">
            <motion.li
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", delay: 0.1 }}
            >
              <Link to={"/"}>Home</Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", delay: 0.3 }}
            >
              <Link to={"/about"}>About</Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", delay: 0.4 }}
            >
              <Link to={"/skill"}>Skills</Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", delay: 0.5 }}
            >
              <Link to={"/project"}>Projects</Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", delay: 0.6 }}
            >
              <Link to={"/exprience"}>Exprience</Link>
            </motion.li>
            <motion.li
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeInOut", delay: 0.7 }}
            >
              <Link to={"/contact"}>Contacts</Link>
            </motion.li>
          </motion.ul>

          <div className="md:hidden">
            {open ? (<IoMdClose onClick={openDrawerHandler} className="text-[1.5rem] text-gray-400 cursor-pointer mr-2 close-icon" />): (<GiHamburgerMenu
              onClick={openDrawerHandler}
              className="text-[1.5rem] text-gray-400 cursor-pointer"
            />)}
          </div>
        </nav>
        {open && (
          <div className="mobile-link">
            <nav className="">
              <ul className="flex flex-col gap-5">
                <li className="hover:bg-zinc-600 px-2 py-2 text-[1.1rem] rounded-md">
                  <Link to={"/"} onClick={openDrawerHandler}>Home</Link>
                </li>
                <li className="hover:bg-zinc-600 px-2 py-2 text-[1.1rem] rounded-md">
                  <Link to={"/about"} onClick={openDrawerHandler}>About</Link>
                </li>
                <li className="hover:bg-zinc-600 px-2 py-2 text-[1.1rem] rounded-md">
                  <Link to={"/skill"} onClick={openDrawerHandler}>Skills</Link>
                </li>
                <li className="hover:bg-zinc-600 px-2 py-2 text-[1.1rem] rounded-md">
                  <Link to={"/exprience"} onClick={openDrawerHandler}>Exprience</Link>
                </li>
                <li className="hover:bg-zinc-600 px-2 py-2 text-[1.1rem] rounded-md">
                  <Link to={"/contact"} onClick={openDrawerHandler}>Contacts</Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
