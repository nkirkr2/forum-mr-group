import ClientLobby from './ClientLobby';
import Link from 'next/link';
import styles from './Lobby.module.scss';
import { LobbyData } from './types';

type lobbyProps = {
    lobbyData: LobbyData;
}

function Lobby({lobbyData}: lobbyProps) {

    const {title, paragraphs} = lobbyData;

    return (
        <section className={styles.lobby}>
            <div className="container">
                <div className={styles.lobby__content}>
                <h2 className='title-b mobile-visible'>{title}</h2>

                <div className="visually-hidden">
                {paragraphs?.map((p, idx) => (
                    <p key={idx}>{p}</p>
                ))}
                </div>
                
                <ClientLobby lobbyData={lobbyData}/>
                <Link className='page-link mobile-visible' href='/lobby'>Подробнее</Link>
                </div>
            </div>
        </section>
    )
}

export default Lobby;