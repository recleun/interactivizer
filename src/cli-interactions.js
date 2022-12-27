

class CLI {

	constructor(terminalName, options)
	{
		this.TerminalName = terminalName;
		this.options = options;
	}

	display(str, options) {
		process.stdout.write(str)
	}

}

export default CLI;