import { useEffect, useRef, useCallback } from 'react';
import type { Swiper as SwiperClass } from 'swiper';
import { PaginationOptions } from 'swiper/types';

export function useDoubleXSlider() {
  const img1SwiperRef = useRef<SwiperClass | null>(null);
  const img2SwiperRef = useRef<SwiperClass | null>(null);
  const textSwiperRef = useRef<SwiperClass | null>(null);
  const prevBtnRef = useRef<HTMLButtonElement | null>(null);
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);

  // связываем три слайдера
  const linkControllers = useCallback(() => {
  const s1 = img1SwiperRef.current;
  const s2 = img2SwiperRef.current;
  const tx = textSwiperRef.current;

  if (s1?.controller && s2?.controller && tx?.controller) {
    // главный — s1
    s1.controller.control = [s2, tx];
    s2.controller.control = s1;
    tx.controller.control = s1;
  }
}, []);


  // навигация и пагинация
  useEffect(() => {
    const swiper = img1SwiperRef.current;
    if (!swiper || !prevBtnRef.current || !nextBtnRef.current || !paginationRef.current) return;

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

  return {
    img1SwiperRef,
    img2SwiperRef,
    textSwiperRef,
    prevBtnRef,
    nextBtnRef,
    paginationRef,
    linkControllers,
  };
}
