require('dotenv').config()
const mongoose = require("mongoose")
const express = require('express')
const fs = require('fs')
const app = express()
const port = 3000
const dortmunder = require('./models/dortmunder.js')
const methodOverride = require('method-override')

//Middleware
app.use((req, res, next) => {
  console.log("I run for the ice cream truck.  I do not run for the bus.")
  next()
})
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

//Views
app.set('views', './views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//Mongoose
const mongoURI = process.env.MONGO_URI
const db = mongoose.connection
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.set('strictQuery', true)
mongoose.connection.once("open", () => {
  console.log("connected to mongo")
})

//Root
app.get('/', (req, res) => {
    res.send(`<h1>"I believe my subject is bewilderment.  But I could be wrong."</h1>`)
    
})

//Index
app.get("/dortmunder", (req, res) => {
  dortmunder.find({}, (error, allDortmunders) => {
    res.render("Index", {
      dortmunder: allDortmunders,
    })
  })
})

//New
app.get("/dortmunder/new", (req, res) => {
    res.render("New")
  })

//Delete
app.delete('/dortmunder/:id', (req, res)=>{
  dortmunder.findByIdAndRemove(req.params.id, (err, data)=>{
      res.redirect('/dortmunder')//redirect back to fruits index
  })
})

//Update
app.put('/dortmunder/:id', (req, res)=>{
  dortmunder.findByIdAndUpdate(req.params.id, req.body, (err, updatedDortmunder)=>{
      res.redirect(`/dortmunder/${req.params.id}`)
  })
})

//Create (or Add)
app.post("/dortmunder", (req, res) => {
    dortmunder.create(req.body, (error, createdDortmunder) => {
      res.redirect("/dortmunder")
    })
  })

//Edit
app.get('/dortmunder/:id/edit', (req, res)=>{
  dortmunder.findById(req.params.id, (err, foundDortmunder)=>{ //find the fruit
    if(!err){
      res.render(
        'Edit',
      {
        dortmunder: foundDortmunder //pass in the found fruit so we can prefill the form
      }
    )
  } else {
    res.send({ msg: err.message })
  }
  })
})

//Show
app.get("/dortmunder/:bookId", function (req, res) {
  dortmunder.findById(req.params.bookId, (err, foundDortmunder) => {
    res.render("Show", {
      dortmunder: foundDortmunder,
    })
  })
})

//Port
app.listen(port,() => {
    console.log('Deathrace' , port)
})