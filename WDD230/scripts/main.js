//variables and date object
let date = new Date();
console.log(date);


let year = date.getFullYear();
console.log(year);


//selecting element in html and DOM manipulation
document.querySelector('h1').textContent = year;

document.querySelector('div').innerHTML = '<h2>Subtitle</h2>';

let newpara = document.createElement('p');
newpara.textContent = 'This is a paragraph';
document.querySelector('div').appendChild(newpara);

document.querySelector('img').setAttribute('src', 'images/jiraya.jpeg')
document.querySelector('img').classList.add('add_border')