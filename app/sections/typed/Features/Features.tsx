import Image from 'next/image';
import styles from './Features.module.scss';
import { FeaturesData } from './type';


type FeaturesProps = {
    featuresContent: FeaturesData[],
}

function Features({featuresContent}: FeaturesProps) {
    // const featuresItems = [
    // { image: featuresContent.image1, title: featuresContent.title1, text: featuresContent.paragraph1 },
    // { image: featuresContent.image2, title: featuresContent.title2, text: featuresContent.paragraph2 },
    // ];

    console.log(featuresContent)
    // console.log('features', featuresItems)

    // featuresItems.forEach(el => console.log(el))


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