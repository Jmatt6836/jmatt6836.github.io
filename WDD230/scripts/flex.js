let hambutton = document.querySelector('.ham');

let mainnav = document.querySelector('nav');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')});




// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
// long, medium, short options ... try them

datefield.innerHTML = `<em>${fulldate}</em>`;

const week_names = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thurday', 'Friday', 'Saturday'];
const weekname = week_names[now.getDay()];


const meetingAlert = document.querySelector('.meeting-alert');
if (weekname === 'Monday' || weekname === 'Tuesday'){
    meetingAlert.style.display = "block";
} else {
    meetingAlert.style.display = "none";
}

// const images = document.querySelector(img);

// function preloadimage(img){
//     const src = img.getAttribute("src");
//     if(!src) {
//         return;
//     }

//     img.src = src;
// }

// const imgOptions = {
// };

// const imgObserver = new IntersectionObserver((entries,imgObserver) => {
//     entries.forEach(entry => {
//         if(!entry.isIntersecting){
//             return;
//         }
//         else{
//             preloadimage(entry.target);
//             imgObserver.unobserve(entry.target);
//         }
//     });
// }, imgOptions);

// images.forEach(image => {
//     imgObserver.observe(image)
// })
// const lastDisplay = document.querySelector(".sincelast");

// let lastvisit =  Number(window.localStorage.setItem("last-visit", getDay()))

// let currentvisit = getDay()

// let sincelastvisit = currentvisit - lastvisit

// lastDisplay.textcontent = sincelastvisit
