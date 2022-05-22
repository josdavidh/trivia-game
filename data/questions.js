import {Question} from '../models/Question.js';
import {data} from './data.js';

const easy = [];
const basic = [];
const medium = [];
const intermediate = [];
const advanced = [];

const questions = [
    {
        name: "easy",
        easy,
    },
    {
        name: "basic",
        basic,
    },
    {
        name: "medium",
        medium,
    },
    {
        name: "intermediate",
        intermediate,
    },
    {
        name: "advanced",
        advanced,
    },
];

const elements = data.map( (element) => 
    new Question({
        text: element.text,
        options: element.options,
        answer: element.anwser,
        category: element.category,
    })
);


elements.forEach(element => {
    switch(element.category){
        case "easy":
            questions[0].easy.push(element);
        break;
        case "basic":
            questions[1].basic.push(element);
        break;
        case "medium":
            questions[2].medium.push(element);
        break;
        case "intermediate":
            questions[3].intermediate.push(element);
        break;
        case "advanced":
            questions[4].advanced.push(element);
        break;
    }
});


export {questions}; 