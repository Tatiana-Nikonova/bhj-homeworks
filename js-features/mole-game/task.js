for (let index = 1; index < 10; index++) {

	function getHole() {
		return document.getElementById(`hole${index}`);
	};


	function mincer(func, clickDead) {

		clickDead = getHole(index);

		clickDead.onclick = function () {
			const dead = document.getElementById("dead");
			const lost = document.getElementById("lost");

			if (clickDead.className === 'hole') {
				const lost = document.getElementById("lost");
				lost.textContent++;
				if (lost.textContent === '5') {
					alert("Вы проиграли!");
					location.reload(true);
				};

			};

			if (clickDead.className === 'hole hole_has-mole') {
				const dead = document.getElementById("dead");
				dead.textContent++;
				if (dead.textContent === '10') {
					alert("Вы выйграли!");
					location.reload(true);
				};
			};
		};
	};

	mincer(getHole);
};




