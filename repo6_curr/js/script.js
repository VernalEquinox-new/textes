
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

var slider = tns({
  container: '.slider',
  items: 4,
  slideBy: 1,
  controls: true,
  controlsContainer: "#heroes",
  loop: true,
  nav: false,
  edgePadding: 0,
  gutter: 30,
  responsive: {
  	769: {
  		items: 4
  	},
      376: {
  		items: 3,

      },
  	280: {
  		items: 1.6,
  		controls: false,
  		mouseDrag: true
  	}
  }
});


var slider2 = tns({
  container: '#arch_sli',
  items: 3,
  slideBy: 1,
  axis: 'horizontal',
  gutter: 30,
  controls: true,
  controlsContainer: "#arch_arr",
  loop: true,
  nav: false,
  responsive: {
    769: {
      items: 3,
      gutter: 30
    },
      376: {
      items: 2.5,
      gutter: 30
      },
    280: {
      items: 1.6,
      controls: false,
      mouseDrag: true,
      gutter: 15
    }
  }
});

var slider3 = tns({
  container: '#war_sli',
  items: 3,
  slideBy: 1,
  axis: 'horizontal',
  gutter: 30,
  controls: true,
  controlsContainer: "#war_arr",
  loop: true,
  nav: false,
  responsive: {
    769: {
      items: 3,
      gutter: 30
    },
      376: {
      items: 2.5,
      gutter: 30
      },
    280: {
      items: 1.6,
      controls: false,
      mouseDrag: true,
      gutter: 15
    }
  }
});
var slider4 = tns({
  container: '#mus_sli',
  items: 3,
  slideBy: 1,
  axis: 'horizontal',
  gutter: 30,
  controls: true,
  controlsContainer: "#mus_arr",
  loop: true,
  nav: false,
  responsive: {
    769: {
      items: 3,
      gutter: 30
    },
      376: {
      items: 2.5,
      gutter: 30
      },
    280: {
      items: 1.6,
      controls: false,
      mouseDrag: true,
      gutter: 15
    }
  }
});

var slider5 = tns({
  container: '.news__slider',
  items: 3,
  slideBy: 1,
  axis: 'horizontal',
  gutter: 30,
  controls: false,
  loop: true,
  nav: false,
  responsive: {
    769: {
      items: 3,
      gutter: 30
    },
      376: {
      items: 2.5,
      gutter: 30
      },
    280: {
      items: 1.6,
      controls: false,
      mouseDrag: true,
      gutter: 15
    }
  }
});
