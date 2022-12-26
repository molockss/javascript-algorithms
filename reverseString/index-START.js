/* CHALLENGE
Given a string of text, write an algorithm that returns the text received in a reversed format. 
E.g reverseString('algorithms') // should return 'smhtirogla'
*/



function reverseString(text) {
    return text.split("").reverse().join("")
//normal method
}
//  //instead of split we can use the spread ... method which effectively will split it into array elements

//  function reverseString(text){
//     return [...text].reverse().join("")
//  }


module.exports = reverseString