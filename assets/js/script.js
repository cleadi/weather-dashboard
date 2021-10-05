// create variables for each item on HTML page

var mainCityBox = $("#main-city-box");
var mainCityDate = $("#main-city-date");
var mainCityImg = $("#main-city-img");
var mainCityTemp = $("#main-city-temp");
var mainCityHum = $("#main-city-hum");
var mainCityUv = $("#main-city-uv");

var fiveDayForcastBox = $("#five-day-forecast");
var fiveDayDate = $("#five-day-date");
var fiveDayImg = $("#five-day-img");
var fiveDayTemp = $("#five-day-temp");
var fiveDayHum = $("#five-day-hum");
var fiveDayUv = $("#five-day-uv");

var apiKey = "bccdc8b00b9907f0babdf04baa3111c4";
var queryUrl;
var queryUrl2;
var cityName = $(".form-control"); // this is the issue with the getCityData API call, when I sub this variable with Minneapolis, there's no (API URL) 400 Bad Request error
// var cityName = "";
var lat = "";
var lon = "";
// var data;

var searchButton = $("#search-button");
var inputText = $(".form-control");

searchButton.click(function(event) {
  event.preventDefault();
  cityName = inputText.value;
  getCityData(cityName);
});

// function weatherData() {

// }


function getCityData(cityName) {
  console.log(cityName)
  queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
  // console.log(queryUrl);
  fetch(queryUrl) // error, GET (API URL) 400 Bad Request
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      lon = data.coord.lon; // Uncaught (in promise) TypeError: Cannot read properties of undefined
      lat = data.coord.lat;
      getLatLong();
     })
     // .catch?? do I need a var which is just for displaying something if the callback fails?
};

// .catch example from MDN -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

getCityData("Minneapolis");
// console.log(JSON.stringify(getCityData)); // logs undefined

function getLatLong(getCityData) {
  queryUrl2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
  console.log(lat)
  console.log(lon)
  fetch(queryUrl2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      lon = data.lon; // Uncaught (in promise) TypeError: Cannot read properties of undefined...
      lat = data.lat;
    })
};


// console.log(JSON.stringify(getLatLong)); // logs undefined
