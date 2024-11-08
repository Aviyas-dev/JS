// for ( let i = 0; i<10; i++){
//     console.log(i);
// }

// function calculateProblem(studyHours){
// let problemPerHour = studyHours / 2;
// console.log(`I study for ${studyHours} to solve ${problemPerHour} problems.`)
// }
// calculateProblem(6);


// function printFavoriteFood(name, food){
//     console.log(name,"loves to eat",food);

// }

// printFavoriteFood("Aagii", "buuz");

// function printWeather (cityName, weather){
// console.log(cityName,"hotod",weather,"baina");
// }
//  printWeather("Ulaanbaatar", "10°C");


//  function printBookDetails(title,author,yearPublished){
// console.log(title, author, yearPublished);
//  }
//  printBookDetails("Harry Potter","J.K Rowling", 1997);

//  function calculateArea(width, height){
// area = width * height
// console.log("Area: " + area);
//  }
//  calculateArea(10, 20);

//  function calculateVolume(width, height, depth){
// volume = width * height * depth
// console.log("Volume: "+ volume)
//  }
//  calculateVolume(10, 20, 30);

//  function prinTicketInfo (eventName, ticketPrice, discount){

// console.log (eventName,"partynii undsen une", ticketPrice,"uunees", discount,"zarlan hyamdarlaa")
//  }
//  prinTicketInfo("halloween","10000","50%");

 function findDigitCount(number,digit){

 let count = 0;
 while(number > 0) {
    if(number % 10 === digit){
        count++
    }
    number = Math.floor(number / 10);
}
    console.log(count);
    return count;

}
 
   
 findDigitCount(3117, 1)

//  const n= 5;
// let count="";
// for(k = 0; k<n; k++){
    
//     let i = 0;
//    while (i < k + 1) {
//          count = count + "1 ";
//         i++;
//      }
//      console.log(k);
     
//      count = count + "\n";
//  }
// console.log(count);
