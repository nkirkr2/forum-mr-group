import styles from './Amenities.module.scss';
import ClientAmenities from "./ClientAmenities";
import Link from "next/link";
import { AmenitiesData } from "./types";

type AmenitiesProps = {
  amenitiesData: AmenitiesData;
};

function Amenities({ amenitiesData }: AmenitiesProps) {


  const slides = amenitiesData.slides;
  const texts = slides.map(el => el.text);

  return (
    <section className={styles.amenities}>
      <div className="container">
        <h2 className="title-b">{amenitiesData.title}</h2>

        <div className="visually-hidden">
          {texts?.map((p, idx) => (
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
