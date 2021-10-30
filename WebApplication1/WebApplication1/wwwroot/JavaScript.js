$(document).ready(function () {
    $.get("api/City", function (data) {
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
function chooseCity(selected) {
    $("#ulStreet").remove();
    $.get(`api/Street/${selected[selected.selectedIndex].id}`, function (data) {
        streets = data;

        $("#body").append(`<ul id="ulStreet"></ul>  `)
        streets.forEach((street) => {
            $("#ulStreet").append(`<li> ${street.streetName}</li>`)
        })
    });

}