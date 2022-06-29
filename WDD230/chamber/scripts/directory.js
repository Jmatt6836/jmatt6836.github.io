const requestURL = 'https://jmatt6836.github.io/WDD230/chamber/scripts/data.json'

// function get_data(){
//   fetch(requestURL)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (jsonObject) {
//       const business = jsonObject['business'];
//       console.table(business);  // temporary checking for valid response and data parsing
//       business.forEach(displayBusiness);
//       business.forEach(displayList);
//       return jsonObject;
//     });
// }
function remove_cards(){
  let section = document.querySelectorAll('section');
    section.forEach((item) => {
      item.remove();
    })
}
function remove_list(){
  let row = document.querySelectorAll('tr');
    row.forEach((item) => {
      item.remove();
    })
}

 function displayBusiness(){
  remove_cards();
  remove_list();
  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      const business = jsonObject['business'];
      console.table(business);  // temporary checking for valid response and data parsing
      business.forEach(show_cards);
    
    });
     function show_cards(business){ 
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
      }

function displayList(){
  remove_list();
  remove_cards();
  fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const business = jsonObject['business'];
    console.table(business);  // temporary checking for valid response and data parsing
    business.forEach(show_lists);
  
  });
   function show_lists(business){ 
    let list = document.createElement('tr');
    let h3 = document.createElement('td');
    let h3_2 = document.createElement('td');
    let h3_3 = document.createElement('td');
    let h3_4 = document.createElement('td');

    h3.textContent = business.name;
    list.appendChild(h3);
    document.querySelector('table.table-list').appendChild(list);
    h3_2.textContent = business.address;
    list.appendChild(h3_2);
    document.querySelector('table.table-list').appendChild(list);
    h3_3.textContent = business.website;
    list.appendChild(h3_3);
    document.querySelector('table.table-list').appendChild(list);
    h3_4.textContent = business.phone;
    list.appendChild(h3_4);
    document.querySelector('table.table-list').appendChild(list);
    
}
}

let listbutton = document.querySelector('.list')

let gridbutton = document.querySelector('.grid')

gridbutton.addEventListener('click', displayBusiness );
listbutton.addEventListener('click', displayList );

displayBusiness();