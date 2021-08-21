import { City } from "../Shared/City";
import { CityCell } from "./CityCell";

interface ICellProps {
  city?: City;
  onCellUpdate: (newCellState: City | undefined) => void;
  onCitySelect: (selectedCity: City) => void;
}
export const Cell = ({ city, onCellUpdate, onCitySelect }: ICellProps) => {
  return (
    <div className={`d-flex align-items-center justify-content-center cell`}>
      {!city ? (
        <>{/* {coordinates.x},{coordinates.y} */}</>
      ) : (
        <CityCell
          onCitySelect={(selectedCity) => {
            onCitySelect(selectedCity);
          }}
          onCityUpdate={(newCityState) => {
            onCellUpdate(newCityState);
          }}
          city={city}
        />
      )}
    </div>
  );
};
