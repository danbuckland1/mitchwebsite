// // var index = 0;
// var myTimer;
// var slideIndex = 1;
// // var slideShow;

// function plusSlides(n) {
//   clearInterval(myTimer);
//   if (n < 0) {
//     slideShow((slideIndex -= 1));
//   } else {
//     slideShow((slideIndex += 1));
//   }
//   if (n === -1) {
//     myTimer = setInterval(function() {
//       plusSlides(n + 2);
//     }, 4000);
//   } else {
//     myTimer = setInterval(function() {
//       plusSlides(n + 1);
//     }, 4000);
//   }
// }

// function slideShow(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace("active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dost[slideIndex - 1].className += " active";
// }

// window.addEventListener("load", function() {
//   slideShow(slideIndex);
//   myTimer = this.setInterval(function() {
//     plusSlides(1);
//   }, 4000);
// });

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//Sidebar nav controls

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
