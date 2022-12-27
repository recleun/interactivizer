import { Colors, Questions } from "./src/cli-interactions.js";

const q1 = new Questions()

q1.askQuestion({
    type: 'input',
    question: Colors.bgBlue.bold('Whats your name? '),
    callback: () => {
        console.log(q1.answers[0]) 
    },
})


