const progress = document.getElementById("progress");
const btnSend = document.getElementById("send");
const selectBtn = document.querySelector(".input__wrapper-button");
const url = "https://netology-slow-rest.herokuapp.com/upload.php";
const form = document.getElementById("form");

selectBtn.onclick = () => {
	progress.setAttribute("value", 0);
};

btnSend.onclick = () => {
	const fileDesc = document.querySelector(".input__wrapper-desc");
	if (fileDesc.textContent) {
		upload();
	};
	return false;
};

function upload() {
	const xhr = new XMLHttpRequest();
	const formData = new FormData(form);
	// обработчик для отправки
	xhr.upload.onprogress = function (event) {
		progress.setAttribute("value", event.loaded / event.total);
	};

	xhr.open("POST", url);
	xhr.send(formData);
};