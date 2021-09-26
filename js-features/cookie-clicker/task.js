const cookie = document.getElementById("cookie");
const count = document.getElementById("clicker__counter");
const clickSpeed = document.getElementById("click_speed");
let start = Date.now();

cookie.onclick = function () {
	let end = Date.now();
	let elapsed = end - start;
	start = Date.now();

	count.textContent++;
	clickSpeed.textContent = (1 / (elapsed / 1000)).toFixed(2);

	if (count.textContent % 2 !== 0) {
		cookie.width = 300;
	} else {
		cookie.width = 200;
	};
};