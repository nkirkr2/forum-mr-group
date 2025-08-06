'use client'

import DoubleXSlider from "@/app/components/ui/DoubleXSlider/DoubleXSlider";
import { DoubleXSliderData } from "@/app/components/ui/DoubleXSlider/types";

type amenitiesProps = {
    facingsData: DoubleXSliderData;
}

function Facing({facingsData}: amenitiesProps) {

    const { title } = facingsData;
 
    return (
        <section>
            <div className="container">
                <h2 className="title-b">{title}</h2>
                <DoubleXSlider doubleXSliderData={facingsData}/>
            </div>
        </section>
    )
}
export default Facing;