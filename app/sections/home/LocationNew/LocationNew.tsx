'use client';

import { useRef, useEffect, useState } from 'react';
import { LocationData } from '../Location/types';
import Panzoom from '@panzoom/panzoom';
import styles from './LocationNew.module.css';
import MapPinsList from '@/app/components/ui/Map/MapPinsList/MapPinsList';

type locationProps = {
    locationData: LocationData
}

function LocationNew({locationData}: locationProps) {
    const { title, paragraph, locations } = locationData;
    
    const mapLocations = locations.map((location, index) => ({
        ...location,
        id: index
    }));

    const [activePin, setActivePin] = useState<number | null>(null);

    const mapRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const panzoomRef = useRef<ReturnType<typeof Panzoom> | null>(null);

    // Инициализация panzoom
    useEffect(() => {
        if (!contentRef.current || !mapRef.current) return;

        const mapEl = mapRef.current;
        const contentEl = contentRef.current;

        panzoomRef.current = Panzoom(contentEl, {
            disableZoom: false,      // Включаем зум!
            contain: 'outside',
            cursor: 'grab',
            minScale: 1,
            maxScale: 2,
            startScale: 1,
            duration: 400,          // <-- Длительность анимации в мс
            easing: 'ease-in-out',
            startX: mapEl.offsetWidth !== contentEl.scrollWidth 
                ? (mapEl.offsetWidth - contentEl.scrollWidth) / 2 
                : 0,
            startY: 0,
        });

        const handleResize = () => {
            if (panzoomRef.current && mapEl && contentEl) {
                panzoomRef.current.reset({
                    startX: mapEl.offsetWidth !== contentEl.scrollWidth 
                        ? (mapEl.offsetWidth - contentEl.scrollWidth) / 2 
                        : 0,
                });
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            panzoomRef.current?.destroy();
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Зум к активному пину
    useEffect(() => {
        if (!mapRef.current || !contentRef.current || !panzoomRef.current) return;
        
        const mapEl = mapRef.current;
        const contentEl = contentRef.current;
        const panzoom = panzoomRef.current;
        
        if (activePin === null) {
            panzoom.zoom(1);
            const startX = mapEl.offsetWidth !== contentEl.scrollWidth 
                ? (mapEl.offsetWidth - contentEl.scrollWidth) / 2 
                : 0;
            panzoom.pan(startX, 0, { animate: true });
            return;
        }

        const pinEl = contentEl.querySelector(`[data-pin-id="${activePin}"]`) as HTMLElement;
        if (!pinEl) return;

        const currentScale = panzoom.getScale();
        const isAlreadyZoomed = currentScale > 1.1;

        const mapRect = mapEl.getBoundingClientRect();
        const contentRect = contentEl.getBoundingClientRect();
        const pinRect = pinEl.getBoundingClientRect();

        // Позиция центра пина относительно контента
        const pinCenterX = pinRect.left - contentRect.left + pinRect.width / 2;
        const pinCenterY = pinRect.top - contentRect.top + pinRect.height / 2;

        if (isAlreadyZoomed) {
            // Уже в зуме — просто перемещаем к пину
            // Вычисляем текущую позицию pan
            const currentPan = panzoom.getPan();
            
            // Куда нужно переместить, чтобы пин оказался в центре
            // pinRect уже учитывает текущий scale, поэтому просто считаем смещение
            const offsetX = mapRect.width / 2 - (pinRect.left - mapRect.left + pinRect.width / 2);
            const offsetY = mapRect.height / 2 - (pinRect.top - mapRect.top + pinRect.height / 2);
            
            const targetX = currentPan.x + offsetX;
            const targetY = currentPan.y + offsetY;

            panzoom.pan(targetX, targetY, { animate: true });
        } else {
            // Первый зум — делаем полный зум + центрирование
            const targetX = mapRect.width / 2 - pinCenterX;
            const targetY = mapRect.height / 2 - pinCenterY;

            panzoom.pan(targetX, targetY, { animate: true });
            panzoom.zoomToPoint(1.5, {
                clientX: pinRect.left + pinRect.width / 2,
                clientY: pinRect.top + pinRect.height / 2,
            });
        }

    }, [activePin]);

    // Обработчик клика по пину
    const handlePinClick = (id: number | null) => {
        if (activePin === id) {
            // Если кликнули на уже активный пин — закрываем
            setActivePin(null);
        } else {
            setActivePin(id);
        }
    };

    // Клик по карте (не по пину) — сбрасываем
    const handleMapClick = () => {
        setActivePin(null);
    };

    return (
        <section className={styles.location} id="location">
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.text}>
                        <h2 className="title-b">{title}</h2>
                        <p 
                        className="paragraph"
                        dangerouslySetInnerHTML={{ __html: paragraph || ''}}
                        />
                    </div>
                    <div className={styles.map} ref={mapRef} onClick={handleMapClick}>
                        <div className={styles.mapContent} ref={contentRef}>
                            <img src="/images/map-new.png" alt="Карта" draggable={false} />
                            
                            <MapPinsList
                                pinsList={mapLocations}
                                activePin={activePin}
                                onToggleClick={handlePinClick}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LocationNew;