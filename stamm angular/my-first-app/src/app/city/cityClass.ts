import { StreetClass } from './streetClass';

export class CityClass {
    id: number;
    cityName: string;
    street:StreetClass[]=[];
    constructor(id: number, cityName: string) {
        this.id = id;
        this.cityName = cityName;
    }
}