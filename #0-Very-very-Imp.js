// Classes, Constructors and OOPs Concepts

// Classes : Classes are like the blueprint or a template that defines the structure and behaviour of its objects. Classes can create objects with strings, number, booleans and even functions or methods. Classes provide a way to organise and represent similar objects in a clear and reusable manner.

// Constructors : These are special functions used to create and initialize objects. Constructor are typically defined useing a function that is invoked with the 'new' keyword.

//----------------------------------------------------------------

// This is Constructor in Function Form
function Person(name, age, eligible=true){
    this.name = name
    this.age = age
    this.eligibilty = eligible
}


// This is a class
class Animal{
    constructor(species, age, domestic=false) {
        this.species = species
        this.age = age
        this.domestic = domestic
    }
    displayAge(){
        console.log('Animal Yields age : '+this.age);
    }
}

const me = new Person('Abhishek', 24, true)
const friend = new Person('Satyam', 25)
console.log(me);
console.log(friend);

const myPet = new Animal('Cat', 11, true)
console.log(myPet);
console.log();

//----------------------------------------------------------------

// Let's add a method(function) to a class. Syntanx : ClassName.prototype.functionName = <Function>

Person.prototype.greet = function(){
    console.log(`Hi this is ${this.name}. I am ${this.age} years old. I am also ${this.eligibilty}`);
}

me.greet()
friend.greet()
console.log();
myPet.displayAge()
//----------------------------------------------------------------

class Circle {
    constructor(radius){
        this.radius = radius
    }
    area(){
        return Math.ceil(Math.PI * this.radius * this.radius)
    }
    circumference(){
        return Math.ceil(Math.PI * 2 * this.radius)
    }
}

class Cuboid{
    constructor(len, br, ht){
        this.len = len;
        this.br = br;
        this.ht = ht;
        this.volume = function(){
            return this.len * this.br * this.ht
        }
    }
}

let myCircle = new Circle(7)

console.log('This is the area of my Circle = '+myCircle.area())
console.log('This is the circumference of my Circle = '+myCircle.circumference())
console.log();

let smallCuboid = new Cuboid(20, 10, 5)
console.log('Volume of Cuboid : ' +smallCuboid.volume())

// We can add additional properties in an object 
// Here we add diagonal as an additional property in the object 'smallCuboid'
smallCuboid.diagonal = Math.sqrt(500)

console.log(smallCuboid);

// We can also delete the parameter as well from the object
delete smallCuboid.len

console.log(smallCuboid);

delete smallCuboid.diagonal

console.log(smallCuboid);

//----------------------------------------------------------------


