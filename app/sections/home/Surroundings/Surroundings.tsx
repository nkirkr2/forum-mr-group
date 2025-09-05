'use client';
import styles from './Surroundings.module.scss';
import DoubleXSlider from '@/app/components/ui/DoubleXSlider/DoubleXSlider';
import DoubleMobSlider from '@/app/components/ui/DoubleMobSlider/DoubleMobSlider';
import useIsMobile from '@/app/hooks/useIsMobile';
import { SurroundingsData } from './type';

type surroundingsProps = {
    surroundingsData: SurroundingsData
}

function Surroundings({surroundingsData}: surroundingsProps) {

    const { title } = surroundingsData;

    const isMobile = useIsMobile();
    
    if (isMobile === null) {
        return;
    }

    return (
        <section className={styles.surroundings}>
            <div className="container">
                <h2 className="title-b">{title}</h2>
                {
                    isMobile ?
                    <DoubleMobSlider doubleMobSliderData={surroundingsData}/>
                    :
                    <DoubleXSlider doubleXSliderData={surroundingsData}/>
                }
            </div>
        </section>
    )
}

export default Surroundings;