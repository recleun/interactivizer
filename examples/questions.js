import { Questions } from "../index.js";

// Create a question set
const questions = new Questions.QuestionSet({questions: ["First question?", "Second question?"]});

// Or create an empty question set and add them later
const questions2 = new Questions.QuestionSet();

questions2.addQuestion("First question?").addQuestion("Second question?");

// Clear the questions
questions2.clearQuestions();

// Ask the questions in the question set (Will show questions by order and get input)
// Will return an object in an array with each question and its answer:
// [
//   { 
//     question: string,
//     answer: string
//   } 
// ]
const answers = await questions.ask();

// Ask a single question
const answer = await Questions.ask("Some question?");
