import Image from 'next/image';
import styles from './Features.module.scss';
import { FeaturesData } from './type';


type FeaturesProps = {
    featuresContent: FeaturesData[],
}

function Features({featuresContent}: FeaturesProps) {

    return (
        <section className={styles.features}>
                <div className={styles.features__content}>
                    {featuresContent && featuresContent.map((el, idx) => (
                        <div key={idx} className={styles.features__content_item}>
                            {idx === 0 ?
                                <>
                                <div className={styles.features__content_item__img}>
                                    <Image
                                    src={el.image}
                                    fill
                                    alt=''
                                    />
                                </div>
                                <div className={styles.features__content_item__text}>
                                    <h2 
                                    className="title-b"
                                    dangerouslySetInnerHTML={{ __html: el.title || '' }}
                                    />
                                    <p 
                                    className="paragraph"
                                    dangerouslySetInnerHTML={{ __html: el.text || '' }}
                                    />
                                </div>
                                </>
                                : 
                                <>
                                <div className={styles.features__content_item__text}>
                                    <h2 
                                    className="title-b"
                                    dangerouslySetInnerHTML={{ __html: el.title || '' }}
                                    />
                                    <p 
                                    className="paragraph"
                                    dangerouslySetInnerHTML={{ __html: el.text || '' }}
                                    />
                                </div>
                                <div className={styles.features__content_item__img}>
                                    <Image
                                    src={el.image}
                                    fill
                                    alt=''
                                    />
                                </div>
                                </>
                            }
                        </div>
                    ))}
                </div>
        </section>
    )
}

export default Features;