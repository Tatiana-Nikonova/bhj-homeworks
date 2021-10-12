const rotators = document.querySelectorAll(".rotator__case");



function showRotator() {
	for (let i = 0; i < rotators.length; i++) {

		if (rotators.item(i).classList.contains("rotator__case_active")) {
			rotators.item(i).classList.remove("rotator__case_active");
		};

		let next = rotators.item(i).nextElementSibling;


		if (next === rotators.item(i).lastElementChild) {
			rotators.item(0).classList.add("rotator__case_active");
		} else {
			next.classList.add("rotator__case_active");
		};

	};


};

setInterval(showRotator, 1000);
