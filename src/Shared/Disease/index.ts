import { EDiseaseType } from "../Enums/DiseaseType";

export class Disease {
    constructor(diseaseType: EDiseaseType) {
        this.diseaseType = diseaseType;
    }

    diseaseType: EDiseaseType;

}