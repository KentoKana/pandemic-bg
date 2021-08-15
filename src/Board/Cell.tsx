import { ICoordinates } from "../Shared/Coordinates";
import { CityCell } from "./CityCell";

interface ICellProps {
  coorditnates: ICoordinates;
}
export const Cell = ({ coorditnates }: ICellProps) => {
  return (
    <div className="d-flex align-items-center">
      <CityCell coorditnates={coorditnates} />
    </div>
  );
};
