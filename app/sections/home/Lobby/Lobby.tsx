'use client';
import styles from './Lobby.module.scss';
import { LobbyData } from './types';
import DesktopSingleSlider from '@/app/components/ui/DesktopSingleSlider/DesktopSingleSlider';
import PyramidSlider from '@/app/components/ui/PyramidSlider/PyramidSlider';
import useIsMobile from '@/app/hooks/useIsMobile';

type lobbyProps = {
    lobbyData: LobbyData;
}

function Lobby({lobbyData}: lobbyProps) {

    const isMobile = useIsMobile();
    if (isMobile === null) return null;

    return (
        <section>
            <div className="container">
                <div className={styles.lobby__content}>
                {
                    isMobile ? (
                        <div className={styles.lobby__content_mobileSlider}>
                            <PyramidSlider
                            pyramidSliderData={{
                                images1: lobbyData.images,
                                images2: [], 
                                paragraphs: lobbyData.paragraphs,
                            }}
                            />
                        </div>
                    ) : (
                        <DesktopSingleSlider sectionData={lobbyData} />
                    )
                }
                </div>
            </div>
        </section>
    )
}

export default Lobby;