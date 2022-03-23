// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

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
const rockPaperScissors = (hand1, hand2) => {
  let words = ['rock', 'paper', 'scissors']
  let User1 = words.indexOf(hand1.trim().toLowerCase())
  let User2 = words.indexOf(hand2.trim().toLowerCase())
if (User1 === User2) {return "It's a tie!"}
else if (User1 === 0 & User2 === 2) {return "Hand one wins!"}
else if (User1 === 1 & User2 === 0) {return "Hand one wins!"}
else if (User1 === 2 & User2 === 1) {return "Hand one wins!"}
else if (User2 === 0 & User1 === 2) {return "Hand two wins!"}
else if (User2 === 1 & User1 === 0) {return "Hand two wins!"}
else if (User2 === 2 & User1 === 1) {return "Hand two wins!"}
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
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built returns the expected output.
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



// let PlayGame = (Player1,PLayer2) => {
//   let words = ['rock', 'paper', 'scissors']
//   let P1 = words.indexOf(Player1.toLowerCase())
//   let P2 = words.indexOf(PLayer2.toLowerCase())
//   console.log('User1:' + words[P1] + '  User2:' + words[P2])
  // if (P1 === P2) {console.log('Tie!')}
  // else if (P1 === 0 & P2 === 2) {console.log('User1 Wins')}
  // else if (P1 === 1 & P2 === 0) {console.log('User1 Wins')}
  // else if (P1 === 2 & P2 === 1) {console.log('User1 Wins')}
  // else if (P2 === 0 & P1 === 2) {console.log('User2 Wins')}
  // else if (P2 === 1 & P1 === 0) {console.log('User2 Wins')}
  // else if (P2 === 2 & P1 === 1) {console.log('User2 Wins')}
// }

// PlayGame('rock','rock')
// PlayGame('rock','scissors')

// PlayGame('paper','scissors')