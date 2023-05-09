let menuIcon = document.querySelector('.menu-icon')
let nav = document.querySelector('nav')

menuIcon.addEventListener("click", ()=>{
    if (nav.classList.contains('show-nav')) {
        nav.classList.remove('show-nav')
      } else {
        nav.classList.add('show-nav')
      }
})
