// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {


  //app.get("/index", function(req, res) {
    // Express res.sendFile sends the provided .html file back to the client
    // With res.sendFile, you need to use the absolute path of the directory that the executing script is in (development or production directory). That said, path.join() uses __dirname for the absolute path of the directory and joins it at the relative path of the .html file
    //res.sendFile(path.join(__dirname, "../public/tables.html"));
 // });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../routes/index.html"));
  });

  // If no matching route is found default to home
  //app.get("*", function(req, res) {
    //res.sendFile(path.join(__dirname, "../public
  //});
};