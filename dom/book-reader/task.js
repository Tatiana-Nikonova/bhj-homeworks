const fontSize = document.querySelectorAll(".font-size");
const book = document.getElementById("book");



for (const font of fontSize) {

	function fontClick() {

		let active = document.querySelector(".font-size_active");

		if (active) {
			active.classList.remove("font-size_active");
		};

		font.classList.add("font-size_active");

		if (font.classList.contains("font-size_small")) {
			book.className = "book book_fs-small";
		} else if (font.classList.contains("font-size_big")) {
			book.className = "book book_fs-big";
		};

		return false;
	};

	font.addEventListener("click", fontClick);
};
