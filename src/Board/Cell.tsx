import { City } from "../Shared/City";
import { CityCell } from "./CityCell";

interface ICellProps {
  city?: City;
}
export const Cell = ({ city }: ICellProps) => {
  return (
    <div className={`d-flex align-items-center justify-content-center cell`}>
      {!city ? (
        <>{/* {coordinates.x},{coordinates.y} */}</>
      ) : (
        <CityCell city={city} />
      )}
    </div>
  );
};
