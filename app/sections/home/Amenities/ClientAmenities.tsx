'use client';

import DoubleXSlider from "@/app/components/ui/DoubleXSlider/DoubleXSlider";
import PyramidSlider from "@/app/components/ui/PyramidSlider/PyramidSlider";
import { DoubleXSliderData } from "@/app/components/ui/DoubleXSlider/types";
import useIsMobile from "@/app/hooks/useIsMobile";

type ClientAmenitiesProps = {
  amenitiesData: DoubleXSliderData;
};

function ClientAmenities({ amenitiesData }: ClientAmenitiesProps) {
  const isMobile = useIsMobile();
  if (isMobile === null) return null;

  return isMobile ? (
    <PyramidSlider pyramidSliderData={amenitiesData} />
  ) : (
    <DoubleXSlider doubleXSliderData={amenitiesData} />
  );
}

export default ClientAmenities;
