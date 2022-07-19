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

  const requestURL =  'https://jmatt6836.github.io/WDD230/temple-inn/scripts/temple.json'


  function displayBusiness(){
    fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        const temples = jsonObject['temples'];
        console.table(temples);  // temporary checking for valid response and data parsing
        temples.forEach(show_cards);
      
      });
       function show_cards(temples){ 
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let schedule = document.createElement('p');
        let dedication = document.createElement('p');
        let services = document.createElement('p');
        let img = document.createElement('img');
  
        h2.textContent = temples.name;
        card.appendChild(h2);
        document.querySelector('div.cards').appendChild(card);
  
        address.textContent = "Address: " + temples.address;
        card.appendChild(address);
        document.querySelector('div.cards').appendChild(card);
  
        phone.textContent ="Phone Number: " + temples.phone;
        card.appendChild(phone);
        document.querySelector('div.cards').appendChild(card);

        schedule.textContent ="Daily Schedule: " + temples.schedule;
        card.appendChild(schedule);
        document.querySelector('div.cards').appendChild(card);

        dedication.textContent ="Date of Dedication: " + temples.dedication;
        card.appendChild(dedication);
        document.querySelector('div.cards').appendChild(card);

        services.textContent ="Services: " + temples.services;
        card.appendChild(services);
        document.querySelector('div.cards').appendChild(card);
  
        img.setAttribute('src', temples.imageurl);
        img.setAttribute('alt', "An image of " + temples.name );
        card.appendChild(img);
        document.querySelector('div.cards').appendChild(card);
            
          }
        }

        displayBusiness();

