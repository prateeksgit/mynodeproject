const fs= require('fs'); // file system module built in node 

//reading files
/* fs.readFile('./docs/blog.txt',(err,data)=>{
    if (err){
        console.log('oops error');
    }
    console.log(data.toString());
}); // This is an async function. It doesn't block the exextion of
     //program though it isn't finished executing

console.log('last line') /* just for example to see async function doesn'try {
                            block any. */ 
 



//writing files

/* fs.writeFile('./docs/blog1.txt','hello girlsss',()=>{
    console.log('file has been written');
});

console.log('first') */
//directories
/* if (!fs.existsSync('./bingo')){
 fs.mkdir('./bingo',(err)=>{
     if (err){
        console.log('oops error');
     }
     console.log('Folder has been created')

 });
} else{
    fs.rmdir('./bingo',(err)=>{
        if (err){
            console.log(err);
        }
        console.log('flder deleted')
    });
} */

//delete files

/* if (fs.existsSync('./docs/delete.txt')){
    fs.unlink('./docs/delete.txt',(err)=>{
        if (err){
            console.log(err)
        }
        console.log ('file deleted');
    }) */
}

