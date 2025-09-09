'use client';

import useIsMobile from '@/app/hooks/useIsMobile';
import { LobbyData } from './types';
import DesktopSingleSlider from '@/app/components/ui/DesktopSingleSlider/DesktopSingleSlider';
import PyramidSlider from '@/app/components/ui/PyramidSlider/PyramidSlider';
import styles from './Lobby.module.scss';

type ClientImprovementProps = {
  lobbyData: LobbyData;
};

function ClientLobby({ lobbyData }: ClientImprovementProps) {
  const isMobile = useIsMobile();
  if (isMobile === null) return null;

  return isMobile ? (
    <PyramidSlider
      pyramidSliderData={{
        images1: lobbyData.images,
        images2: [],
        paragraphs: lobbyData.paragraphs,
      }}
    />
  ) : (
    <div className={styles.lobby__content}>
      <div className={styles.lobby__content_text}>
        <h2 className="title-b">{lobbyData.title}</h2>
      </div>
      <DesktopSingleSlider sectionData={lobbyData} />
    </div>
  );
}

export default ClientLobby;
