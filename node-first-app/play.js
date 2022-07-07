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
};

const summarizeUser2 = function (userName, userAge, userHasHobbies) {
    return (
        'Name is ' + userName + ', age is ' + userAge + ', hasHobbies is ' + userHasHobbies);
    };

const summarizeUserArrowFunction = (userName, userAge, userHasHobbies) => {
    return ('Name is ' + userName + ', age is ' + userAge + ', hasHobbies is ' + userHasHobbies);
};


console.log(summarizeUser(someName, age, hasHobbies));
console.log(summarizeUser2(someName, age, hasHobbies));
console.log(summarizeUserArrowFunction(someName, age, hasHobbies));

// arrow function with two arguments
const add = (a,b) => a + b;

console.log(add(1,2));

// arrow function for one arg - could be without ()
const addOne = a => a + 1;
console.log(addOne(2));

// arrow function with no arguments
const randomValue = () => 42;
console.log(randomValue());


