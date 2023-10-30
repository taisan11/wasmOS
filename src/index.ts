import pc from "picocolors"
import { input } from '@inquirer/prompts';

const answer = await input({ message: 'Enter your name' });
console.log(pc.green(`Hello ${answer}!`));


// import version from "./cmd/version"


// while (i == 1) {
//     console.log("Hello, world!");

//   }
  