let inherests = document.querySelectorAll(".interests");
for (let item of inherests) {
	const closest = item.closest(".interest");
	if (closest) {
		const checkBox = closest.querySelector(".interest__check");
		checkBox.onclick = () => {
			if (checkBox.checked) {
				doInversion(closest, true);
			} else {
				doInversion(closest, false);
			};
		};
	};
};

function doInversion(element, checked) {
	let items = element.querySelectorAll(".interest__check");
	for (let i of items) {
		i.checked = checked;
	};
};