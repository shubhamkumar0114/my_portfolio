import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contacts = () => {

  const [name , setName] = useState("");
  const [email , setEmail] = useState("");
  const [message , setMessage] = useState("");

  const user = {name , email, message}

  const onSubmitHandler = (e) => {
    e.preventDefault();
    alert("Sent Message...");
  };
  return (
    <div className="px-8 md:w-7xl h-auto m-auto md:pt-16 pt-8 mt-1 pb-2">
      <h2 className="text-xl text-center my-4 font-semibold text-blue-500 text-effect">
        My Contacts
      </h2>
      <div className=" md:w-3xl md:p-2 p-0 m-auto flex md:flex-row flex-col gap-12">
        <form className="md:w-80 flex flex-col gap-4" onSubmit={onSubmitHandler}>
          <input required value={name} onChange={(e)=> setName(e.target.value)}
            className="bg-zinc-700 h-10 rounded-md pl-4 outline-0"
            type="text"
            placeholder="name"
          />
          <input required value={email} onChange={(e)=> setEmail(e.target.value)}
            className="bg-zinc-700 h-10 rounded-md pl-4 outline-0"
            type="email"
            placeholder="email"
          />
          <textarea required  value={message} onChange={(e)=> setMessage(e.target.value)}
            className="bg-zinc-700 resize-none h-40 rounded-md  pl-4 outline-0"
            name="message"
            placeholder="message.."
            id=""
          ></textarea>
          <input
            className="bg-blue-700 h-10 rounded-md pl-4 outline-0"
            type="submit"
            value="Send Message"
          />
        </form>

        <div className="flex flex-col gap-6">
            <div className="flex gap-4 ">
                <h4> <FaLocationDot className="text-[1.2rem]" /> </h4>
                <div>
                    <span className="font-semibold text-gray-200">Location</span>
                    <p className="text-gray-400 text-[0.9rem]">Ghaziabad</p>
                </div>
            </div>

            <div className="flex gap-4">
                <h4> <MdEmail className="text-[1.2rem]" /> </h4>
                <div>
                    <span className="font-semibold text-gray-200">Email</span>
                    <p className="text-gray-400 text-[0.9rem]">shubhamjha6299@gmail.com</p>
                </div>
            </div>

            <div className="flex gap-4">
                <h4> <IoIosCall className="text-[1.2rem]" /> </h4>
                <div>
                    <span className="font-semibold text-gray-200">Phone</span>
                    <p className="text-gray-400 text-[0.9rem]">(+91) 6299747575</p>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h4> Follow Me </h4>
                <div className="flex items-center gap-4">
                    <Link to={"https://github.com/shubhamkumar0114"} target="_blank" className="bg-zinc-800 p-2 rounded-full text-[1.2rem]"><FaGithub/></Link>
                    <Link className="bg-zinc-800 p-2 rounded-full text-[1.2rem]"><FaLinkedinIn/></Link>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
