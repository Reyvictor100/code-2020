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