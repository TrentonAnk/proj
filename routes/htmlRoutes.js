var path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  app.get("/stocks", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/stockpage.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.status(404).send("404 - Page not found");
  });
};
