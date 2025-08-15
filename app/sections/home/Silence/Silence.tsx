import styles from './Silence.module.scss';
import Image from 'next/image';

function Silence() {
    return (
        <section className={styles.silence}>
            <div className="container">
                <div className={styles.silence__content}>
                    <h2 className="title-b">РЕСТОРАНЫ — В РАДИУСЕ.
    ТИШИНА — <span className="accent">В КВАРТИРЕ.</span></h2>
                    <div className={styles.silence__content_img}>
                        <img src="/images/home/silence/silence0.jpg" alt="" />
                        <img src="/images/home/silence/silence0.jpg" alt="" />
                        <img src="/images/home/silence/silence1.jpg" alt="" />
                    </div>
                    <p className={styles.silence__content_text}>РАСПОЛОЖЕННЫЙ РЯДОМ С&nbsp;ЦВЕТНЫМ БУЛЬВАРОМ, ЭТОТ ДОМ СЛОВНО ПРОДОЛЖЕНИЕ&nbsp;ИСТОРИИ: ОН ВОБРАЛ В СЕБЯ ДУХ СТАРОГО ЭЛЕКТРОТЕАТРА «ФОРУМ»,
НО&nbsp;ГОВОРИТ НА ЯЗЫКЕ&nbsp;СОВРЕМЕННОЙ АРХИТЕКТУРЫ. ЗДЕСЬ РОСКОШЬ В&nbsp;ДЕТАЛЯХ. В&nbsp;ШЕПОТЕ ЛИСТВЫ ЦВЕТНОГО БУЛЬВАРА. МЕСТО&nbsp;ДЛЯ&nbsp;ТЕХ, КТО ЦЕНИТ ПОДЛИННОСТЬ.
</p>
                </div>
            </div>
        </section>
    )
}

export default Silence;