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

    static getElementOffset(el: HTMLElement, canvas: HTMLCanvasElement) {
        const rect = el.getBoundingClientRect();
        // console.log(rect);
        const canvasLeft = canvas.getBoundingClientRect().left;
        const canvasTop = canvas.getBoundingClientRect().top;

        return {
            left: rect.left - canvasLeft + 10,
            top: rect.top - canvasTop + 10,
            width: rect.width || el.offsetWidth,
            height: rect.height || el.offsetHeight,
        };
    }

    static connectAllCitiesWithLines(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, cities: { [key in CityId]: City }) {
        if (ctx) {
            for (const cityKeyAsString in cities) {
                const cityKey: CityId = cityKeyAsString as CityId;
                cities[cityKey].neighboringCityIds.forEach((neighborId) => {
                    const fromCity = this.getCityElementId(cityKey);
                    const toCity = this.getCityElementId(neighborId);
                    ctx.strokeStyle = "#e3fe8d65";
                    ctx?.moveTo(
                        this.getElementOffset(fromCity, canvas,).left,
                        this.getElementOffset(fromCity, canvas).top
                    );
                    ctx?.lineTo(
                        this.getElementOffset(toCity, canvas).left,
                        this.getElementOffset(toCity, canvas).top
                    );
                    ctx?.stroke();
                });
            }
        }
    }

    static connectCityAndNeighborsWithLines(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, city: City) {
        ctx.beginPath();
        city?.neighboringCityIds.forEach((nId) => {
            const fromCity = CityUtils.getCityElementId(city.id);
            const toCity = CityUtils.getCityElementId(nId);
            ctx.strokeStyle = "#e3fe";
            ctx?.moveTo(
                CityUtils.getElementOffset(fromCity, canvas).left,
                CityUtils.getElementOffset(fromCity, canvas).top
            );
            ctx?.lineTo(
                CityUtils.getElementOffset(toCity, canvas).left,
                CityUtils.getElementOffset(toCity, canvas).top
            );
            ctx?.stroke();
        });
    }
}