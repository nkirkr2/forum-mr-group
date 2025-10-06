'use client';
import styles from './Apartments.module.scss';
import { ApartmentsData } from './type';
import useIsMobile from '@/app/hooks/useIsMobile';

// import DesktopApartments from './DesktopApartments';
// import MobileApartments from './MobileApartments';
import DesktopSingleSlider from '@/app/components/ui/DesktopSingleSlider/DesktopSingleSlider';
import PyramidSlider from '@/app/components/ui/PyramidSlider/PyramidSlider';


type ApartmentsProps = {
  apartmentsData: ApartmentsData;
}

function Apartments({ apartmentsData }: ApartmentsProps) {
  const { title } = apartmentsData;
    
  const isMobile = useIsMobile();
  if (isMobile === null) return;

  return (
    <section>
      <div className="container">
        {
          isMobile 
          ?
          <>
          <h2 className="title-b">{title}</h2>
          <PyramidSlider pyramidSliderData={apartmentsData}/>
          </>
          :
          <>
            <div className={styles.apartments__content}>
              <div className={styles.apartments__content_text}>
                <h2 className="title-b">{title}</h2>
              </div>
              <DesktopSingleSlider sectionData={apartmentsData}/>
            </div>
          </>
        }
        </div>
    </section>
  );
}

export default Apartments;
