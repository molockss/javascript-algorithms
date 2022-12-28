/* CHALLENGE
Given a string of text, return the number of vowels found within the text
e.g vowelsCounter('anehizxcv') // will return 3
*/


/*  - Define the Vowels
    - define function, we're passing in text
    - increment sum
    - for..of loop
    - text to lower cass
    - conditional if includes any of the vowels to add it to the sum
    - return sum */

    const Vowels = ["a", "e", "i", "o", "u"]
    // vowels defined - 5 in the english language

    // passing in the arguement text
    function vowelsCounter (text) {

        let sum = 0
        // this is our counter, where we are going to be incrementing

        for (let letter of text.toLowerCase()) {
            if (Vowels.includes(letter)) {
                // letter here is the iterator which defines the sequence or in the case returns each vowel
                sum ++
            }
            
        }
    
        return sum 
    }


//     /*
//  Using Regular Expressions (Regex) to count the number of vowels in a string of text.
//  */

// function vowelsCounter(text) {
//     // Search text with Regex and store all matching instances 
//     let matchingInstances = text.match(/[aeiou]/gi);

//     // Check if matching instances exist then calculate length
//     if (matchingInstances) {    
//         // Return number of vowels
//         return matchingInstances.length
//     } else {
//         return 0
//     }
// }