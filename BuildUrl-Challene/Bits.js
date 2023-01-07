/* Implement the bitcount function, described as follows: this function takes a 32 bits integer as input and returns the number of bits set to 1 within the binary representation of that integer.                     
   int bitcount(unsigned i)
{
    return 42 /* FIXME */


    //c++ - shouldnt
int bitcount(unsigned i) {
  int count = 0;
  while (i > 0) {
    count += i & 1;
    i >>= 1;
  }
  return count;
}


// //javascript

// function bitcount(n) {
//   let count = 0;
//   while (n > 0) {
//     count += n & 1;
//     n >>= 1;
//   }
//   return count;
// }

/* This function works by using a bitwise AND operation to check if the least significant bit (LSB) of n is set to 1. If it is, we increment the count by 1. We then use a bitwise right shift operation to shift the bits of n one place to the right, discarding the LSB and setting the most significant bit (MSB) to 0. We repeat this process until n becomes 0.

For example, if n is the binary number 1011, the bits of n will be processed in the following order: 1, 0, 1, 1. The function will return 3, because there are 3 bits set to 1 in the binary representation of n.*/