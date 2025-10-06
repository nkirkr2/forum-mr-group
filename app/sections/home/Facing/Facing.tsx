
import ClientFacing from "./ClientFacing";
import Link from "next/link";
import styles from './Facing.module.scss';
import classNames from "classnames";
import { FacingData } from "./types";

type facingProps = {
    facingData: FacingData;
}

function Facing({ facingData }: facingProps) {

    const slides = facingData.slides;
    const paragraphs = slides.map(el => el.text);

    return (
        <section className={styles.root}>
            <div className="container">
                <h2 className="title-b">{facingData.title}</h2>

                <div className="visually-hidden">
                {paragraphs?.map((p, idx) => (
                    <p key={idx}>{p}</p>
                ))}
                </div>
                
                <ClientFacing facingData={facingData}/>

                <Link className={classNames(styles.link, 'page-link')} href='/facing'>Подробнее</Link>

            </div>
        </section>
    )
}
export default Facing;