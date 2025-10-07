import ClientArchitecture from "./ClientArchitecture";
import Link from "next/link";
import styles from './Architecture.module.scss';
import { ArchitectureData } from "./type";

export type architectureProps = {
  architectureData: ArchitectureData
};

function Architecture({architectureData}: architectureProps) {

    const slides = architectureData.slides;
    const texts = slides.map(el => el.text);

    return (
        <section className={styles.architecture}>
            <div className="container">
                <h2 className="title-b">{architectureData.title}</h2>

                <div className="visually-hidden">
                {texts?.map((p, idx) => (
                    <p key={idx}>{p}</p>
                ))}
                </div>

                <ClientArchitecture architectureData={architectureData}/>
                <Link className='page-link' href='/architecture'>Подробнее</Link>
            </div>
        </section>
    )
}

export default Architecture;