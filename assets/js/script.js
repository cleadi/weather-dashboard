// Need to populate ids listed below with the related data and show on web page
// Need to save recent searches to local storage and show underneath the search bar on left side of web page

var mainCityBox = $("#main-city-box");
var mainCityDate = $("#main-city-date");
var mainCityImg = $("#main-city-img");
var mainCityTemp = $("#main-city-temp");
var mainCityWind = $("#main-city-wind");
var mainCityHum = $("#main-city-hum");
var mainCityUv = $("#main-city-uv");

var fiveDayForcastBox = $("#five-day-forecast");
var fiveDayDate = $("#five-day-date");
var fiveDayImg = $("#five-day-img");
var fiveDayTemp = $("#five-day-temp");
var fiveDayHum = $("#five-day-hum");
var fiveDayUv = $("#five-day-uv");

var apiKey = "bccdc8b00b9907f0babdf04baa3111c4";
var cityName = "";
var lat = "";
var lon = "";

var searchButton = $("#search-button");
var inputText = $("#input-city");

function populateWeather(data) {
  //... STOPPED HERE
  // build logic to write to page here
}

function getCityData(cityName) {
  var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
  fetch(queryUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      lon = data.coord.lon;
      lat = data.coord.lat;
      console.log(data);
      getLatLong(data);
    })
};

function getLatLong() {
  var queryUrl2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
  fetch(queryUrl2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      populateWeather(data); // pass this into the function above
    })
};

searchButton.click(function (event) {
  event.preventDefault();
  cityName = inputText.val();
  getCityData(cityName);
});

$("#input-city").on("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    cityName = inputText.val();
    getCityData(cityName);
  }
});
