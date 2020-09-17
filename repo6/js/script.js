
//changing search/menu
function toggleSearch() {
  document.querySelector('#topmenuwrap').classList.toggle("hidden");
  document.querySelector('#topsearchform').classList.toggle("hidden");
}

function setFocus() {
  document.querySelector('#searchfield').focus();
}

document.querySelector('#opensrchbtn').addEventListener('click', function(){
  toggleSearch();
  setFocus();
})

document.querySelector('#searchfield').addEventListener('blur', function (){
  toggleSearch();
})

//hamburger action
document.querySelector('#hamburger').addEventListener('click', function(){
  document.querySelector('#hamburgerdiv').classList.toggle("header__hamburger--clicked");
  document.querySelector('#headermenublock').classList.toggle("header__menu-wrap--open");
})

//open submenu
var items = document.querySelectorAll('.menu__item');

for(var i = 0; i < items.length; i++) {
  items[i].addEventListener('click', function() {
    this.classList.toggle('menu__item--clicked');
    var children = this.children;
    for (var j = 0; j < children.length; j++) {
      if (children[j].classList.contains('submenu')) {
        children[j].classList.toggle('submenu--open');
      }
    }
  })
}

//handling searchform
function toggleDetails() {
  document.querySelector("#details").classList.toggle("hidden");

  var detailed = document.querySelectorAll(".detailed");
  for (var i = 0; i < detailed.length; i++) {
    detailed[i].classList.toggle('hidden');
  }
}

document.querySelector("#details__button").addEventListener('click', function() {
  toggleDetails();
})




//slider options

/*
var slider = tns({
  container: '.heroes__slider',
  items: 4,
  slideBy: 1,
  controls: true,
  controlsContainer: ".slider__arrows",
  loop: true,
  nav: false,
  gutter: 10
});
*/
