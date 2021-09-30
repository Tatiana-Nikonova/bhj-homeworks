let menuLinks = document.querySelectorAll(".menu__link");

for (let menuLink of menuLinks) {

	menuLink.onclick = function () {

		let menuLinkParent = menuLink.closest("li");

		let menuSub = menuLinkParent.querySelector(".menu__item > .menu_sub");

		const activeMenuItem = document.querySelector(".menu_active");

		if (menuSub !== null && activeMenuItem !== null && menuSub === activeMenuItem) {
			menuSub.classList.remove("menu_active");
			return false;
		}

		if (activeMenuItem && activeMenuItem !== null) {
			activeMenuItem.classList.remove("menu_active");
		}
		menuSub.classList.toggle("menu_active");

		return false;

	};
};