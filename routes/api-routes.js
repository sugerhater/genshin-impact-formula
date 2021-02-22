const db = require("../models");
const passport = require("passport");

// Routes
// =============================================================
module.exports = function (app) {

  app.get("/", function (req, res) {

  });

  app.post("/api/add", function (req, res) {

    db.Character.create(req.body).then((answer) => {
      console.log(answer);
      res.send(200);
    })
  });

  // DELETE route for deleting todos. You can access the todo's id in req.params.id
  app.delete("/api/todos/:id", function (req, res) {

  });

  // PUT route for updating todos. The updated todo will be available in req.body
  app.put("/api/todos", function (req, res) {

  });
};
