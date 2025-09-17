function runUserCode(userInput) {
  // 🚨 Vulnerability: dangerous use of eval
  eval(userInput);
}
