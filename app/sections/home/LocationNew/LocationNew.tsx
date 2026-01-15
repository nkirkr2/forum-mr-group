'use client';

import { useRef, useEffect, useState } from 'react';
import { LocationData, LocationPin } from '../Location/types';
import Panzoom from '@panzoom/panzoom';
import styles from './LocationNew.module.css';
import MapPinsList from '@/app/components/ui/Map/MapPinsList/MapPinsList';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { PaginationOptions } from 'swiper/types';
import { SwiperClass } from 'swiper/react';
import classNames from 'classnames';

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
    const swiperRef = useRef<SwiperClass | null>(null);
    const prevBtnRef = useRef<HTMLButtonElement | null>(null);
    const nextBtnRef = useRef<HTMLButtonElement | null>(null);
    const paginationRef = useRef<HTMLDivElement | null>(null);

    // Инициализация panzoom
    useEffect(() => {
        if (!contentRef.current || !mapRef.current) return;

        const mapEl = mapRef.current;
        const contentEl = contentRef.current;

        panzoomRef.current = Panzoom(contentEl, {
            disableZoom: false,      // Включаем зум!
            contain: 'outside',
            cursor: 'grab',
            minScale: 0.5,
            maxScale: 1.2,
            startScale: 1,
            duration: 400,          // <-- Длительность анимации в мс
            easing: 'ease-in-out',
            pinchAndPan: false, 
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

        useEffect(() => {
        if (!swiperRef.current || !prevBtnRef.current || !nextBtnRef.current || !paginationRef.current) return;

        const swiper = swiperRef.current;

        if (swiper.params.navigation && swiper.params.navigation !== true) {
            const navigation = swiper.params.navigation;
            navigation.prevEl = prevBtnRef.current;
            navigation.nextEl = nextBtnRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
        }

        if (swiper.params.pagination) {
            const pagination = swiper.params.pagination as PaginationOptions;
            pagination.el = paginationRef.current;
            pagination.clickable = true;
            swiper.pagination.destroy();
            swiper.pagination.init();
            swiper.pagination.render();
            swiper.pagination.update();
        }
    }, []);

    // Обработчик клика по пину
    const handlePinClick = (id: number | null) => {
        if (id === null) {
            setActivePin(null);
            return;
        }
        
        if (activePin === id) {
            setActivePin(null);
        } else {
            // Находим индекс пина в массиве
            const index = mapLocations.findIndex(l => l.id === id);
            if (index !== -1 && swiperRef.current) {
                swiperRef.current.slideToLoop(index);
            }
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
                        <h2 className={classNames(styles.title, 'title-b')}>{title}</h2>
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
                <div 
                className={styles.swiper}
                style={{ 
                    opacity: activePin !== null ? 1 : 0, 
                    pointerEvents: activePin !== null ? 'all' : 'none' 
                 }}
                onClick={(e) => e.stopPropagation()}
                >   
             
                    <Swiper
                    modules={[EffectFade, Navigation, Pagination]}
                    effect="fade"
                    fadeEffect={{ crossFade: true }}
                    speed={700}
                    loop={true}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    onRealIndexChange={(swiper) => {
                        const idx = swiper.realIndex;
                        setActivePin(mapLocations[idx].id);
                    }}
                    
                    >
                    {mapLocations.map((location: LocationPin) => (
                        
                        <SwiperSlide 
                        key={location.id}
                        className={styles.slide}
                        >
                            <h3 className={styles.pinTitle}>{location.title}</h3>
                            <p 
                            className={classNames(styles.location__pinDescr, 'paragraph')}
                            dangerouslySetInnerHTML={{ __html: location.text || ''}}
                            />
                        </SwiperSlide>
                    ))}
                    </Swiper>
                    <div 
                    className={styles.controls}
                    style={{ opacity: activePin !== null ? 1 : 0 }}
                    >
                        <button className='slider-btn' id='older-prev' ref={prevBtnRef} onClick={(e) => e.stopPropagation()}>
                            <svg width="44" height="15" viewBox="0 0 44 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.4717 8.53516C43.024 8.53516 43.4717 8.08744 43.4717 7.53516C43.4717 6.98287 43.024 6.53516 42.4717 6.53516L42.4717 8.53516ZM0.821175 6.82805C0.430653 7.21857 0.430653 7.85174 0.821175 8.24226L7.18513 14.6062C7.57566 14.9967 8.20882 14.9967 8.59935 14.6062C8.98988 14.2157 8.98988 13.5825 8.59935 13.192L2.9425 7.53516L8.59935 1.8783C8.98988 1.48778 8.98988 0.854614 8.59935 0.464089C8.20882 0.0735648 7.57566 0.0735648 7.18514 0.464089L0.821175 6.82805ZM42.4717 7.53516L42.4717 6.53516L1.52828 6.53516L1.52828 7.53516L1.52828 8.53516L42.4717 8.53516L42.4717 7.53516Z" fill="#EFEFEF" />
                            </svg>
                        </button>
                        <div className="swiper-pagination" ref={paginationRef}/>
                        <button className='slider-btn' id='older-next' ref={nextBtnRef} onClick={(e) => e.stopPropagation()}>
                            <svg width="43" height="15" viewBox="0 0 43 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.3208 6.53516C0.768516 6.53516 0.320801 6.98287 0.320801 7.53516C0.320801 8.08744 0.768516 8.53516 1.3208 8.53516L1.3208 6.53516ZM42.3864 8.24227C42.7769 7.85174 42.7769 7.21858 42.3864 6.82805L36.0224 0.464091C35.6319 0.0735664 34.9987 0.0735663 34.6082 0.464091C34.2177 0.854615 34.2177 1.48778 34.6082 1.8783L40.2651 7.53516L34.6082 13.192C34.2177 13.5825 34.2177 14.2157 34.6082 14.6062C34.9987 14.9968 35.6319 14.9968 36.0224 14.6062L42.3864 8.24227ZM1.3208 7.53516L1.3208 8.53516L41.6793 8.53516L41.6793 7.53516L41.6793 6.53516L1.3208 6.53516L1.3208 7.53516Z" fill="#EFEFEF" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LocationNew;