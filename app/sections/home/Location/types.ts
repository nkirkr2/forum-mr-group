export type Coordinates = [topPct: number, leftPct: number];

export interface LocationPin {
  id: number;
  title: string;
  description: string;
  position: Coordinates; 
  icon: string;         
}

export interface LocationData {
  title: string;
  paragraph: string;
  locations: LocationPin[];
}
