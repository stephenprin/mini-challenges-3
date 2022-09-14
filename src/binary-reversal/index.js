/**
 * Implement the solution in this function
 *
 *  * @param {string} value
 */
 function binaryReversal(value) {

   //convert string passed into  num
  let inputValue=parseInt(value);
  inputValue=inputValue.toString(2);
 //console.log(inputValue)

  let paddingBinary=inputValue.padStart(8,0);
  //console.log(paddingBinary)
  //TO reverse the binnary code
  let reversedBinary=paddingBinary.split("").reverse().join("");
  //console.log(reversedBinary);
  
  //convert it back to base 10
  let reversedTen=parseInt(reversedBinary, 2);
  //console.log(reversedTen)
 return reversedBinary=reversedTen.toString();
 //console.log(typeof reversedBinary)
   

}
console.log(binaryReversal("200"))

module.exports = binaryReversal;
