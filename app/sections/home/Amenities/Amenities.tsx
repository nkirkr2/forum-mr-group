'use client'

import DoubleXSlider from "@/app/components/ui/DoubleXSlider/DoubleXSlider";
import DoubleMobSlider from "@/app/components/ui/DoubleMobSlider/DoubleMobSlider";
import { DoubleXSliderData } from "@/app/components/ui/DoubleXSlider/types";
import useIsMobile from "@/app/hooks/useIsMobile";

type amenitiesProps = {
    amenitiesData: DoubleXSliderData;
}

function Amenities({amenitiesData}: amenitiesProps) {

    const { title } = amenitiesData;

    const isMobile = useIsMobile();
    if (isMobile === null) return null;


    console.log(window.innerWidth)
    console.log(isMobile)
    
    return (
        <section>
            <div className="container">
                <h2 className="title-b">{title}</h2>
                {
                    isMobile ?
                    <DoubleMobSlider doubleMobSliderData={amenitiesData}/>
                    :
                    <DoubleXSlider doubleXSliderData={amenitiesData}/>
                }
            </div>
        </section>
    )
}
export default Amenities;