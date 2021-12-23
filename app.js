const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const User = require('./models/user');
const { render } = require('ejs');
const blogRoutes = require('./routes/blogRoutes');
const { result } = require('lodash');
const userRouter = require('./routes/userRoutes');
const blogRouter = require('./routes/blogRoutes');

//express app
const app = express();

//mongodb connection
// const dbURI = "mongodb+srv://netninja:Parmar25@ninja.1kyy2.mongodb.net/ninja?retryWrites=true&w=majority"
const dbComURI= "mongodb://localhost:27017/ninja" 
// mongoose.connect(dbURI, )
//     .then((result) => app.listen(3000))
//     .catch((err) => console.log(err));

mongoose.connect(dbComURI)
    .then(result => console.log("connected to db"))
    .catch((err) => console.log(err));
//registerview engine
app.set('view engine', 'ejs');




//listen for requests
app.listen(3000);


//middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

// //use 3rd prty middleware morgan package
// app.use(morgan('tiny'));
app.use(morgan('dev'));


//mongoose and mongo sendbox routes for user

// app.get('/add-user', (req,res) => {
//         const user = new User({
//             name: 'new user',
//             email: 'nice@123.com',
//             body: 'more about my new user'
//         });
    
//         user.save()
//             .then((result) => {
//                 res.send(result);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
// })
    

// app.get('/add-users', (req,res) =>{
//     User.find()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })


//mongoose and mongo sandbox routes
// app.get('/add-blog', (req,res) => {
//     const blog = new Blog({
//         title: 'new blog',
//         snippet: 'about my new blog',
//         body: 'more about my new blog'
//     });

//     blog.save()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// })



// app.get('/all-blogs', (req,res) => {
//     Blog.find()
//         .then((result) =>{
//             res.send(result);
//         })
//         .catch((err) =>{
//             console.log(err);
//         })
// })

// app.get('single-blog', (req,res) => {
//     Blog.findById('id')
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// })

//middleware
// app.use((req,res, next) => {
//     console.log('new request made');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// })


//middleware
// app.use((req,res, next) => {
//     console.log('in the next middle ware');
//     next();
// })


//add blogs data manually
// app.get('/', (req,res) =>{

//     const blogs = [
//         {title: 'apple', snippet: 'gdgdhgdhgdfgjkkjhfkjfh'},
//         {title: 'mango', snippet: 'yrtirttmnkjhgdfgjkkjhfkjfh'},
//         {title: 'cherry' , snippet: 'hdjdhfjdhfjldhfljh'}


//     ];
//     // res.send('<p>home page </p>')
//     // res.sendFile('./index.html', {root : __dirname})
//     res.render('index', {title: 'Home', blogs});
// })

app.get('/', (req,res) => {
    res.redirect('/blogs')
})


app.get('/about', (req,res) =>{
    //res.send('<p>about page </p>')
    // res.sendFile('./about.html', {root : __dirname})
    res.render('about', {title: 'about'})

})

//redirect the about-us to about

app.get('/about-us ', (req,res) =>{
    res.redirect('./about');
});

//blog routes
app.use('/blogs',blogRouter)



app.get('/contact', (req,res) => {
    res.render('contact', {title: 'contact'})
})

//user routes
app.use('/users',userRouter)


//the 404 page
app.use((req,res) =>{
    // res.sendFile('./404.html', {root: __dirname})
    res.status(404).render('404', {title: '404'});
})