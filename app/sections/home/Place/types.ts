type PlaceImage = {
  image: string;
  video?: string;
  imageMobile?: string;
};


export type PlaceData = {
  title: string;
  paragraph?: string;
  images?: PlaceImage[];
};