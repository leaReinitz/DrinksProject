class Street {
    constructor(id, name, cityName) {
        this.id = id;
        this.name = name;
        this.cityName = cityName;
    }
}
class City {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

let cities = []
let streets = []

$(document).ready(function () {
    $.get("https://localhost:44315/api/City/getAllCities", function (data) {
        debugger
        cities = data
        cities.forEach((city) => {

            $('#cities').append(`<option value="${city.cityName}" id="${city.id}">
                                       ${city.cityName}
                                  </option>`);
        })
        $("#body").append(`<br>  `)
        $("#body").append(`<label >the streets is :</label>  `)
    });
});

function chooseCity(selectedIndex) {
    console.log(selectedIndex);
    $("#ulStreet").remove();
    $.get(`https://localhost:44315/api/Street/GetStreetByCityId?cityId=${selectedIndex}`, function (data) {
        streets = data;
       
        $("#body").append(`<ul id="ulStreet"></ul>  `)
        streets.forEach((street) => {
            $("#ulStreet").append(`<li> ${street.streetName}</li>`)
        })
    });

}