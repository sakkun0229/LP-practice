console.log("hello from main.js")

const navSlide = () => {
  const nav = document.getElementById('navLinks')
  const burger = document.getElementById('navBurger')
  const overlay = document.getElementById('navOverlay')

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
}

navSlide()