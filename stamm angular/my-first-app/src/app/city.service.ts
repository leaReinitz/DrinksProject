import { Injectable } from '@angular/core';
import { CityClass } from "./city/cityClass";
import {HttpClient} from '@angular/common/http'
import { Observable } from "rxjs";
import {StreetClass} from "./city/streetClass"

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }

  getAllCities():Observable<CityClass[]> {
    return this.http.get<CityClass[]>("https://localhost:44315/api/City/getAllCities")
  }
  getStreetByCityId(selectedIndex:any):Observable<StreetClass[]>{
    return this.http.get<StreetClass[]>(`https://localhost:44315/api/Street/GetStreetByCityId?cityId=${selectedIndex}`)
   }

  
}
