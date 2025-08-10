import styles from './Hero.module.scss';

type HeroProps = {
    background: string;
    title: string;
}

function Hero({background, title}: HeroProps) {
    return (
        <section className={styles.hero} style={{'backgroundImage': `url(${background})`}}>
            <div className={styles.hero__title}>
                <h1 className='title-b'>{title}</h1>
            </div>
        </section>
    )
}

export default Hero;