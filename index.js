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
