const prev = document.querySelector(".slider__arrow_prev");
const next = document.querySelector(".slider__arrow_next");
const slider = document.querySelectorAll(".slider__item");
const dots = document.querySelectorAll(".slider__dot");

let index = 0;

const activeSlide = n => {
	for (slide of slider) {
		slide.classList.remove("slider__item_active");
	};
	slider[n].classList.add("slider__item_active");
};





const getCurrentSlide = function (idx) {
	activeSlide(idx);
	dotActive(idx);
};


const nextSlide = function () {
	if (index === slider.length - 1) {
		index = 0;
		getCurrentSlide(index);
	} else {
		index++;
		getCurrentSlide(index);
	};
};

const prevSlide = function () {
	if (index === 0) {
		index = slider.length - 1;
		getCurrentSlide(index);
	} else {
		index--;
		getCurrentSlide(index);
	};
};


next.onclick = function () {
	nextSlide();
	return false;
};

prev.onclick = function () {
	prevSlide();
	return false;
};

const dotActive = function (count) {
	for (dot of dots) {
		dot.classList.remove("slider__dot_active");
	};
	dots[count].classList.add("slider__dot_active");
};


dots.forEach((item, indexDot) => {
	item.onclick = () => {
		index = indexDot;
		getCurrentSlide(index);
		return false;
	};
});


