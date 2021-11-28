const express = require('express')
const app = express()
const port = 4000
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

//Used to parse the body of a http request
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//For using cors everytime
app.use(cors());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept");
    next();
    });
    
//Connecting with the mongodb database created
const myConnectionString = 'mongodb+srv://admin:andrew1994@cluster0.renws.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
//Using mongoose 
mongoose.connect(myConnectionString,{useNewUrlParser: true});

//Creating a Schema
const Schema = mongoose.Schema;

var movieSchema = new Schema({
    title:String,
    year:String,
    poster:String
});

//Allows to write data to the model
var MovieModel = mongoose.model("movie", movieSchema)

app.get('/',(req,res)=>{
    res.send('David Fitzharris, Data Rep & Query App')
})

//API being used in read.js using get method
app.get('/api/movies', (req, res)=> {

//     const myMovies = [
//         {
//         "Title": "Avengers: Infinity War",
//         "Year": "2018",
//         "imdbID": "tt4154756",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
//         },
//         {
//         "Title": "Captain America: Civil War",
//         "Year": "2016",
//         "imdbID": "tt3498820",
//         "Type": "movie",
//         "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
//         }
       
        
//     ];

    // //Passing data
    // res.status(200).json({
    //     message: "Everything is ok",
    //     movies:myMovies});

MovieModel.find((err, data)=>{
    res.json(data);
})

})

app.get('/api/movies:id', (req,res)=>{
    console.log(req.params.id);

    MovieModel.findById(req.params.id, (err, data)=> {
        res.json(data);
    })
})

//Http method put using for Edit
app.put('/api/movies/:id', (req,res)=>{
    console.log("update movie: " + req.params.id);
    console.log(req.body);

    //Overwrite the data 
    MovieModel.findByIdAndUpdate(req.params.id,req.body, {new:true},
        (err,data)=>{
            res.send(data);
        })
})

//Ref with create.js submit method
app.post('/api/movies', (req, res)=>{
    console.log('Movie Recieved!');
    console.log(req.body.title);
    console.log(req.body.year);
    console.log(req.body.poster);

    //Sends to the database
    MovieModel.create({
        title:req.body.title,
        year:req.body.year,
        poster:req.body.poster
    })

    //Stops duplication be confirming item added
    res.send('Item Added');
})

//Adding the delete method
app.delete('/api/movies/:id', (req,res)=>{
    console.log("Delete Movie: "+ req.params.id);

    MovieModel.findByIdAndDelete(req.params.id,(err,data) => {
        res.send(data);
    })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})