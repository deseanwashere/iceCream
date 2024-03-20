// A visitor receives a prompt upon opening the website to enter a list of comma-separated froyo flavors. They type vanilla,vanilla,vanilla,strawberry,coffee,coffee.

//Create a prompt telling user to enter their favorite froyo
const allIceCreams = prompt ("Enter a list of Your Favorite Froyo Flavors!");

const splitAllIceCreams = allIceCreams.split(", ")
//return their input into the console 
// console.log(allIceCreams);
console.log (Object.values(splitAllIceCreams));

 



// alert ("vanilla,vanilla,vanilla,strawberry,coffee,coffee");

const vanillaIceCream = {name: '3 vanilla',
price: '7 Milliom'};




console.log(vanillaIceCream);

const strawberryIceCream = {name: '1 strawberry',
price: '111 Billion'};

console.log(strawberryIceCream);

const coffeeIceCream = {name: '2 coffee',
price: '554 Trillion'};

console.log(coffeeIceCream);






// When they view the browser console, they observe a table listing how many of each flavor they have ordered. 
//In this case, they will be able to observe that 
//they have ordered three vanilla, two coffee, and one strawberry froyo.



 



