import { ICoordinates } from "../Shared/Coordinates";
import { Cell } from "./Cell";

interface IGridProps {
  /**
   * Grid size of the board
   */
  size: { horizontal: number; vertical: number };
}
export const Grid = ({ size }: IGridProps) => {
  return (
    <>
      {/* Generate rows (i.e. Y axis)*/}
      {new Array(size.vertical).fill(null).map((_, vIndex) => {
        return (
          <div key={vIndex}>
            <div className="d-flex my-2 align-items-center">
              {/* Generate columns (i.e. X axis) */}
              {new Array(size.horizontal).fill(null).map((_, hIndex) => {
                const currentCoords: ICoordinates = { x: hIndex, y: vIndex };
                return (
                  <span key={hIndex} className="px-1">
                    <Cell coorditnates={currentCoords} />
                  </span>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};
