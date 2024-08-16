import React, { useContext } from "react";
import Card from "../components/Card";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">
          Projects
        </h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">
          What I Built
        </h4>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <Card 
            title="Lenovo Clone" 
            description="A responsive e-commerce site modeled after Lenovo's official website. Built with HTML, CSS, and Bootstrap, it features a clean UI with product listings and detailed product pages."
            imgSrc="https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg"
            github="https://github.com/adityaks-lts/Code-Kalyaan-2345"
            live="https://lenovo-code-kalyaan.netlify.app/"
          />
          <Card 
            title="Zepto Clone"
            description="A dynamic site featuring curated, limited-time deals on various products and services, designed for an engaging and seamless shopping experience."
            imgSrc="https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg"
            github="https://github.com/Kranti00/Betwa-Interface-015"
            live="https://zepto-masai.netlify.app/"
          />
          <Card 
            title="Weekend Planner"
            description="A React application for planning and managing weekend trips with features like user authentication and data visualization."
            imgSrc="https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg"
            github="https://github.com/Hari3199/-Samsung-Saviors_058"
            live="https://my-weekend-planner.netlify.app/"
          />
          <Card 
            title="Paint Box Game"
            description="An interactive platform for creating art using HTML, CSS, and JavaScript with customizable grid size and color palette."
            imgSrc="https://images.wallpaperscraft.com/image/single/system_scheme_blue_blueprint_10428_300x168.jpg"
            github="https://github.com/soumyadeepdutta7/Paint-box-game"
            live="https://663294311163b5007957147b--thunderous-dolphin-56014b.netlify.app/"
          />
        </div>
        <a
          href="https://github.com/soumyadeepdutta7?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
        >
          Show More
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;
