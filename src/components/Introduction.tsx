import React from "react";
import SocialLinks from "./SocialLinks";

const Introduction: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-12 bg-white dark:bg-gray-900 transition-colors">
      {/* Portrait Image */}
      <div className="w-24 h-24 md:w-48 md:h-48 rounded-full overflow-hidden shadow-sm">
        <img
          src="/portrait.png"
          alt="Tim Schartman"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="text-center mt-6">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
          Tim Schartman
        </h1>
        <SocialLinks/>
        <p className="mt-4 text-gray-700 dark:text-gray-300 text-md md:text-lg max-w-md mx-auto">
          I'm a passionate Web Developer who enjoys thinking outside the box to
          find creative solutions. I specialize in web development, but you can
          also find me{" "}
          <a
            href="https://www.hackthebox.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Hacking The Box
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Introduction;