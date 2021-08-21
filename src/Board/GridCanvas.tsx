import { useEffect, useRef } from "react";
import { City, CityId } from "../Shared/City";
import { CityUtils } from "../Shared/City/CityUtils";

interface IGridCanvasProps {
  selectedCity?: City;
  cities: { [key in CityId]: City };
}
export const GridCanvas = ({ selectedCity, cities }: IGridCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef?.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        CityUtils.connectAllCitiesWithLines(ctx, cities);
      }
    }
  }, [cities, selectedCity]);

  return (
    <canvas
      ref={canvasRef}
      id="canvas"
      width={900}
      height={600}
      style={{
        zIndex: -1,
        position: "absolute",
        left: 0,
        right: 0,
        margin: "auto",
      }}
    ></canvas>
  );
};
