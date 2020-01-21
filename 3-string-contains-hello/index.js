/*
The user should run this from the root of the project using `node 1-odd-even/index.js <integer> and should see the word odd or even depending on the integer.  If an integer is not provide, the user should see a usage statement reminding them of the how to run this code.
*/

// get input using getargs
let getargs = require("../modules/getargs/index.js")
let input = getargs.getStringArg()

/**** Do not modify anything above this line ****/


if (!input) {
  console.log("usage: node 3-string-contains-hello <sting>");
  console.log("to include spaces, use quote.");
}

else {
 
  if (input.indexOf('hello') > -1) {
    console.log(`hello was found at position ${input.indexOf(`hello`)} of the string ${input}.`);
   
  } else {
    console.log(`hello was not found in the ${input}.`);
 
  }
}