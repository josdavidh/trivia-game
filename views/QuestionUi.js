//Modelo de la vista de la pregunta

class QuestionUi {

    showQuestion(text, options, checkOption){
        this.showText(text);
        this.showOptions(options,checkOption);
    }

    showText(text) {
        const questionText = document.getElementById('question--text');
        questionText.innerHTML = text;
    }

    showOptions(options, checkOption) {
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = "";

        options.forEach(option => {
            const button = document.createElement('button');
            button.addEventListener('click', () => checkOption(option));
            button.className = "option-btn";
            button.innerText = option;

            optionsContainer.append(button);
        });
    }
}

export {QuestionUi}