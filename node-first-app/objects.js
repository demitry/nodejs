
const person = {
    name: 'John',
    age: 21,
    greet: () => {
        console.log('Hello, I am ' + this.name); //"this" refers to the global scope, so it is udefined
    }
};

//console.log(person.greet());

const person2 = {
    name: 'John',
    age: 21,
    greet: function() {
        console.log('Hello, I am ' + this.name); //"this" refers to the global scope, so it is udefined
    }
};

const person3 = {
    name: 'John',
    age: 21,
    greet() {
        console.log('Hello, I am ' + this.name); //"this" refers to the global scope, so it is udefined
    }
};

//console.log(person2.greet());
console.log(person3.greet());

const hobbies = ['Sports', 'Cooking'];
for(let hobby of hobbies) {
    console.log(hobby);
}
console.log('--> Array functions:');

console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}));

console.log(hobbies.map(hobby => 'Hobby: ' + hobby));

