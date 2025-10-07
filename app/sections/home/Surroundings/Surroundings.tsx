import styles from './Surroundings.module.scss';
import { SurroundingsData } from './type';
import ClientSurroundings from './ClientSurroundings';
import Link from 'next/link';

type SurroundingsProps = {
  surroundingsData: SurroundingsData;
};

function Surroundings({ surroundingsData }: SurroundingsProps) {

  const slides = surroundingsData.slides;
  const texts = slides.map(el => el.text);


  return (
    <section className={styles.surroundings}>
      <div className="container">
        <h2 className="title-b">{surroundingsData.title}</h2>

        <div className="visually-hidden">
          {texts?.map((p, idx) => (
            <p key={idx}>{p}</p>
          ))}
        </div>

        <ClientSurroundings surroundingsData={surroundingsData} />

        <Link className='page-link' href='/surroundings'>Подробнее</Link>

      </div>
    </section>
  );
}

export default Surroundings;
