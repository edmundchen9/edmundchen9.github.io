let darkMode = localStorage.getItem('darkMode');
let darkToggle = document.querySelector('.header_moon');
let bodyToggle = document.querySelector('body');


  if (darkMode && darkMode === '1') {
      bodyToggle.classList.add('is-black');
      darkToggle.classList.add('is-active');
  }

    darkToggle.onclick = function() {
    bodyToggle.classList.toggle('is-black');
    darkToggle.classList.toggle('is-active');
    if (darkMode) {
          if (darkMode === '1') {
              localStorage.setItem('darkMode', '0');
          } else {
              localStorage.setItem('darkMode', '1');
          }
      } else {
          localStorage.setItem('darkMode', '1');
      }
};


console.log(localStorage.getItem(darkMode));
console.log(1+4);


// hamburger dropdown when compressed
document.querySelector('.header_mob-menu').onclick = function() {
    document.querySelector('.header-menu').classList.toggle('is-active');
}
