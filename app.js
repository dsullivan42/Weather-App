var day1Forecast = document.querySelector('#forecast1');
var day2Forecast = document.querySelector('#forecast2');
var day3Forecast = document.querySelector('#forecast3');
var day4Forecast = document.querySelector('#forecast4');
var day5Forecast = document.querySelector('#forecast5');
var todaysForecast = document.queryselector('.weatherContentToday');

function getParams(){
    var searchParamsArr = document.location.search.split('&');
    var query = searchParamsArr[0].split('=').pop();
    var appid = searchParamsArr[2].split('=').pop();
    searchApi(query,appid);
}
function searchForecast(event) {
    event.preventDefault();
    var location = document.querySelector('#location').value;

    if (!location) {
        console.error('You need to enter a city name');
        return;
    }

    var queryString = '/geo/1.0/direct?q=' + searchInputVal + '&limit=5&appid=' + appid;
        location.assign(queryString);
}

function searchApi(query, appid) {
    var locQueryUrl = 'https://api.openweathermap.org/';
    locQueryUrl = locQueryUrl + 'geo/1.0/direct?q=' + query + '&limit=5&appid=' + appid;
    locQueryUrl = locQueryUrl.find('lon', 'lat');
    var lon = locQueryUrl.lon;
    var lat = locQueryUrl.lat;
    lon = JSON.parse(localStorage.getItem('lon')) || [];
    lat = JSON.parse(localStorage.getItem('lat')) || [];
    localStorage.setItem('lon', 'lat', JSON.stringify(lon, lat));
    secondSearch();

secondSearch(lon,lat,query,appid){
    var forecastUrl = 'https://api.openweathermap.org/';
    forecastUrl = forecastUrl + 'data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + appid;
}
fetch(locQueryUrl)
    .then(function (response) {
        if (!response.ok) {
            throw response.json();
     }
        return response.json();
    })
    .then(query (location){
        result
    })
}


addEventListener('submit', searchForecast());
getParams();