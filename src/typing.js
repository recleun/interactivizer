import { setTimeout } from "timers/promises"

export default class Typing {

    constructor(options={ Speed : 40})
    {
        this.Speed = options.Speed
        this.currentChar = 0
    }

    async type(line) {
        if(typeof line != "string") throw new Error("Line is not of string type.")
        this.currentChar = 0;
        line = line + '\n'
        for(let i = 0; i < line.length; i++)
        {
            await setTimeout(this.Speed)
            process.stdout.write(line.charAt(i))
        }
    }
}

