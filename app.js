const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const res = require('express/lib/response');
const blogRoutes= require('./routes/blogRoutes');


//express app
const app = express();


//connect to mongodb

const dbURI = 'mongodb+srv://pratik:test1234@nodeproject.qr4oq.mongodb.net/nodeproject?retryWrites=true&w=majority';
mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

//register view engine
app.set('view engine', 'ejs'); //express will know we are working in ejs. it will default look into views folder 
//app.set('views','something else folder name')


//listen for requests
//app.listen(3000);


//mongoose and mongo sandbox routes
/* app.get('/add-blog',(req,res)=>{
    const blog= new Blog({
        title:'new blog 2',
        snippet:'about my blog',
        body:'more about my new blog'
    });
    blog.save()
        .then((result)=>{
            res.send(result)
        })
        .catch((err)=>{
            console.log(err);
        });
});

app.get('/all-blogs',(req,res)=>{
    Blog.find()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
        });
}); */


//middleware
app.use(express.static('public')); //for linking static files like css.
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev')); //just a trial for morgan
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
  }); 

//routes
app.get('/', (req, res) => {
    res.redirect('/blogs');

})
app.get('/', (req, res) => {
    // res.sendFile('./views/index.html',{root: __dirname});
    res.render('index');
});
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
})
/* app.get('/about', (req, res) => {
    // res.sendFile('./views/about.html',{root: __dirname});
    res.render('about');
}) */
// blog routes
app.use('/blogs',blogRoutes);


/* redirect ie if the url has been changed buts user click on same
 app.get('/about-us',(req,res)=>{
    res.redirect('/about');
})  */

app.get('/404', (req, res) => {
    res.render('index', { title: 'Error' });
})
app.use((req, res) => {
    //res.sendFile('./views/404.html',{root: __dirname});
    res.render('404');


})