import { LocationData } from './types';
import styles from './Location.module.scss';

type locationProps = {
    locationData: LocationData
}

function Location({locationData}: locationProps) {

    const { title, paragraph } = locationData;

    return (
        <section className={styles.location}>
            <div className="container">
                <div className={styles.location__content}>
                    <div className={styles.location__content_text}>
                        <h2 className="title-b">{title}</h2>
                        <p className="paragraph">Здесь все, что нужно для комфортной и насыщенной жизни, находится рядом: от знаковых ресторанов до музеев, галерей современного искусства
    и памятников архитектуры.</p>
                    </div>
                    <div className={styles.location__content_map}>
                        <img src="/images/map.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Location;