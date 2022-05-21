import {Round} from '../models/Round.js';
import {questions} from '../data/questions.js';
import {Player} from '../models/Player.js';
import { QuestionUi } from '../views/QuestionUi.js';

const player = new Player ({name: "jose"});

const round = new Round ({questions, player});

const questionUi = new QuestionUi();



// questionUi.showText(questions[0].text);

// questionUi.showOptions(questions[0].options, (optionSelected) => {
//     round.attempt(questions[0].text, optionSelected)
// });

round.nextRound()