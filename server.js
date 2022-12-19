require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;
const dortmunder = require("./models/dortmunder.js");
const methodOverride = require("method-override");

//Middleware
app.use((req, res, next) => {
  console.log("I run for Iran...");
  next();
});
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));

//Views
app.set("views", "./views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

//Mongoose
const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("strictQuery", true);
mongoose.connection.once("open", () => {
  console.log("bongo mongo");
});

//Root
app.get("/", (req, res) => {
  res.render("Home");
});

//Index
app.get("/dortmunder", (req, res) => {
  dortmunder.find({}, (error, allDortmunders) => {
    res.render("Index", {
      dortmunder: allDortmunders,
    });
  });
});

//New
app.get("/dortmunder/new", (req, res) => {
  res.render("New");
});

//Delete
app.delete("/dortmunder/:id", (req, res) => {
  dortmunder.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/dortmunder");
  });
});

//Update
app.put("/dortmunder/:bookId", (req, res) => {
  if (req.body.quantity === "BUY THIS BOOK") {
    dortmunder.findByIdAndUpdate(
      req.params.bookId,
      { $inc: { quantity: -1 } },
      (err, updatedDortmunder) => {
        res.redirect(`/dortmunder/${req.params.bookId}`);
      }
    );
  } else {
    dortmunder.findByIdAndUpdate(
      req.params.bookId,
      req.body,
      (err, updatedDortmunder) => {
        res.redirect(`/dortmunder/${req.params.bookId}`);
      }
    );
  }
});

//Create (or Add)
app.post("/dortmunder", (req, res) => {
  dortmunder.create(req.body, (error, createdDortmunder) => {
    res.redirect("/dortmunder");
  });
});

//Edit
app.get("/dortmunder/:id/edit", (req, res) => {
  dortmunder.findById(req.params.id, (err, foundDortmunder) => {
    if (!err) {
      res.render("Edit", {
        dortmunder: foundDortmunder,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

//Show
app.get("/dortmunder/:bookId", function (req, res) {
  dortmunder.findById(req.params.bookId, (err, foundDortmunder) => {
    res.render("Show", {
      dortmunder: foundDortmunder,
    });
  });
});

//Port
app.listen(port, () => {
  console.log("Deathrace", port);
});
