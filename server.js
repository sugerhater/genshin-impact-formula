const express = require("express");
// const db = require("../original-homework1/osu-col-fsf-pt-10-2020-u-c/14-Full-Stack/01-Activities/07-ORM-To-Sequelize/Solved/models/index.js");
const db = require("./models")
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

require("./routes/api-routes.js")(app);

db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
    console.log("app listening on PORT " +PORT)
  })
})