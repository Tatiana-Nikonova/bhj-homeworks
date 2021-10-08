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
};

// ошибка, не меняется значение
for (let link of links) {
	let linkItem = link.closest(".dropdown__item");
	linkItem.onclick = () => {
		const list = linkItem.closest(".dropdown__list");
		list.classList.remove("dropdown__list_active");
		dropValue.textContent = link.textContent;
		return false;
	};
};
