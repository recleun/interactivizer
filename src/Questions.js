import { createInterface } from 'readline'

class Questions {

    constructor() {
        this.answers = []
        this.readline = createInterface({
            input: process.stdin,
            output: process.stdout,
        })
    }

    askQuestion(options) {

        /**
         * @param {object} options - contains question type, question, callback funtion and (answers: optional)
         */

        if(options.type === 'input')
            this.add_Question_Input(options.question, options.callback)
    }

    add_Question_Input(ques, callback) {
        this.readline.question(ques, answer => {
            this.answers.push(answer)
            callback()
        })
    }

}


export default Questions;