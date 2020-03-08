console.log("hello from main.js")

const navSlide = () => {
  const nav = document.getElementById('navLinks')
  const burger = document.getElementById('navBurger')
  const overlay = document.getElementById('navOverlay')
  const links = document.querySelectorAll('.navbar__item a')

  burger.addEventListener('click', () => {
    nav.classList.toggle('navbar__items--active')
    burger.classList.toggle('navbar__burger--active')
    overlay.classList.toggle('navbar__overlay--active')
  })

  overlay.addEventListener('click', () => {
    nav.classList.toggle('navbar__items--active')
    burger.classList.toggle('navbar__burger--active')
    overlay.classList.toggle('navbar__overlay--active')
  })

  links.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.toggle('navbar__items--active')
      burger.classList.toggle('navbar__burger--active')
      overlay.classList.toggle('navbar__overlay--active')
    })
  })

}


const scrolltop = document.getElementById('scrollTop')
window.addEventListener('scroll', ()=>{
  if (window.pageYOffset > 500) {
    scrolltop.classList.add('scroll-top--active')
  } else {
    scrolltop.classList.remove('scroll-top--active')
  }
})


navSlide()