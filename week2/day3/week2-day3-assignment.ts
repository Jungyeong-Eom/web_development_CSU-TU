/**
 * Brief:
 * Write a program that takes an array and writes it to the disk, with each
 * array element separated by a newline character.
 * 
 * Input: 
 * ['Line 1', 'Line 2', 'Line 3']

 * Output:  
 * Line 1
 * Line 2
 * Line 3
 * 
 * Instructions:
 *  - Create an async function that takes two arguments:
 *    - The path to the file
 *    - The array
 *  - The async function must return a new Promise that uses the `writeFileSync` function.
 *  - The async function must be wrapped in a try/catch block and use `resolve`
 *    and `reject`.
 *  
 *  Optional: Write a function that reads the contents of the file and prints it to the console
 */

import { writeFileSync } from 'fs';
(async function () {
  const path: string = "./test.txt";
  const argArray: string[] = ["Line1", "Line2", "Line3"];

  return new Promise((resolve, reject) => {
    try {
      writeFileSync(path, argArray.join('\n'));
    } catch(error) {
      reject(new Error(error));
    }
    resolve(writeFileSync(path, argArray.join('\n')));
  })
})();

