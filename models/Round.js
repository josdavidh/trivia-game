//Modelo de las rondas

import { Question } from './Question.js';

class Round {
    score = 0;

    constructor({
        question,
        level
    }) {
        this.question = question;
        this.level = level;
    }

}

export {Round};