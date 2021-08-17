import { City } from "../Shared/City";

interface ICityCellProps {
  city: City;
  onCityUpdate: (newCityState: City) => void;
}

export const CityCell = ({ city, onCityUpdate }: ICityCellProps) => {
  return (
    <div>
      {city && (
        <>
          <div>{city.name}</div>
          <div>{city.population}</div>
          <div>{city.diseaseType}</div>
          <div className="text-danger">{city.diseaseCount}</div>
        </>
      )}
      <span className="px-1">
        ({city.coordinates.x},{city.coordinates.y})
      </span>
      {city && (
        <button
          onClick={() => {
            const clone = city.clone();
            // if (clone.diseaseCount + 1 > 3) {
            //   clone.hasOutbreak = true;
            // } else {
            //   clone.hasOutbreak = false;
            // }
            clone.diseaseCount += 1;
            onCityUpdate(clone);
          }}
        >
          +
        </button>
      )}
    </div>
  );
};
