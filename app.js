var day1Forecast = document.querySelector('#forecast1');
var day2Forecast = document.querySelector('#forecast2');
var day3Forecast = document.querySelector('#forecast3');
var day4Forecast = document.querySelector('#forecast4');
var day5Forecast = document.querySelector('#forecast5');
var todaysForecast = document.queryselector('.weatherContentToday');
var maxTemperature = document.querySelector('#cityTemp');
var humidity = document.querySelector('#cityHumidity');
var windSpeed = document.querySelector('#cityWindSpeed');
var cityName = document.querySelector('#cityName');
var searchButton = document.querySelector('.searchButton');
var appid = 'd665717576f6934ee876304b7f3d052b';
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
        cityName = location;
        (searchApi);
}

function searchApi(query, appid) {
    var locQueryUrl = 'https://api.openweathermap.org/';
    locQueryUrl = locQueryUrl + 'geo/1.0/direct?q=' + query + '&limit=5&appid=' + appid;
    var lon = locQueryUrl.lon;
    var lat = locQueryUrl.lat;
    lon = JSON.parse(localStorage.getItem('lon')) || [];
    lat = JSON.parse(localStorage.getItem('lat')) || [];
    localStorage.setItem('lon', 'lat', JSON.stringify(lon, lat));
    secondSearch();

secondSearch(lon,lat,query,appid){
    var forecastUrl = 'https://api.openweathermap.org/';
    forecastUrl = forecastUrl + 'data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + appid;
    day1Forecast = forecastUrl.list[0].weather[0].icon + "Max Temperature: " + maxTemperature[1] + "Humidity: " + humidity[1] + "Wind Speed: " + windSpeed[1];
    day2Forecast = forecastUrl.list[1].weather[0].icon;
    day3Forecast = forecastUrl.list[2].weather[0].icon;
    day4Forecast = forecastUrl.list[3].weather[0].icon;
    day5Forecast = forecastUrl.list[4].weather[0].icon;
    maxTemperature = [];
    humidity = [];
    windSpeed = [];
    maxTemperature = forecastUrl.list[0,1,2,3,4].main.temp_max;
    humidity = forecastUrl.list[0,1,2,3,4].main.humidity;
    windSpeed = forecastUrl[0,1,2,3,4].imperial.wind.speed;
    maxTemperature = JSON.parse(localStorage.getItem('maxTemperature')) || [];
    humidity = JSON.parse(localStorage.getItem('humidity')) || [];
    windSpeed = JSON.parse(localStorage.getItem('windSpeed')) || [];
    }
fetch(locQueryUrl)
    .then(function (response) {
        if (!response.ok) {
            throw response.json();
     }
        return response.json();
    })
}
getParams();
searchButton.onclick = searchForecast;
