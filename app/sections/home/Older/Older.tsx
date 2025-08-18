'use client'
import styles from './Older.module.scss';
import OlderDesktop from './DesktopOlder';
import OlderMobile from './MobileOlder';
import { OlderData } from './types';
import useIsMobile from '@/app/hooks/useIsMobile';

type OlderProps = {
   olderData: OlderData;
}

function Older({olderData}: OlderProps) {

    const isMobile = useIsMobile();
    if (isMobile === null) return;

    return (
        <section className={styles.older}>
            <div className="container">
                {
                    isMobile
                    ?
                    <>
                    <h2 className="title-b">История места</h2>
                    <OlderMobile olderContent={olderData} />
                    </>
                    :
                    <OlderDesktop olderContent={olderData} />
                }
            </div>
        </section>
    )
}

export default Older;