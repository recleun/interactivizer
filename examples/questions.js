import { Questions, ask } from "../index.js";

// Create a questions class
const questions = new Questions({questions: ["First question?", "Second question?"]});

// Or create an empty question and add them later
const questions2 = new Questions();

questions2.addQuestion("First question?").addQuestion("Second question?");

// Ask the questions (Will show questions by order and get input)
// Will return an object in an array with each question and its answer:
// [
//   { 
//     question: string,
//     answer: string
//   } 
// ]
const answers = await questions.ask();

// Ask a single question
const answer = await ask("Some question?");
