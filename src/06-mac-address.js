/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address( n) {

  nputString = inputString.split('-');
  var trueCount = 0;
  if(inputString.length != 6){
    return false;
  }
  for(var i = 0; i < inputString.length; i++){
    if(inputString[i].length != 2){
      return false;
    }
    if(inputString[i].charCodeAt(0) >= 48 && inputString[i].charCodeAt(0) <= 57  || inputString[i].charCodeAt(0) >= 65 && inputString[i].charCodeAt(0) <= 70 && ( inputString[i].charCodeAt(1) >= 48 && inputString[i].charCodeAt(1) <= 57  || inputString[i].charCodeAt(1) >= 65 && inputString[i].charCodeAt(1) <= 70)){
      trueCount++;
    } else {
      return false;
    }
  }
  return true;
  
}

module.exports = isMAC48Address;
