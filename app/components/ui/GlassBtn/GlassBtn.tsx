"use client";
import { useEffect, useRef } from "react";

export default function GlassButton() {
  const feImageRef = useRef<SVGFEImageElement | null>(null);

  useEffect(() => {
    if (feImageRef.current) {
      fetch("/images/displacement.png")
        .then((res) => res.blob())
        .then((blob) => {
          const url = URL.createObjectURL(blob);
          feImageRef.current!.setAttributeNS(
            "http://www.w3.org/1999/xlink",
            "xlink:href",
            url
          );
        });
    }
  }, []);

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        className="glass-button"
        style={{ filter: "url(#glass)" }}
      >
        <span>пример</span>
      </button>

      <svg
        style={{ position: "absolute", width: 0, height: 0 }}
        aria-hidden="true"
      >
        <filter id="glass" x="0%" y="0%" width="100%" height="100%">
          <feImage
            ref={feImageRef}
            x="0%"
            y="0%"
            width="100%"
            height="100%"
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
