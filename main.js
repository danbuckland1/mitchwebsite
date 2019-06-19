var index = 0;
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

  setTimeout(slideShow, 3000);
}
