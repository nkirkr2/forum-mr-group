type ImgText = { image?: string; text?: string };
type Api = {
  firstBlockImage?: string;
  firstBlockText?: string;

  secondBlockTitle?: string;
  secondBlockText?: string;
  secondBlockImages?: ImgText[];

  mapTitle?: string;
  mapText?: string;
  mapSlider?: any[]; 

  environmentTitle?: string;
  environmentSlider?: ImgText[];

  architectureTitle?: string;
  architectureSlider?: ImgText[];

  improvementsTitle?: string;
  improvementsSlider?: ImgText[];

  lobbyTitle?: string;
  lobbySlider?: ImgText[];

  amenItiesTitle?: string;
  amenItiesSlider?: ImgText[];

  finishingTitle?: string;
  finishingSlider?: ImgText[];

  placesolderTitle?: string;
  placesolderSlider?: ImgText[];

  chooseTitle?: string;
  chooseSlider?: ImgText[];
};

const pickImages = (arr?: ImgText[]) => (arr ?? []).map(i => i.image).filter(Boolean) as string[];
const pickTexts  = (arr?: ImgText[]) => (arr ?? []).map(i => (i.text ?? "")).filter(Boolean);

// делим массив картинок пополам: в images1 и images2 (если нужно — поменяйте логику)
function splitImages(arr?: ImgText[]) {
  const imgs = pickImages(arr);
  const mid = Math.ceil(imgs.length / 2);
  return { images1: imgs.slice(0, mid), images2: imgs.slice(mid) };
}

// Иногда сервер присылает html-теги (<span>, <br>). Либо рендерим как HTML,
// либо чистим их. Здесь просто оставим как есть — компоненты смогут
// отрендерить через dangerouslySetInnerHTML.
const keepHtml = (s?: string) => s ?? "";

export function mapApiToHomepage(api: Api) {
  const placeImages = pickImages(api.secondBlockImages);
  const envSplit    = splitImages(api.environmentSlider);
  const archSplit   = splitImages(api.architectureSlider);
  const amenSplit   = splitImages(api.amenItiesSlider);
  const faceSplit   = splitImages(api.finishingSlider);
  const imprImages  = pickImages(api.improvementsSlider);
  const lobbyImages = pickImages(api.lobbySlider);
  const olderImages = pickImages(api.placesolderSlider);
  const aptImages   = pickImages(api.chooseSlider);

  return {
    hero: {
      background: api.firstBlockImage ?? "",
      backgroundMobile: api.firstBlockImage ?? "",
    },

    place: {
      title: keepHtml(api.secondBlockTitle),
      paragraph: keepHtml(api.secondBlockText),
      images: placeImages,
    },

    location: {
      title: keepHtml(api.mapTitle),
      paragraph: keepHtml(api.mapText),
      locations: [], 
    },

    surroundings: {
      title: keepHtml(api.environmentTitle),
      images1: envSplit.images1,
      images2: envSplit.images2,
      paragraphs: pickTexts(api.environmentSlider),
    },

    lobby: {
      title: keepHtml(api.lobbyTitle || "ЛОББИ"),
      paragraphs: pickTexts(api.lobbySlider),
      images: lobbyImages,
    },

    architecture: {
      images1: archSplit.images1,
      images2: archSplit.images2,
      title: keepHtml(api.architectureTitle),
      paragraphs: pickTexts(api.architectureSlider),
    },

    amenities: {
      images1: amenSplit.images1,
      images2: amenSplit.images2,
      title: keepHtml(api.amenItiesTitle || "Amenities"),
      paragraphs: pickTexts(api.amenItiesSlider),
    },

    facing: {
      images1: faceSplit.images1,
      images2: faceSplit.images2,
      title: keepHtml(api.finishingTitle || "ОТДЕЛКА"),
      paragraphs: pickTexts(api.finishingSlider),
    },

    improvement: {
      images: imprImages,
      title: keepHtml(api.improvementsTitle || "БЛАГОУСТРОЙСТВО"),
      paragraphs: pickTexts(api.improvementsSlider),
    },

    older: {
      images: olderImages,
      title: keepHtml(api.placesolderTitle || "МЕСТО СТАРШЕ САМОЙ МОСКВЫ"),
      paragraphs: pickTexts(api.placesolderSlider),
    },

    apartments: {
      images: aptImages,
      title: keepHtml(api.chooseTitle || "Квартиры"),
      paragraphs: pickTexts(api.chooseSlider),
    },
  };
}
