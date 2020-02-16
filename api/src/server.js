const app = require("./app.js");

app.set("port", 8080);

const server = app.listen(8080, function() {
  console.log("app running on port.", server.address().port);
});
