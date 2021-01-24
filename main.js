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

function displayDate(){
  let d = new Date(); 
  document.getElementById("display-element").innerHTML = d; 
  console.log(d); 
}

function rockPaperScissors(hand1, hand2){
  
  //if either hand isnt a string, return 'try again'
  if(typeof hand1 !== 'string' || typeof hand2 !== 'string'){
    return 'try again'; 
  }

  //if hand1 or hand2 is not 'rock', 'paper', 'scissors', then try again
  if((hand1.trim().toLowerCase() !== 'scissors' && hand1.trim().toLowerCase() !== 'paper' && hand1.trim().toLowerCase() !== 'rock') || (hand2.trim().toLowerCase() !== 'scissors' && hand2.trim().toLowerCase() !== 'paper' && hand2.trim().toLowerCase() !== 'rock')){
    return 'try again!';
  }
  
  //if both hands are the same then return 'its a tie' 
  if(hand1.trim().toLowerCase() === hand2.trim().toLowerCase()){
    return  'It\'s a tie!'; 
  }else if(hand1.trim().toLowerCase() === 'rock' && hand2.trim().toLowerCase() === 'scissors'){
    return 'Hand one wins!';
  }else if(hand1.trim().toLowerCase() === 'rock' && hand2.trim().toLowerCase() === 'paper'){
    return 'Hand two wins!';
  }else if(hand1.trim().toLowerCase() === 'paper' && hand2.trim().toLowerCase() === 'rock'){
    return 'Hand one wins!'; 
  }else if(hand1.trim().toLowerCase() === 'paper' && hand2.trim().toLowerCase() === 'scissors'){
    return 'Hand two wins!'; 
  }else if(hand1.trim().toLowerCase() === 'scissors' && hand2.trim().toLowerCase() === 'paper'){
    return 'Hand one wins!'; 
  }else if(hand1.trim().toLowerCase() === 'scissors' && hand2.trim().toLowerCase() === 'rock'){
    return 'Hand two wins!'; 
  }
}

let r = rockPaperScissors('rock', 'scissors');
console.log(r); 


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