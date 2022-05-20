// Modelo de las preguntas
class Question {
  constructor({ text, options = [], answer, category }) {
    this.text = text;
    this.options = options;
    this.answer = answer;
    this.category = category;
  }

  correctAnswer(option) {
    return option === this.answer;
  }
}

export {Question};
