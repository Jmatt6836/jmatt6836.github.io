//sequence

//variables and date object
let date = new Date();
console.log(date);

//document.querySelector('img').setAttribute('src', 'images/Familypic.jpeg')
let year = date.getFullYear();
document.querySelector ('#currentyear').textContent = year;

let currentdate = document.lastModified;
document.querySelector ('#lastdate').textContent = currentdate;