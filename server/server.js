var express = require('express');
var bodyParser = require('body-parser');
var {ObjectID} = require('mongodb');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  //console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  })
});

app.get('/todos', (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  })
});

// GET /todos/AZAZAZRERDF2232321
app.get('/todos/:id', (req, res) => {
  id = req.params.id;

//validate id using isValid
  if(!ObjectID.isValid(id)) {
  //404 - send back empty send
    res.status(404).send();
    return console.log('Id not valid');
  }

  //findById
  Todo.findById(id).then((todo) => {
    //success
    if(!todo) {
      //if no todo - send 404 with empty body
      res.status(404).send();
      return console.log('Id not found');
    }
    //if todo - send it back
    res.send({todo});
    console.log(JSON.stringify(todo, undefined, 2));

    //error
  }).catch((e) => {
    //400 - and send empty body back
    res.status(400).send();
    console.log(e);
  });
});



app.listen(3000, () => {
  console.log('Started on port 3000');
});

module.exports = {app};
