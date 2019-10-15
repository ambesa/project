// ==============================================================================
// DEPENDENCIES
// Series of npm packages that we will use to give our server useful functionality
// ==============================================================================

var express = require("express");
var db = require("./models");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Create an instance of an express application so that we can use the mryaid of methods that come with the web framework
var app = express();

// Set the PORT number so that the browser knows where to find the application
// If we're in the production environment, use process.env.PORT, else use PORT 8080 for the development environment
var PORT = process.env.PORT || 8080;

/*
MIDDLEWARE FUNCTIONS
- Sets up the Express app to handle data parsing from POST requests
- Listens for request headers with content-type www.urlencoded
- Parses the incoming data and then feeds it to the req.body object
- extended: true syntax allows for rich objects and arrays to be encoded which allows for a JSON-like experience
*/
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./routes/apiroute.js")(app);
require("./routes/htmlroute.js")(app)

// =============================================================================
// LISTENER
// The below code effectively "starts" our server
// =============================================================================

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
