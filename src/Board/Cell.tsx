import { City } from "../Shared/City";
import { ICoordinates } from "../Shared/Coordinates";
import { CityCell } from "./CityCell";

interface ICellProps {
  coorditnates: ICoordinates;
  city?: City;
  onCellUpdate: (newCellState: City | undefined) => void;
}
export const Cell = ({ coorditnates, city, onCellUpdate }: ICellProps) => {
  return (
    <div className="d-flex align-items-center">
      {coorditnates.x},{coorditnates.y}{" "}
      {city && (
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
