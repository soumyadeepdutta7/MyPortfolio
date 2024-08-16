import React, { useContext } from "react";
import { techStack } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import profileImage from "../assets/Profile-Dressed-removebg.png";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div id="about" className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2 className="text-5xl font-bold text-center">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center mt-12">
          <div className="md:w-1/2 md:pr-8">
            <h4 className="text-3xl font-semibold text-blue-500">
              A bit about me
            </h4>
            <p className="mt-4 text-xl text-justify">
              I'm Soumyadeep Dutta, a passionate Frontend/Fullstack Web Developer driven by turning ideas into captivating digital experiences. With a B.Tech in Computer Science from SRM Institute of Science & Technology, I'm dedicated to continuous growth. My skills in HTML, CSS, and JavaScript breathe life into designs, working seamlessly across devices and browsers. Whether it's responsive layouts, UX enhancement, or performance optimization, I'm up for the challenge. Staying current with industry trends ensures my work meets standards and embraces future innovation.
            </p>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-end">
            <img
              src={profileImage}
              alt="Profile"
              className="w-72 rounded-full"
            />
          </div>
        </div>
        <div className="mt-16">
          <h4 className="text-3xl font-semibold text-blue-500">
            Technologies and Tools
          </h4>
          <p className="mt-4 text-xl text-justify">
            Using a combination of cutting-edge technologies and reliable open-source software, I build user-focused, performant apps and websites for smartphones, tablets, and desktops.
          </p>
        </div>
        <motion.div className="flex flex-wrap mt-8">
          {techStack.map((el, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView={"visible"}
              variants={{
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    type: "spring",
                  },
                },
                hidden: { opacity: 1, y: 80 },
              }}
              className="py-2 px-4 bg-gray-50 md:m-4 mx-2 mt-6 rounded-lg flex items-center hover:scale-125 cursor-pointer md:w-48 w-40"
            >
              <img alt="" src={el.link} className="w-12" />
              <h4 className="text-md ml-4">{el.name}</h4>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;
