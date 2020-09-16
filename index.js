var navtoggle = document.querySelector("#navi-toggle");
var navlinks = document.querySelectorAll(".navigation__item")

for (var i = 0; i < navlinks.length; i++) {
  navlinks[i].addEventListener('click', (e) => {
    console.log("you clicked me ")
    navtoggle.checked = false

  });
}