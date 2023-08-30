const header=document.querySelector("header")

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",windwo.scrollY >120);
})

let menu=document.querySelector('#menu-icon');
let navList=document.querySelector('.nav-list');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navList.classList.toggle('active');
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navList.classList.remove('active');
}

document.addEventListener('DOMContentLoaded', () => {
    let projectBtn = document.querySelector('.project-btn');
    let projectSection = document.querySelector('.services.projects');

    projectBtn.addEventListener('click', () => {
        projectSection.classList.toggle('visible');
    });
});
