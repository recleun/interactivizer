# Change Log
All notable changes to this project will be documented in this file.
 
## v0.1.0 - (2022-12-27)
 
A new package was born.
 
### Added
- `Questions` class that can process questions and their answers.
- [chalk](https://npmjs.com/package/chalk) package as `Colors`.
- Documentation within code for `Questions` and `Colors`.

## v0.1.1 - (2022-12-28)

This release fixes a bug in v0.1.0.

### Fixed
- Logic of `Questions` constructor's parameter.

## v0.1.2 - (2022-12-30)

Added some more functionality, and some minor changes.

### Added
- `ask()` that acts like `Questions` but for only one question.
- Example for `ask()`

### Changed
- `Questions` constructor parameters are changed to options.
- Logic handling parameters for `Questions`

## v0.1.3 - (2022-12-31)

Changed how `Questions` work, and added some extra functions, as well as updating JSDoc tags.

### Added
- `QuestionSet.clearQuestions()` to clear questions in a QuestionSet.

### Changed
- `Questions` constructor is now named `QuestionSet`.
- `Questions` is now an object containing methods and classes.
- JSDoc tags have been updated.

### Fixed
- Incorrect colors in `examples/coloring.js`.
