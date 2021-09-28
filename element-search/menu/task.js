let menuLinks = document.querySelectorAll(".menu__link");
let countClick = 0;

for (let menuLink of menuLinks) {
	menuLink.onclick = function () {
		countClick++;
		let menuLinkParent = menuLink.closest("li");

		let menuSub = menuLinkParent.querySelector(".menu__item > .menu_sub");

		if (menuSub !== null && countClick % 2 !== 0) {
			menuSub.className += " menu_active";
			return false;
		} else if (countClick % 2 === 0 && menuSub.className === "menu_active") {
			menuSub.className = "menu menu_sub";
			return false;
		};
	};
};


