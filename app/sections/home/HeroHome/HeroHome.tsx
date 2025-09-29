'use client'
import styles from './HeroHome.module.scss';
import useIsMobile from '@/app/hooks/useIsMobile';
// import GlassButton from '@/app/components/ui/GlassBtn/GlassBtn';

type HeroHomeProps = {
  heroData: {
    background: string
    backgroundMobile: string;
  };
};

function HeroHome({ heroData }: HeroHomeProps) {

  const isMobile = useIsMobile();

  const { background, backgroundMobile } = heroData;

  return (
    <div
      className={styles.hero}
      style={{
        backgroundImage: `url(${isMobile ? backgroundMobile : background})`,
      }}
    >
    <div className="container">
        <div className={styles.hero__content}>
            <img src="/images/home/hero-h1.svg" alt="FORUM" />
            <p>ДОМ, КОТОРЫЙ <br />
    ВОСПИТЫВАЕТ <span className='accent'>ВКУС</span></p>
      {/* <GlassButton /> */}
        </div>
    </div>
    </div>
  );
}

export default HeroHome;
