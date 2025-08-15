import styles from './Hero.module.scss';

type HeroProps = {
    heroContent: {background: string, title: string}
}

function Hero({ heroContent }: HeroProps) {

    const { background, title } = heroContent;

    return (
        <section className={styles.hero} style={{'backgroundImage': `url(${background})`}}>
            <div className={styles.hero__title}>
                <h1 className='title-b'>{title}</h1>
            </div>
        </section>
    )
}

export default Hero;