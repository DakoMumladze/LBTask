let toggleBtn = document.querySelector('.navbar-toggler');
let sideNav = document.querySelector('.navbar-sidebar');
toggleBtn.addEventListener('click',function(){
    sideNav.classList.toggle('hide');
})