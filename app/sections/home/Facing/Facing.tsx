'use client'

import DoubleXSlider from "@/app/components/ui/DoubleXSlider/DoubleXSlider";
import DoubleMobSlider from "@/app/components/ui/DoubleMobSlider/DoubleMobSlider";
import { DoubleXSliderData } from "@/app/components/ui/DoubleXSlider/types";
import useIsMobile from "@/app/hooks/useIsMobile";

type amenitiesProps = {
    facingsData: DoubleXSliderData;
}

function Facing({facingsData}: amenitiesProps) {

    const { title } = facingsData;

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
                    <DoubleMobSlider doubleMobSliderData={facingsData}/>
                    :
                    <DoubleXSlider doubleXSliderData={facingsData}/>
                }
            </div>
        </section>
    )
}
export default Facing;