"use client";

import React, { useState } from "react";
// No Aceternity UI components for this section to avoid previous issues
// import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

// Data for your social and development links
const socialLinksData = [
  {
    id: 1,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/yourprofile", // Replace with your LinkedIn URL
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-blue-400"
      >
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
    description: "Connect professionally",
  },
  {
    id: 2,
    name: "GitHub",
    url: "https://github.com/yourusername", // Replace with your GitHub URL
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-gray-300"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.08-.731.084-.716.084-.716 1.192.085 1.815 1.226 1.815 1.226 1.064 1.816 2.809 1.299 3.49.993.108-.775.418-1.299.762-1.599-2.665-.304-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576c4.765-1.589 8.196-6.086 8.196-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    description: "Explore my code",
  },
  {
    id: 3,
    name: "Instagram",
    url: "https://www.instagram.com/yourhandle", // Replace with your Instagram URL
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-pink-500"
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-3.251-.149-4.771-1.699-4.919-4.919-.058-1.265-.07-1.646-.07-4.85s.012-3.584.07-4.85c.149-3.227 1.664-4.771 4.919-4.919 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.073 4.948.073s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.44-.645 1.44-1.44s-.645-1.44-1.44-1.44z" />
      </svg>
    ),
    description: "See my latest posts",
  },
];

const Clients = () => {
  return (
    <section id="connect" className="py-20 px-4 md:px-8 lg:px-12 bg-gray-950 text-white font-inter">
      <h1 className="heading text-center text-4xl lg:text-5xl font-bold mb-12">
        Connect <span className="text-purple-400">With Me</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-8 max-w-5xl mx-auto">
        {socialLinksData.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)] h-[220px]
                       bg-gray-900 rounded-xl border border-gray-800 shadow-lg overflow-hidden
                       transition-all duration-300 ease-out transform hover:-translate-y-2 hover:shadow-xl
                       flex flex-col items-center justify-center p-6 text-center"
          >
            {/* Background gradient on hover */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-500 opacity-0
                         group-hover:opacity-100 transition-opacity duration-300 ease-out"
            ></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center">
              {link.icon}
              <h3 className="text-xl font-bold text-white mt-4 mb-2">{link.name}</h3>
              <p className="text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                {link.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Clients;
