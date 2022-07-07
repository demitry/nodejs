
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