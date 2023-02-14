// nav-link visibility during scrolling
document.addEventListener('scroll', () => {
  const {scrollY, innerHeight} = window;
  const navLink = document.querySelectorAll('.nav-link');
  const position = scrollY/innerHeight - Math.trunc(scrollY/innerHeight)
  if (position > 0.4 && position < 0.7) {
    navLink.forEach(el => {
      el.classList.add('nav-link_hide');
    });
  } else {
    navLink.forEach(el => {
      el.classList.remove('nav-link_hide');
    });
  }
});

// burger menu

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.mobile-nav');
burger.addEventListener('click', (e) => {
  e.stopImmediatePropagation()
  burger.classList.toggle('burger_active')
  mobileMenu.classList.toggle('mobile-nav_active')
});

document.addEventListener('click', (e) => {
  if (e.target !== burger) {
    burger.classList.remove('burger_active')
    mobileMenu.classList.remove('mobile-nav_active')
  }
})
