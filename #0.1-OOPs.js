// Abstraction

class Circle {
    constructor(radius){
        this.radius = radius

        // Below is a private variable which can't accessed from the outside.
        // This is a perfect example of abstraction
        let location = {
            x: 1,
            y: 5
        }

        // Below is function which is also hidden from outside this class
        let computeArea = function(radius){
            console.log('Done drawing !');
            console.log('Area = '+Math.PI * radius * radius);
        }
        this.drawCircle = function(){
            console.log('Drawing in Progress...');
            computeArea(this.radius)
        }
    }
}

const myCircle = new Circle(21)
myCircle.drawCircle()
//----------------------------------------------------------------