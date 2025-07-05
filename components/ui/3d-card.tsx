"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

export function CardContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative perspective-[1000px] ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      {children}
    </motion.div>
  );
}

export function CardBody({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={`rounded-xl transition duration-500 ease-in-out transform-gpu ${className}`}
    >
      {children}
    </motion.div>
  );
}

export function CardItem({
  children,
  translateZ = "50",
  className,
}: {
  children: ReactNode;
  translateZ?: string;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{
        z: parseInt(translateZ),
      }}
    >
      {children}
    </motion.div>
  );
}
