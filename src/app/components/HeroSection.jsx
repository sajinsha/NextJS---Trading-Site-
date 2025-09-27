"use client";
import React, { useState, useEffect } from "react";
import "./cursor-animations.css";
import "./text-animations.css"; 


const animatedTexts = ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
   
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % animatedTexts.length);
    }, 2500); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="relative sm:min-h-screen">
     
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/backgroundimage.jpg')" }}
      ></div>

   
      <div className="absolute inset-0 bg-black/40"></div>

    
      <div className="relative z-10 flex flex-col items-start justify-center min-h-screen px-6 md:px-16 lg:px-24 pt-[50%] sm:pt-[30%]">
       
        <div className="comprehensive-support-container">
          <div className="cursor-icon cs-cursor"></div>
          <div className="bg-blue-600 text-white text-xs px-4 py-1.5 rounded-full">
            Comprehensive Support
          </div>
        </div>

       
        <div className="sustainable-growth-container">
          <div className="cursor-icon sg-cursor"></div>
          <div className="bg-blue-600 text-white text-xs px-4 py-1.5 rounded-full">
            Sustainable Growth
          </div>
        </div>

     
        <h1 className="text-[24px] sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-4 text-left text-white">
          Ultrices ut etiam vulputate ante congue <br />
          jokichn na{" "}
          <span className="text-blue-400 inline-block h-[1.2em] sm:h-[1.3em] align-bottom overflow-hidden">
          
            <span
              key={currentIndex}
              className="hidden sm:inline-block animate-fadeInUp"
            >
              {animatedTexts[currentIndex]}
            </span>
           
            <span className="sm:hidden">{animatedTexts[0]}</span>
          </span>
        </h1>

        <div className="flex flex-row items-center space-x-4 mt-8">
          <button className="bg-blue-600 text-white text-sm px-6 cursor-pointer py-2 rounded-md">
            Learn More
          </button>
          <button className="flex items-center justify-center text-white cursor-pointer">
            <span className="mr-2">Watch Video</span>
          </button>
        </div>
      </div>
    </div>
  );
}