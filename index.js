// GAME ELEMENTS
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const playerElems = document.querySelectorAll('.player');
const btnElems = document.querySelectorAll('.assets > div button');
const diceElem = document.querySelector('.dice');
const diceClassNames = [
	'dice-1',
	'dice-2',
	'dice-3',
	'dice-4',
	'dice-5',
	'dice-6',
];
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
	const sum = totalScore + currentScore;
	totalScoreElem.textContent = sum;
	return sum;
};

const getRanDomDiceNumber = () => {
	return Math.ceil(Math.random() * 6);
};

const resetScores = () => {
	totalScoreElem.textContent = 0;
	currentScoreElem.textContent = 0;
	document.querySelectorAll('.score').forEach(score => (score.textContent = 0));
};

const resetPlayer = () => {
	playerElems.forEach(player => player.classList.remove('active', 'win'));
	targetElem = player1;
	targetElem.classList.add('active');
	totalScoreElem = targetElem.querySelector('.score-total .score');
	currentScoreElem = targetElem.querySelector('.score-current .score');
};

const changeCurrentPlayer = () => {
	targetElem = targetElem.classList.contains('player1') ? player2 : player1;
	totalScoreElem = targetElem.querySelector('.score-total .score');
	currentScoreElem = targetElem.querySelector('.score-current .score');

	playerElems.forEach(player => player.classList.remove('active'));
	targetElem.classList.add('active');
};

// BTNS
const handleBtnRestart = () => {
	resetScores();
	resetPlayer();
	btnElems.forEach(button => button.removeAttribute('disabled'));
};

const handleBtnRoll = () => {
	const diceNum = getRanDomDiceNumber();
	diceElem.classList.remove(...diceClassNames);
	diceElem.classList.add(`dice-${diceNum}`);

	if (diceNum > 2) {
		updateCurrentScore(diceNum, currentScoreElem);
	} else {
		resetScores(totalScoreElem, currentScoreElem);
		changeCurrentPlayer(totalScoreElem);
	}
};

const handleBtnHold = () => {
	const totalScore = updateTotalScore();
	if (totalScore >= 50) {
		targetElem.classList.add('win');
		btnElems.forEach(btn => btn.setAttribute('disabled', true));
	} else {
		currentScoreElem.textContent = 0;
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
			handleBtnRestart();
			return;
		}
		case BTN_ROLL: {
			handleBtnRoll();
			return;
		}
		case BTN_HOLD: {
			handleBtnHold();
			return;
		}
		default:
			return;
	}
};

const btnWrapper = document.querySelector('.assets');
btnWrapper.addEventListener('click', handleGameButtons);
