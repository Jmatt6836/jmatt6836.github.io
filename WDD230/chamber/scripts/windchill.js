let wind = document.getElementById("wind").textContent;
let temp = document.getElementById("temp").textContent;
console.log(temp);
console.log(wind);

if (temp <= 50 && wind >= 3){
let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(wind,0.16)) + (0.4275*temp*Math.pow(wind,0.16)));
document.getElementById("chill").textContent = chill.toFixed(2);
}
else{
    let chill = document.getElementById("chill").textContent = "N/A"
    
}

let email_date = document.querySelector('#date');

let date1 = new Date();

email_date.value = date1;






// let request = json.parse('/data.json');

// fetch(request)
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonObject) {
//     console.table(jsonObject);  // temporary checking for valid response and data parsing
//   });

// const business = jsonObject['business']

// function displayBusiness(business) {  // Create elements to add to the document
//     let card = document.createElement('section');
//     let h2 = document.createElement('h2');    // Change the textContent property of the h2 element to contain the prophet's full name
//     h2.textContent = business.name + ' ' + prophet.lastname;
//     // Add/append the section(card) with the h2 element
//     card.appendChild(h2);
//     // Add/append the existing HTML div with the cards class with the section(card)
//     document.querySelector('div.cards').appendChild(card);
//   }



