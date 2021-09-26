const timer = document.getElementById("timer");
let c = Number(timer.textContent);

const addText = function () {

	let seconds = c % 60;
	let secondsInMinutes = (c - seconds) / 60;
	let minutes = secondsInMinutes % 60;
	let hours = (secondsInMinutes - minutes) / 60;

	c--;

	timer.textContent = `${hours} : ${minutes} : ${seconds}`;

	if (c === -2) {
		alert("Вы победили в конкурсе");
		clearInterval(id);

		location = "https://catholic.by";
		alert(location);
	};
};

let id = setInterval(addText, 1000);