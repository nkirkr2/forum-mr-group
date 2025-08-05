import styles from './Surroundings.module.scss';
import Logo from './Logo';
import { SurroundingsData } from './type';

type surroundingsProps = {
    surroundingsData: SurroundingsData
}

function Surroundings({surroundingsData}: surroundingsProps) {

    const { title, paragraph, images } = surroundingsData;

    return (
        <section className={styles.surroundings}>
            <div className="container">
                <div className={styles.surroundings__content}>
                    <h2 className="title-b">{title}</h2>
                    <div className={styles.surroundings__content_cards}>
                        {images && <img src={images[1]} alt="" />}
                        <div>
                            <p className="paragraph">{paragraph}</p>
                            {images && <img src={images[0]} alt="" />}
                        </div>
                    </div>
                    
                    <Logo />
                </div>
            </div>
        </section>
    )
}

export default Surroundings;