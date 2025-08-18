import styles from './Silence.module.scss';
import { SilenceData } from './types';
import Image from 'next/image';


type SilenceProps = {
    silenceData: SilenceData
}

function Silence({ silenceData }: SilenceProps) {

    const { title, paragraph } = silenceData;

    return (
        <section className={styles.silence}>
            <div className="container">
                <div className={styles.silence__content}>
                    <h2
                    className="title-b"
                    dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <div className={styles.silence__content_img}>
                        <img src="/images/home/silence/silence0.jpg" alt="" />
                        <img src="/images/home/silence/silence0.jpg" alt="" />
                        <img src="/images/home/silence/silence1.jpg" alt="" />
                    </div>
                    <p className={styles.silence__content_text}>{paragraph}
</p>
                </div>
            </div>
        </section>
    )
}

export default Silence;