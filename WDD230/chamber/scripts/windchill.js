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

let date = new Date();

email_date.value = date;