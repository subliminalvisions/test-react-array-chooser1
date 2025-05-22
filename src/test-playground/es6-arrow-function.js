console.log('test 1');

// const square = function(x) {
//     return x * x;
// };
// console.log(square(8));
// const squareArrow = (x) => {
//     return x * x;
// };
// arrow functions are always anonymous
// so asign them to a variable 

// Now, the arrow function expression syntax 

const squareArrow = (x) => x * x;
// console.log(squareArrow(7));

// for the arrow function expression syntax 
// we do not use "return"

// Now, let's create funct called getFirstName 
// using verbose syntax
// then with the shorthand syntax 
// then test to make sure it works
const user = {
    name: 'Stephen Harris',
    age: 26,
    location: 'Denver'
}  

const getFirstNameExpression = (user) => {
    // if (user.name) {
    //     return 'yup: ' + user.name;
    // } else {
    //     return 'Anonymous';
    // }
    let firstName = user.name.split(' ')[0];
    return firstName ? 'y: ' + firstName : 'Anonymous';
}
console.log(getFirstNameExpression(user));

const getFirstNameShort = (user) => user.name ? 'usr: ' + user.name.split(' ')[0] : 'Anonymous';

console.log(getFirstNameShort(user));


