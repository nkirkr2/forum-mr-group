"use client";
import { useEffect } from "react";

export default function GlassButton() {
  useEffect(() => {
    const feImage = document.querySelector("feImage");

    if (feImage) {
      fetch("/images/displacement.png") 
        .then((response) => response.blob())
        .then((blob) => {
          const objURL = URL.createObjectURL(blob);
          feImage.setAttribute("href", objURL);
        });
    }
  }, []);

  return (
    <div>
      <button className="glass-button">
        {/* <span>пример</span> */}
      </button>

      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter
          id="glass"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          primitiveUnits="objectBoundingBox"
        >
          <feImage
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
            result="map"
          />
          <feGaussianBlur in="SourceGraphic" stdDeviation="0.02" result="blur" />
          <feDisplacementMap
            in="blur"
            in2="map"
            scale="0.8"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </div>
  );
}
