//Important Variables

const $board = document.querySelector(".board");
const $cards = $board.querySelectorAll(".card");
const colors = ["red", "blue", "orange", "green", "yellow", "violet"];
const doubleColors = colors.concat(colors); // duplicates the array for the 12 cards.

function gameConfig() {
	function assignColor() {
		let counter = 0; //index counter for the array
		arrayShuffle(doubleColors);

		$cards.forEach((card) => {
			card.classList.add(doubleColors[counter]);
			counter++;
		});
	}

	function hideColors() {
		$cards.forEach((card) => {
			card.classList.add("hidden-color");
		});
	}

	assignColor();
	hideColors();
}

gameConfig();
elementInteraction($board);

//Support Functions

function elementInteraction(board) {
	board.onclick = function (e) {
		const $elemento = e.target; // Selects the element clicked.
		if ($elemento.classList.contains("card")) {
			cardHandler($elemento);
		}
	};
}

function cardHandler(currentCard) {
	showCard(currentCard);
}
function arrayShuffle(array) {
	let currentIndex = array.length;
	let randomIndex;

	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}
function showCard(card) {
	card.classList.remove("hidden-color");
}

/*
3. Una vez que tengo esta base, tengo que hacer que si el target que estoy senialado tiene la misma clase que el otro target que senialo se selecciona bien, sino
se sigue seleccionando.
4. Una vez que seleccione todas, ejecutar un mensaje de que ganaste.


*/
