//MongoDb module v2
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var user = {name: 'Maarten', age: 39};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert Todos', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

//insert new doc into Users (name, age, location)
  // db.collection('Users').insertOne({
  //   name: 'Maarten',
  //   age: 39,
  //   location: 'Herk-de-Stad'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user');
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
