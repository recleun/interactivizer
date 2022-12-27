import promptSync from 'prompt-sync';
const prompt = promptSync();

export class Questions {

    constructor(questions=undefined) {
        this.result = [];
        if (questions != undefined && typeof questions == "array") {
            for (let [key, question] of Object.entries(questions)) {
                this.addQuestion(question);
            }
        } else if (questions != undefined && typeof questions != "array") {
            throw new Error("Questions passed are not of type array");
        }
    }

    addQuestion(question) {
        if (typeof question != "string") throw new Error("Question not a string");
        const entry = { question: question, answer: undefined }
        this.result.push(entry);
        return this;
    }

    async ask() {
        if (this.result.length == 0) throw new Error("No questions to ask");
        for (let [key, entry] of Object.entries(this.result)) {
            entry.answer = prompt(`${entry.question} >> `);
        }
        return this.result;
    }
}
