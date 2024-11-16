/* 
### Exercise 1:
Declare 3 variables for `name`, `city`, and `favNumber`, and `console.log()` each like the following: 
- **Output**: `"My name is Omar"`
*/
let name = "Omar";
let city = "Dubai";
let favNumber = 10;
console.log("My name is " + name);

/* 
### Exercise 2:
Given a variable `myNumber` that you pick the value of, check if the number is positive or negative. Return a string like the following: 
- **Output**: `"5 is a positive number"`
*/
let myNumber = 5;
if (myNumber > 0) {
    console.log(`${myNumber} is a positive number`);
} else {
    console.log(`${myNumber} is a negative number`);
}

/* 
### Exercise 3:
Given the same variable `myNumber`, check if the number is even or odd.
*/
if ( myNumber % 2 ===0) {
    console.log(`${myNumber} is an even number`);
} else {
    console.log(`${myNumber} is an odd number`);
}

/* 
### Exercise 4:
Given 3 numbers `num1`, `num2`, `num3`, `console.log()` the largest number.
*/
let num1 = 10;
let num2 = 20;
let num3 = 30;
if (num1 > num2 && num1 > num3) {
    console.log(num1);
} else if (num2 > num1 && num2 > num3) {
    console.log(num2);
} else {
    console.log(num3);
}
console.log(`The largest number is ${largestNumber}`);

/* 
### Exercise 5:
Given a variable `myGrade` which can be a number between 0-100, `console.log()` the following:
- `90-100` ---> **A**
- `80-89`  ---> **B**
- `70-79`  ---> **C**
- `60-69`  ---> **D**
- Below 60 ---> **F**
*/
let myGrade = 90;
if (myGrade >= 90 && myGrade <= 100) {
    console.log("A");
} else if (myGrade >= 80 && myGrade <= 89) {
    console.log("B");
} else if (myGrade >= 70 && myGrade <= 79) {
    console.log("C");
} else if (myGrade >= 60 && myGrade <= 69) {
    console.log("D");
} else {
    console.log("F");
} 
console.log(`My grade is ${myGrade}`);

/* 
### Exercise 6:
Given a number, `console.log()` the multiplication table for it from 1-10. Use **loops**.
*/
let number = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${number} * ${i} = ${number * i}`);
}

/* 
## Bonuses
### Exercise 7 (BONUS):
Factorial is as follows: if `3` is the number, 
the factorial of 3 is `3*2*1`. 
Given a number `myOriginalNumber`, `console.log()` the result of the factorial.
*/

let myOriginalNumber = 3;
let factorial = 1;
for (let i = 1; i <= myOriginalNumber; i++) {
    factorial *= i;
}
console.log(`The factorial of ${myOriginalNumber} is ${factorial}`);

/* 
### Exercise 8 (BONUS):
Write a program that prints the numbers from 1 to 50. For multiples of 3, print `"Fizz"` instead of the number,
 and for multiples of 5, print `"Buzz"`.
 For numbers that are multiples of both 3 and 5, print `"FizzBuzz"`.
*/

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    }
}
