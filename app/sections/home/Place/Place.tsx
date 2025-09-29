import styles from './Place.module.scss';
import classNames from 'classnames';
import { PlaceData } from './types';

type placeProps = {
   placeData: PlaceData;
}

function Place({placeData}: placeProps) {

    const { title, paragraph, images } = placeData;

    return (
        <section className={classNames(styles.root, styles.place)}>
          <div className="container">
            <div className={classNames(styles.content, styles.place__content)}>
              <h2
              className={classNames(styles.title, 'title-b')}
              dangerouslySetInnerHTML={{ __html: title || ''}}
              />
              <p className={classNames(styles.paragraph, 'paragraph')}
              dangerouslySetInnerHTML={{ __html: paragraph || ''}}
              />

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