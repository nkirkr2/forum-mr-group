'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
import { Pagination, Navigation } from 'swiper/modules';
import styles from './Improvement.module.scss';
import Image from 'next/image';
import TextLogo from '@/app/components/ui/TextLogo';
import SliderControls from '@/app/components/ui/SliderControls/SliderControls';
import 'swiper/css';
import { DoubleXSliderData } from '@/app/components/ui/DoubleXSlider/types';


type ImprovementProps = {
    improvementData: DoubleXSliderData;
}

function Improvement({improvementData}: ImprovementProps) {

    const { images1, images2, paragraph, title } = improvementData;
    const image1 = images1[0]
    const image2 = images1[1]

    const paginationRef = useRef<HTMLDivElement | null>(null);


    return (
        <section className={styles.improvement}>
            <div className="container">
                <div className={styles.improvement__content}>
                    <Swiper
                    className={styles.improvement__content_swiper}
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
                                src={image2}
                                alt="Логотип"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </SwiperSlide>
                    </Swiper>
                    <div className={styles.improvement__content_text}>
                        <div className={styles.improvement__logo}>
                            <TextLogo />
                        </div>
                        <h2 className="title-b">{title}</h2>
                        <p className="paragraph">{paragraph}</p>
                        <SliderControls paginationRef={paginationRef}/>
                    </div>
                    <Swiper
                    className={styles.improvement__content_swiper}
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
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Improvement;