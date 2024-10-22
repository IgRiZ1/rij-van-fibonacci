import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let fibonnaci = [0,1]

for(let i = 2; i < 10 ; i++){
    fibonnaci[i] = fibonnaci[i - 2] + fibonnaci[i - 1];
    console.log(fibonnaci);
}

process.exit()