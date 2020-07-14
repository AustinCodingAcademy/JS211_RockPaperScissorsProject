// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// let valueOne = ""
// let valueTwo = ""

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below

// const displayResults = () => {
  
//   if (valueOne && valueTwo) {
//     document.getElementById("RPS").innerHTML = rockPaperScissors(valueOne, valueTwo)
//   } else {
//     document.getElementById("RPS").innerHTML = "Please input rock, paper, or scissors."
//   }
// }

// const storeHand = (id, value) => {
//   if (id == "first-hand") {
//     valueOne = value
//   }  else if (id == "second-hand") {
//     valueTwo = value
//   }
// }

const rockPaperScissors = (firstHand, secondHand) => {

  let hand1 = firstHand.toLowerCase().trim()
  let hand2 = secondHand.toLowerCase().trim()
  
  switch (hand1) {
    
    case 'rock':
      switch (hand2) {
        case 'rock':
          return "It's a tie!"
        case 'paper':
          return "Hand two wins!"
        case 'scissors':
          return "Hand one wins!"
      }
    break;

    case 'paper':
      switch (hand2) {
        case 'rock':
          return "Hand one wins!"
        case 'paper':
          return "It's a tie!"
        case 'scissors':
          return "Hand two wins!"
      }
    break;

    case 'scissors':
      switch (hand2) {
        case 'rock':
          return "Hand two wins!"
        case 'paper':
          return "Hand one wins!"
        case 'scissors':
          return "It's a tie!"
      } 
    break;  
  }
}

// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// You use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built return the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
