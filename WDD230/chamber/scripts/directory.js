const requestURL = 'https://jmatt6836.github.io/WDD230/chamber/scripts/data.json'

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const business = jsonObject['business'];
    console.table(business);  // temporary checking for valid response and data parsing
    business.forEach(displayBusiness);
  });
  


 function displayBusiness(business){
  let card = document.createElement('section');
  let h2 = document.createElement('h2');
  let para = document.createElement('p');
  let para_2 = document.createElement('p');
  let img = document.createElement('img');

  h2.textContent = business.name;
  card.appendChild(h2);
  document.querySelector('div.cards').appendChild(card);

  para.textContent = "Address: " + business.address;
  card.appendChild(para);
  document.querySelector('div.cards').appendChild(card);

  para_2.textContent ="Phone Number: " + business.phone;
  card.appendChild(para_2);
  document.querySelector('div.cards').appendChild(card);

  img.setAttribute('src', business.imageurl);
  img.setAttribute('alt', "An image of " + business.name );
  card.appendChild(img);
  document.querySelector('div.cards').appendChild(card);
      
    }
