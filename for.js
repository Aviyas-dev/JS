// const ages = [ 20,32,45,64]
// console.log(ages[2])

// let newArray = [];
// for(let i=1; i<=4; i++){
//     newArray.push[i];
// }
// newArray.push("Hello");
// newArray.push("Bye");

// console.log(newArray);

let favoriteColors = ["red", "grape","purple","black","green"];

favoriteColors[2]= "orange";
console.log ( favoriteColors[2] );


let levelCompleted = [true,false,true,true];
levelCompleted.push[4]= true;
console.log(levelCompleted.push[4] );

let destinations = [ "korea", "india", "america", "bali", "hovd",];
destinations.shift();
console.log(destinations);
destinations.unshift("New-York");
console.log(destinations);

let ages = [18, 21, 22, 20, 23, 36, 79,];
operation = ages.map ( x => x +=5);
console.log(operation);

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let sum= 0;
for(let i=0; i<numbers.length; i++){
    sum+=numbers[i]
}
console.log(sum);

numbers.sort((a,b)=> b-a);
let max = numbers [0]
let min = numbers [14]
console.log(max);
console.log(min);

numbers.unshift(500);
console.log(numbers);

numbers.push(700);
console.log(numbers);

// let odd= [];
// let even= [];
// numbers.forEach((num)=> {
//     if(num%2==1){
//         odd.push(num);
// }else{
//     even.push(num);
// }
// });
// let length = odd.length
// let length2 = even.length
// console.log("Odd:" + length)
// console.log("Even:" + length2)
// console.log(odd)
// console.log(even)









