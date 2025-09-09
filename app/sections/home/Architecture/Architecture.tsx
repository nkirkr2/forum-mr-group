import { DoubleXSliderData } from "@/app/components/ui/DoubleXSlider/types";
import ClientArchitecture from "./ClientArchitecture";
import Link from "next/link";

type architectureProps = {
    architectureData: DoubleXSliderData;
}

function Architecture({architectureData}: architectureProps) {

    const { title, paragraphs } = architectureData;

    return (
        <section>
            <div className="container">
                <h2 className="title-b">{title}</h2>

                <div className="visually-hidden">
                {paragraphs?.map((p, idx) => (
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