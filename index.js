// 1. Write a function to find first and last digit of a number.
// 2.  Write a function to reverse the following array (manually and  using .reverse array method )
// input array = [10, 20, 30, 40, 50]
// output array = [50, 40, 30, 20 ,10]
// 3. Write a functions to calculate the perimeter and the area of a square
// 4. Write a functions to calculate the perimeter and the area of a rectangle
// 5. Write a functions to calculate the perimeter and the area of a circle
// 6. Write a function to return the last n elements from a given array (manually and  using .reverse array method)
// ** n and the array should be parameters in the function

// 1. Write a function to find first and last digit of a number.
let number1 = 123456;
function findFirstAndLast (number) {
    let number2 = number.toString()[0];
    console.log(number2);
    let number3 = number.toString()[number.length -1]; // nz kako ova da go napravam
    console.log(number3);
}
findFirstAndLast(number1);


// 2.  Write a function to reverse the following array (manually and  using .reverse array method )
var array1 = [10, 20, 30, 40, 50];

function reverseArray (i){
for (let i = 50; i >= 10; i = i - 10) {
    console.log(i);
}
}
reverseArray(array1);

let revArray = array1.reverse();
console.log(revArray);

// 3. Write a functions to calculate the perimeter and the area of a square

sqareSide = 5;

function perimeterAndAreaOfSqare (side) {
    let perimiterOfSqare = 4 * side;
    console.log(perimiterOfSqare + 'cm');
    let areaOfSquare = side * side;
    console.log(areaOfSquare + 'cm2');
}
perimeterAndAreaOfSqare(sqareSide);

// 4. Write a functions to calculate the perimeter and the area of a rectangle

let recLength = 10;
let recBreadth = 12;

function perimeterAndAreaOfRectangle (length, breadth) {
    let perimiterOfRectangle = 2 * (length + breadth);
    console.log(perimiterOfRectangle + 'cm');
    let areaOfRectangle = length * breadth;
    console.log(areaOfRectangle + 'cm2');
}
perimeterAndAreaOfRectangle (recLength, recBreadth);

// 5. Write a functions to calculate the perimeter and the area of a circle

let circleRadius = 7;

function perimeterAndAreaOfCirle (radius) {
    let pi = 3.14
    let perimiterOfCircle = pi * (radius + radius);
    console.log(perimiterOfCircle + 'cm');
    let areaOfCirle =  pi * (radius * radius);
    console.log(areaOfCirle + 'cm2');
}

perimeterAndAreaOfCirle(circleRadius);

// 6. Write a function to return the last n elements from a given array (manually and  using .reverse array method)
// nz kako da ja resam 6tava
array4 = [2,4,6,7,8,9,3,1,12];
nthNumber = 4;
function nthElementsFromArray (array, nth) {
    for (let i = nth; i != nth - nth; i--) {
        console.length(array.length(nth));
    }
}
nthElementsFromArray(array4, nthNumber);

