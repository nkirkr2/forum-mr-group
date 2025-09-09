import { DoubleXSliderData } from "@/app/components/ui/DoubleXSlider/types";
import styles from './Amenities.module.scss';
import ClientAmenities from "./ClientAmenities";
import Link from "next/link";

type AmenitiesProps = {
  amenitiesData: DoubleXSliderData;
};

function Amenities({ amenitiesData }: AmenitiesProps) {
  const { title, paragraphs } = amenitiesData;

  return (
    <section className={styles.amenities}>
      <div className="container">
        <h2 className="title-b">{title}</h2>

        <div className="visually-hidden">
          {paragraphs?.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>
        
        <ClientAmenities amenitiesData={amenitiesData} />

        <Link className='page-link' href='/amenities'>Подробнее</Link>
      </div>
    </section>
  );
}

export default Amenities;
