import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import { DoubleXSliderData } from './types';
import styles from './DoubleXSlider.module.scss';
import Image from 'next/image';

type doubleXSliderProps = {
    doubleXSliderData: DoubleXSliderData;
}

function DoubleXSlider({doubleXSliderData}: doubleXSliderProps) {

    const { images1, images2, paragraph } = doubleXSliderData;
    const image1 = images1[0]
    const image2 = images1[1]

    return (
        <div className={styles.doubleXSlider}>
            <Swiper
                onSwiper={(swiper) => console.log(swiper)}
                className={styles.doubleXSlider_first}
                slidesPerView={1}
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
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
            <Swiper
                modules={[Navigation, Pagination]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className={styles.doubleXSlider_second}
                slidesPerView={1}
                pagination={{
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
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
            <div className={styles.doubleXSlider__text}>
                <p className="paragraph">{paragraph}</p>
            </div>
        </div>
    );
}

export default DoubleXSlider;