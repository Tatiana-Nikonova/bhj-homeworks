const url = "https://netology-slow-rest.herokuapp.com/poll.php";
const question = document.getElementById("poll__title");
const answer = document.getElementById("poll__answers");
const modal = document.getElementById("modal");
const btnClose = document.getElementById("close-button");

let xhr = new XMLHttpRequest();
xhr.open("GET", url, true);

xhr.addEventListener('load', () => {
	if (xhr.status === 200) {
		let response = JSON.parse(xhr.response);
		let answers = response.data.answers;
		question.textContent = response.data.title;
		for (let item in answers) {
			let btn = document.createElement("button");
			btn.setAttribute("style", "margin: 6px;");
			btn.textContent = answers[item];
			answer.appendChild(btn);
			btn.onclick = () => {
				modal.classList.add("modal_active");
				let vote = question;
				let formData = new FormData(vote);
				xhr.open("POST", url, true);
				xhr.setRequestHeader('Content-type', 'application / x - www - form - urlencoded');
				xhr.send(formData);

				// Запуталась с votes...??? vote=id_опроса&answer=индекс_ответа_в_массиве_ответов
				//Как это написать не знаю

			};
		};
	};
});

xhr.send();

btnClose.addEventListener('click', () => {
	modal.classList.remove("modal_active");
});