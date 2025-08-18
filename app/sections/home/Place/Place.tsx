import styles from './Place.module.scss';
import { PlaceData } from './types';

type placeProps = {
   placeData: PlaceData;
}

function Place({placeData}: placeProps) {

    const { title, paragraph, images } = placeData;

    return (
        <section className={styles.place}>
          <div className="container">
            <div className={styles.place__content}>
          <h2
          className="title-b"
          dangerouslySetInnerHTML={{ __html: title }}
        />
              <p className='paragraph'>{paragraph}</p>

              {images && images.length > 0 && (
                <div className={styles.images}>
                  {images.map((src, i) => (
                    <div className={styles.place__image} key={i}>
                      <img src={src} alt="" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </section>
    )
}

export default Place;