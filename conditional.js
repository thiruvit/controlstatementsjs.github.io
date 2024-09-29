//1.IF
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote");
}

//2.IF-ELSE
let age = 16;

if (age >= 18) {
    console.log("You are eligible to vote");
} else {
    console.log("You are not old enough to vote");
}

//3.ELSE-IF
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}

//4.switch
let day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

//5.Ternary
let num = 5;

let result = num >= 0 ? "Positive" : "Negative";

console.log(`The number is ${result}.`);

