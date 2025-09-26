import { Metadata } from "next";
import { fetchApiData } from "../lib/api";
import { API_ROUTES } from "../consts";
import Header from "../components/layout/Header/Header";
import Hero from "../sections/typed/Hero/Hero";
import About from "../sections/typed/About/About";
import Gallery from "../sections/typed/Gallery/Gallery";
import Cross from "../sections/typed/Cross/Cross";
import Footer from "../components/layout/Footer/Footer";


async function getData() {
  return fetchApiData(API_ROUTES.LOBBY);
}

export async function generateMetadata(): Promise<Metadata> {
  const api = await getData();

  return {
    title: api?.meta?.title ?? "FORUM - FORUM. Официальный сайт клубного дома от компании MR Group",
    description: api?.meta?.description ?? "Клубный дом с видовыми квартирами за бывшим кинотеатром Форум от MR Private",
  };
}

async function Lobby() {
    const api = await getData();

    return (
        <>
        <Header />
        <Hero
        background={api.mainBanner} 
        title={api.mainTitle}
        />
        <About text={api.text} />
        <Gallery galleryContent={api.slider}/>
        <Cross crossContent={{
          title: api.squareTitle,
          text: api.squareText,
          image: api.squareImage,
        }} />
        <Footer />
        </> 
    )
}

export default Lobby;