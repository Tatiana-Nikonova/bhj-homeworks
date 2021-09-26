const timer = document.getElementById("timer");
let counter = Number(timer.textContent);

const addText = function () {

	let seconds = counter % 60;
	let secondsInMinutes = (counter - seconds) / 60;
	let minutes = secondsInMinutes % 60;
	let hours = (secondsInMinutes - minutes) / 60;

	counter--;

	timer.textContent = `${hours} : ${minutes} : ${seconds}`;

	if (counter === 0) {
		alert("Вы победили в конкурсе");
		clearInterval(id);

		location = "https://catholic.by";
		alert(location);
	};
};

let id = setInterval(addText, 1000);