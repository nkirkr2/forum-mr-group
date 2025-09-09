import styles from './Surroundings.module.scss';
import { SurroundingsData } from './type';
import ClientSurroundings from './ClientSurroundings';
import Link from 'next/link';

type SurroundingsProps = {
  surroundingsData: SurroundingsData;
};

function Surroundings({ surroundingsData }: SurroundingsProps) {
  const { title, paragraphs } = surroundingsData;

  return (
    <section className={styles.surroundings}>
      <div className="container">
        <h2 className="title-b">{title}</h2>

        <div className="visually-hidden">
          {paragraphs?.map((p, idx) => (
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
