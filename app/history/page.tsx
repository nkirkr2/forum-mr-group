import Header from "../components/layout/Header/Header";
import Hero from "../sections/typed/Hero/Hero";
import About from "../sections/typed/About/About";

function History() {
    return (
        <>
        <Header />
        <Hero
        background={'/images/typed/history/hero.jpg'}
        title={'История места'}
        />
        <About 
        paragraph={'Этот участок московской земли — немой свидетель ключевых эпох развития нашего города. Старше самой Москвы, он впитал в себя величественный дух времени. Здесь, вблизи FORUM, проходила одна из самых старых и стратегически важных дорог в истории России — она упоминается еще           до основания Москвы в 1147 году.'}
        />
        </>
    )
}

export default History;