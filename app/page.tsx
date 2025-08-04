import Header from "./components/layout/Header/Header";
import HeroHome from "./sections/home/HeroHome/HeroHome";


export default function Home() {
  return (
    <>
      <Header />
      <HeroHome
        backgroundImage="/images/home/hero.jpg"
      />
    </>
  );
}
