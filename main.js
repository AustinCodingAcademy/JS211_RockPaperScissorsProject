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
let scissors = "scissors"
let paper = "paper"
let rock = "rock"
const rockPaperScissors = (hand1, hand2) => {
  hand1 = hand1.toLowerCase();
  hand2 = hand2.toLowerCase();
  hand1 = hand1.trim();
  hand2 = hand2.trim();
  if(hand1 == hand2 && hand1 != ""){
    return "It's a tie!";
  }
  if(hand1 == rock && hand2 == scissors ||hand1 == paper && hand2 == rock || hand1 == scissors && hand2 == paper){
    return "Hand one wins!";
  }
  if(hand2 == rock && hand1 == scissors ||hand2 == paper && hand1 == rock || hand2 == scissors && hand1 == paper){
    return "Hand two wins!";
  }
  if(hand1 == "" || hand2 == ""){
    return "Try this again. You didn't input anything."
  }
  else{
    return "Take that weapon elsewhere! Approved weapons only!"
  }
};

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
    it('should detect empty string in input', () =>{
      assert.equal(rockPaperScissors('', ''), "Try this again. You didn't input anything.");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
