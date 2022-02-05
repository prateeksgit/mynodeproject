const fs = require('fs');

const readStream= fs.createReadStream('./docs/streams.txt');
const writeStream = fs.createWriteStream('./docs/blog4.txt');
/* readStream.on('data',(chunk)=>{ //on is an event listener
    console.log ('...........NEW CHUNK.............')
    console.log(chunk.toString());
}); */

//piping

readStream.pipe(writeStream);
