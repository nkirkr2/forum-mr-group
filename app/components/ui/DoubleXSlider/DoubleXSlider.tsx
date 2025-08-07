'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useEffect, useState } from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { DoubleXSliderData } from './types';
import styles from './DoubleXSlider.module.scss';
import SliderControls from '../SliderControls/SliderControls';
import Image from 'next/image';

type doubleXSliderProps = {
    doubleXSliderData: DoubleXSliderData;
}

function DoubleXSlider({doubleXSliderData}: doubleXSliderProps) {

    const { images1, images2, paragraph } = doubleXSliderData;
    const image1 = images1[0]
    const image2 = images1[1]
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const swiperRef = useRef<any>(null);
    const paginationRef = useRef<HTMLDivElement | null>(null);
    const [isPaginationReady, setIsPaginationReady] = useState(false);

    useEffect(() => {
        if (paginationRef.current) {
            setIsPaginationReady(true);
        }
    }, [paginationRef.current]);

    useEffect(() => {
        if (swiperRef.current) {
            swiperRef.current.navigation?.update();
            swiperRef.current.pagination?.render();
            swiperRef.current.pagination?.update();
        }
    }, [isPaginationReady]);

    return (
        <div className={styles.doubleXSliderWrapper}>
            <div className={styles.doubleXSlider}>
                <Swiper
                    className={styles.doubleXSlider_first}
                >
                    <SwiperSlide>
                        <Image 
                            src={image1}
                            alt="Логотип"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image 
                            src={image1}
                            alt="Логотип"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image 
                            src={image1}
                            alt="Логотип"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image 
                            src={image1}
                            alt="Логотип"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </SwiperSlide>
                </Swiper>

                {isPaginationReady && (
                    <Swiper
                        modules={[Navigation, Pagination]}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        className={styles.doubleXSlider_second}
                        navigation={{
                            prevEl: '.custom-prev',
                            nextEl: '.custom-next',
                        }}
                        pagination={{
                            el: paginationRef.current,
                            clickable: true,
                        }}
                    >
                        <SwiperSlide>
                            <Image 
                                src={image2}
                                alt="Логотип"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image 
                                src={image1}
                                alt="Логотип"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <Image 
                                src={image2}
                                alt="Логотип"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                            </SwiperSlide>
                        <SwiperSlide>
                            <Image 
                                src={image1}
                                alt="Логотип"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                            </SwiperSlide>
                    </Swiper>
                )}

                <div className={styles.doubleXSlider__text}>
                    <p className="paragraph">{paragraph}</p>
                </div>
            </div>
            <div className={styles.doubleXSlider__controls}>
                <SliderControls paginationRef={paginationRef} />
            </div>
        </div>
    );
}

export default DoubleXSlider;
