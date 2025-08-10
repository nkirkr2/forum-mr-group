import Header from "../components/layout/Header/Header";
import Hero from "../sections/typed/Hero/Hero";
import About from "../sections/typed/About/About";


function Surroundings() {
    return (
        <>
        <Header />
        <Hero
        background={'/images/typed/surroundings/hero.jpg'}
        title={'Окружение'}
        />
        <About 
        paragraph={'В Москве одно особенное место — между Сретенкой и Цветным.'}
        />
        </>
    )
}

export default Surroundings;