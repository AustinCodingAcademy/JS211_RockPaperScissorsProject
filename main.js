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

   hand1 = hand1.toLowerCase().trim();
   console.log('hand1',hand1);
   hand2 = hand2.toLowerCase().trim();
   console.log("hand 2", hand2);

  if(hand1== 'saw'|| hand1 =='hammer'|| hand2=='saw'||hand2=='hammer'){
    return 'no tools allowed'
  };
  if(hand1== 'casa'|| hand1 =='la manzana es muy rico'|| hand2=='casa'||hand2=='la manzana es muy rico'){
    return 'sorry no spanish'
  };
  if(hand1== 'pencil'|| hand1 =='pen'|| hand2=='pencil'||hand2=='pen'){
    return 'sorry, needs to be rock,paper, or scissors'
  }
  if(hand1== 'Trump'|| hand1 =='Biden'|| hand2=='Trump'||hand2=='Biden'){
    return 'bad input'
  }






  if(hand1 !== 'rock'&&hand1 !=="scissors"&&hand1!=='paper' ){
    return 'bad input';

  }
  if(hand2 !== 'rock'&&hand2 !=="scissors"&&hand2!=='paper' ){
    return 'bad input';

  }
  if(hand1 === hand2){
    return "It's a tie!";
  } else if(hand1 === 'rock' && hand2 === 'paper')  {
    return "Hand two wins!";
  } else if(hand1 === 'paper' && hand2 === 'scissors')  {
    return "Hand two wins!";
  } else if(hand1 === 'scissors' && hand2 === 'rock')  {
    return "Hand two wins!";
  } else if(hand1 === 'paper' && hand2 === 'rock')  {
    return "Hand one wins!";
  } else if(hand1 === 'scissors' && hand2 === 'paper')  {
    return "Hand one wins!";
  } else if(hand1 === 'rock' && hand2 === 'scissors')  {
    return "Hand one wins!";
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
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
  // additional tests!
  describe('RPS unit test assignment', ()=>{

    it('should handle bad input', ()=>{
      let actual = rockPaperScissors('poop','spider');
      let expected = 'bad input';
      assert.equal(actual, expected);
    })
    it('shouldnt handle tools', ()=>{
      let actual = rockPaperScissors('saw','hammer');
      let expected = 'no tools allowed';
      assert.equal(actual, expected);
    })
    it('shouldnt handle spanish words', ()=>{
      let actual = rockPaperScissors("casa",'la manzana es muy rico');
      let expected = "sorry no spanish";
      assert.equal(actual, expected);
    })
    it('synonyms',()=>{
      let actual = rockPaperScissors('pencil','pen');
      let expected = 'sorry, needs to be rock, paper, or scissors';
      assert.equal(actual, expected);

    })
    it('politics',()=>{
      let actual = rockPaperScissors('Trump',"Biden");
      let expected = "bad input";
      assert.equal(actual,expected);
    })
  })
} else {

  // always returns ask the user for another input
  getPrompt();

}