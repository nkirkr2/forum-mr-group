'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { OlderData } from './types';
import Image from 'next/image';
import styles from './Older.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import { Key } from 'react';
import SliderControls from '@/app/components/ui/SliderControls/SliderControls';

type OlderProps = {
   olderData: OlderData;
}

function Older({olderData}: OlderProps) {

    const {paragraph, images } = olderData;

    return (
        <section className={styles.older}>
            <div className="container">
                <div className={styles.older__content}>
                    <Swiper>
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
                        <SliderControls />
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Older;