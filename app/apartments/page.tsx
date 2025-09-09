import { Metadata } from "next";
import { apartmentsData as data } from "./data";
import Header from "../components/layout/Header/Header";
import Hero from "../sections/typed/Hero/Hero";
import About from "../sections/typed/About/About";
import Gallery from "../sections/typed/Gallery/Gallery";
import Cross from "../sections/typed/Cross/Cross";
import Features from "../sections/typed/Features/Features";
import Footer from "../components/layout/Footer/Footer";


export const metadata: Metadata = {
    title: "FORUM - Amenities. Официальный сайт клубного дома от компании MR Group",
}

async function Apartments() {

    const res = await fetch(`https://forum.mr-group.ru/api/page/?id=apartments`, {
    next: { revalidate: 60 }
    });
    const api = await res.json();
    console.log('data from api:', api)
    console.log('arch banner:', typeof api.mainBanner, api.mainBanner);

    return (
        <>
        <Header />
        <Hero
        background={api.mainBanner} 
        title={api.mainTitle}
        />
        <About text={api.text} />
        <Gallery galleryContent={api.slider}/>
        <Cross crossContent={data.cross}/>
        <Features featuresContent={data.features}/>
        <Footer />
        </> 
    )
}

export default Apartments;