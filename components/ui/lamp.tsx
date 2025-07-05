"use client";

import { cn } from "@/lib/utils";
import { useEffect, useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function LampContainer({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, {
    damping: 40,
    stiffness: 400,
    mass: 1,
  });
  const smoothMouseY = useSpring(mouseY, {
    damping: 40,
    stiffness: 400,
    mass: 1,
  });

  const backgroundX = useTransform(smoothMouseX, (val) => `${val}px`);
  const backgroundY = useTransform(smoothMouseY, (val) => `${val}px`);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { left, top } = containerRef.current?.getBoundingClientRect() || {
        left: 0,
        top: 0,
      };
      mouseX.set(event.clientX - left);
      mouseY.set(event.clientY - top);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className={cn("relative flex items-center justify-center", className)}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-0 rounded-2xl bg-[radial-gradient(ellipse_80%_80%_at_center,_rgba(255,255,255,0.05),_transparent)]"
        style={{
          background: `radial-gradient(600px circle at ${backgroundX} ${backgroundY}, rgba(255, 255, 255, 0.07), transparent 80%)`,
        }}
      />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
}
