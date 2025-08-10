import styles from './About.module.scss';

type AboutProps = {
    paragraph: string;
}

function About({ paragraph }: AboutProps) {
    return (
        <section className={styles.about}>
            <div className={styles.about__content}>
                <p className="paragraph">{[paragraph]}</p>
            </div>
        </section>
    )
}

export default About;