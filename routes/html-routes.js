const path = require("path");

module.exports = function(app) {
  app.get('/', function(req,res){
    res.sendFile(path.join(__dirname,"../public/index.html"))
  });

  app.get('/add-data', function(app){
    res.json('add data page')
  } );

  app.get('/damage',function(req,res){
    res.json('damage calculate page')
  })
}