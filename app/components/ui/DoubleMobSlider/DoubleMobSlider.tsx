import styles from './DoubleMobSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { DoubleXSliderData } from '../DoubleXSlider/types';
import Image from 'next/image';


type doubleMobliderProps = {
    doubleMobliderData: DoubleXSliderData;
}


function DoubleMobSlider({doubleMobliderData}: doubleMobliderProps) {

    const { images1, images2, paragraph } = doubleMobliderData;
    const image1 = images1[0]
    const image2 = images1[1]

    return (
        <div className={styles.doubleMoblider}>
            <Swiper
                onSwiper={(swiper) => console.log(swiper)}
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
            <div className={styles.doubleMoblider__text}>
                <p className="paragraph">{paragraph}</p>
            </div>
            <Swiper
                modules={[Navigation, Pagination]}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                slidesPerView={1}
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
        </div>
    )
}

export default DoubleMobSlider;