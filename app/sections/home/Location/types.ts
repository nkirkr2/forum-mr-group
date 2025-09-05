// sections/home/Location/types.ts
export type Coordinates = readonly [topPct: number, leftPct: number];

export interface LocationPin {
  id: number;
  title: string;
  description: string;
  position: Coordinates; // проценты относительно фоновой карты: [top, left]
  icon: string;          // путь к svg/png
}

export interface LocationData {
  title: string;
  paragraph: string;
  locations: LocationPin[];
}
