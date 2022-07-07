// Immutability - copies + changes
// Avoid errors - clear approach with copy and edit

const hobbies = ['Sports', 'Cooking'];
hobbies.push('Guitar');

const copiedArraySlice = hobbies.slice();

console.log(copiedArraySlice);

const copiedWithNestedArray = [hobbies];

console.log(copiedWithNestedArray);

const copiedWithSpreadOperatorArray = [...hobbies];

console.log(copiedWithSpreadOperatorArray);

const toArray = (arg1, arg2, arg3 ) => {
    return [arg1, arg2, arg3];
};

console.log(toArray(1, 2, 3));

const toArrayWithRestOperator = (...args) => {
    return args;
};

console.log(toArrayWithRestOperator(1, 2, 3, 4, 5));