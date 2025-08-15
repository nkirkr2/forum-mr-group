import styles from './About.module.scss';

type AboutProps = {
    aboutContent: {paragraph: string}
}

function About({ aboutContent }: AboutProps) {

    const paragraph = aboutContent.paragraph;

    return (
        <section className={styles.about}>
            <div className={styles.about__content}>
                <p className="paragraph">{[paragraph]}</p>
            </div>
        </section>
    )
}

export default About;