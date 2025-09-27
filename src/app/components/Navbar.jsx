"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Page");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/" },
    { name: "Services", href: "/" },
    { name: "Page", href: "/" },
    { name: "News", href: "/" },
    { name: "Contact Us", href: "/" },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-6 md:px-16 lg:px-24 bg-transparent">
   
      <div className="flex items-center">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-2">
          <span className="text-white font-bold">B</span>
        </div>
        <span className="text-xl font-bold text-white">BitNow</span>
      </div>

    
      <div className="hidden min-[940px]:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`${
              activeItem === item.name
                ? "text-white"
                : "text-gray-300 hover:text-white"
            } transition-colors duration-300`}
            onClick={() => setActiveItem(item.name)}
          >
            {item.name}
          </Link>
        ))}

        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
          Get Started
        </button>
      </div>

      
      <div className="min-[940px]:hidden cursor-pointer">
        <button
          className="text-white cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      
      {isMenuOpen && (
        <div className="min-[940px]:hidden absolute top-full left-0 w-full bg-black/80 py-4 z-40">
          <div className="flex flex-col items-center space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`${
                  activeItem === item.name
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                } transition-colors duration-300`}
                onClick={() => {
                  setActiveItem(item.name);
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
              </Link>
            ))}
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}