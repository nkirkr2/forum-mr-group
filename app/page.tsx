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
import Improvement from "./sections/home/Improvement/Improvement";
import Older from "./sections/home/Older/Older";
import Apartments from "./sections/home/Apartments/Apartments";
import Silence from "./sections/home/Silence/Silence";
import { homepageData as data } from "./data";


export default function Home() {

  return (
    <>
      <Header />
      <HeroHome heroData={data.hero}/>
      <Place placeData={data.place}/>
      <Location locationData={data.location}/>
      <Surroundings surroundingsData={data.surroundings}/>
      <Architecture architectureData={data.architecture}/>
      <Improvement improvementData={data.improvement}/>
      <Lobby lobbyData={data.lobby}/>
      <Amenities amenitiesData={data.amenities} />
      <Silence />
      <Facing facingsData={data.facing} />
      <Older olderData={data.older}/>
      <Apartments apartmentsData={data.apartments}/>
      <Footer />
    </>
  );
}
