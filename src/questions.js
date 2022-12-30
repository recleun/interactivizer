import promptSync from 'prompt-sync';
const prompt = promptSync();

export class Questions {

    /**
     * A class containing questions to be asked later.
     * @param options - (optional) Some options you can use
     * @option questions - An array containing questions to be added
     * the need to use `Questions.addQuestions()`
     * @example
     * ```js
     * const myQuestions = new Questions({questions: ["First question?", "Second question?"]});
     * ```
    */
    constructor(options={questions: []}) {
        this.result = [];
        if (Array.isArray(options.questions) == true) {
            for (let [key, question] of Object.entries(options.questions)) {
                this.addQuestion(question);
            }
        } else if (options.questions != undefined) {
            throw new Error("Questions passed are not of type array");
        }
    }

    /**
     * @param question - The question to add
     * @example
     * Creates a questions instance with 2 questions
     * ```js
     * const myQuestions = new Questions()
     *     .addQuestion("The first question?")
     *     .addQuestion("The second question?");
     * ```
    */
    addQuestion(question) {
        if (typeof question != "string") throw new Error("Question not a string");
        const entry = { question: question, answer: undefined }
        this.result.push(entry);
        return this;
    }

    /**
     * @returns `Object`
     * @example
     * ```js
     * await myQuesions.ask()
     * 
     * // Returns array containing each question and its answer
     * [
     *   {
     *      question: answer
     *   }
     * ]
     * ```
    */
    async ask() {
        if (this.result.length == 0) throw new Error("No questions to ask");
        for (let [key, entry] of Object.entries(this.result)) {
            entry.answer = prompt(`${entry.question} >> `);
        }
        return this.result;
    }
}
