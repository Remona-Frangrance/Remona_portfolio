import React from "react";

export const Sparkle = ({ delay }: { delay: number }) => (
  <div
    style={{
      animationDelay: `${delay}s`,
      position: "absolute",
      width: "12px",
      height: "12px",
      borderRadius: "50%",
      background: "rgba(255,255,255,0.7)",
      boxShadow: "0 0 8px 2px #fff",
      top: `${Math.random() * 80}%`,
      left: `${Math.random() * 80}%`,
      animation: "sparkle 1.5s infinite alternate"
    }}
  />
);