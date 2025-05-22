// console.log('running es6 file');
// a class is a bluePrint
// convention is to use UpperCase first letter for "Classes"

class Person {
    // constructor function
    constructor(name = 'Anon', age = 0) {
        this.name = name;
        this.age = age;
        // console.log('this: ', this);
    }
    getGreeting() {
        return `Hi. i am ${this.name}`;
        // es6 template strings 
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }
}

class Student extends Person {
    constructor(name, age, major ) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor) {
            description += `, Their major is ${this.major}`;
        }
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, location) {
        super(name, age) ;
        this.location = location;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.location) {
            greeting += `, i'm visiting from ${this.location}`;
        }
        return greeting;
    }
}

const me = new Traveler('Andrew Mead', 27, 'Philadelphia');
console.log(me.getGreeting());
const other = new Traveler(undefined, undefined, 'nowhere');
console.log(other.getGreeting());
