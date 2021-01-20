/* 1. Write a function that takes two parameters: a file path and data
      - This function will create a file with that file path and data, formatted as JSON
  2. Write a function that takes one parameter: a file path
      - This function will read the contents of that file and return the data
  3. Write a function that uses the previous two functions to read the data from audit-input.csv and find these values from that data:
      - The min of all the values
      - The max of all the values
      - The sum of all the values
      - The average of all the values
  and create your own audit-output.json

  Summary: input audit-input.csv and then output audit-output.json
*/
import { promises, readFileSync, writeFileSync } from 'fs';

async function writeFileAsync(dir: string, data: any): Promise<void> {   
    const writeData = writeFileSync(dir, JSON.stringify(data));
}
async function readFileAsync(dir: string): Promise<any> {
    const readData =  readFileSync(dir, {encoding:'utf8'});
    const splitLineArray = readData.split('\n');

    const splitCommaArray = [];

    for(var i = 0; i < splitLineArray.length; i++)
    {
        splitCommaArray[i] = splitLineArray[i].split(',');
    }

    return splitCommaArray;
}

async function calculateStatistics() {
    const data = await Promise.resolve(readFileAsync('./audit-input.csv'));
    const evalArray = [];
    for (let i = 0; i < data.length; i++) {
        evalArray[i] = Number(data[i][2]);
    }
    let min = Math.min.apply(null, evalArray);
    let max = Math.max.apply(null, evalArray);
    let sum = evalArray.reduce((pre, cur) => {return pre + cur}, 0)
    let avg = sum / evalArray.length;
    
    const outputObj = {
        'min': min,
        'max': max,
        'sum': sum,
        'average': avg
    };
    
    const outputWrite = writeFileAsync('./audit-output.json', outputObj);

}
calculateStatistics();





