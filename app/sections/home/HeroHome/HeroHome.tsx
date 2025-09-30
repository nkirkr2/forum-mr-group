'use client'
import styles from './HeroHome.module.scss';
import useIsMobile from '@/app/hooks/useIsMobile';
import GlassButton from '@/app/components/ui/GlassBtn/GlassBtn';

type HeroHomeProps = {
  heroData: {
    background: string
    backgroundMobile: string;
    text: string;
  };
};

function HeroHome({ heroData }: HeroHomeProps) {

  const isMobile = useIsMobile();

  const { background, backgroundMobile, text } = heroData;

  return (
    <div
      className={styles.root}
      style={{
        backgroundImage: `url(${isMobile ? backgroundMobile : background})`,
      }}
    >
    <div className="container">
        <div className={styles.content}>
            <img src="/images/home/hero-h1.svg" alt="FORUM" />
            <p
            dangerouslySetInnerHTML={{ __html: text || '' }}
            />
            {/* <GlassButton /> */}
        </div>
    </div>
    </div>
  );
}

export default HeroHome;
