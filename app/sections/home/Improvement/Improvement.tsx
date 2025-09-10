import styles from './Improvement.module.scss'
import { ImprovementData } from './types';
import ClientImprovement from './ClientImprovement';
import Link from 'next/link';

type ImprovementProps = {
  improvementData: ImprovementData;
};

function Improvement({ improvementData }: ImprovementProps) {

  const { title, paragraphs } = improvementData;

  return (
    <section className={styles.improvement}>
      <div className="container">
        <h2 className="title-b mobile-visible">{title}</h2>  

        <div className="visually-hidden">
        {paragraphs?.map((p, idx) => (
            <p key={idx}>{p}</p>
        ))}
        </div>

        <ClientImprovement improvementData={improvementData} />
        <Link className='page-link mobile-visible' href='/improvement'>Подробнее</Link>
      </div>
    </section>
  );
}

export default Improvement;
