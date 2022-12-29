import Typing from "../src/typing.js";
import { Colors } from "../index.js"

const typer = new Typing({Speed: 50})

await typer.type(Colors.cyan("Hello World"))
await typer.type("Hi World...")