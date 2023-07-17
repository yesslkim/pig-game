// GAME
const gameBoard = {
	currentPlayerIdx: 0,
	players: [
		{
			name: 'player1',
			totalScore: 0,
			currentScore: 0,
		},
		{
			name: 'player2',
			totalScore: 0,
			currentScore: 0,
		},
	],

	changeCurrentPlayer() {
		if (this.currentPlayerIdx > 0) {
			this.currentPlayerIdx = 0;
		} else {
			this.currentPlayerIdx = 1;
		}
	},

	getCurrentPlayer() {
		return this.players[this.currentPlayerIdx];
	},

	updateCurrentScore(diceNum) {
		this.players[this.currentPlayerIdx].currentScore += diceNum;
	},

	updateTotalScore() {
		this.players[this.currentPlayerIdx].totalScore +=
			this.players[this.currentPlayerIdx].currentScore;
	},

	resetCurrentScore() {
		this.players[this.currentPlayerIdx].currentScore = 0;
	},

	resetAllScore() {
		this.resetCurrentScore();
		this.players[this.currentPlayerIdx].totalScore = 0;
	},
};

const getCurrentPlayerTag = () => {
	const currentPlayerClassName =
		gameBoard.players[gameBoard.currentPlayerIdx].name;
	const currentPlayer = document.querySelector(currentPlayerClassName);
	return currentPlayer;
};

const resetPlayerClassName = () => {
	const currentPlayer = getCurrentPlayerTag();
	currentPlayer.classList.remove(['active', 'win']);
};

const setPlayerClassName = className => {
	const currentPlayer = getCurrentPlayerTag();
	resetPlayerClassName();
	currentPlayer.classList.add(className);
};

const setPlayerScore = diceNum => {
	if (diceNum > 2) {
		gameBoard.updateCurrentScore(diceNum);
	} else {
		gameBoard.resetAllScore();
		gameBoard.changeCurrentPlayer();
	}
};

const getRandomDiceNumber = () => {
	return Math.ceil(Math.random() * 6);
};

const BTN_RESTART = 'btn-restart';
const BTN_ROLL = 'btn-roll';
const BTN_HOLD = 'btn-hold';

const handleGameButtons = e => {
	if (e.target.tagName !== 'BUTTON') return;
	switch (e.target.className) {
		case BTN_RESTART: {
			gameBoard.resetAllScore();
			resetPlayerClassName();
			return;
		}
		case BTN_ROLL: {
			const diceNum = getRandomDiceNumber();
			setPlayerScore(diceNum);
			return;
		}
		case BTN_HOLD: {
			const currentPlayerScore = gameBoard.getCurrentPlayer().currentScore;
			if (currentPlayerScore >= 50) {
				setPlayerClassName('win');
			} else {
				gameBoard.resetCurrentScore();
				gameBoard.changeCurrentPlayer();
			}
			return;
		}
		default:
			return;
	}
};

const btnWrapper = document.querySelector('.assets');
btnWrapper.addEventListener('click', handleGameButtons);
