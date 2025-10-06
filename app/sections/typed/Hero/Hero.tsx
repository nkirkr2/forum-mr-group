'use client';

import styles from './Hero.module.scss';
import useIsMobile from '@/app/hooks/useIsMobile';

type HeroProps = {
    background: string,
    backgroundMobile: string,
    title: string
}

function Hero({ background, backgroundMobile, title }: HeroProps ) {

    const isMobile = useIsMobile();

    if (isMobile === null) return;

    return (
        <section 
        className={styles.hero} 
        style={{
            backgroundImage: `url(${isMobile ? backgroundMobile : background})`
        }}
        >
            <div className={styles.hero__title}>
                <h1 className='title-b'>{title}</h1>
            </div>
        </section>
    )
}

export default Hero;