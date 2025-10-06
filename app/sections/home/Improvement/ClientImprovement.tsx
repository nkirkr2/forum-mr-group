'use client';

import useIsMobile from '@/app/hooks/useIsMobile';
import { ImprovementData } from './types';
import DesktopSingleSlider from '@/app/components/ui/DesktopSingleSlider/DesktopSingleSlider';
import PyramidSlider from '@/app/components/ui/PyramidSlider/PyramidSlider';
import styles from './Improvement.module.scss';

type ClientImprovementProps = {
  improvementData: ImprovementData;
};

function ClientImprovement({ improvementData }: ClientImprovementProps) {

  const isMobile = useIsMobile();
  if (isMobile === null) return null;

  return isMobile ? (
    <PyramidSlider
      pyramidSliderData={improvementData}
    />
  ) : (
    <div className={styles.improvement__content}>
      <div className={styles.improvement__content_text}>
        <h2 className='title-b'>{improvementData.title}</h2>
      </div>
      <DesktopSingleSlider sectionData={improvementData} />
    </div>
  );
}

export default ClientImprovement;
