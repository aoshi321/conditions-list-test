const data = require("../data/conditions");

const appRouter = function(app) {
  app.get("/conditions", function(req, res) {
    res.status(200).json(data);
  });
};

module.exports = appRouter;
