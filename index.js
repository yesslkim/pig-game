// GAME ELEMENTS
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
let targetElem = player1;
let totalScoreElem = targetElem.querySelector('.score-total .score');
let currentScoreElem = targetElem.querySelector('.score-current .score');

const getScore = targetElem => Number(targetElem.textContent);

// METHOD
const updateCurrentScore = diceNum => {
	const currentScore = getScore(currentScoreElem);
	currentScoreElem.textContent = currentScore + diceNum;
};

const updateTotalScore = () => {
	const currentScore = getScore(currentScoreElem);
	const totalScore = getScore(totalScoreElem);
	totalScoreElem.textContent = totalScore + currentScore;
};

const getRanDomDiceNumber = () => {
	return Math.ceil(Math.random() * 6);
};

const resetScores = () => {
	totalScoreElem.textContent = 0;
	currentScoreElem.textContent = 0;
};

const changeCurrentPlayer = () => {
	targetElem = targetElem.classList.contains('player1') ? player2 : player1;
	totalScoreElem = targetElem.querySelector('.score-total .score');
	currentScoreElem = targetElem.querySelector('.score-current .score');
};

// BTNS
const handleBtnRoll = () => {
	const diceNum = getRanDomDiceNumber();

	if (diceNum > 2) {
		updateCurrentScore(diceNum, currentScoreElem);
	} else {
		resetScores(totalScoreElem, currentScoreElem);
		changeCurrentPlayer(totalScoreElem);
	}
};

const BTN_RESTART = 'btn-restart';
const BTN_ROLL = 'btn-roll';
const BTN_HOLD = 'btn-hold';

const handleGameButtons = e => {
	if (e.target.tagName !== 'BUTTON') return;
	switch (e.target.className) {
		case BTN_RESTART: {
			return;
		}
		case BTN_ROLL: {
			handleBtnRoll();
			return;
		}
		case BTN_HOLD: {
			return;
		}
		default:
			return;
	}
};

const btnWrapper = document.querySelector('.assets');
btnWrapper.addEventListener('click', handleGameButtons);
