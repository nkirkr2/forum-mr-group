import styles from './Lobby.module.scss';
import { LobbyData } from './types';

type lobbyProps = {
    lobbyData: LobbyData;
}

function Lobby({lobbyData}: lobbyProps) {

    const { title, paragraph, images } = lobbyData;

    return (
        <section className={styles.lobby}>
            <div className="container">
                <div className={styles.lobby__content}>
                    <h2 className="title-b">{title}</h2>
                       {images && images.length > 0 && (
                            <div className={styles.lobby__content_cards}>
                            {images.map((src, i) => (
                                <div className={styles.lobby__content_cards__item} key={i}>
                                {
                                    i === 0 
                                    ? 
                                    <div className={styles.lobby__card_text}>
                                        <h3>{title}</h3>
                                        <p>{paragraph}</p>
                                    </div>
                                    :
                                    ''
                                }
                                <img src={src} alt="" />
                                </div>
                            ))}
                            </div>
                        )}
                    </div>
                </div>
        </section>
    )
}

export default Lobby;