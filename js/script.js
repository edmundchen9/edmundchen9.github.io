document.querySelector('.header_moon').onclick = function() {
    document.querySelector('body').classList.toggle('is-black');
}

document.querySelector('.header_mob-menu').onclick = function() {
    document.querySelector('.header-menu').classList.toggle('is-active');
}

function toggleDark() {
    const body = document.querySelector('body');
    if (body.classList.contains('is-black')) {
      body.classList.remove('is-black');
    } else {
      body.classList.add('is-black');
    }
  }


// if (localStorage.getItem('is-black') === 'true') {
//     document.getElementById('main-page').classList.add('is-black');
// } 
// // dsadafdasfds
// const toggleBtn = document.getElementById("toggle-btn");
// const theme = document.getElementById("theme");
// let darkMode = localStorage.getItem("is-black");

// const enableDarkMode = () => {
//   theme.classList.add("is-black-theme");
//   toggleBtn.classList.remove("is-black-toggle");
//   localStorage.setItem("is-black", "enabled");
// };

// const disableDarkMode = () => {
//   theme.classList.remove("is-black-theme");
//   toggleBtn.classList.add("is-black-toggle");
//   localStorage.setItem("is-black", "disabled");
// };

// if (darkMode === "enabled") {
//   enableDarkMode(); // set state of darkMode on page load
// }

// toggleBtn.addEventListener("click", (e) => {
//   darkMode = localStorage.getItem("is-black"); // update darkMode when clicked
//   if (darkMode === "disabled") {
//     enableDarkMode();
//   } else {
//     disableDarkMode();
//   }
// });