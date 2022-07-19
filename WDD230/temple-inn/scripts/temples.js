const requestURL =  'https://jmatt6836.github.io/WDD230/temple-inn/scripts/temple.json'


  function displayTemples(){
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

displayTemples();