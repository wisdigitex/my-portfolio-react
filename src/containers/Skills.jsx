import React from "react";
import { motion } from "framer-motion";
import { Leaf1, Leaf2 } from "../assets";
import { SkillCard } from "../components";

const Skills = () => {
  return (
    <section
      id="skills"
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
            Skills
          </p>
          <img
            src={Leaf2}
            className="w-6 h-auto object-contain rotate-210"
            alt=""
          />
        </motion.div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary capitalize text-xl font-serif tracking-widest">
            My Skills & Work Experience
          </p>
          <p className="text-texlight text-base tracking-wider text-justify">
          Successfully completed over 1000 projects for clients across different industries, including health, finance, and education.
          Regularly received positive feedback for clear communication, meeting deadlines, and delivering beyond client expectations.
          </p>
          <p className="text-texlight text-base tracking-wide text-justify">
          I work with a variety of programming languages, frameworks, and technologies, including:
          Front-end Development: HTML, CSS, JavaScript, React, Angular, Vue.js
          Back-end Development: Node.js, Python, Ruby on Rails, PHP
          Mobile App Development: React Native, Flutter
          Databases: MySQL, MongoDB, PostgreSQL
          Content Management Systems (CMS): WordPress, Joomla, Drupal
          </p>

          <p className="text-texlight text-base tracking-wider text-justify">
          If you're looking for a developer who blends technical expertise with 
          creativity and values relationships as much as results, then look no further. 
          Reach out, and let's transform your digital dreams into reality together.
          </p>
        </div>

        <div className="w-full px-8 flex flex-col gap-4 items-start justify-start">
          <SkillCard
            skill={"HTML 5"}
            percentage={"95%"}
            color={"#FF3F3F"}
            move={true}
          />

          <SkillCard skill={"CSS 3"} percentage={"75%"} color={"#008FFF"} />

          <SkillCard
            skill={"Javascript & React Native"}
            percentage={"85%"}
            color={"#FFB900"}
            move={true}
          />

          <SkillCard skill={"Node Js & Python"} percentage={"80%"} color={"#14DB00"} />

          <SkillCard
            skill={"React & NextJs"}
            percentage={"90%"}
            color={"#00FFF3"}
            move={true}
          />

          <SkillCard
            skill={"Mongo DB & Firebase"}
            percentage={"75%"}
            color={"#FFE400"}
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
