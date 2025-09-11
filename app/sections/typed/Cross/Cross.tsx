import styles from './Cross.module.scss';
import Image from 'next/image';


type CrossProps = {
    crossContent: {title: string, image: string, text: string}
}

function Cross({crossContent}: CrossProps) {

    const { title, image, text } = crossContent;


    return (
        <section className={styles.cross}>
            <div className="container">
                <div className={styles.cross__content}>
                    <h2 
                    className="title-b"
                    dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <div className={styles.cross__content_media}>
                        <Image
                        src={image}
                        fill
                        alt=''
                        style={{objectFit: 'cover'}}
                        />
                    </div>
                    <p className="paragraph">{text}</p>
                </div>
            </div>
        </section>
    )
}

export default Cross;