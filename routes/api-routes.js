const db = require("../models");
const passport = require("passport");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/", function(req, res) {

  });

  // POST route for saving a new todo. You can create a todo using the data on req.body
  app.post("/api/add", function(req, res) {

    db.Character.create(req.body).then((answer)=>{

    // db.Character.create({
    //   name:req.body.name,
    //   ascensionPhase:req.body.ascensionPhase,
    //   level:req.body.level,
    //   hp:req.body.hp,
    //   atk:req.body.atk,
    //   def:req.body.def,
    //   critRate:req.body.critRate,
    //   critDamage:req.body.critDamage
    // }).then((answer)=>{

      // console.log(req.body);
      console.log(answer);
      res.send(200);
    })
  });

  // DELETE route for deleting todos. You can access the todo's id in req.params.id
  app.delete("/api/todos/:id", function(req, res) {

  });

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put("/api/todos", function(req, res) {

  });
};
