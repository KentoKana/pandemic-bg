import { City, CityId } from ".";
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

    static getCityElementId(id: string) {
        const el = document.getElementById(id);
        if (!el) throw Error(`cannot find #${id}`);
        return el;
    }

    static getElementOffset(el: HTMLElement) {
        const rect = el.getBoundingClientRect();
        return {
            left: rect.left - 285,
            top: rect.top - window.pageYOffset + 5,
            width: rect.width || el.offsetWidth,
            height: rect.height || el.offsetHeight,
        };
    }

    static connectAllCitiesWithLines(ctx: CanvasRenderingContext2D, cities: { [key in CityId]: City }) {
        if (ctx) {
            for (const cityKeyAsString in cities) {
                const cityKey: CityId = cityKeyAsString as CityId;
                cities[cityKey].neighboringCityIds.forEach((neighborId) => {
                    const fromCity = this.getCityElementId(cityKey);
                    const toCity = this.getCityElementId(neighborId);
                    ctx.strokeStyle = "#e3fe8d65";
                    ctx?.moveTo(
                        this.getElementOffset(fromCity).left,
                        this.getElementOffset(fromCity).top
                    );
                    ctx?.lineTo(
                        this.getElementOffset(toCity).left,
                        this.getElementOffset(toCity).top
                    );
                    ctx?.stroke();
                });
            }
        }
    }

    static connectCityAndNeighborsWithLines(ctx: CanvasRenderingContext2D, city: City) {
        ctx.beginPath();
        city?.neighboringCityIds.forEach((nId) => {
            const fromCity = CityUtils.getCityElementId(city.id);
            const toCity = CityUtils.getCityElementId(nId);
            ctx.strokeStyle = "#e3fe";
            ctx?.moveTo(
                CityUtils.getElementOffset(fromCity).left,
                CityUtils.getElementOffset(fromCity).top
            );
            ctx?.lineTo(
                CityUtils.getElementOffset(toCity).left,
                CityUtils.getElementOffset(toCity).top
            );
            ctx?.stroke();
        });
    }
}