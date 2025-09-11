import { Metadata } from "next";
import { fetchApiData } from "../lib/api";
import { API_ROUTES } from "../consts";
import Header from "../components/layout/Header/Header";
import Hero from "../sections/typed/Hero/Hero";
import About from "../sections/typed/About/About";
import Gallery from "../sections/typed/Gallery/Gallery";
import Cross from "../sections/typed/Cross/Cross";
import Features from "../sections/typed/Features/Features";
import Footer from "../components/layout/Footer/Footer";


async function getData() {
  return fetchApiData(API_ROUTES.AMENITIES);
}

export async function generateMetadata(): Promise<Metadata> {
  const api = await getData();

  return {
    title: api?.meta?.title ?? "Fallback title",
    description: api?.meta?.description ?? "Fallback description",
  };
}

export default async function Amenities() {
  const api = await getData();

  return (
    <>
      <Header />
      <Hero background={api.mainBanner} title={api.mainTitle} />
      <About text={api.text} />
      <Gallery galleryContent={api.slider} />
      <Cross crossContent={api.blocks[0]} />
      <Features featuresContent={api.blocks.slice(1, 3)} />
      <Footer />
    </>
  );
}
