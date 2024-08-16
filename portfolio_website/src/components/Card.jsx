import React from "react";
import { motion } from "framer-motion";

const Card = ({ title, description, imgSrc, github, live }) => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="flex flex-col bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 my-8 max-w-md mx-auto" // Adjusted max-w size
    >
      <a href={live} target="_blank" rel="noopener noreferrer">
        <img
          className="rounded-t-lg w-full h-64 object-cover" // Adjusted height for the image
          src={imgSrc}
          alt={`${title} Thumbnail`}
        />
      </a>
      <div className="p-6 flex flex-col flex-grow"> {/* Adjusted padding */}
        <a href={live} target="_blank" rel="noopener noreferrer">
          <h5 className="mb-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-4 font-normal text-gray-700 dark:text-gray-400 flex-grow">
          {description}
        </p>
        <div className="flex space-x-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-gray-800 rounded-lg hover:bg-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-300"
          >
            View GitHub Repo
          </a>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Live View
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
