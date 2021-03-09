const key = "d982fcf0018b63361a2bb37a98cba0db"; //<===  Der API- KEY
const searchButton = document.getElementById("search-btn"); // Der Search Button
const locationInput = document.getElementById("location-input"); //Ortssuche Input-Feld
const celsius = "metric";
const fahrenheit = "imperial";
const deutsch = "de";
const english = "en";
//===================================
//DOM-ELEMENTS

const locationHtml = document.getElementById("location-html");
const cloudStatusHtml = document.getElementById("cloud-status-html");
const temperatureHtml = document.getElementById("temperature-html");
const sunRiseHtml = document.getElementById("sun-rise-html");
const sunSetHtml = document.getElementById("sun-set-html");
const dayHtml = document.getElementById("day-html");
//========================

//API Call-function with parameters
const apiCall = (units, language) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${locationInput.value}&units=${units}&appid=${key}&lang=${language}`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        console.log("something went wrong!");
      } else {
        console.log("got the data");
      }
      console.log(data);
      //inner-HTML text
      temperatureHtml.innerText = `${data.main.temp} Celsius`;
      cloudStatusHtml.innerText = `${data.weather[0].description}`;
      const d = new Date();

      console.log(data.sys.sunrise);
      console.log(data.sys.sunset);

      sunSetHtml.innerText = `${new Date(data.sys.sunset).toTimeString()}`;
      sunRiseHtml.innerText = `${new Date(data.sys.sunrise).toTimeString()}`;
    });

  locationHtml.innerText = `${locationInput.value}`;
};

// sunrise: 1615185018
// sunset: 1615225950

//LocationInput  addEvent (keypress)
locationInput.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    searchButton.click();
  }
});

//Button addEvent (click)
searchButton.addEventListener("click", function () {
  apiCall(celsius, deutsch);
});
