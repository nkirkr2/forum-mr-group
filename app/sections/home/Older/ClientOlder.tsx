'use client';

import useIsMobile from '@/app/hooks/useIsMobile';
import OlderDesktop from './DesktopOlder';
import OlderMobile from './MobileOlder';
import { OlderData } from './types';

type ClientOlderProps = {
  olderData: OlderData;
};

function ClientOlder({ olderData }: ClientOlderProps) {
  
  const isMobile = useIsMobile();
  if (isMobile === null) return null;

  return (
    <>
      {isMobile ? (
        <>
          <h2 className="title-b">История места</h2>
          <OlderMobile olderContent={olderData} />
        </>
      ) : (
        <OlderDesktop olderContent={olderData} />
      )}
    </>
  );
}

export default ClientOlder;
