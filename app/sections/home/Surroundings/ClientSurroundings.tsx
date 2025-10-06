'use client';

import DoubleXSlider from '@/app/components/ui/DoubleXSlider/DoubleXSlider';
import DoubleMobSlider from '@/app/components/ui/DoubleMobSlider/DoubleMobSlider';
import useIsMobile from '@/app/hooks/useIsMobile';
import { SurroundingsData } from './type';

type ClientSurroundingsProps = {
  surroundingsData: SurroundingsData;
};

function ClientSurroundings({ surroundingsData }: ClientSurroundingsProps) {
  const isMobile = useIsMobile();
  if (isMobile === null) return null;
  console.log(surroundingsData)

  return isMobile ? (
    <DoubleMobSlider doubleMobSliderData={{ slides: surroundingsData.slides }} />
  ) : (
    <DoubleXSlider doubleXSliderData={{ slides: surroundingsData.slides }} />
  );
}

export default ClientSurroundings;
