import {Round} from '../models/Round.js';
import {questions} from '../data/questions.js';
import {Player} from '../models/Player.js';


const player = new Player ({level: 0, score: 0});
const round = new Round ({questions, player});


const btnStartGame = document.getElementById('game-btn-start');
const btnPauseGame = document.getElementById('pause-btn');
const btnResume = document.getElementById('resume-btn');


btnStartGame.addEventListener('click', () => round.starGame());
btnPauseGame.addEventListener('click', () => round.pauseGame());
btnResume.addEventListener('click', () => round.resumeGame());
