import { EDiseaseType } from "../Enums/DiseaseType";

export class Disease {
    constructor(diseaseType: EDiseaseType, diseaseCount: number) {
        this.diseaseType = diseaseType;
        this.diseaseCount = diseaseCount;
    }

    public diseaseType: EDiseaseType;
    public isCured: boolean = false;
    public diseaseCount: number;

}