const dropValue = document.querySelectorAll(".dropdown__value");
const links = document.querySelectorAll(".dropdown__link");
const list = document.querySelector(".dropdown__list");

for (let value of dropValue) {
	value.onclick = () => {

		const dropDown = value.closest(".dropdown");

		const dropList = dropDown.querySelector(".dropdown__list");

		if (dropList !== null) {
			if (dropList.classList.contains("dropdown__list_active")) {
				dropList.classList.remove("dropdown__list_active");
				return;
			};
			dropList.classList.add("dropdown__list_active");
			return false;
		};
	};

	for (let link of links) {

		link.onclick = () => {
			const newList = link.closest(".dropdown__list");
			const contentDropdown = link.closest(".dropdown");
			const contentValue = contentDropdown.querySelector(".dropdown > .dropdown__value");
			newList.classList.remove("dropdown__list_active");
			contentValue.textContent = link.textContent;
			return false;
		};

	};

};
