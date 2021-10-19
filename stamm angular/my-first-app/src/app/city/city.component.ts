import { Component, OnInit } from '@angular/core';
import { CityService } from "../city.service";
import { CityClass } from './cityClass';
import { StreetClass } from './streetClass';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  citiesArry: CityClass[] = [];
  streetsArry: StreetClass[] = [];
  someProperty= '';
  cityName:any;
  newCity= new CityClass(0,' ');
  newStreet = new StreetClass(4,'bklh',7)

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.getAllCities().subscribe(data => { this.citiesArry = data
    console.log(data);
    },
      err => { console.log(err) })
  }

  chooseCity(event:any) {
    console.log(this.someProperty);
    
    debugger
    let i = event.target.options.selectedIndex
    console.log(event.target.options.selectedIndex);
    
    // $("#ulStreet").remove();
    this.cityService.getStreetByCityId(i+1).subscribe(data=>
      {this.streetsArry=data,
      console.log(this.streetsArry);
      debugger
      },err=>{console.log(err)})
}
addCity(){
   this.newCity.cityName=this.cityName;
  this.cityService.saveCity(this.newCity)
  .subscribe(data=>{debugger; this.newCity=data},err=>{debugger; console.log(err);
  })
}
deleteCity(){
  this.cityService.deleteCity(9).subscribe();
  debugger
}
updateCity(){
  this.cityService.updateCity(this.citiesArry[0]).
  subscribe(data=>{debugger; this.citiesArry[0]=data},err=>{debugger;console.log(err);
  })
}
updateStreet(){
  this.cityService.updateStreet(this.newStreet)
  .subscribe(data=>{debugger; this.newStreet=data},err=>{debugger; console.log(err)})
  //לעדכן את המערך...
}
}
