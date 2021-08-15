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
          <div>{city.diseaseCount}</div>
        </>
      )}
      <span className="px-1">
        ({city.coordinates.x},{city.coordinates.y})
      </span>
      {city && (
        <button
          onClick={() => {
            const clone = city.clone();
            clone.diseaseCount += 3;
            onCityUpdate(clone);
          }}
        >
          +
        </button>
      )}
    </div>
  );
};
