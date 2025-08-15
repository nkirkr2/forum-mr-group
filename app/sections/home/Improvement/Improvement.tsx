'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef, useEffect } from 'react';
import { Pagination, Navigation, EffectFade, Controller } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import styles from './Improvement.module.scss';
import Image from 'next/image';
import TextLogo from '@/app/components/ui/TextLogo';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { DoubleXSliderData } from '@/app/components/ui/DoubleXSlider/types';

type ImprovementProps = {
  improvementData: DoubleXSliderData;
};

function Improvement({ improvementData }: ImprovementProps) {
  const { images1, paragraph, title } = improvementData;
  const image1 = images1[0];
  const image2 = images1[1];

  const prevBtnRef = useRef<HTMLButtonElement | null>(null);
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const mainSwiperRef = useRef<SwiperClass | null>(null);
  const secondSwiperRef = useRef<SwiperClass | null>(null);

  useEffect(() => {
    if (!mainSwiperRef.current) return;
    const swiper = mainSwiperRef.current;

    // Навигация
    if (prevBtnRef.current && nextBtnRef.current) {
      swiper.params.navigation.prevEl = prevBtnRef.current;
      swiper.params.navigation.nextEl = nextBtnRef.current;
      swiper.navigation.destroy(); // на случай переинициализации
      swiper.navigation.init();
      swiper.navigation.update();
    }

    // Пагинация
    if (paginationRef.current) {
      swiper.params.pagination.el = paginationRef.current;
      swiper.params.pagination.clickable = true;
      swiper.pagination.destroy();
      swiper.pagination.init();
      swiper.pagination.update();
    }

    // Связка с другим слайдером
    if (secondSwiperRef.current) {
      swiper.controller.control = secondSwiperRef.current;
      secondSwiperRef.current.controller.control = swiper;
    }
  }, []);

  return (
    <section className={styles.improvement}>
      <div className="container">
        <div className={styles.improvement__content}>
          {/* Первый слайдер */}
          <Swiper
            className={styles.improvement__content_swiper}
            modules={[Navigation, Pagination, EffectFade, Controller]}
            navigation={{}} // важно: активирует модуль Navigation
            pagination={{}} // важно: активирует модуль Pagination
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={700}
            onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
          >
            <SwiperSlide>
              <Image
                src={image1}
                alt="Логотип"
                fill
                style={{ objectFit: 'cover' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={image2}
                alt="Логотип"
                fill
                style={{ objectFit: 'cover' }}
              />
            </SwiperSlide>
          </Swiper>

          {/* Текст и контролы */}
          <div className={styles.improvement__content_text}>
            <div className={styles.improvement__logo}>
              <TextLogo />
            </div>
            <h2 className="title-b">{title}</h2>
            <p className="paragraph">{paragraph}</p>
            <div className={styles.improvement__controls}>
              <button className="slider-btn" ref={prevBtnRef}>←</button>
              <div className="swiper-pagination" ref={paginationRef} />
              <button className="slider-btn" ref={nextBtnRef}>→</button>
            </div>
          </div>

          {/* Второй слайдер */}
          <Swiper
            className={styles.improvement__content_swiper}
            modules={[EffectFade, Controller]}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            speed={700}
            onSwiper={(swiper) => (secondSwiperRef.current = swiper)}
          >
            <SwiperSlide>
              <Image
                src={image2}
                alt="Логотип"
                fill
                style={{ objectFit: 'cover' }}
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image
                src={image1}
                alt="Логотип"
                fill
                style={{ objectFit: 'cover' }}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default Improvement;
