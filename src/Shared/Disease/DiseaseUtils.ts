import { EDiseaseType } from "../Enums/DiseaseType";

export class DiseaseUtils {
    static getBgColorClassName(diseaseType?: EDiseaseType) {
        switch (diseaseType) {
            case EDiseaseType.Red:
                return "text-disease--red";
            case EDiseaseType.Blue:
                return "text-disease--blue";
            case EDiseaseType.Yellow:
                return "text-disease--yellow";
            case EDiseaseType.Black:
                return "text-disease--black";
            default:
                return "";
        }
    };
}