import styles from './Improvement.module.scss'
import { ImprovementData } from './types';
import ClientImprovement from './ClientImprovement';
import Link from 'next/link';

type ImprovementProps = {
  improvementData: ImprovementData;
};

function Improvement({ improvementData }: ImprovementProps) {


  const slides = improvementData.slides;
  const paragraphs = slides.map(el => el.text);


  return (
    <section className={styles.improvement}>
      <div className="container">
        <h2 className="title-b mobile-visible">{improvementData.title}</h2>  

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
