//sequence

//variables and date object
let date = new Date();
console.log(date);

//document.querySelector('img').setAttribute('src', 'images/Familypic.jpeg')
let year = date.getFullYear();
document.querySelector ('#currentyear').textContent = year;

let currentdate = document.lastModified;
document.querySelector ('#lastdate').textContent = currentdate;

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5295903&appid=4d34a8f41d31a981e9b52f710ec143c8'

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject.weather[0].description);
    document.querySelector('#current-temp').textContent = (jsObject.main.temp * 9/5 - 459.67).toFixed(1);
    document.querySelector('#wind').textContent = jsObject.wind.speed.toFixed(1);
    document.querySelector('#chill').textContent = (jsObject.main.feels_like * 9/5 - 459.67).toFixed(1);

const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
const desc = jsObject.weather[0].description;
document.querySelector('#weather-icon').setAttribute('src', iconsrc);
document.querySelector('#weather-icon').setAttribute('alt', desc);
document.querySelector('#fig-caption').textContent = desc;
  });
