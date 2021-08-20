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
            left: rect.left - 130,
            top: rect.top - window.pageYOffset + 20,
            width: rect.width || el.offsetWidth,
            height: rect.height || el.offsetHeight,
        };
    }

    static connectNeighborsWithLine(el1: HTMLElement,
        el2: HTMLElement,
        color: string,
        thickness: number) {
        // draw a line connecting elements
        var off1 = this.getElementOffset(el1);
        var off2 = this.getElementOffset(el2);
        // bottom right
        var x1 = off1.left + off1.width;
        var y1 = off1.top + off1.height;
        // top right
        var x2 = off2.left + off2.width;
        var y2 = off2.top;
        // distance
        var length = Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        // center
        var cx = (x1 + x2) / 2 - length / 2;
        var cy = (y1 + y2) / 2 - thickness / 2;
        // angle
        var angle = Math.atan2(y1 - y2, x1 - x2) * (180 / Math.PI);
        // make hr
        var htmlLine =
            "<div style='z-index: -1; padding:0px; margin:0px; height:" +
            thickness +
            "px; background-color:" +
            color +
            "; line-height:1px; position:absolute; left:" +
            cx +
            "px; top:" +
            cy +
            "px; width:" +
            length +
            "px; -moz-transform:rotate(" +
            angle +
            "deg); -webkit-transform:rotate(" +
            angle +
            "deg); -o-transform:rotate(" +
            angle +
            "deg); -ms-transform:rotate(" +
            angle +
            "deg); transform:rotate(" +
            angle +
            "deg);' />";
        //
        // alert(htmlLine);
        document.body.innerHTML += htmlLine;
    }
}