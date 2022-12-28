import promptSync from 'prompt-sync';
const prompt = promptSync();

export class Questions {

    /**
     * A class containing questions to be asked later.
     * @param questions - (optional) Adds a list of questions without
     * the need to use `Questions.addQuestions()`
     * @example
     * ```js
     * const myQuestions = new Questions(["First question?", "Second question?"]);
     * ```
    */
    constructor(questions=undefined) {
        this.result = [];
        if (Array.isArray(questions) == true) {
            for (let [key, question] of Object.entries(questions)) {
                this.addQuestion(question);
            }
        } else if (questions != undefined) {
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
