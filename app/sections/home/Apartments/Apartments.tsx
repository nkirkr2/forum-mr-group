'use client'
import styles from './Apartments.module.scss';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Key } from 'react';
import Image from 'next/image';
import { ApartmentsData } from './type';
import SliderControls from '@/app/components/ui/SliderControls/SliderControls';

type ApartmentsProps = {
    apartmentsData: ApartmentsData;
}


function Apartments({apartmentsData}: ApartmentsProps) {

    const { title, paragraphs, images } = apartmentsData;

    return (
        <section>
            <div className="container">
                <div className={styles.apartments__content}>
                    <div className={styles.apartments__content_text}>
                        <h2 className="title-b">{title}</h2>
                    </div>
                    <Swiper
                    className={styles.apartments__slider_image}
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
                    <div className={styles.apartments__content_bottom}>
                        <Swiper
                        className={styles.apartments__slider_text}
                        >
                        {paragraphs && paragraphs.map((paragraph: string, idx: Key | null | undefined) => (
                            <SwiperSlide key={idx}>
                                <p className="paragraph">{paragraph}</p>
                            </SwiperSlide>
                        ))
                        }
                        </Swiper>
                        <div className={styles.apartments__controls}>
                            <SliderControls />  
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Apartments;