//Modelo de las rondas

import { Question } from './Question.js';
import { Player } from './Player.js';
import { QuestionUi } from '../views/QuestionUi.js';

class Round {
    score = 0;
    level = 1;

    constructor({
        questions,
        player
    }) {
        this.questions = questions;
        this.player = player;
    }

    showGame(category) {
        const question = this.questions.find(question => question.category === category);
        const questionUi = new QuestionUi();
        questionUi.showQuestion(question.text,question.options, (optionSelected) => {
            this.attempt(question.text, optionSelected);
        });
    }

    attempt(text, option){
        if (this.getQuestionByText(text).correctAnswer(option)){
            this.player.score += 100;
            this.level++;
            console.log("correcto!");
            console.log("Puntos del jugador: "+this.player.score)
            console.log("Nivel: "+this.level);
            this.nextRound();
        } else this.endGame();
    }

    nextRound() {
        switch(this.level) {
            case 1 :
                this.showGame("easy");
            break;
            case 2 : 
                this.showGame("basic");
            break;
            case 3 : 
                this.showGame("medium");
            break;
            case 4 : 
                this.showGame("intermediate");
            break;
            case 5 : 
                this.showGame("advanced");
            break;
            case 6: 
                this.endGame();
            break;
        }
    }

    endGame() {
        console.log("Juego terminado!!!");
    }

    getQuestionByText(text){
        let questionIndex = this.questions.findIndex(question => question.text === text);
        return this.questions[questionIndex];
    }

}

export {Round};