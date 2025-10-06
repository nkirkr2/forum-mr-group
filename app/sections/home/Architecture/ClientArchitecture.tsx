'use client';

import useIsMobile from "@/app/hooks/useIsMobile";
import DoubleMobSlider from "@/app/components/ui/DoubleMobSlider/DoubleMobSlider";
import DoubleXSlider from "@/app/components/ui/DoubleXSlider/DoubleXSlider";
import { ArchitectureData } from "./type";

type ClientArchitectureProps = {
    architectureData: ArchitectureData;
}

function ClientArchitecture({ architectureData }: ClientArchitectureProps) {
    const isMobile = useIsMobile();
    if (isMobile === null) return null;

    return isMobile ?
    <DoubleMobSlider doubleMobSliderData={architectureData}/>
    : 
    <DoubleXSlider doubleXSliderData={architectureData}/>
}

export default ClientArchitecture;