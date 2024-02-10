import React from "react";
import { Leaf1, Leaf2, about } from "../assets";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center justify-center flex-col gap-12 my-12"
    >
      {/* title */}
      <div className="w-full flex items-center justify-center py-24">
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 200 }}
          exit={{ opacity: 0, width: 0 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-around w-52"
        >
          <img src={Leaf1} className="w-6 h-auto object-contain" alt="" />
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize text-xl font-serif tracking-widest">
            About
          </p>
          <img
            src={Leaf2}
            className="w-6 h-auto object-contain rotate-210"
            alt=""
          />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="w-full flex items-center justify-center px-8">
          <div className=" w-full lg:w-96 p-[2px] rounded-md bg-gradient-to-br from-primary to-secondary relative">
            <img
              src={about}
              className="w-full rounded-md h-auto object-contain"
              alt=""
            />
            <div className="absolute w-full h-full -top-3 -left-2 bg-gradient-to-br from-primary to-secondary rounded-md blur-[5px] -z-10"></div>
          </div>
        </div>
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className="text-texlight text-base tracking-wider text-justify">
          Welcome to my corner of the digital world! I'm Sulaimon Ganiyu, a passionate and innovative 
          web developer, as well as a dedicated freelancer, ready to turn your ideas into functional, 
          user-friendly, and visually appealing digital solutions.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
          My journey into the world of web and app development began with a 
          fascination for technology and a desire to create meaningful and impactful digital experiences. 
          I specialize in creating websites that are not only aesthetically pleasing but also highly functional.
          </p>

          <p className="text-texlight text-base tracking-wider text-justify">
          Whether you're looking for a personal blog, an e-commerce platform, 
          or a custom business Website, I have the experience and expertise to bring your vision to life.
          I work with a variety of programming languages, frameworks, and technologies, including:
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
