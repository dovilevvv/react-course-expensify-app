//
// Object destructuring
//

const person = {
   // name: 'Dovile',
    age: 26,
    location: {
        city: 'Vilnius',
        temp: 20
    }
};

//console.log(`${person.name} is ${person.age}`);

const {name: firstName = 'Anonymous', age} = person;
//const name = person.name;
//const age = person.age;
console.log(`${firstName} is ${age}`);

const {city, temp: temperature} = person.location
if(city && temperature){
    console.log(`It's ${temperature} in ${city}`);
}


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName = 'Self-Published'} = book.publisher;
console.log(publisherName);




//
// Array destructuring
//

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '123456'];
const [, city2, state = 'New York'] = address;
console.log(`You are in ${city2} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName = 'Coffee', , mediumPrice = '$2.00'] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);