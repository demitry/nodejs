var someName = 'Max';
console.log(someName);

var age = 29;
var hasHobbies = true;

function summarizeUser(userName, userAge, userHasHobbies) {
    return (
        'Name is ' + 
        userName + 
        ', age is ' 
        + userAge + 
        ', hasHobbies is ' + 
        userHasHobbies);
}

console.log(summarizeUser(someName, age, hasHobbies));

// var - outdated syntax
// new syntax - let and const instead of var

let myAge = 23;
const myName = 'Jphn'; 
myName = 'Try to change;'