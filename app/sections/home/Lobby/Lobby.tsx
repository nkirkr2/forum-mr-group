import ClientLobby from './ClientLobby';
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

                <div className="visually-hidden">
                <h2>{title}</h2>
                {paragraphs?.map((p, idx) => (
                    <p key={idx}>{p}</p>
                ))}
                </div>
                
                <ClientLobby lobbyData={lobbyData}/>
                </div>
            </div>
        </section>
    )
}

export default Lobby;