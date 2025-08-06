'use client'

import DoubleXSlider from "@/app/components/ui/DoubleXSlider/DoubleXSlider";
import { DoubleXSliderData } from "@/app/components/ui/DoubleXSlider/types";

type architectureProps = {
    architectureData: DoubleXSliderData;
}

function Architecture({architectureData}: architectureProps) {

    const { title } = architectureData;
 
    return (
        <section>
            <div className="container">
                <h2 className="title-b">{title}</h2>
                <DoubleXSlider doubleXSliderData={architectureData}/>
            </div>
        </section>
    )
}

export default Architecture;