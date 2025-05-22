// arguments object - no longer bound with arrow funct

const add = (a, b) => {
    // console.log(arguments);
    return a + b;
}
console.log(add(55,1));

// this keyword - no longer bound with arrow funct 

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'NYC', 'Dublin'],
    // printPlacesLived: function () {
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
        // return cityMessages;
        // this.cities.forEach((city) => {
        //     console.log(this.name + ' hath lived in ' + city);
        // });
    }
};
console.log(user.printPlacesLived());
// user.printPlacesLived();

const multiplier = {
    // a utility function
    numbers: [10,20,30],
    multiplyBy: 3,
    multiply() {
        // return this.numbers.map((num) => this.name + ' has lived in ' + num);
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());

