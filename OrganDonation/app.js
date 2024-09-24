const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 8000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//express specific stuff
app.use("/static", express.static("static")); //for serving the static files
app.use(express.urlencoded()); //middleware1
app.set("view engine", "pug"); //set the template engine as pug
app.set("views", path.join(__dirname, "views")); //set the views directory

app.get("/", (req, res) => {
  const params = {};
  res.status(200).render("index.pug", params);
});

//actual post

app.post("/index.js", async (req, res) => {
  const User = require("./static/index.js"); //("./static/index.js")
  const OrganDonation = require("./static/index.js");
  mongoose
    .connect("mongodb://127.0.0.1:27017/mohan")
    .then(() => {
      console.log("Database Connection done");
    })
    .catch(() => {
      console.log("Connection failed");
    });

  const data = await new User(req.body);
  await data.save();
  //  await checkboxes.save();
  res.sendFile(path.join(__dirname, "static", "thankYou.html"));
});
app.post("/index1.js", async (req, res) => {
  const User1 = require("./static/index1.js"); //("./static/index.js")
  const OrganDonors = require("./static/index1.js");
  const { organN } = req.body;
  console.log(organN);
  mongoose
    .connect("mongodb://127.0.0.1:27017/mohan")
    .then(() => {
      console.log("Database Connection done");
    })
    .catch(() => {
      console.log("Connection failed");
    });
  mongoose
    .connect("mongodb://127.0.0.1:27017/vasavi")
    .then(() => {
      console.log("Database Connection done");
    })
    .catch(() => {
      console.log("Connection failed");
    });
  const OrganDonation = require("./static/index.js");
  let data1 = await OrganDonation.find({ organs: organN });
  console.log(data1);

  const user = req.body; //whatever the data we are sending from html file will be save in user variable
  // console.log(req.body);
  const data = new User1(req.body);
  await data.save();
  res.render("mat", { data1 });
  //  await checkboxes.save();
  // res.sendFile(path.join(__dirname, "static", "thankYou.html"));
});

app.post("/getData", async (req, resp) => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/mohan")
    .then(() => {
      console.log("Database Connection done");
    })
    .catch(() => {
      console.log("Connection failed");
    });
  const OrganDonation = require("./static/index.js");
  const { organN } = req.body;
  console.log(organN);
  let data = await OrganDonation.find({ organs: organN });
  console.log(data);
  // resp.send(`<h1>Success</h1>`);

  resp.render("mat", { data });
});
app.listen(port, () => {
  console.log(`the application started sucessfully on port ${port}`);
});
