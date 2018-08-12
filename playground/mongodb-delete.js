//MongoDb module v2
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  //deleteMany Users
  db.collection('Users').deleteMany({name: 'Maarten'}).then((result) => {
    console.log(result);
  })

  //findOneAndDelete users by _id
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5b704cb4eba6af39acd384cc')}).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });

  // db.close();
});
