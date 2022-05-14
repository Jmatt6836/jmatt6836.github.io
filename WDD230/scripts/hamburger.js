let button1 = document.querySelector('.btn');

function show(){
    button1.classList.toggle('newstyle');
}

button1.addEventListener('click', show)