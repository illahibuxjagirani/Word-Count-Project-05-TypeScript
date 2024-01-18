
import inquirer from "inquirer";

interface UserInput{
    paragraph: string
}
const userInput: UserInput = await inquirer.prompt({
    type: "input",
    name: "paragraph",
    message: "Enter your paragraph to count words"
});

const paraInput = userInput.paragraph;

// for counting letters in paragraph

const letterWithoutSpace = paraInput.replace(/\s/g, "");
const letterCount = letterWithoutSpace.length;

// console.log(letterCount);

// for counting words

const wordArray = paraInput.split(" ");
const wordCount = wordArray.length;


console.log(`Total letters in your para are ${letterCount} and total words are ${wordCount}`);