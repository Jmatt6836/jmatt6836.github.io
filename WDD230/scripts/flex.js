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