export type Coordinates = [topPct: number, leftPct: number];

export interface LocationPin {
  id: number;
  title: string;
  text: string;
  coords: string; 
  icon: string;         
}

export interface LocationData {
  title: string;
  paragraph: string;
  locations: LocationPin[];
}
