"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { FaFolderOpen, FaBriefcase, FaGraduationCap, FaEnvelope, FaScrewdriverWrench } from "react-icons/fa6";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element | string;
  }[];
  className?: string;
}) => {
  // Keep navbar always visible
  const visible = true;

  const iconFor = (iconKey?: string) => {
    switch (iconKey) {
      case "skills":
        return <FaScrewdriverWrench className="text-lg" />;
      case "projects":
        return <FaFolderOpen className="text-lg" />;
      case "experience":
        return <FaBriefcase className="text-lg" />;
      case "education":
        return <FaGraduationCap className="text-lg" />;
      case "contact":
        return <FaEnvelope className="text-lg" />;
      default:
        return null;
    }
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          // change rounded-full to rounded-lg
          // remove dark:border-white/[0.2] dark:bg-black bg-white border-transparent
          // change  pr-2 pl-8 py-2 to px-10 py-5
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-5 rounded-lg border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-center space-x-4",
          className
        )}
        style={{
          backdropFilter: "blur(16px) saturate(180%)",
          backgroundColor: "rgba(17, 25, 40, 0.75)",
          borderRadius: "12px",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex gap-2 text-neutral-200 hover:text-white"
            )}
          >
            <span className="inline-flex items-center justify-center md:hidden">
              {React.isValidElement(navItem.icon)
                ? navItem.icon
                : iconFor(navItem.icon)}
            </span>
            <span className="text-sm !cursor-pointer hidden md:inline">{navItem.name}</span>
          </Link>
        ))}
        {/* remove this login btn */}
        {/* <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </button> */}
      </motion.div>
    </AnimatePresence>
  );
};
