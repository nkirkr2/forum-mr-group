import styles from './Cross.module.scss';
import Image from 'next/image';
import { safeImageUrl } from '@/app/lib/safeImageUrl';

type CrossProps = {
  crossContent?: { title?: string; image?: string; text?: string };
  style?: React.CSSProperties;
};

function Cross({ crossContent, style }: CrossProps) {
  if (!crossContent) return null;

  const { title = "", image = "", text = "" } = crossContent;
  const safeImage = safeImageUrl(image);


  return (
    <section className={styles.cross} style={style}>
      <div className="container">
        <div className={styles.cross__content}>
          {title && (
            <p
              className="title-b"
              dangerouslySetInnerHTML={{ __html: title }}
            />
          )}

          <div className={styles.cross__content_media}>
            {safeImage && (
              <Image
                src={safeImage}
                fill
                alt=''
                style={{ objectFit: "cover" }}
              />
            )}
          </div>

          {text && 
          <p className="paragraph"
          dangerouslySetInnerHTML={{ __html: text }}
          />
          }
        </div>
      </div>
    </section>
  );
}

export default Cross;
