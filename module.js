/* const xyz = require('./people'); //Importing a file 

console.log(xyz.people,xyz.ages); */

const {people,ages} = require('./people'); //Importing a file 

console.log(people,ages); 

const os = require('os'); //inbuilt module we can imopert
console.log (os.platform(),os.homedir());