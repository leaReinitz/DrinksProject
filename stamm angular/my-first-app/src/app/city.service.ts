import { Injectable } from '@angular/core';
import { CityClass } from "./city/cityClass";
import {HttpClient} from '@angular/common/http'
import { Observable } from "rxjs";
import {StreetClass} from "./city/streetClass"
import {StudentClass} from "./city/studentClass"

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
  saveCity(city:CityClass):Observable<CityClass>{
    debugger
    return this.http.post<CityClass>("https://localhost:44315/api/City",city);
  }
  saveStudent(student:StudentClass,courseIdArry:number[]):Observable<void>{
    debugger
    return this.http.post<void>(`https://localhost:44315/api/Default/${student}`,courseIdArry);
  }
deleteCity(id:number):Observable<void>{
return this.http.delete<void>("https://localhost:44315/api/City/"+id)
}
updateCity(city:CityClass):Observable<CityClass>{
  return this.http.put<CityClass>("https://localhost:44315/api/City",city)
}
updateStreet(street:StreetClass):Observable<StreetClass>{
  return this.http.put<StreetClass>("https://localhost:44315/api/City",street)
}
}
