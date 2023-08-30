let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.menu-list');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

const sr=ScrollReveal({
    distance:'65px',
    duration:2600,
    delay:450,
    reset:true
});

sr.reveal('.content',{delay:200,origin:'top'});
sr.reveal('.imgBox',{delay:450,origin:'top'});
sr.reveal('.icons',{delay:500,origin:'left'});

document.addEventListener('DOMContentLoaded', () => {
    let services = document.querySelector('#services');
    let dropDown = document.querySelector('.scroll-down');

    dropDown.addEventListener('click', () => {
        if (services.style.display === 'none') {
            services.style.display = 'block';
        } else {
            services.style.display = 'none';
        }
    });
});

