// normal functions

function add(num1: number, num2: number): number {
  return num1 + num2;
}

add(2, 2);

//arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;

add(2, 3);

//callback function
const array = [1, 2, 3];

const newArray = array.map((value: number) => value * value);

const person: {
  name: string;
  balance: number;
  //   addBalance(money: number): number;
  addBalance(money: number): string | null;
} = {
  name: "John",
  balance: 5,
  addBalance(money: number) {
    // return this.balance + money;
    return `Your new balance is ${this.balance + money}`;
  },
};

//Deault parameters
// always use default parameters for the last parameters
function addition(num1: number, num2: number = 30): number {
  return num1 + num2;
}

addition(2, 2);

//spread oparator
const myFamily = ["Mother", "Father", "Brother"];
const myFamily2 = ["Mother2", "Father2", "Sister"];

myFamily.push(...myFamily2);

console.log(myFamily);

//Rest oparator
const greeting = (...friends: string[]): void => {
  friends.forEach((friend) => {
    console.log(`Hi ${friend}`);
  });
};

greeting("Kasem", "Jasim", "Rahim");

//ARRAY AND OBJECT DESTRUCTURING
const [bestFriend] = myFamily;
