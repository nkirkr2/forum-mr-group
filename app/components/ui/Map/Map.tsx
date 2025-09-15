/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useRef } from "react";  
import MapPinsList from "./MapPinsList/MapPinsList";
import Panzoom from "@panzoom/panzoom";
import styles from './Map.module.scss';
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
      disablePan: true,
      contain: "outside",
      duration: 400,
      startScale: 1,
      minScale: 1.2,  
      maxScale: 3,
      // animate: true,
      startX:
        mapEl.offsetWidth !== contentEl.scrollWidth
          ? (mapEl.offsetWidth - contentEl.scrollWidth) / 2
          : 0,
    });

    mapEl.addEventListener("wheel", panzoom.zoomWithWheel);
    panzoomRef.current = panzoom; 


    return () => {
      mapEl.removeEventListener("wheel", panzoom.zoomWithWheel);
      panzoom.destroy();
    };
  }, []);

  useEffect(() => {
    if (!activePin || !mapRef.current || !contentRef.current || !panzoomRef.current) return;

    const pinEl = contentRef.current.querySelector(`[data-pin-id="${activePin}"]`) as HTMLElement;
    if (!pinEl) return;

    const mapEl = mapRef.current;
    const contentEl = contentRef.current;
    const panzoom = panzoomRef.current;

    const mapRect = mapEl.getBoundingClientRect();
    const contentRect = contentEl.getBoundingClientRect();
    const pinRect = pinEl.getBoundingClientRect();

    // центр пина в координатах контента
    const pinCenterX = pinRect.left - contentRect.left + pinRect.width / 2;
    const pinCenterY = pinRect.top - contentRect.top + pinRect.height / 2;

    // нужно сдвинуть так, чтобы этот центр оказался в центре контейнера
    const targetX = mapRect.width / 2 - pinCenterX;
    const targetY = mapRect.height / 2 - pinCenterY;

    // 🚩 вот так будет плавно
    panzoom.pan(targetX, targetY, { animate: true, duration: 600 });

    // 🚩 и зум к центру контейнера
    panzoom.zoomToPoint(1.2, {
      clientX: mapRect.width / 2,
      clientY: mapRect.height / 2,
    });
  }, [activePin]);
  

  return (
    <div 
    className={styles.map} 
    ref={mapRef}
    onClick={() => onToggleClick(null)}
    >
      <div className={styles.map__inner} ref={contentRef}>
        <img src="/images/map-bg.png" alt="Карта" />

        <MapPinsList
          pinsList={locations}
          activePin={activePin}
          onToggleClick={onToggleClick}
        />
      </div>
    </div>
  );
}
