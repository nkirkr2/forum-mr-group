import { MapPinTypes } from "../../Map/types";
import MapPin from "../MapPin/MapPin";

type MapPinsListProps = {
  pinsList: MapPinTypes[];
  onToggleClick: (id: number) => void;
  activePin: number | null;
}

function MapPinsList({ pinsList, onToggleClick, activePin }: MapPinsListProps) {

  return (
    <>
      {pinsList.map((pin, index) => (
        <MapPin
          key={pin.id}
          pin={pin}
          index={index}
          isOpen={activePin === pin.id}  
          onToggleClick={onToggleClick}
        />
      ))}
    </>
  );
}

export default MapPinsList;
