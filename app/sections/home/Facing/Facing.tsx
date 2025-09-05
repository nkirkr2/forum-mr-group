'use client'

import DoubleXSlider from "@/app/components/ui/DoubleXSlider/DoubleXSlider";
import DoubleMobSlider from "@/app/components/ui/DoubleMobSlider/DoubleMobSlider";
import { DoubleXSliderData } from "@/app/components/ui/DoubleXSlider/types";
import useIsMobile from "@/app/hooks/useIsMobile";

type amenitiesProps = {
    facingData: DoubleXSliderData;
}

function Facing({facingData}: amenitiesProps) {

    const { title } = facingData;

    const isMobile = useIsMobile();

    if (isMobile === null) {
        return;
    }

 
    return (
        <section>
            <div className="container">
                <h2 className="title-b">{title}</h2>
                {
                    isMobile ?
                    <DoubleMobSlider doubleMobSliderData={facingData}/>
                    :
                    <DoubleXSlider doubleXSliderData={facingData}/>
                }
            </div>
        </section>
    )
}
export default Facing;