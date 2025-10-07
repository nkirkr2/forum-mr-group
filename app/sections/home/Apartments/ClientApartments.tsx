'use client';
import useIsMobile from '@/app/hooks/useIsMobile';
import PyramidSlider from '@/app/components/ui/PyramidSlider/PyramidSlider';
import DesktopSingleSlider from '@/app/components/ui/DesktopSingleSlider/DesktopSingleSlider';
import { ApartmentsData } from './type';
import styles from './Apartments.module.scss';

type ClientApartmentsProps = {
  apartmentsData: ApartmentsData;
};

function ClientApartments({ apartmentsData }: ClientApartmentsProps) {
    const isMobile = useIsMobile();
    if (isMobile === null) return null;

    return isMobile ? (
        <>
            <h2 className="title-b">{apartmentsData.title}</h2>
            <PyramidSlider pyramidSliderData={apartmentsData}/>
        </>
        ) : (
        <>
            <div className={styles.apartments__content}>
            <div className={styles.apartments__content_text}>
                <h2 className="title-b">{apartmentsData.title}</h2>
            </div>
            <DesktopSingleSlider sectionData={apartmentsData}/>
            </div>
        </>
    );
}

export default ClientApartments;