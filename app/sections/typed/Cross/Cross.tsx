import styles from './Cross.module.scss';
import Image from 'next/image';


type CrossProps = {
    crossContent: {title: string, media: string, paragraph: string}
}

function Cross({crossContent}: CrossProps) {

    const { title, media, paragraph } = crossContent

    return (
        <section className={styles.cross}>
            <div className="container">
                <div className={styles.cross__content}>
                    <h2 className="title-b">{title}</h2>
                    <div className={styles.cross__content_media}>
                        <Image
                        src={media}
                        fill
                        alt=''
                        style={{objectFit: 'cover'}}
                        />
                    </div>
                    <p className="paragraph">{paragraph}</p>
                </div>
            </div>
        </section>
    )
}

export default Cross;