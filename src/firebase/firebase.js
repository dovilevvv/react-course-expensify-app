import * as firebase from 'firebase'; // sukuria nauja variable is stuff
//pvz.: import * as expensesActions from '../actions/expenses';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};

// //child_remove
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// //child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [

//     ];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//     description: 'Couse Topics',
//     note: 'React Native',
//     amoun: 50.00,
//     createdAt: 4567897
// });




//database.ref('notes/-LLsYptD6kxeHnDYLZ6n').remove();

// database.ref('notes').push({
//     title: 'Couse Topics',
//     body: 'React Native'
// });

// const firebaseNotes = {
//     notes: {
//         oapskfpokf:{
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         opkok: {
//             title: 'Another note',
//             body: 'This is my note'
//         }
//     }
// };

// const notes = [{
//     id: '12',
//     title: 'First note!',
//     body: 'This is my note'
// }, {
//     id: '761ase',
//     title: 'Another note',
//     body: 'This is my note'
// }];

// database. ref('notes').set(notes);


// database.ref()
//     .on('value', (snapshot) => {
//         const object = snapshot.val();
//         //console.log(object.name + ' is a ' + object.job.title + ' at ' + object.job.company);
//         console.log(`${object.name} is a ${object.job.title} at ${object.job.company}`);
//     }, (e) => {
//         console.log('Something went wrong', e)
//     });

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e);
// });

// setTimeout(() => {
//     database.ref('age').set(29);
// }, 3500);

// // isjungia notification on()
// setTimeout(() => {
//     database.ref().off('value', onValueChange);
// }, 7000);

// setTimeout(() => {
//     database.ref('age').set(30);
// }, 10500);


// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e)
//     });


// database.ref().set({
//       name: 'Dovile',
//       age: 27,
//       stressLevel: 6,
//       job: {
//           'title': 'Spftware developer',
//           'company': 'Google'
//       },
//       location: {
//           city: 'Vilnius',
//           country: 'Lithuania'
//       }
// }).then(() => {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This failed.', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// }).then(() => {
//     console.log('Data is saved.....');
// }).catch((e) => {
//     console.log('This is an error!');
// });


// update() function updates just root
//(pvz, in this case it deletes country)
    // location: {
    //     city: 'Boston'
    // }
// database.ref().update({
//     job: 'Manager',
//     'location/city': 'Boston'
// });

//database.ref('isSingle').set(null);

// database.ref()
// .remove()
// .then(() => {
//     console.log('Item is removed');
// }).catch((e) => {
//     console.log('Something went wrong!');
// });





//database.ref().set('This is my data.');

//database.ref('age').set(27);
//database.ref('location/city').set('Siauliai');

// database.ref('attributes').set({
//     height: 165,
//     weight: 65
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('Error! ', e);
// });