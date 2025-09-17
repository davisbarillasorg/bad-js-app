function runUserCode(userInput) {
  // 🚨 Vulnerability: dangerous use of eval
  eval(userInput);
}

// guaranteed finding for p/ci
const apiKey = "sk_live_1234567890abcdef";
