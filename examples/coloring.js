import { Colors } from "../index.js";

// Colors is basically chalk.
// Their repository: https://github.com/chalk/chalk
// Their npm package: https://npmjs.com/package/chalk

// Print out text with different colors
console.log(Colors.red("This is red text."));
console.log(Colors.blue("This is blue text."));

// Print out text with different backgrounds
console.log(Colors.bgGrey("This is default text on grey background"));
console.log(Colors.bgWhite.bgBlack("This is black text on white background"));
