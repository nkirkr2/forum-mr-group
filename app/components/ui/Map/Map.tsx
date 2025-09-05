/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef, useState } from "react";  
import MapPinsList from "./MapPinsList/MapPinsList";
import Panzoom from "@panzoom/panzoom";
import styles from './Map.module.scss';
import { LocationPin } from "@/app/sections/home/Location/types";

type MapProps = {
  locations: LocationPin[];
  onToggleClick: (index: number) => void;
};

export default function Map({ locations, onToggleClick }: MapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [openedPin, setOpenedPin] = useState<number | null>(null);

  useEffect(() => {
    if (!mapRef.current || !contentRef.current) return;

    const mapEl = mapRef.current;       
    const contentEl = contentRef.current;

    const panzoom = Panzoom(contentEl, {
      disableZoom: false,
      contain: "outside",
      duration: 0,
      startScale: 1,
      animate: false,
      startX:
        mapEl.offsetWidth !== contentEl.scrollWidth
          ? (mapEl.offsetWidth - contentEl.scrollWidth) / 2
          : 0,
    });

    mapEl.addEventListener("wheel", panzoom.zoomWithWheel);

    return () => {
      mapEl.removeEventListener("wheel", panzoom.zoomWithWheel);
      panzoom.destroy();
    };
  }, []);


  const togglePin = (index: number) => {
    setOpenedPin((prev) => (prev === index ? null : index));
    console.log(index);
  };

  return (
    <div className={styles.map} ref={mapRef}>
      <div className={styles.map__inner} ref={contentRef}>
        <img src="/images/map-bg.png" alt="Карта" />

        <MapPinsList
          pinsList={locations}
          onClick={togglePin}
          openedPin={openedPin}
          onToggleClick={onToggleClick}
        />

      </div>
    </div>
  );
}
