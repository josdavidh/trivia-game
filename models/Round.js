//Modelo de las rondas
import { QuestionUi } from '../views/QuestionUi.js';

const questionUi = new QuestionUi();

class Round {
    constructor({
        questions,
        player
    }) {
        this.questions = questions;
        this.player = player;
    }

    starGame() {
        this.player.score = 0;
        this.player.level = 0;
        this.showGame("easy");
    }

    pauseGame () {
        questionUi.showPausedGame(this.player.level);
    }

    resumeGame() {
        this.nextRound();
    }

    endGame() {
        questionUi.showGameResult(this.player.level, this.player.score, this.player.winner);
    }


    showGame(category) {
        // busca las preguntas por categoria
        const questionsCategory = this.questions.find(question => question[category]);
        // se selecciona una pregunta aleatoriamente
        const question = questionsCategory[category][Math.floor(Math.random() * questionsCategory[category].length)]; 

        questionUi.showQuestion(question.text,question.options, (optionSelected) => {
            this.attempt(question, optionSelected);
        });

        questionUi.showStadistics(this.player.level, this.player.score);
    }

    attempt(question, option){
        if (question.answer === option){
            this.player.score += 100;
            this.player.level ++;
            questionUi.showCorrect(this.player.score);
            setTimeout(() => {
                this.nextRound();
            }, 3000);

    
        } else {
            questionUi.showIncorrect();
            this.player.winner = false;
            this.endGame();
        }
    }

    nextRound() {
        switch(this.player.level) {
            case 0 :
                this.showGame("easy");
            break;
            case 1 : 
                this.showGame("basic");
            break;
            case 2 : 
                this.showGame("medium");
            break;
            case 3 : 
                this.showGame("intermediate");
            break;
            case 4 : 
                this.showGame("advanced");
            break;
            case 5: 
                this.player.winner = true;
                this.player.level = 4;
                this.endGame();
            break;
        }
    }
}

export {Round};