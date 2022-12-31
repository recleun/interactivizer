import promptSync from 'prompt-sync';
const prompt = promptSync();

/**
 * Ask one question
 * @param question - The question to ask
 * @param separator - The separator between question and answer
 * @example
 * ```js
 * const answer = ask("Some question", " >> ");
 * ```
 */
export async function ask(question, separator=undefined) {
    if (typeof question != "string" && question != undefined)
        throw new Error("Question is not of type string");
    if (typeof separator != "string" && separator != undefined)
        throw new Error("Separator is not of type string");
    return prompt(question.concat(separator ? separator : " "));
}

export class Questions {

    /**
     * A class containing questions to be asked later.
     * @param options - (optional) Some options you can use
     * @option `questions` - An array containing questions to be added
     * @option `separator` - A string to be put between question and answer
     * the need to use `Questions.addQuestions()`
     * @example
     * ```js
     * const myQuestions = new Questions({questions: ["First question?", "Second question?"]});
     * ```
    */
    constructor(options={questions: [], separator: " "}) {
        if (options) {
            if (options.questions) {
                if (Array.isArray(options.questions) != true)
                    throw new Error("Questions passed are not of type array");
                this.hasQuestions = true;
            } else {
                this.hasQuestions = false;
            }
            if (options.separator) {
                if (options.separator != "" && typeof options.separator != "string")
                    throw new Error("Separator is not a string");
                this.hasSeparator = true;
            } else {
                this.hasSeparator = false;
            }
        }
        this.result = [];
        this.separator = this.hasSeparator ? options.separator : " ";
        if (this.hasQuestions) {
            for (let [key, question] of Object.entries(options.questions)) {
                this.addQuestion(question);
            }
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
            entry.answer = prompt(entry.question.concat(this.separator));
        }
        return this.result;
    }
}
