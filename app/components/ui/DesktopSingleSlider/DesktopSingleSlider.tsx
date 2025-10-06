import styles from './DesktopSingleSlider.module.scss';
import { useRef, useEffect } from 'react';
import { Navigation, Pagination, EffectFade, Controller } from 'swiper/modules';
import { PaginationOptions } from 'swiper/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import { singleSliderData } from './types';
import Image from 'next/image';
import classNames from 'classnames';


type singleSliderProps = {
    sectionData: singleSliderData;
}

function DesktopSingleSlider({sectionData}: singleSliderProps) {

    const slides = sectionData.slides;
    const texts = slides.map((el) => el.text);

    // const { title, paragraphs, images } = sectionData;


    const imgSwiperRef = useRef<SwiperClass | null>(null);
    const textSwiperRef = useRef<SwiperClass | null>(null);
    const prevBtnRef = useRef<HTMLButtonElement | null>(null);
    const nextBtnRef = useRef<HTMLButtonElement | null>(null);
    const paginationRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
    
        if (!imgSwiperRef.current || !prevBtnRef.current || !nextBtnRef.current || !paginationRef.current) return;

        const swiper = imgSwiperRef.current;

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

    return (
        <>
            <Swiper
                className={styles.sliderImage}
                modules={[Navigation, Pagination, EffectFade, Controller]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                speed={700}
                onSwiper={(swiper) => {
                    imgSwiperRef.current = swiper;
                    if (textSwiperRef.current && swiper.controller && textSwiperRef.current.controller) {
                        swiper.controller.control = textSwiperRef.current;
                        textSwiperRef.current.controller.control = swiper;
                    }
                }}
            >
                {slides?.map((el, idx) => (
                <SwiperSlide key={idx}>
                    {
                        el.video !== null
                        ?
                        <video 
                        className={styles.video}
                        width="100%" 
                        height="100%" 
                        preload="none"
                        muted 
                        autoPlay 
                        loop 
                        playsInline
                        poster={el.image ?? undefined}
                        >
                            <source 
                            src={el.video} 
                            type="video/mp4" 
                            />
                            <track
                            src="/path/to/captions.vtt"
                            kind="subtitles"
                            srcLang="en"
                            label="English"
                            />
                        </video>
                        :
                        <Image
                        src={`${el.image}`} 
                        alt={`Слайд ${idx + 1}`} 
                        fill 
                        style={{ objectFit: 'cover' }}
                        />
                    }
                </SwiperSlide>
                ))}
            </Swiper>

            <div className={styles.contentBottom}>
            <Swiper
            modules={[EffectFade, Controller]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={700}
            className={styles.sliderText}
            onSwiper={(swiper) => {
                    textSwiperRef.current = swiper;
                    if (imgSwiperRef.current && swiper.controller && imgSwiperRef.current.controller) {
                        swiper.controller.control = imgSwiperRef.current;
                        imgSwiperRef.current.controller.control = swiper;
                    }
                }}
                >
                {texts?.map((paragraph,  idx) => (
                <SwiperSlide key={idx}>
                    <p 
                    className="paragraph"
                    dangerouslySetInnerHTML={{ __html: paragraph || ''}}
                    />
                </SwiperSlide>
                ))}
            </Swiper>

            <div className={classNames(styles.sliderControls, 'slider-controls')}>
                <button className='slider-btn' id='apartments-prev' ref={prevBtnRef}>
                        <svg width="44" height="15" viewBox="0 0 44 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.4717 8.53516C43.024 8.53516 43.4717 8.08744 43.4717 7.53516C43.4717 6.98287 43.024 6.53516 42.4717 6.53516L42.4717 8.53516ZM0.821175 6.82805C0.430653 7.21857 0.430653 7.85174 0.821175 8.24226L7.18513 14.6062C7.57566 14.9967 8.20882 14.9967 8.59935 14.6062C8.98988 14.2157 8.98988 13.5825 8.59935 13.192L2.9425 7.53516L8.59935 1.8783C8.98988 1.48778 8.98988 0.854614 8.59935 0.464089C8.20882 0.0735648 7.57566 0.0735648 7.18514 0.464089L0.821175 6.82805ZM42.4717 7.53516L42.4717 6.53516L1.52828 6.53516L1.52828 7.53516L1.52828 8.53516L42.4717 8.53516L42.4717 7.53516Z" fill="#EFEFEF" />
                        </svg>
                </button>
                <div className="swiper-pagination" ref={paginationRef} />
                <button className='slider-btn' id='apartments-next' ref={nextBtnRef}>
                        <svg width="43" height="15" viewBox="0 0 43 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.3208 6.53516C0.768516 6.53516 0.320801 6.98287 0.320801 7.53516C0.320801 8.08744 0.768516 8.53516 1.3208 8.53516L1.3208 6.53516ZM42.3864 8.24227C42.7769 7.85174 42.7769 7.21858 42.3864 6.82805L36.0224 0.464091C35.6319 0.0735664 34.9987 0.0735663 34.6082 0.464091C34.2177 0.854615 34.2177 1.48778 34.6082 1.8783L40.2651 7.53516L34.6082 13.192C34.2177 13.5825 34.2177 14.2157 34.6082 14.6062C34.9987 14.9968 35.6319 14.9968 36.0224 14.6062L42.3864 8.24227ZM1.3208 7.53516L1.3208 8.53516L41.6793 8.53516L41.6793 7.53516L41.6793 6.53516L1.3208 6.53516L1.3208 7.53516Z" fill="#EFEFEF" />
                        </svg>
                </button>
                </div>
            </div>
        </>
    )
}

export default DesktopSingleSlider;
