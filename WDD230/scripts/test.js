//sequence

//variables and date object
let date = new Date();
console.log(date);


let year = date.getFullYear();
document.querySelector ('#currentyear').textContent = year;

let currentdate = document.lastModified;

document.querySelector ('#lastdate').textContent = currentdate;


//selecting element in html and DOM manipulation


document.querySelector('img').setAttribute('src', 'images/Familypic.jpeg')


//function
function addayear(yr){
    console.log('yr')
}

addayear(year);

//selection

//if clause

if (year >= 2022){
    console.log('current year')
}

//repetition (loops)

const myarray = ['CSE121b', 'WDD230', "CIT111"];

function makelist(item){
    document.querySelector('div').innerHTML += '<li>' + item + '<li>'
}

myarray.forEach(makelist)