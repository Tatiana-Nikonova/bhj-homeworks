const url = "https://netology-slow-rest.herokuapp.com";
const img = document.getElementById("loader");
const activeImg = "loader_active";
const items = document.getElementById("items");

const xhr = new XMLHttpRequest();
xhr.open("GET", url, true);

xhr.addEventListener('load', () => {
	if (xhr.status === 200) {
		img.classList.remove(activeImg);
		const json = JSON.parse(xhr.response);
		const valutes = json.response["Valute"];

		for (let i in valutes) {
			const div = "div";
			createDiv(div, valutes[i].CharCode, "item__code");
			createDiv(div, valutes[i].Value, "item__value");
			createDiv(div, valutes[i].Name, "item__currency");
		};
	};
});

xhr.send();

function createDiv(tagName, textContent, className) {
	const div = document.createElement(tagName);
	div.classList.add(className);
	div.textContent = textContent;
	items.appendChild(div);
};