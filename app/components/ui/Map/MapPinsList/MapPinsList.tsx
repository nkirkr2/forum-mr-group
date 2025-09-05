import { MapPinTypes } from "../../Map/types";
import MapPin from "../MapPin/MapPin";


type MapPinsListProps = {
  pinsList: MapPinTypes[];
  onClick: (index: number) => void;
  openedPin: number | null;
  onToggleClick: (index: number) => void;
}

function MapPinsList({ pinsList, onClick, openedPin, onToggleClick }: MapPinsListProps) {
  return (
    <>
      {pinsList.map((pin, index) => (
        <MapPin
          key={index}
          pin={pin}
          index={index}
          isOpen={openedPin === index}
          onClick={onClick}
          onToggleClick={onToggleClick}
        />
      ))}
    </>
  );
}

export default MapPinsList;