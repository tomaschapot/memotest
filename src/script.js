//Important Variables

const $board = document.querySelector(".board");
const $cards = $board.querySelectorAll(".card");
const colors = ["red", "blue", "orange", "green", "yellow", "violet"];
const doubleColors = colors.concat(colors); // duplicates the array for the 12 cards.
let $firstCard = 0; //saves the first click you did.

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
		//uses event bubbling to click on board and his childs
		const $element = e.target; // Selects the element clicked.
		if ($element.classList.contains("card")) {
			showCard($element);
			cardHandler($element);
		}
	};
}

function cardHandler(currentCard) {
	if ($firstCard === 0) {
		$firstCard = currentCard;
		console.log($firstCard);
	} else if ($firstCard === currentCard) {
		return;
	} else if (cardComparison(currentCard, $firstCard)) {
		showCard(currentCard);
		showCard($firstCard);
		console.log("se activo");
		$firstCard = 0;
	} else {
		hideCard(currentCard);
		hideCard($firstCard);
		$firstCard = 0;
	}
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

function hideCard(card) {
	setTimeout(() => {
		card.classList.add("hidden-color");
	}, 700);
}

function cardComparison(currentCard, firstCard) {
	return currentCard.className === firstCard.className;
}

/*
3. Una vez que tengo esta base, tengo que hacer que si el target que estoy senialado tiene la misma clase que el otro target que senialo se selecciona bien, sino
se sigue seleccionando.
4. Una vez que seleccione todas, ejecutar un mensaje de que ganaste.


*/
