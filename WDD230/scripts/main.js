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


let visit_heading = document.querySelector('.visits');

let now_date = new Date();

let stored_date = localStorage.getItem('last_visited');

let last_date = new Date(stored_date);

if (!stored_date){
    visit_heading.textContent = 'Welcome!';
} else {
    let diff_time = now_date.getTime() - last_date.getTime();

    //calculate the number of days between the two dates
    let diff_day = Math.round(diff_time/(1000*60*60*24));

visit_heading.textContent = diff_day + ' days since your last visit';
}

localStorage.setItem('last_visited', now_date);