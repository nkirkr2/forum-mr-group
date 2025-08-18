'use client'
import styles from './Improvement.module.scss'
import useIsMobile from '@/app/hooks/useIsMobile';
import PyramidSlider from '@/app/components/ui/PyramidSlider/PyramidSlider';
import { ImprovementData } from './types';
import DesktopContent from './DesktopContent';
import MobileContent from './MobileContent';

type ImprovementProps = {
  improvementData: ImprovementData;
};

function Improvement({ improvementData }: ImprovementProps) {

  const isMobile = useIsMobile();
  if (isMobile === null) return null;
  

  return (
    <section className={styles.improvement}>
      <div className="container">
        <div className={styles.improvement__content}>

          {
            isMobile 
            ?
            <>
            <h2 style={{marginRight: 'auto'}}className="title-b">{improvementData.title}</h2>
            <MobileContent sliderData={improvementData} />
            </>
            :
            <DesktopContent sliderData={improvementData}/>
          }


        </div>
      </div>
    </section>
  );
}

export default Improvement;
