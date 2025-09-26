'use client'
import styles from './Older.module.scss';
import { OlderData } from './types';
import useIsMobile from '@/app/hooks/useIsMobile';
import ClientOlder from './ClientOlder';


type OlderProps = {
   olderData: OlderData;
}

function Older({olderData}: OlderProps) {

    const { title, paragraphs } = olderData;

    const isMobile = useIsMobile();
    if (isMobile === null) return;

    return (
        <section className={styles.older}>
            <div className="visually-hidden">
            <h2>{title}</h2>
            {paragraphs?.map((p, idx) => (
                <p key={idx}>{p}</p>
            ))}
            </div>
            <div className="container">
                <ClientOlder olderData={olderData}/>
            </div>
        </section>
    )
}

export default Older;