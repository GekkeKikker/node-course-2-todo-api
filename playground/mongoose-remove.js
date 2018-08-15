const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//remove all todos
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//Todo.findOneAndRemove()
Todo.findOneAndRemove({_id: '5b73c79739a4b54df28ff3d4'}).then((todo) => {
  console.log(todo);
});


//Todo.findByIdAndRemove()
Todo.findByIdAndRemove('5b73c79739a4b54df28ff3d4').then((todo) => {
  console.log(todo);
});
