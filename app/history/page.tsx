import { Metadata } from "next";
import { fetchApiData } from "../lib/api";
import { API_ROUTES } from "../consts";
import Header from "../components/layout/Header/Header";
import Hero from "../sections/typed/Hero/Hero";
import About from "../sections/typed/About/About";
import Cross from "../sections/typed/Cross/Cross";
import Features from "../sections/typed/Features/Features";
import Footer from "../components/layout/Footer/Footer";


async function getData() {
  return fetchApiData(API_ROUTES.HISTORY);
}

export async function generateMetadata(): Promise<Metadata> {
  const api = await getData();

  return {
    title: api?.meta?.title ?? "FORUM - FORUM. Официальный сайт клубного дома от компании MR Group",
    description: api?.meta?.description ?? "Клубный дом с видовыми квартирами за бывшим кинотеатром Форум от MR Private",
  };
}

async function History() {
    const api = await getData();

    return (
        <>
        <Header />
        <Hero
        background={api.mainBanner} 
        backgroundMobile={api.mainMobileBanner}
        title={api.mainTitle}
        />
        <About text={api.text} />
        <Cross crossContent={{
          title: api.squareTitle,
          text: api.squareText,
          image: api.squareImage,
          video: api.squareVideo,
        }} 
        style={{ marginTop: '0' }}
        />
        <Features featuresContent={api.blocks}/>
        <Footer />
        </> 
    )
}

export default History;