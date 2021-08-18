import { City } from "../Shared/City";
import { ICoordinates } from "../Shared/Coordinates";
import { CityCell } from "./CityCell";

interface ICellProps {
  coordinates: ICoordinates;
  city?: City;
  onCellUpdate: (newCellState: City | undefined) => void;
}
export const Cell = ({ coordinates, city, onCellUpdate }: ICellProps) => {
  return (
    <div className={`d-flex align-items-center justify-content-center cell`}>
      {!city ? (
        <>
          {coordinates.x},{coordinates.y}
        </>
      ) : (
        <CityCell
          onCityUpdate={(newCityState) => {
            onCellUpdate(newCityState);
          }}
          city={city}
        />
      )}
    </div>
  );
};
