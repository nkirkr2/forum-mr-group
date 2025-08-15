'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperClass } from 'swiper';
import { useEffect, useRef, useState } from 'react';
import SliderControls from '../SliderControls/SliderControls';
import { Pagination, Navigation, EffectFade, Controller } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import styles from './DoubleXSlider.module.scss';
import Image from 'next/image';

type Props = {
  doubleXSliderData: {
    images1: string[];
    images2: string[];
    paragraph: string;
  };
  name: string;
};

function DoubleXSlider({ doubleXSliderData, name }: Props) {
  const { images1, images2, paragraph } = doubleXSliderData;

  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [isPaginationReady, setIsPaginationReady] = useState(false);

  const [topSwiper, setTopSwiper] = useState<SwiperClass | null>(null);
  const [bottomSwiper, setBottomSwiper] = useState<SwiperClass | null>(null);

  useEffect(() => {
    if (paginationRef.current) setIsPaginationReady(true);
  }, [paginationRef.current]);

  useEffect(() => {
    if (topSwiper && bottomSwiper && topSwiper.controller && bottomSwiper.controller) {
      topSwiper.controller.control = bottomSwiper;
      bottomSwiper.controller.control = topSwiper;
    }
  }, [topSwiper, bottomSwiper]);
  return (
    <div className={styles.doubleXSliderWrapper}>
      <div className={styles.doubleXSlider}>
        <Swiper
          className={styles.doubleXSlider_first}
          modules={[EffectFade, Controller]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          speed={700}
          onSwiper={(sw) => {
            setTopSwiper(sw);
            if (bottomSwiper && sw.controller && bottomSwiper.controller) {
              sw.controller.control = bottomSwiper;
              bottomSwiper.controller.control = sw;
            }
          }}
        >
          {images1.map((src, i) => (
            <SwiperSlide key={i}>
              <Image src={src} alt={`Слайд ${i + 1}`} fill style={{ objectFit: 'cover' }} />
            </SwiperSlide>
          ))}
        </Swiper>

        {isPaginationReady && (
          <Swiper
            className={styles.doubleXSlider_second}
            modules={[Navigation, Pagination, EffectFade, Controller]}
            navigation={{ prevEl: `#${name}-prev`, nextEl: `#${name}-next` }}
            pagination={{ el: paginationRef.current, clickable: true }}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={700}
            onSwiper={(sw) => {
              setBottomSwiper(sw);
              if (topSwiper && sw.controller && topSwiper.controller) {
                sw.controller.control = topSwiper;
                topSwiper.controller.control = sw;
              }
            }}
          >
            {images2.map((src, i) => (
              <SwiperSlide key={i}>
                <Image src={src} alt={`Слайд ${i + 1}`} fill style={{ objectFit: 'cover' }} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        <div className={styles.doubleXSlider__text}>
          <p className="paragraph">{paragraph}</p>
        </div>
      </div>
            <div className={styles.doubleXSlider__controls}>
                <SliderControls paginationRef={paginationRef} name={name} />
            </div>
        </div>
    );
}

export default DoubleXSlider;
