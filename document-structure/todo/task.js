let button = document.getElementById("tasks__add");
let list = document.getElementById("tasks__list");
let input = document.getElementById("task__input");

button.onclick = () => {
	if (input.value && input.value.trim().length > 0) {
		let task = document.createElement("div");
		task.classList.add("task");
		list.appendChild(task);
		let title = document.createElement("div");
		title.classList.add("task__title");
		title.textContent = input.value;
		task.appendChild(title);
		input.value = "";
		let a = document.createElement("a");
		task.appendChild(a);
		a.classList.add("task__remove");
		a.textContent = "X";
		a.onclick = () => {
			list.removeChild(task);
		};
	};
	return false;
};