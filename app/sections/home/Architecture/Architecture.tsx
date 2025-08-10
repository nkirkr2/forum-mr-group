'use client'

import DoubleXSlider from "@/app/components/ui/DoubleXSlider/DoubleXSlider";
import DoubleMobSlider from "@/app/components/ui/DoubleMobSlider/DoubleMobSlider";
import { DoubleXSliderData } from "@/app/components/ui/DoubleXSlider/types";
import useIsMobile from "@/app/hooks/useIsMobile";

type architectureProps = {
    architectureData: DoubleXSliderData;
}

function Architecture({architectureData}: architectureProps) {

    const { title } = architectureData;

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
                    <DoubleMobSlider doubleMobSliderData={architectureData}/>
                    :
                    <DoubleXSlider doubleXSliderData={architectureData} name={'architecture'}/>
                }
            </div>
        </section>
    )
}

export default Architecture;