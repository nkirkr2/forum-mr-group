import styles from './HeroHome.module.scss';

type HeroHomeProps = {
  backgroundImage: string;
};

function HeroHome({ backgroundImage }: HeroHomeProps) {
  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: `url(${backgroundImage})`,
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
