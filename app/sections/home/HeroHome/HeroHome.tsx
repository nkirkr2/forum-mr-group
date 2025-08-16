import styles from './HeroHome.module.scss';

type HeroHomeProps = {
  heroData: {background: string};
};

function HeroHome({ heroData }: HeroHomeProps) {

  const { background } = heroData;

  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
    <div className="container">
        <div className={styles.hero__content}>
            <img src="/images/home/hero-h1.svg" alt="FORUM" />
            <p>ДОМ, КОТОРЫЙ <br />
    ВОСПИТЫВАЕТ <span className='accent'>ВКУС</span></p>
        </div>
    </div>
    </div>
  );
}

export default HeroHome;
