function runUserCode(userInput) {
  eval(userInput); // BAD: should trigger Semgrep
}
