import {Question} from '../models/Question.js';
import {data} from './data.js';

export const questions = data.map( (question) => 
    new Question({
        text: question.text,
        options: question.options,
        answer: question.anwser,
        category: question.category,
    })
);