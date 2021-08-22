import { City } from "../Shared/City";
import { EDiseaseType } from "../Shared/Enums/DiseaseType";

interface ICityCardProps {
  selectedCity?: City;
}
export const CityCard = ({ selectedCity }: ICityCardProps) => {
  const getBgColorClassName = (diseaseType?: EDiseaseType) => {
    switch (diseaseType) {
      case EDiseaseType.Red:
        return "city__disease--red--level1";
      case EDiseaseType.Blue:
        return "city__disease--blue--level1";
      case EDiseaseType.Yellow:
        return "city__disease--yellow--level1";
      case EDiseaseType.Black:
        return "city__disease--black--level1";
      default:
        return "";
    }
  };

  return (
    <>
      {!selectedCity ? (
        <></>
      ) : (
        <div
          className={`city city-card text-left ${getBgColorClassName(
            selectedCity.diseaseType
          )}`}
        >
          <h2 className="text-left">{selectedCity?.name}</h2>
          <div>
            <div>Infection Level: {selectedCity?.diseaseCount}</div>
          </div>
        </div>
      )}
    </>
  );
};
