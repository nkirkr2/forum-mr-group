import Header from "./components/layout/Header/Header";
import FooterBottom from "./components/layout/Footer/FooterBottom";
import Link from "next/link";

function NotFound() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
        <Header />
        <section className="block-404">
            <div className="container">
                <div className="block-404__wrapper">
                <p className="block-404__text">Ошибка 404: такой страницы не&nbsp;существует, воспользуйтесь меню или вернитесь&nbsp;на <Link className="block-404__link" href="/">главную страницу</Link></p>
                </div>
            </div>
        </section>
        <FooterBottom style={{marginTop: '0'}}/>
        </div>
    )
}

export default NotFound;