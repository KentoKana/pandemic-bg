import { useEffect, useRef } from "react";
import { City } from "../Shared/City";
import { Cities } from "../Shared/City/Cities";
import { CityUtils } from "../Shared/City/CityUtils";

interface IGridCanvasProps {
  selectedCity?: City;
  cities?: Cities;
}
export const GridCanvas = ({ selectedCity, cities }: IGridCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef?.current) {
      const ctx = canvasRef.current.getContext("2d");
      if (ctx) {
        // Draw lines between all cities through its neighbors
        if (cities) {
          CityUtils.connectAllCitiesWithLines(canvasRef.current, ctx, cities);
        }
        // Draw lines between selected city and its neighbors
        if (selectedCity) {
          ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          ctx.beginPath();
          ctx.shadowBlur = 2.5;
          ctx.shadowColor = "purple";
          CityUtils.connectCityAndNeighborsWithLines(
            canvasRef.current,
            ctx,
            selectedCity
          );
        }
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
        display: "block",
        zIndex: -1,
        position: "absolute",
        left: 0,
        right: 0,
        margin: "auto",
      }}
    ></canvas>
  );
};
