// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

var hand1 = prompt("What is your choice ?");
var hand2 = prompt("What about yours ?");

if(hand1 == "" || hand2 =="") {
 console.log("Input 1 is empty please try again")
}
else if(hand2 == ""){
 console.log("Input 2 is empty please try again") 
}    
else if(hand1 === hand2 && hand1,hand2 ==['rock','paper','scissors']) {
  console.log ("It is a tie");
}
else if(hand1 === "rock" && hand2 === "paper"||hand1 ==="paper" && hand2 === "scissors"){
      console.log("hand2 wins");
}
else if(hand1 === "rock" && hand2 === "scissors") {
  console.log("hand1 wins")
}
else{
  console.log('try again')
 
}




