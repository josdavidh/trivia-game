//Modelo de las rondas

import { Question } from './Question.js';

class Round {
    score = 0;
    level = 1

    constructor({
        questions,
    }) {
        this.questions = questions;
    }

    getQuestionByText(text){
        let questionIndex = questions.findIndex(question => question.text === text);
        return this.questions[questionIndex];
    }

    attempt(text, option){
        if (this.getQuestionByText(text).correctAnswer(option)){
            console.log("correcto!");
        } 
        console.log("Incoreecto! :(");
    }

}

export {Round};