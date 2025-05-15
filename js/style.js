var slideIndex = 1;

function showSlide(n) {
	var slides = document.getElementsByClassName("pslide");

	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}

	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}

	slides[slideIndex - 1].style.display = "block";
}

function changeSlide(n) {
	slideIndex += n;
	showSlide(slideIndex);
}

showSlide(slideIndex);
