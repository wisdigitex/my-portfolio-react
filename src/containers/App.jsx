import { AnimatePresence, } from "framer-motion";
import React from "react";
import {
  About,
  Contact,
  Header,
  Home,
  ParticlesContainer,
  Projects,
  ServiceCount,
  Skills,
} from "./";
import { Socials } from "../utils/helper";
import { HomeSocialLinks } from "../components";

const App = () => {
  return (
    <div className="text-gray-50 w-full xl:w-[1300px]  py-32 px-4 lg:px-12 pr-4 lg:pr-32 ">
      <ParticlesContainer />
      <Header />

      {/* Home */}
      <Home />

      {/* total count & ratings */}
      <ServiceCount />

      {/* about */}
      <About />

      {/* skills */}
      <Skills />

      {/* Projects  */}
      <Projects />

      {/* contact */}
      <Contact />

      {/* footer */}
      <div className="w-full flex flex-col items-center justify-start ">
        <p className="text-3xl tracking-wider">Sulaimon Ganiyu</p>
        <div className="flex items-center justify-center gap-16 mt-16">
          <AnimatePresence>
            {Socials &&
              Socials.map((item, index) => (
                <HomeSocialLinks key={index} data={item} index={index} />
              ))}
          </AnimatePresence>
        </div>
        <div className="w-full grid grid-cols-1 lg:grid-cols-3 mt-12">
          <p className="text-texlight text-center">
          My journey into the world of web and app development began with a fascination for technology 
          and a desire to create meaningful and impactful digital experiences. 
          </p>
          <p className="text-texlight text-center">
          Over the years, 
          I've honed my skills, keeping up with the latest trends and technologies to deliver 
          cutting-edge solutions to my clients.
          </p>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <p className="text-texlight text-center">
              sulaimonganiyu315@gmail.com
            </p>
            <p className="text-texlight text-center">+234 703 500 1858</p>
            <a href="https://wa.me/message/FQ53HO3DD2B6M1">
              <p className="text-primary text-center">Let's Chat</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
