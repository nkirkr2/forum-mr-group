import styles from './About.module.scss';

type AboutProps = {
    text: string;
}

function About({ text }: AboutProps) {

    return (
        <section className={styles.about}>
            <div className={styles.about__content}>
                <p 
                className="paragraph"
                dangerouslySetInnerHTML={{ __html: text || ''}}
                />
            </div>
        </section>
    )
}

export default About;