'use client';

import DoubleXSlider from "@/app/components/ui/DoubleXSlider/DoubleXSlider";
import DoubleMobSlider from "@/app/components/ui/DoubleMobSlider/DoubleMobSlider";
import { DoubleXSliderData } from "@/app/components/ui/DoubleXSlider/types";
import useIsMobile from "@/app/hooks/useIsMobile";

type ClientFacingProps = {
    facingData: DoubleXSliderData
}

function ClientFacing({ facingData }: ClientFacingProps) {

    const isMobile = useIsMobile();
    if (isMobile === null) return null;

    return isMobile ?
    <DoubleMobSlider doubleMobSliderData={facingData}/>
    :
    <DoubleXSlider doubleXSliderData={facingData}/> 
}

export default ClientFacing;