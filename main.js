// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

let value1 = ""
let value2 = ""

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//1 create two inputs
//2 create a function that when inputs are typed in is called and saves inputs to two different global variables
//3 create a button 
//4 create a function, that when button is clicked, displays the results of RPS function


const storeHands = (value, id) => {
  
  if ( id == "first-hand"){
    value1 = value
  } else if (id == "second-hand"){
    value2 = value
  }

}

const displayResults = () => {
  
  document.getElementById("Rdisplay-element").innerHTML = rockPaperScissors(value1, value2)

}

// the function that will be called by the unit test below
const rockPaperScissors = (firstHand, secondHand) => {

  let hand1 = firstHand.toLowerCase().trim()
  let hand2 = secondHand.toLowerCase().trim()

  // if (hand1 === 'rock' && hand2 === 'rock'){
  //   return "It's a tie!"
  // }
  // if (hand1 === 'paper' && hand2 === 'paper'){
  //   return "It's a tie!"
  // }
  // if (hand1 === 'scissors' && hand2 === 'scissors'){
  //   return "It's a tie!"
  // }

  if (hand1 === hand2){
    return "It's a tie!"
  }

 if (hand1 === 'rock' && hand2 === 'paper'){
   return "Hand two wins!"
 }
 if (hand1 === 'paper' && hand2 === 'scissors'){
  return "Hand two wins!"
}
if (hand1 === 'scissors' && hand2 === 'rock'){
  return "Hand two wins!"
}

if (hand1 === 'rock' && hand2 === 'scissors'){
  return "Hand one wins!"
}
if (hand1 === 'paper' && hand2 === 'rock'){
 return "Hand one wins!"
}
if (hand1 === 'scissors' && hand2 === 'paper'){
 return "Hand two wins!"
}


  // Write code here
  // Use the unit test to see what is expected

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
    it('should scrub input to ensure lowercase with "trim"ed whitespace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
    it('should test for input before asking for next hand', () => {
      assert.equal(rockPaperScissors(undefined, "paper"), "Dont be dumb make a choice");
      assert.equal(rockPaperScissors('paper', undefined), "Dont be dumb make a choice");
      
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
