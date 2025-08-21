const person = {
    firstName: 'Sang',
    lastName: 'Dương Bá',
    age: 21,
    isStudent: true,
    sayHello: () => console.log("Hi, I'm Sang"),
    eat: ()=> console.log("I'm eating chicken")
}

const person2 = {
    firstName: 'Anh',
    lastName: 'Nguyen Tuan',
    age: 21,
    isStudent: true,
    sayHello: ()=> console.log("Hello, I'm Anh"),
    eat: ()=> console.log("I'm eating vegetables"),
}
console.log(person.lastName, person.firstName, person.age);
person.sayHello(); person.eat();
console.log(person2.lastName, person2.firstName, person2.age);
person.sayHello(); person2.eat();


