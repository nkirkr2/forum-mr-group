import { Metadata } from "next";
import Header from "../components/layout/Header/Header";
import Hero from "../sections/typed/Hero/Hero";
import About from "../sections/typed/About/About";


export const metadata: Metadata = {
    title: "FORUM - Amenities. Официальный сайт клубного дома от компании MR Group",
}

function Lobby() {
    return (
        <>
        <Header />
        <Hero 
        background={'/images/typed/lobby/hero.jpg'}
        title={'лобби'}
        />
        <About
        paragraph={'В данном проекте лобби — истинная поэзия форм и материалов. Авторы вдохновлялись геометричной строгостью 1930-х, эпохой, подарившей нам культ функциональности и лаконичной красоты. Здесь нет места случайным деталям: только чистые линии, благородная фактура натуральных материалов    и осмысленная сдержанность.'}
        />
        </> 
    )
}

export default Lobby;