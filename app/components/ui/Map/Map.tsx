"use client";
import { useEffect, useRef } from "react";  
import MapPinsList from "./MapPinsList/MapPinsList";
import Panzoom from "@panzoom/panzoom";
import styles from './Map.module.scss';
import Image from "next/image";
import { LocationPin } from "@/app/sections/home/Location/types";

type MapProps = {
  locations: LocationPin[];
  activePin: number | null;
  onToggleClick: (id: number | null) => void;
};

export default function Map({ locations, onToggleClick, activePin }: MapProps) {
  const mapRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const panzoomRef = useRef<ReturnType<typeof Panzoom> | null>(null);

  useEffect(() => {
    if (!mapRef.current || !contentRef.current) return;

    const mapEl = mapRef.current;       
    const contentEl = contentRef.current;

    const panzoom = Panzoom(contentEl, {
      disableZoom: false,
      contain: "outside",
      duration: 400,
      startScale: 1,
      minScale: 1.2,  
      maxScale: 2,
      startX:
        mapEl.offsetWidth !== contentEl.scrollWidth
          ? (mapEl.offsetWidth - contentEl.scrollWidth) / 2
          : 0,
      zoomDoubleClick: false, 
      zoomPinch: false,
    });


    panzoomRef.current = panzoom; 


    return () => {
      mapEl.removeEventListener("wheel", panzoom.zoomWithWheel);
      panzoom.destroy();
    };
  }, []);

  useEffect(() => {
    if (!mapRef.current || !contentRef.current || !panzoomRef.current) return;
    
    const mapEl = mapRef.current;
    const contentEl = contentRef.current;
    const panzoom = panzoomRef.current;
    
    if (activePin === null) {
      panzoom.zoom(1.2);
      return;
    }

    const pinEl = contentRef.current.querySelector(`[data-pin-id="${activePin}"]`) as HTMLElement;
    if (!pinEl) return;

    const mapRect = mapEl.getBoundingClientRect();
    const contentRect = contentEl.getBoundingClientRect();
    const pinRect = pinEl.getBoundingClientRect();

    const pinCenterX = pinRect.left - contentRect.left + pinRect.width / 2;
    const pinCenterY = pinRect.top - contentRect.top + pinRect.height / 2;

    const targetX = mapRect.width / 2 - pinCenterX;
    const targetY = mapRect.height / 2 - pinCenterY;

    panzoom.pan(targetX, targetY, { animate: true, duration: 600 });

    panzoom.zoomToPoint(1.5, {
      clientX: mapRect.width / 2,
      clientY: mapRect.height / 2,
    });

    if (activePin === null) {
      panzoom.zoom(1.2)
    }
  }, [activePin]);


  return (
    <div 
    className={styles.map} 
    ref={mapRef}
    onClick={() => onToggleClick(null)}
    >
      <div className={styles.map__inner} ref={contentRef}>
        <Image
        src='/images/map-bg.png'
        fill
        alt='Карта'
        />
        <MapPinsList
          pinsList={locations}
          activePin={activePin}
          onToggleClick={onToggleClick}
        />
      </div>
    </div>
  );
}
