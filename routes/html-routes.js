var path = require("path");
const db = require("../models");

module.exports = function(app) {

  app.get('/', function(req,res){
    // res.sendFile(path.join(__dirname,"../public/index.html"))
    res.render('index')
  });

  app.get('/adding', function(req,res){
    // res.sendFile(path.join(__dirname,"../public/adding.html"))
    res.render('adding')
  });


  app.get('/:character',function(req,res){
    const character = req.params.character;
    db.Character.findAll({where :{
      name = character
    }}).then(data => res.json(data));
    //then build a handle bar for this route;
  })
  // app.get('/adding', function(req,res){
  //   res.sendFile(path.join(__dirname,"../public/adding.html"))
  //   // res.json('add data page')
  // });

  app.get('/damage',function(req,res){
    // res.json('damage calculate page')
    res.render('damage')
  })
}