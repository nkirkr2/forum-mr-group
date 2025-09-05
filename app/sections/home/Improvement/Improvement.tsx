'use client'
import styles from './Improvement.module.scss'
import useIsMobile from '@/app/hooks/useIsMobile';
import { ImprovementData } from './types';
import DesktopSingleSlider from '@/app/components/ui/DesktopSingleSlider/DesktopSingleSlider';
import PyramidSlider from '@/app/components/ui/PyramidSlider/PyramidSlider';

type ImprovementProps = {
  improvementData: ImprovementData;
};

function Improvement({ improvementData }: ImprovementProps) {

  const { title } = improvementData;

  const isMobile = useIsMobile();
  if (isMobile === null) return null;
  

  return (
    <section className={styles.improvement}>
      <div className="container">
        {
          isMobile 
          ?
          <>
          <h2 className="title-b">{title}</h2>
            <PyramidSlider
              pyramidSliderData={{
                  images1: improvementData.images,
                  images2: [], 
                  paragraphs: improvementData.paragraphs,
              }}
              />
          </>
          :
          <>
            <div className={styles.improvement__content}>
              <div className={styles.improvement__content_text}>
                <h2 className="title-b">{title}</h2>
              </div>
              <DesktopSingleSlider sectionData={improvementData}/>
            </div>
          </>
        }
        </div>
    </section>
  );
}

export default Improvement;
