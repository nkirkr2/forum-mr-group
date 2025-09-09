import styles from './Improvement.module.scss'
import { ImprovementData } from './types';
import ClientImprovement from './ClientImprovement';

type ImprovementProps = {
  improvementData: ImprovementData;
};

function Improvement({ improvementData }: ImprovementProps) {

  const { title, paragraphs } = improvementData;

  return (
    <section className={styles.improvement}>
      <div className="container">

        <div className="visually-hidden">
        <h2>{title}</h2>
        {paragraphs?.map((p, idx) => (
            <p key={idx}>{p}</p>
        ))}
        </div>

        <ClientImprovement improvementData={improvementData} />

      </div>
    </section>
  );
}

export default Improvement;
