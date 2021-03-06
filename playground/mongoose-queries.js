const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b71dcc8144974983c0cdc8c';
//
// if (!ObjectID.isValid(id)){
//   console.log('Id not valid');
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e) => console.log(e));

//user.findById
var id = '5b7154fab0aa8864156eb9b9';

User.findById(id).then((user) => {
  if(!user) {
    return console.log('Id not found');
  }
  console.log('User by id', user);
}).catch((e) => console.log(e));
