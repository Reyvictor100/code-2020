// This will propmt the question what is the password, and will keep asking it 
// until the correct answer is given. this uses a do-while loop. 
let password = prompt('what is the password?');

do {
    password = prompt('what is the password?');
}
while(password !== 'america')

alert('thats the right password')
 

// For loop. This will call the log 'hello' 5 times.
// increment ++
//decrement --

for(i = 0; i < 5; i++) {
return console.log('hello')
}

//function without parameters- reusable code
function greet() {
    alert('Good morning Sir')
}
greet();

//function parameters and argument
function greet(name, time) {
alert(`hello ${name} im glad you can join us this ${time}`);
}

greet('victor', 'afternoon');

//objects - variables with extra detail inside
let person = {
    name: victor,
    age : 21
}

// expression functions
let beans = function() {
return Math.floor(math.round(6 * 8)) + 1
}

// normal function 
function bean() {
 return Math.floor(math.round(6 * 8)) + 1
}

// use loops when there is a lot of repeated code
// arrow-loops
let beans = () => Math.floor(math.round(6 * 8)) + 1

// make function of code that is and will be used multiple times

// in a for loop the first part '
//(let i = 0) - sets where the loop will start from (0)
// The second part shows what the loop will go up or down to -(i < 10)
// The third part (increment) shows by how much it will count up or down -(i += 5) by 5
for(let i = 0; i < 10; i += 5) {
return console.log('hello')
}

// a way you can stop a loop is when the loop equals false
// another way to end the loop is also using the keyword,
break;
// an example of using break is if you want to loop a propmt thats asks for a password
// but you want the break to end loop after the prompt is given correct password.
// (===) - the value and type are the same, (!==) - are not the same.

let password = 'america';
let message = 'access denied';
for (let i = 3; i >= 1; i--) {
    let beans = prompt('what is the correct password?');
    if (beans === password) {
    message = 'that is correct';
    break;
   } 
}

alert(message)

// Arrays hold a bunch of values in one - like a shopping list
let shoppingList = ['milk', 'eggs', 'coffee', 'bread']
//Arrays are numbered from 0 onward
console.log(shoppingList[0]) // will console log 'milk'
console.log(shoppingList[3]) // will console log 'bread'

// using the .length will say the amount of elements in an array
shoppingList.length // with will show 4 items

// .push() will add another item to the end of the array
shoppingList.push('flour', 'water') // this will add these two elements to the end.
// remember .push() push another element into the array
//.unshift() adds items to the beginning of the arrays
shoppingList.unshift('cereal', 'ice cream')
//.push() - to the end of array
//.unshift() - to the beginning of array
shoppingList.push('cereal');
shoppingList.unshift('ice cream');

//the .pop() removes and stores the last elements in an array
let maybeItem = shoppingList.pop() // removes and stores last element in maybeItem var
//.shift() removes and stores the first item in the array just like .pop()
let priorityItem = shoppingList.shift() 

// you can add items in an array into another array using the (...)
let middle = ['lettuce', 'meat', 'cheese'];
let burger = ['top buns', 'bottom bun']
// if you want to move the Middle array in between the burger array you do as so
let burger = ['top bun', ...middle, 'bottom bun']
// this would combine both arrays together, console logging will return
burger = ['top bun', 'lettuce', 'meat', 'cheese', 'bottom bun']

// .join() this list all the items in an array in a single list.
// you can put .join(', ') this will seperate the elements with a comma and a space.
let shoppingList = ['bread', 'cookies', 'milk', 'limes']
console.log(shoppingList.join(', '))
//.includes() will check to see if a specific item is an array
console.log(shoppingList.includes('bread')) // will return true.
//.indexOf() will show what order a specific item is in the array.
console.log(shoppingList.indexOf('bread'))// will show in 0 position.

//this is how you make a shopping list with arrays and prompt the items
let shoppingList = ['bread', 'milk', 'pizza', 'coffee', 'tortillas', 'crackers', 'soda']
let message = prompt('what item would you like to purchase');

function secondQuestion ( message2 = prompt(`${message} is not in stock, Would you like a list of the available items?`)) {
    if(message2 === 'yes') {
        message2 = alert(`Here are the options : ${shoppingList.join(', ')}`)
    } else {
       message2 = alert('ok have a nice day');
    }
}
    

if(!shoppingList.includes(message)) {
message = secondQuestion();
} else if (shoppingList.includes(message)) {
message = `${message} is in stock in section ${shoppingList.indexOf(message) +1}`;
} else if (secondMessage === 'yes') {
    secondMessage = `Here is the list of current items, ${shoppingList.join(', ')}`
} alert(message)


// Making Arrays in objects
let pets = [
   {name: 'buddy', breed: 'Pug', age: 3},
   {name: 'Kevin', breed: 'Golden Retriever', age: 4},
   {name: 'Jim', breed: 'German Shepard', age: 5}
];
// write a loop to display every Var and value in the array. 
//then set a Var to save the loop in a string *SET LOOP TO A STRING*
 for(i = 0; i < pets.length; itt){
 pet = pets[i];
  message += `
  ${pet.name} is a beautiful ${pet.breed} at the young age of ${pet.age} 
  `

console.log(message);
 }

 // list of pets with array info in a loop set to the message Var
 let pets = [
    {name: 'Buddy', breed: 'Pug', age: 1},
    {name: 'Junior', breed: 'German Shepard', age: 3 },
    {name: 'Kevin', breed: 'Golden Retriever', age: 4},
    {name: 'Bean', breed: 'Pitbull', age: 2}
];

let message = '';

for(let i = 0; i < pets.length; i++) {
let dog = pets[i]
 message += ` 
              My name is ${dog.name},
              I am a ${dog.breed},
              And I am ${dog.age} years old.
  `
}

console.log(message)

