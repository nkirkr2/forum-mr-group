import styles from './Cross.module.scss';
import Image from 'next/image';
import { safeImageUrl } from '@/app/lib/safeImageUrl';

type CrossProps = {
  crossContent?: { title?: string; image?: string; text?: string; video?: string };
  style?: React.CSSProperties;
};

function Cross({ crossContent, style }: CrossProps) {
  if (!crossContent) return null;

  const { title = "", image = "", text = "", video= "" } = crossContent;
  const safeImage = safeImageUrl(image);
console.log(video)
  console.log(crossContent)

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
            {
              video !== null ?
              <video 
                  className={styles.video}
                  width="100%" 
                  height="100%" 
                  preload="none"
                  muted 
                  autoPlay 
                  loop 
                  playsInline
                  poster={image ?? undefined}
                  >
                    <source 
                    src={video} 
                    type="video/mp4" 
                    />
                    <track
                      src="/path/to/captions.vtt"
                      kind="subtitles"
                      srcLang="en"
                      label="English"
                    />
                  </video>
              :
              <Image
                src={`${image}`} 
                fill
                alt=''
                style={{ objectFit: "cover" }}
              />
            }
           
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
