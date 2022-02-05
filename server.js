const http=require('http');//importing module
const fs = require('fs');
const _ = require('lodash');

 
const server= http.createServer((req,res)=> {
   
    // lodash
    const num = _.random(0,20);
    console.log(num);
    
    //set header content type 

    res.setHeader('Content-Type','text/html');

    let path = './views/';
    switch(req.url){ //using switch i.e(conditional statemnt )to figure out what url has user visited
    case '/':
        path+='index.html';
        res.statusCode= 202
        break;
    case '/about':
        path+='about.html';
        res.statusCode= 202
        break;
    default:
        path+='404.html'
        res.statusCode= 404
        break;
    }  
//send an html file
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            //res.write(data);
            res.end(data);
        }

    })

});

server.listen(3000,'localhost',()=>{
    console.log('listenning for req on port 3000')
})
