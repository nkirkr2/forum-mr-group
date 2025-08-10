import { Metadata } from "next";
import Header from "../components/layout/Header/Header";
import Hero from "../sections/typed/Hero/Hero";
import About from "../sections/typed/About/About";


export const metadata: Metadata = {
    title: "FORUM - Amenities. Официальный сайт клубного дома от компании MR Group",
}

function Improvement() {
    return (
        <>
        <Header />
        <Hero 
        background={'/images/typed/improvement/hero.jpg'}
        title={'БЛАГОУТРОЙСТВО  '}
        />
        <About
        paragraph={'Ландшафтная архитектура FORUM — продолжение философии проекта, в котором каждая деталь работает на ощущение уединенной, глубоко продуманной среды. Пространство организовано в виде двух внешних зон с разными сценариями и настроением, разграниченных по функции и атмосфере.'}
        />
        </> 
    )
}

export default Improvement;