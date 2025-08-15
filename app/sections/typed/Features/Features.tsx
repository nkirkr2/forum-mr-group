import Image from 'next/image';
import styles from './Features.module.scss';
import { FeaturesData } from './type';


type FeaturesProps = {
    featuresContent: FeaturesData
}

function Features({featuresContent}: FeaturesProps) {

    const { image1, title1, paragraph1, image2, title2, paragraph2 } = featuresContent;

    return (
        <section className={styles.features}>
                <div className={styles.features__content}>
                    <div className={styles.features__content_item}>
                        <div className={styles.features__content_item__img}>
                            <Image
                            src={image1}
                            fill
                            alt=''
                            />
                        </div>
                        <div className={styles.features__content_item__text}>
                            <h2 className="title-b">{title1}</h2>
                            <p className="paragraph">{paragraph1}</p>
                        </div>
                    </div>
                    <div className={styles.features__content_item}>
                        <div className={styles.features__content_item__text}>
                            <h2 className="title-b">{title2}</h2>
                            <p className="paragraph">{paragraph2}</p>
                        </div>
                        <div className={styles.features__content_item__img}>
                            <Image
                            src={image2}
                            fill
                            alt=''
                            />
                        </div>
                    </div>
                </div>
        </section>
    )
}

export default Features;