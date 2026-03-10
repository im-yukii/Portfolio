window.addEventListener("DOMContentLoaded", () => {
const container = document.querySelector('.scroll_container');
const list_wrap = document.querySelector('.scroll_wrap');

gsap.to(list_wrap, {
  x: () => -(list_wrap.clientWidth -  container.clientWidth),
  ease: 'none',
  scrollTrigger: {
    trigger: '.scroll',
    start: 'top top',
    end: () => (list_wrap.clientWidth - container.clientWidth),
    scrub: true,
    pin: true,
    anticipatePin: 1,
    invalidateOnRefresh: true
  }
});
    });