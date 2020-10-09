window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger'),
        nav = document.querySelector('.nav_list'),
        navItem = document.querySelectorAll('.nav_item');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        nav.classList.toggle('nav_list_active');
    })

    navItem.forEach(item => {
        item.addEventListener('click', () =>{
            nav.classList.toggle('nav_list_active');
            hamburger.classList.remove('hamburger_active');
        })
    })
})