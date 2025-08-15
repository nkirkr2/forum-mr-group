'use client'
import styles from './Older.module.scss';
import { useRef, useEffect } from 'react';
import { Pagination, Navigation, EffectFade } from 'swiper/modules';
import { Swiper as SwiperClass } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { OlderData } from './types';
import Image from 'next/image';

import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Key } from 'react';

type OlderProps = {
   olderData: OlderData;
}

function Older({olderData}: OlderProps) {

    const {paragraph, images } = olderData;

    const prevBtnRef = useRef<HTMLButtonElement | null>(null);
    const nextBtnRef = useRef<HTMLButtonElement | null>(null);
    const paginationRef = useRef<HTMLDivElement | null>(null);
    const swiperRef = useRef<SwiperClass | null>(null);

    useEffect(() => {
    const swiper = swiperRef.current;
    if (!swiper || !prevBtnRef.current || !nextBtnRef.current || !paginationRef.current) return;

    // @ts-expect-error типы Swiper
    swiper.params.navigation.prevEl = prevBtnRef.current;
    // @ts-expect-error типы Swiper
    swiper.params.navigation.nextEl = nextBtnRef.current;
    // @ts-expect-error типы Swiper
    swiper.params.pagination.el = paginationRef.current;
    swiper.navigation.init();
    swiper.navigation.update();
    swiper.pagination.init();
    swiper.pagination.render(); // иногда помогает при кастомном el
    swiper.pagination.update();
  }, []);

    return (
        <section className={styles.older}>
            <div className="container">
                <div className={styles.older__content}>
                    <Swiper
                    modules={[Navigation, Pagination, EffectFade]}
                    onBeforeInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    effect='fade'
                    fadeEffect={{ crossFade: true }}
                    speed={700}
                    >
                    {images && images.map((image: string | StaticImport, idx: Key | null | undefined) => (
                        <SwiperSlide key={idx}>
                            <Image 
                                src={image}
                                alt="Логотип"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </SwiperSlide>
                    ))
                    }
                    </Swiper>
                <div className={styles.older__content_text}>
                    <h2 className="title-b">МЕСТО СТАРШЕ САМОЙ <span className='accent'>МОСКВЫ</span></h2>
                    <p className="paragraph">{paragraph}</p>
                    <div className={styles.older__controls}>
                       <button className='slider-btn' id='older-prev' ref={prevBtnRef}>
                                <svg width="44" height="15" viewBox="0 0 44 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M42.4717 8.53516C43.024 8.53516 43.4717 8.08744 43.4717 7.53516C43.4717 6.98287 43.024 6.53516 42.4717 6.53516L42.4717 8.53516ZM0.821175 6.82805C0.430653 7.21857 0.430653 7.85174 0.821175 8.24226L7.18513 14.6062C7.57566 14.9967 8.20882 14.9967 8.59935 14.6062C8.98988 14.2157 8.98988 13.5825 8.59935 13.192L2.9425 7.53516L8.59935 1.8783C8.98988 1.48778 8.98988 0.854614 8.59935 0.464089C8.20882 0.0735648 7.57566 0.0735648 7.18514 0.464089L0.821175 6.82805ZM42.4717 7.53516L42.4717 6.53516L1.52828 6.53516L1.52828 7.53516L1.52828 8.53516L42.4717 8.53516L42.4717 7.53516Z" fill="#EFEFEF" />
                                </svg>
                        </button>
                        <div className="swiper-pagination" ref={paginationRef} />
                        <button className='slider-btn' id='older-next' ref={nextBtnRef}>
                                <svg width="43" height="15" viewBox="0 0 43 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.3208 6.53516C0.768516 6.53516 0.320801 6.98287 0.320801 7.53516C0.320801 8.08744 0.768516 8.53516 1.3208 8.53516L1.3208 6.53516ZM42.3864 8.24227C42.7769 7.85174 42.7769 7.21858 42.3864 6.82805L36.0224 0.464091C35.6319 0.0735664 34.9987 0.0735663 34.6082 0.464091C34.2177 0.854615 34.2177 1.48778 34.6082 1.8783L40.2651 7.53516L34.6082 13.192C34.2177 13.5825 34.2177 14.2157 34.6082 14.6062C34.9987 14.9968 35.6319 14.9968 36.0224 14.6062L42.3864 8.24227ZM1.3208 7.53516L1.3208 8.53516L41.6793 8.53516L41.6793 7.53516L41.6793 6.53516L1.3208 6.53516L1.3208 7.53516Z" fill="#EFEFEF" />
                                </svg>
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Older;