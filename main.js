var index = 0;
var myTimer;
var slideIndex = 1;
var slideShow;

slideShow();

function slideShow() {
  var i;
  var slides = document.querySelectorAll(".slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  index++;
  if (index > slides.length) {
    index = 1;
  }
  slides[index - 1].style.display = "block";

  setTimeout(slideShow, 4000);
}

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

// window.addEventListener("load", function() {
//   slideShow(slideIndex);
//   myTimer = this.setInterval(function() {
//     plusSlides(1);
//   }, 4000);
// });

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
