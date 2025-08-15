import { Metadata } from "next";
import { lobbyData as data } from "./data";
import Header from "../components/layout/Header/Header";
import Hero from "../sections/typed/Hero/Hero";
import About from "../sections/typed/About/About";
import Gallery from "../sections/typed/Gallery/Gallery";
import Cross from "../sections/typed/Cross/Cross";
import Features from "../sections/typed/Features/Features";
import Footer from "../components/layout/Footer/Footer";


export const metadata: Metadata = {
    title: "FORUM - Лобби. Официальный сайт клубного дома от компании MR Group",
}


function Architecture() {
    return (
        <>
        <Header />
        <Hero heroContent={data.hero} />
        <About aboutContent={data.about}/>
        <Gallery galleryContent={data.gallery}/>
        <Cross crossContent={data.cross}/>
        <Features featuresContent={data.features}/>
        <Footer />
        </> 
    )
}

export default Architecture;