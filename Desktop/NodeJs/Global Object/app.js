// var counter = require('./counts');
// var stuf = require('./stuf');

// console.log(stuf.counter(['Ayo', 'Ade', 'Shola']));
// console.log(stuf.adder(5,6));
// console.log(stuf.adder(stuf.pi, 5));

// setTimeout(function(){
//   console.log('3 seconds have passed');
// }, 3000);


// var time = 0;
// time += 2;

// var timer = setInterval(function(){
//   console.log(time + ' seconds have passed');
//   if(time > 5){
//     clearInterval(timer);
//   }
// }, 2000);

// console.log(__dirname);
// console.log(__filename);


// Normal function Statement
// function SayHi(){
//   console.log('hi');
// }

// SayHi();

// Finction Expression
// var SayBye = function(){
//   console.log('bye');
// }

// SayBye();

// function callFuntion(func){
//   func();
// }

// var SayBye = function(){
//   console.log('bye');
// };

// callFuntion(SayBye); 


// Event Module/Event emitter
// var events = require('events');
// var util = require('util');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(messg){
//   console.log(messg);
// });

// myEmitter.emit('someEvent', 'event was emitted');


// var Person = function(name){
//   this.name = name;
// };

// util.inherits(Person, events.EventEmitter);

// var ade = new Person('ade');
// var ola = new Person('ola');
// var tope = new Person('tope');

// var People = [ade, ola, tope];

// People.forEach(function(person){
//   person.on('speak', function(mssg){
//     console.log(person.name + ' said: ' + mssg);
//   });
// });

// ola.emit('speak', 'hey dudes');
// ade.emit('speak', 'I want a curry');
// tope.emit('speak', 'I love you');


// how to read file


// fs.readFile('readMe.txt', 'utf8', function(err, data){
// fs.writeFile('writeMe.txt', data);
// });

// fs.writeFileSync('writeMe.txt', readMe);


// fs.unlink('writeMe.txt');


// HOW TO CREATE DIRECTORY WITH SYNC AND ASYNC
// var fs = require('fs');
// fs.mkdirSync('stuff');
// fs.rmdirSync('stuff');

// fs.mkdir('stuff', function(){
//   fs.readFile('readMe.txt', 'utf8', function(err, data){
//     fs.writeFile('./stuff/writeMe.txt', data);
//   });
// });

// HOW TO MAKE A SERVER
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(req, res){
//   console.log('request was made: ' + req.url);
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   var readMyStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

// readMyStream.pipe(res);

  // res.end('Hey ninjas');
// });

// server.listen(3000, '127.0.0.1');
// console.log('yo dawgs, now listening to port 3000');


// HOW TO CREATE A READABLE and WRITABLE STREAM
// var fs = require('fs');

// var readMyStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
// var writeMyStream = fs.createWriteStream(__dirname + '/writeMe.txt');

// readMyStream.on('data', function(chunk){
//   console.log('New chunk recieved:');
//   // console.log(chunk);
//   writeMyStream.write(chunk);
// });


// PIPES
// readMyStream.pipe(writeMyStream);

// SENDING AN HTML TO THE CLIENT
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(req, res){
//   console.log('request was made: ' + req.url);
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   var readMyStream = fs.createReadStream(__dirname + '/index.html', 'utf8');

// readMyStream.pipe(res);

// });

// server.listen(3000, '127.0.0.1');
// console.log('yo dawgs, now listening to port 3000');


// SENDING JSON TO THE CLIENT
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(req, res){
//   console.log('request was made: ' + req.url);
//   res.writeHead(200, {'Content-Type': 'application/json'});

//   var myObj = {
//     name: 'Khalid',
//     job: 'web',
//     age: 33
//   };

//   res.end(JSON.stringify(myObj));
  
// });

// server.listen(3000, '127.0.0.1');
// console.log('yo dawgs, now listening to port 3000');


// CREATING BASIC ROUTING
// var http = require('http');
// var fs = require('fs');

// var server = http.createServer(function(req, res){
//   console.log('request was made: ' + req.url);
//   if(req.url === '/home' || req.url === '/'){

//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/index.html').pipe(res);

//   }else if(req.url === '/contact'){

//     res.writeHead(200, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/contact.html').pipe(res);

//   }else if(req.url === '/api/ninjas'){
//     var ninjas = [
//       {
//         name: 'khalid',
//         age: 33
//       },
//       {
//         name: 'Adewale',
//         age: 32
//       }
//     ];
//     res.writeHead(200, {'Content-Type': 'application/json'});
//     res.end(JSON.stringify(ninjas));

//   }else {
//     res.writeHead(404, {'Content-Type': 'text/html'});
//     fs.createReadStream(__dirname + '/404.html').pipe(res);
//   }
// });

// server.listen(3000, '127.0.0.1');
// console.log('yo dawgs, now listening to port 3000');


// INSTALLING MODULES  DEPENDENCIES or PACKAGE MANAGER
// INNITIALIZING OUR PACKAGES


// WORKING WITH EXPRESS
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// POST REQUEST
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// TEMPLATE ENGINE EJS
app.set('view engine', 'ejs');

// TO USE MIDDLEWARE
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
  res.render('index');
  // res.send('This is the homepage');
//  res.sendFile(__dirname + '/index.html');
});

app.get('/contact', function(req, res){
  res.render('contact', {qs: req.query});
  // res.send('This is the contact page');
  // res.sendFile(__dirname + '/contact.html');
});

app.post('/contact', urlencodedParser, function(req, res){
  console.log(req.body)
  // res.render('contact', {qs: req.query});
  res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function(req, res){
  // res.send('you requested to see a profile with the id of '+ req.params.id);
  var data = {age: 33, job: 'developer', hobbies: ['Eating', 'Fighting', 'Fishing']};
  res.render('profile', {person: req.params.name, data: data});
});

// app.get('/profile/:name', function(req, res){
//   res.send('you requested to see a profile with the name of '+ req.params.name);
// });



app.listen(3000);


