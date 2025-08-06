import Header from "./components/layout/Header/Header";
import HeroHome from "./sections/home/HeroHome/HeroHome";
import Place from "./sections/home/Place/Place";
import Location from "./sections/home/Location/Location";
import Surroundings from "./sections/home/Surroundings/Surroundings";
import Lobby from "./sections/home/Lobby/Lobby";
import Footer from "./components/layout/Footer/Footer";
import Architecture from "./sections/home/Architecture/Architecture";
import Amenities from "./sections/home/Amenities/Amenities";
import Facing from "./sections/home/Facing/Facing";


export default function Home() {

  const placeData = {
    title: `ЖИТЬ ТАМ, ГДЕ ТУРИСТЫ
ФОТОГРАФИРУЮТ ФАСАДЫ`,
    paragraph: `Здесь время течёт иначе. Утром заглядываешь
      в крошечную пекарню за кофе и теплыми круассанами к завтраку. Днем на прогулке замечаешь каждую деталь тихих переулков, где спокойно, а в винных барах подают тот самый бургундский. Вечером город открывается с новой стороны — кажется, будто держишь в руках всю Москву.`,
    images: [
      '/images/home/place/place0.jpg',
      '/images/home/place/place1.jpg',
      '/images/home/place/place2.jpg',
      '/images/home/place/place3.jpg',
    ]
  }

  const locationData = {
    title: `ОСОБЕННОЕ
РАСПОЛОЖЕНИЕ`,
    paragraph: `Здесь все, что нужно для комфортной и&nbsp;насыщенной жизни, находится рядом: от знаковых ресторанов до музеев, галерей современного искусства
и памятников архитектуры.`
  }

  const surroundingsData = {
    title: `Окружение`,
    paragraph: `РЯДОМ АПТЕКАРСКИЙ ОГОРОД, ТИШИНА КОТОРОГО КОНТРАСТИРУЕТ С ГОРОДСКИМ РИТМОМ. ПРОГУЛКА ПО РОЖДЕСТВЕНСКОМУ БУЛЬВАРУ, ОТКРЫТИЕ ВЫСТАВКИ В ММОМА, ПРИЯТНЫЙ СПА-РИТУАЛ В САНДУНОВСКИХ БАНЯХ — ВСЁ ЭТО СТАНОВИТСЯ ЧАСТЬЮ ПОВСЕДНЕВНОГО СЦЕНАРИЯ.`,
    images: [
      '/images/home/surroundings/person.jpg',
      '/images/home/surroundings/dog.jpg',
    ]
  }

  const lobbyData = {
    title: `ЛОББИ`,
    paragraph: `ЛОББИ — ОДА БАУХАУСУ. СВЕТ ЛЬЁТСЯ СКВОЗЬ ДВУХСВЕТНОЕ ОСТЕКЛЕНИЕ, ПОДЧЁРКИВАЯ ОБЪЁМ И ЛЁГКОСТЬ ПРОСТРАНСТВА. КОЛЛЕКЦИОННЫЕ ПРЕДМЕТЫ МЕБЕЛИ — ДИВАНЫ И КРЕСЛА С ИСТОРИЕЙ — РАССТАВЛЕНЫ С ПОЧТИ МУЗЕЙНОЙ ТОЧНОСТЬЮ.`,
    images: [
      '/images/home/lobby/lobby0.jpg',
      '/images/home/lobby/lobby1.jpg',
      '/images/home/lobby/lobby2.jpg',
    ]
  }

  const architectureData = {
    images1: [
      '/images/doubleXSlider/doubleX0.jpg',
      '/images/doubleXSlider/doubleX1.jpg',
    ],
    images2: [
      '/images/doubleXSlider/doubleX1.jpg',
      '/images/doubleXSlider/doubleX0.jpg',
    ],
    title: 'Архитектура',
    paragraph: `Пиксельный фасад и глубокие ниши террас создают игру света и чувство уединения. Открытые пространства
в тени живых изгородей, мягкий свет внутри, выразительная геометрия — здесь всё продумано
для вашего комфорта.`
  }
  const amenitiesData = {
    images1: [
      '/images/home/amenities/amenities0.jpg',
      '/images/home/amenities/amenities1.jpg',
    ],
    images2: [
      '/images/home/amenities/amenities2.jpg',
      '/images/home/amenities/amenities3.jpg',
    ],
    title: 'Amenities',
    paragraph: `FORUM переосмысливает понятие комфорта. Здесь забота о себе становится неотъемлемой частью повседневности — изысканной, продуманной
до мелочей и, главное, доступной без лишних усилий.`
  }
  const facingData = {
    images1: [
      '/images/home/facing/facing0.jpg',
      '/images/home/facing/facing1.jpg',
    ],
    images2: [
      '/images/home/facing/facing2.jpg',
      '/images/home/facing/facing3.jpg',
    ],
    title: 'оТДЕЛКА',
    paragraph: `Все квартиры в Forum следуют эстетике Mid Century — не просто дань моде, а настоящая философия. Это стиль, где каждый элемент дышит гармонией: чистые линии, продуманные пропорции, диалог с природой. Пространство должно было стать светлым фоном для жизни — без навязчивости, но с безупречной базой.`
  }

  return (
    <>
      <Header />
      <HeroHome
        backgroundImage="/images/home/hero.jpg"
      />
      <Place placeData={placeData}/>
      <Location locationData={locationData}/>
      <Surroundings surroundingsData={surroundingsData}/>
      <Architecture architectureData={architectureData}/>
      <Lobby lobbyData={lobbyData}/>
      <Amenities amenitiesData={amenitiesData} />
      <Facing facingsData={facingData} />
      <Footer />
    </>
  );
}
