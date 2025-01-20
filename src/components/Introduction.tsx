import React from "react";

const Introduction: React.FC = () => {
  return (
    <div className="flex flex-col items-center bg-white py-12">
      <div className="w-32 h-32 md:w-48 md:h-48">
      <img
        src="/portrait.png"
        alt="Your Name"
        className="w-full h-full object-cover"
      />
      </div>
      <div className="text-center mt-6">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Tim Schartman
        </h1>
        <p className="mt-4 text-gray-600 text-md max-w-md mx-auto">
          I'm a passionate Web Developer that likes to think outside the box and find creative solutions. I specialize in web development but you can also find me <a href="https://www.hackthebox.com/" target="_blank">Hacking The Box</a>.
        </p>
      </div>
    </div>
  );
};

export default Introduction;