import { Metadata } from "next";
import Header from "../components/layout/Header/Header";
import Hero from "../sections/typed/Hero/Hero";
import About from "../sections/typed/About/About";


export const metadata: Metadata = {
    title: "FORUM - Amenities. Официальный сайт клубного дома от компании MR Group",
}

function Amenities() {
    return (
        <>
        <Header />
        <Hero 
        background={'/images/typed/amenities/hero.jpg'}
        title={'Amenities'}
        />
        <About
        paragraph={'FORUM переосмысливает понятие комфорта. Здесь забота о себе становится неотъемлемой частью повседневности — изысканной, продуманной до мелочей и, главное, доступной без лишних усилий.'}
        />
        </> 
    )
}

export default Amenities;