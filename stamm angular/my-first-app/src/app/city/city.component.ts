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

  constructor(private cityService: CityService) { }

  ngOnInit(): void {
    this.cityService.getAllCities().subscribe(data => { this.citiesArry = data
    console.log(data);
    },
      err => { console.log(err) })
  }

  chooseCity(event:any) {
    let i = event.target.options.selectedIndex
    console.log(event.target.options.selectedIndex);
    
    // $("#ulStreet").remove();
    this.cityService.getStreetByCityId(i+1).subscribe(data=>
      {this.streetsArry=data,
      console.log(this.streetsArry);
      debugger
      },err=>{console.log(err)})
}

}
