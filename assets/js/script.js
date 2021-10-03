// create variables for each item on HTML page

var apiKey = "bccdc8b00b9907f0babdf04baa3111c4";
var queryUrl = "";
var queryUrl2 = "";
var cityName = "";
var lat;
var lon;

var searchButton = $("#search-button");
var inputText = $("#input-text")[0];

searchButton.click(function(event) {
  event.preventDefault();
  cityName = inputText.value;
  getCityData(cityName);
  console.log(cityName); // works, displays city name
});

function getCityData(cityName) {
  queryUrl = "api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;
  console.log(queryUrl);
  fetch(queryUrl)
    .then(function (response) {
      return response.json();
      })
    .then(function(data) {
      //... missing something here
    })      
};

function getLatLong(getCityData) {
  queryUrl2 = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey;
  console.log(queryUrl2);
  fetch(queryUrl2)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //... missing something here
    })
};


// Gary says (on 09/29/21) the below will be needed for fetching data from an API
// fetch(queryUrl)
//   .then(function (response) {
//     return Response.json();
//   })
//   .then(function (data) {
//     //...
//   });
