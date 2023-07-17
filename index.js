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

const BTN_RESTART = 'btn-restart';
const BTN_ROLL = 'btn-roll';
const BTN_HOLD = 'btn-hold';

const handleGameButtons = e => {
	if (e.target.tagName !== 'BUTTON') return;
	switch (e.target.className) {
		case BTN_RESTART: {
			console.log(BTN_RESTART);
			return;
		}
		case BTN_ROLL: {
			console.log(BTN_ROLL);
			return;
		}
		case BTN_HOLD: {
			console.log(BTN_HOLD);
			return;
		}
		default:
			return;
	}
};

const btnWrapper = document.querySelector('.assets');
btnWrapper.addEventListener('click', handleGameButtons);
