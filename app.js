console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count){
    for (let i = 0; i <= count; i++) {
         if (i % 2 == 1) {
            console.log(i);
        }
    }
}
printOdds(10);

//Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) {
    let aboveSixteen = `Congrats ${userName}, you can drive!`;
    let belowSixteen = `Sorry ${userName}, but you need to wait until you're 16`;
    if (age < 16) {
        console.log(belowSixteen);
    } else {
        console.log(aboveSixteen);
    }
}

checkAge("Sofia, 29");

//Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function cartesianPlane(x, y) {

    if (typeof x != "number" || typeof y != "number") {
        return "invalid input";
    } 
    if (x == 0 && y == 0) {
        return "origin";
    } else if (x == 0 && !(y == 0)) {
        return "y-axis";
    } else if (!(x == 0) && y == 0) {
        return "x-axis";
    } else if (x > 0 && y > 0) {
        return "Q1";
    } else if (x < 0 && y > 0) {
        return "Q2";
    } else if (x < 0 && y < 0) {
        return "Q3";
    } else if (x > 0 && y < 0) {
        return "Q4";
    }
}

console.log(cartesianPlane(-6, 18));

//Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function triangle (side1, side2, side3) {
    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2)
        console.log("Invalid triangle");
    else if (side1 === side3 && side2 === side3)
        console.log("This is an equilateral triangle");
    else if ((side1 == side2) || (side2 == side3) || (side1 || side3))
        console.log("This is an isosceles triangle");
    else {
        console.log("This is scalene");
    }
}

triangle(1, 1, 2)