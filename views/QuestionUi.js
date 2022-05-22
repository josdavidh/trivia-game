//Modelo de la vista de la pregunta

let round = document.getElementById('round');
let userScore = document.getElementById('score');

let gameMessageContainer = document.querySelector('.game-message-container');
let gameMessageTitle = document.getElementById('game-message-title');
let gameMessageDescription = document.getElementById('game-message-description');
let gameBtnStart = document.getElementById('game-btn-start');
let gameBtnPause = document.getElementById('pause-btn');
let gameBtnResume = document.getElementById('resume-btn');

let questionText = document.getElementById('question--text');
let optionsContainer = document.getElementById('options-container');
let questionMessage = document.querySelector('.question-message');
let messageTitle = document.getElementById('question-message--title');
let messagePoints = document.getElementById('question-message--points');
let message;



class QuestionUi {

    showStadistics(level, score) {
        round.innerHTML = `Ronda: ${level+1} / 5`;
        userScore.innerHTML = `${score}`;
    }

    showQuestion(text, options, checkOption){
        gameMessageContainer.style.display = "none";
        gameBtnResume.style.display = "none";
        gameBtnPause.style.display = "block"
        this.showText(text);
        this.showOptions(options,checkOption);
    }

    showText(text) {
        questionText.innerHTML = text;
    }

    showOptions(options, checkOption) {
        optionsContainer.innerHTML = "";

        options.forEach(option => {
            const button = document.createElement('button');
            button.addEventListener('click', () => checkOption(option));
            button.className = "option-btn";
            button.innerText = option;

            optionsContainer.append(button);
        });
    }

    showCorrect (score) {
        message = `Tienes +${score} monedas <span><i class="fas fa-coins"></i></span>`;
        questionText.innerHTML = "";
        optionsContainer.innerHTML = "";
        questionMessage.classList.add("question-message--correct");
        messageTitle.innerHTML = "Correcto!";
        messagePoints.innerHTML = message;

        setTimeout(() => {
            questionMessage.classList.remove("question-message--correct")
        }, 3000);

    }

    showIncorrect () {
        message = `vuelve a empezar`;
        questionText.innerHTML = "";
        optionsContainer.innerHTML = "";
        questionMessage.classList.add("question-message--incorrect");
        messageTitle.innerHTML = "Incorrecto";
        messagePoints.innerHTML = message;

        setTimeout(() => {
            questionMessage.classList.remove("question-message--incorrect");
        }, 3000);
    }

    showPausedGame(level) {
        questionText.innerHTML = "";
        optionsContainer.innerHTML = "";
        gameBtnStart.style.display = "none";
        gameBtnPause.style.display = "none";
        gameMessageTitle.innerHTML = `No te rindas!`;
        gameMessageDescription.innerHTML = `Estás en la ronda ${level+1}. Continúa donde lo dejaste, con una pregunta al alzar de la misma dificultad.`;

        gameMessageContainer.style.display = "flex";
        gameBtnResume.style.display = "block";
    }
    showGameResult(level,score, winner) {

        if (winner) {
            this.showStadistics(level , score);
            questionText.innerHTML = "";
            optionsContainer.innerHTML = "";
            gameBtnResume.style.display = "none";
            gameBtnPause.style.display = "none";
            gameMessageTitle.innerHTML = `Felicidades!`;
            gameMessageDescription.innerHTML = `Has completado satisfactoriamente todas las rondas. ¿Quieres jugar de nuevo?`;

            gameMessageContainer.style.display = "flex";
            gameBtnStart.style.display = "block";
            gameBtnStart.innerHTML = "Volver a jugar";


        } else {
            this.showStadistics(level , score);
            questionText.innerHTML = "";
            optionsContainer.innerHTML = "";
            gameBtnPause.style.display = "none";

            gameMessageTitle.innerHTML = `Vuelve a intentarlo!`;
            gameMessageDescription.innerHTML = `llegaste a la ronda ${level+1}.`;
            gameMessageContainer.style.display = "flex";
            gameBtnStart.style.display = "block";
            gameBtnStart.innerHTML = "Volver a intentar"; 
        }
    }   
}

export {QuestionUi}