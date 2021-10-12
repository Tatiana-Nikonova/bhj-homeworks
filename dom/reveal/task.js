const reveals = document.querySelectorAll(".reveal");

document.addEventListener("scroll", showBlock);

function showBlock() {
	for (const reveal of reveals) {
		if (reveal) {
			let blockTop = reveal.getBoundingClientRect().top;
			const viewPort = window.innerHeight;
			if (blockTop < viewPort) {
				reveal.classList.add("reveal_active");
			} else {
				reveal.classList.remove("reveal_active");
			};
		};
	};
};