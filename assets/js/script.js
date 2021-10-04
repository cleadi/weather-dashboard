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
var cityName = "";
var lat = "";
var lon = "";
// var data;

var searchButton = $("#search-button");
var inputText = $("#input-text")[0];

searchButton.click(function(event) {
  event.preventDefault();
  cityName = inputText.value;
  getCityData(cityName);
});

// function weatherData() {

// }

function getCityData(cityName) {
  queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
  // console.log(queryUrl);
  fetch(queryUrl)
    .then(function (response) {
      return Response.json();
    })
    .then(function (data) {
      long = data.coords.longitude;
      lat = data.coords.latitude;
     })
};

// getCityData();
// console.log(getCityData);

function getLatLong(getCityData) {
  queryUrl2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
  fetch(queryUrl2)
    .then(function (response) {
      return Response.json();
    })
    .then(function (data) {
      lon = data.coords.longitude;
      lat = data.coords.latitude;
    })
};

getLatLong();
console.log(getLatLong);


// Gary says (on 09/29/21) the below will be needed for fetching data from an API
// fetch(queryUrl)
//   .then(function (response) {
//     return Response.json();
//   })
//   .then(function (data) {
//     //...
//   });
