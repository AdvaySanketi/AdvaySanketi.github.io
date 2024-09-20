"use client";

import React, { CSSProperties, forwardRef, useEffect, useState } from "react";

interface BackgroundProps {
  position?: CSSProperties["position"];
  className?: string;
  style?: React.CSSProperties;
}

const Background = forwardRef<HTMLDivElement, BackgroundProps>(
  ({ position = "fixed", className, style }, ref) => {
    const [stars, setStars] = useState<
      Array<{ id: number; top: string; left: string }>
    >([]);

    return (
      <>
        <div
          ref={ref}
          className={className}
          style={{
            position: position,
            top: "0",
            left: "0",
            zIndex: "0",
            width: "100%",
            height: "100%",
            filter: "contrast(1.5)",
            background:
              "radial-gradient(100% 100% at 49.99% 0%, var(--static-transparent) 0%, var(--page-background) 100%), radial-gradient(87.4% 84.04% at 6.82% 16.24%, var(--brand-background-medium) 0%, var(--static-transparent) 100%), radial-gradient(217.89% 126.62% at 48.04% 0%, var(--accent-solid-medium) 0%, var(--static-transparent) 100%)",
            ...style,
          }}
        ></div>
      </>
    );
  }
);

Background.displayName = "Background";

export { Background };
