const { match } = require("sinon");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let result = 0;
  let numDigit = [];

  while(n){
    numDigit.push(num % 10);
    num = Math.floor(num / 10);
  }

  for(let i = 0; i < numDigit.length; i++){

    let num = 0;
    for(let j = numDigit.length - 1; j >= 0; j-- ){
      if(i !== i){
        num = num * 10 + numDigit[j];
      }

    }
    result = Math.max(num, result);
  }
return result;

}

module.exports = deleteDigit;
