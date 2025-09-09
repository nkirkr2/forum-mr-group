
import { DoubleXSliderData } from "@/app/components/ui/DoubleXSlider/types";
import ClientFacing from "./ClientFacing";
import Link from "next/link";
import styles from './Facing.module.scss';

type amenitiesProps = {
    facingData: DoubleXSliderData;
}

function Facing({facingData}: amenitiesProps) {

    const { title, paragraphs } = facingData;

    return (
        <section className={styles.facing}>
            <div className="container">
                <h2 className="title-b">{title}</h2>

                <div className="visually-hidden">
                {paragraphs?.map((p, idx) => (
                    <p key={idx}>{p}</p>
                ))}
                </div>
                
                <ClientFacing facingData={facingData}/>

                <Link className='page-link' href='/facing'>Подробнее</Link>

            </div>
        </section>
    )
}
export default Facing;