"use client";

import { useEffect, useState } from "react";
import styles from "./DynamicAccentUpdater.module.scss";

const accentColors = [
  "moss",
  "green",
  "emerald",
  "aqua",
  "cyan",
  "blue",
  "indigo",
  "violet",
  "magenta",
  "pink",
  "red",
  "orange",
  "yellow",
];

const DynamicAccentUpdater: React.FC = () => {
  const [accentIndex, setAccentIndex] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [lastY, setLastY] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [colorChangeCooldown, setColorChangeCooldown] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const deltaX = Math.abs(event.clientX - lastX);
      const deltaY = Math.abs(event.clientY - lastY);

      setMouseX(event.clientX);
      setMouseY(event.clientY);

      if ((deltaX > 200 || deltaY > 200) && !colorChangeCooldown) {
        setAccentIndex((prevIndex) => (prevIndex + 1) % accentColors.length);
        setLastX(event.clientX);
        setLastY(event.clientY);
        setColorChangeCooldown(true);

        setTimeout(() => {
          setColorChangeCooldown(false);
        }, 2000);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    document.documentElement.style.setProperty(
      "transition",
      "background-color 2s ease, color 2s ease"
    );
    document.documentElement.setAttribute(
      "data-accent",
      accentColors[accentIndex]
    );

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [accentIndex, lastX, lastY, colorChangeCooldown]);

  return (
    <div
      className={styles.glow}
      style={{ left: `${mouseX}px`, top: `${mouseY}px` }}
    />
  );
};

export default DynamicAccentUpdater;
