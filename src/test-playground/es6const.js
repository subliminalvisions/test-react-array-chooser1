var nameVar = "Andrew";
var nameVar = "Mike";
console.log('nameVar: ', nameVar );

let nameLet = 'Jen';
nameLet = 'Jule';
console.log('nameLet: ', nameLet );

// use const by default
// then if we do reassign, use LET
const nameConst = 'Frank';
// nameConst = 'Bob';
console.log('nameConst: ', nameConst );


function getPetName() {
    var petName = 'Hal';
    return petName;
}

getPetName();
// console.log('petName: ', petName );

// Block Scoping 

const fullName = 'Andrew Meed';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log('firstName: ', firstName );
}
console.log('firstName: ', firstName );
