const tabs = document.querySelectorAll(".tab ");
const contents = document.querySelectorAll(".tab__content");

function activeTab(index) {
	for (let tab of tabs) {
		tab.classList.remove("tab_active");
	};
	tabs[index].classList.add("tab_active");
};

function activeContent(index) {
	for (let content of contents) {
		content.classList.remove("tab__content_active");
	};
	contents[index].classList.add("tab__content_active");
};

tabs.forEach((item, ind) => {
	item.onclick = () => {
		activeTab(ind);
		activeContent(ind);
	};
});
