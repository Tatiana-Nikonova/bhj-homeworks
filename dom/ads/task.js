const rotators = document.querySelectorAll(".rotator__case");

function showRotator() {

	for (let i = 0; i < rotators.length; i++) {

		if (rotators.item(i).classList.contains("rotator__case_active")) {
			let speed = rotators.item(i).getAttribute("data-speed");
			let color = rotators.item(i).getAttribute("data-color");
			let index = 0;
			rotators.item(i).style.color = color;
			setTimeout(() => {
				rotators.item(i).classList.remove("rotator__case_active");
				if (i + 1 < rotators.length) index = (i + 1);
				rotators.item(index).classList.add("rotator__case_active");
				showRotator();
			}, speed);
		}
	}
}

showRotator();
