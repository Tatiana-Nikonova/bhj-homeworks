const modalMain = document.getElementById("modal_main");
const modalSuccess = document.getElementById("modal_success");
const modalCloses = document.getElementsByClassName("modal__close_times");
const showSuccess = document.getElementsByClassName("show-success");

modalMain.className += " modal_active";

for (let modalClose of modalCloses) {
	modalClose.onclick = function () {
		modalSuccess.className = "modal";
		modalMain.className = "modal";
	};
};

for (let showSucces of showSuccess) {
	showSucces.onclick = function () {
		modalSuccess.className += " modal_active";
	};
};

