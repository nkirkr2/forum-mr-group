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
        background={'/images/typed/architecture/hero.jpg'}
        title={'Architecture'}
        />
        <About
        paragraph={'FORUM — создаёт не просто облик, а атмосферу. Дом точно вписан в ритм Садового кольца          и продолжает историю места, переосмысляя её в современном ключе. Архитектура FORUM ведёт тонкий диалог с легендарным электротеатром «Форум» — раньше здесь собирались на сеансы, теперь каждый резидент наблюдает за городом из своего личного кинозала с панорамным остеклением.'}
        />
        </> 
    )
}

export default Amenities;