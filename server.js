const express = require("express");
var session = require("express-session");

// const db = require("../original-homework1/osu-col-fsf-pt-10-2020-u-c/14-Full-Stack/01-Activities/07-ORM-To-Sequelize/Solved/models/index.js");
const db = require("./models")
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

app.get('*', function (req, res) {
  res.send('Page not found', 404);
});


db.sequelize.sync().then(function(){
  app.listen(PORT, function(){
    console.log("app listening on PORT " +PORT)
  })
})