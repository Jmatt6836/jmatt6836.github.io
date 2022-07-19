let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=4348599&appid=4d34a8f41d31a981e9b52f710ec143c8'

fetch(apiURL)
    .then((response) => response.json())
        .then((jsObject) => {
        console.log(jsObject.main)
        console.log(jsObject)
        document.querySelector('#current-temp').textContent = (jsObject.main.temp * 9/5 - 459.67).toFixed(1);
        document.querySelector('#wind').textContent = jsObject.wind.speed.toFixed(1);
        document.querySelector('#chill').textContent = (jsObject.main.feels_like * 9/5 - 459.67).toFixed(1);
        document.querySelector('#humid').textContent = jsObject.main.humidity;

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector('#weather-icon').setAttribute('src', iconsrc);
    document.querySelector('#weather-icon').setAttribute('alt', desc);
    document.querySelector('#fig-caption').textContent = desc;
  });



