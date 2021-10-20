let element = document.querySelector(".chat-widget__side");
let input = document.getElementById("chat-widget__input");
const widget = document.querySelector(".chat-widget");
const container = document.querySelector(".chat-widget__messages");
let arr = ['Добрый день, какие у вас проблемы?', 'Зачем беспокоить по пустякам!', 'Кто?',
	'Зачем Вам это?', 'А короче, мне пора обедать', 'Мне бы ваши проблемы'];

let f = function () {
	widget.classList.add("chat-widget_active");
};


element.addEventListener('click', f);
element.addEventListener('mousedown', f);

input.addEventListener('keypress', (event) => {
	if (event.code === "Enter" && input.value.length) {
		let div = document.createElement("div");
		let text = document.createElement("div");
		let time = document.createElement("div");
		div.appendChild(time);
		div.appendChild(text);
		div.classList.add("message");
		div.classList.add("message_client");
		container.appendChild(div);
		text.classList.add("message__text");
		time.classList.add("message__time");
		text.textContent = input.value;
		input.value = "";
		time.textContent = createDate();
		setTimeout(doAnswer, 200);
	};
});

function createDate() {
	let date = new Date();
	return "" + formateDate(date.getHours()) + ":" + formateDate(date.getMinutes())
		+ ":" + formateDate(date.getSeconds());
};

function formateDate(date) {
	if (date.length === 1) {
		return "0" + date.length;
	};
	return date;
};

function doAnswer() {
	const messages = document.querySelector('.chat-widget__messages');
	let message = document.createElement("div");
	let time = document.createElement("div");
	let text = document.createElement("div");
	message.classList.add("message");
	message.classList.add("message__time");
	message.classList.add("message__text");
	messages.appendChild(message);
	message.appendChild(time);
	message.appendChild(text);
	time.textContent = createDate();
	text.textContent = arr[Math.floor(Math.random() * arr.length)];
};