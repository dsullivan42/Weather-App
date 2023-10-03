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
// when event listener is triggered, the function will run
function searchForecast(event) {
    event.preventDefault();
    // location will be pulled from the input value
    var location = document.querySelector('#location').value;
    
    // if the location is empty, the function will display an error message then return
    if (!location) {
        console.error('You need to enter a city name');
        return;
    }
// setting the query string to the api url
    var queryString = '/geo/1.0/direct?q=' + location + '&limit=5&appid=' + appid;
        location.assign(queryString);
        cityName = location;
        //calling searchApi function
        (searchApi);
}

function searchApi(query, appid) {
    // setting the query string to the api url
    var locQueryUrl = 'https://api.openweathermap.org/';
    locQueryUrl = locQueryUrl + 'geo/1.0/direct?q=' + query + '&limit=5&appid=' + appid;
    //fetching the api longitute and latitude
    var lon = locQueryUrl.lon;
    var lat = locQueryUrl.lat;
    //setting the local storage to the longitute and latitude
    lon = JSON.parse(localStorage.getItem('lon')) || [];
    lat = JSON.parse(localStorage.getItem('lat')) || [];
    localStorage.setItem('lon', 'lat', JSON.stringify(lon, lat));
    //triggering second search function
        //checking for response from webpage
fetch(locQueryUrl)
.then(function (response) {
    if (!response.ok) {
        throw response.json();
 }
    return response.json();
})
}
    secondSearch();

function secondSearch(lon, lat,  location, appid) {
    //setting the query string to the api url
    var forecastUrl = 'https://api.openweathermap.org/';
    forecastUrl = forecastUrl + 'data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&appid=' + appid;\
    //fetching the api data
    maxTemperature = [];
    humidity = [];
    windSpeed = [];
    maxTemperature = forecastUrl.list[0,1,2,3,4].main.temp_max;
    humidity = forecastUrl.list[0,1,2,3,4].main.humidity;
    windSpeed = forecastUrl[0,1,2,3,4].imperial.wind.speed;
    //setting the display and local storage from the api data
    day1Forecast = forecastUrl.list[0].weather[0].icon + "Location: " + location + "\nMax Temperature: " + maxTemperature[1] + "\nHumidity: " + humidity[1] + "\nWind Speed: " + windSpeed[1];
    day2Forecast = forecastUrl.list[1].weather[0].icon + "Location: " + location + "\nMax Temperature: " + maxTemperature[2] + "\nHumidity: " + humidity[2] + "\nWind Speed: " + windSpeed[2];
    day3Forecast = forecastUrl.list[2].weather[0].icon + "Location: " + location + "\nMax Temperature: " + maxTemperature[3] + "\nHumidity: " + humidity[3] + "\nWind Speed: " + windSpeed[3];
    day4Forecast = forecastUrl.list[3].weather[0].icon + "Location: " + location + "\nMax Temperature: " + maxTemperature[4] + "\nHumidity: " + humidity[4] + "\nWind Speed: " + windSpeed[4];
    day5Forecast = forecastUrl.list[4].weather[0].icon + "Location: " + location + "\nMax Temperature: " + maxTemperature[5] + "\nHumidity: " + humidity[5] + "\nWind Speed: " + windSpeed[5];
    maxTemperature = JSON.parse(localStorage.getItem('maxTemperature')) || [];
    humidity = JSON.parse(localStorage.getItem('humidity')) || [];
    windSpeed = JSON.parse(localStorage.getItem('windSpeed')) || [];
    }
    //checking for response from webpage
fetch(locQueryUrl)
    .then(function (response) {
        if (!response.ok) {
            throw response.json();
     }
        return response.json();
    })
//event listener for the search button
searchButton.onclick = searchForecast;
