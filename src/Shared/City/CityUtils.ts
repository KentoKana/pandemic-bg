import { EDiseaseType } from "../Enums/DiseaseType";

export class CityUtils {

    static getDiseasedCityClassName(diseaseType: EDiseaseType, diseaseCount: number) {
        switch (diseaseType) {
            case EDiseaseType.Red:
                return `city__disease--red${diseaseCount > 0 ? "--level" + diseaseCount : ""}`
            case EDiseaseType.Yellow:
                return `city__disease--yellow${diseaseCount > 0 ? "--level" + diseaseCount : ""}`
            case EDiseaseType.Black:
                return `city__disease--black${diseaseCount > 0 ? "--level" + diseaseCount : ""}`
            case EDiseaseType.Blue:
                return `city__disease--blue${diseaseCount > 0 ? "--level" + diseaseCount : ""}`
            default:
                return ""
        }
    }
}