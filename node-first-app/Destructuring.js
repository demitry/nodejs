const person = {
    name: 'John',
    age: 21,
    greet() {
        console.log('Hello, I am ' + this.name); //"this" refers to the global scope, so it is udefined
    }
};

const printName = (personData) => {
    console.log(personData.name);
}

printName(person);

//Destructuring: What we need from the incoming object?
const printNameDestructuring = ({ name }) => {
    console.log(name); 
}

printNameDestructuring(person);

const {name, age} = person; //object destructuring
console.log(name, age);

const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2, hobby3] = hobbies;   //array destructuring - by position
console.log(hobby1, hobby2, hobby3);        //The 3rd hobby is undefined

