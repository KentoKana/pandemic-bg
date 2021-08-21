import { City } from "../Shared/City";
import { CityUtils } from "../Shared/City/CityUtils";
import { Tooltip } from "../UI/Tooltip";

interface ICityCellProps {
  city: City;
  onCityUpdate: (newCityState: City) => void;
  onCitySelect: (selectedCity: City) => void;
}

export const CityCell = ({
  city,
  onCityUpdate,
  onCitySelect,
}: ICityCellProps) => {
  const cityClassName = city
    ? "cursor-pointer text-primary d-flex align-items-center justify-content-center city position-relative " +
      CityUtils.getDiseasedCityClassName(city?.diseaseType, city.diseaseCount)
    : "";
  return (
    <>
      <div
        id={`${city?.id ?? ""}`}
        className={cityClassName}
        onClick={() => {
          onCitySelect(city);
        }}
      >
        {/* {city.coordinates.x},{city.coordinates.y} */}
        <Tooltip target={city.id}>
          {city && (
            <>
              <div>{city.name}</div>
              <div>{city.population}</div>
              <div>{city.diseaseType}</div>
              <div className="text-danger">{city.diseaseCount}</div>
              <div>
                {city.neighboringCityIds.map((id) => {
                  return <div key={id}>{id}</div>;
                })}
              </div>
              <span>
                {city.coordinates.x},{city.coordinates.y}
              </span>
            </>
          )}
          <button
            onClick={() => {
              const clone = city.clone();
              clone.diseaseCount += 1;
              onCityUpdate(clone);
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              const clone = city.clone();
              clone.diseaseCount -= 1;
              onCityUpdate(clone);
            }}
          >
            -
          </button>
        </Tooltip>
        <div
          className="position-absolute text-nowrap"
          style={{ zIndex: 10, fontSize: 12, bottom: -20 }}
        >
          {city.name}
        </div>
      </div>
    </>
  );
};
