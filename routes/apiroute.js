// var driverdata = require("../data/drivers");
var db = require('../models');
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {

    app.get("/api/driversdata", function(req, res) {
      db.driversdata.findAll({})
      .then(function(dbdriversdata) {
        res.json(dbdriversdata);
      });
       // console.log('route hit')

        // res.json(driverdata);
      });


     app.post("/api/driversdata", function(req, res) {
      db.driversdata.create({
        company_name : req.body.company_name,
         shipment_type: req.body.shipment_type,
         delivery_adress: req.body.delivery_adress,
         phone_number: req.body.phone_number
       })
         .then(function(dbdriversdata) {
           res.json(dbdriversdata);
         });
         });

      app.post("/api/delivery-request", function(req, res) {

        db.DeliveryRequest.create({
         company_name : req.body.company_name,
          shipment_type: req.body.shipment_type,
          delivery_adress: req.body.delivery_adress,
          phone_number: req.body.phone_number
        })
          .then(function(dbdeliveryRequest) {
            res.json(dbdeliveryRequest);
          });
          




      });
      app.get("/api/delivery-request", function(req, res) {
        db.DeliveryRequest.findAll({})
      .then(function(dbdeliveryRequest) {
        res.json(dbdeliveryRequest);
      });
       // use db.DeliveryRequest.findAll()

 });
}
      
  
    
    





  
    
















        
      // ---------------------------------------------------------------------------
      







      




     // app.post("/addUser", function(req, res) {
        // Test it
        // console.log('You sent, ' + req.body.task);
      
        // Test it
        // return res.send('You sent, ' + req.body.task);
      
        // When using the MySQL package, we'd use ?s in place of any values to be inserted, which are then swapped out with corresponding elements in the array
        // This helps us avoid an exploit known as SQL injection which we'd be open to if we used string concatenation
        // https://en.wikipedia.org/wiki/SQL_injection
       // connection.query("INSERT INTO drivers () VALUES (? )", [req.body.id,req.body.name,req.body.email,req.body.phone], function(err, result) {
        //  if (err) throw err;
      
         // res.redirect("/");
        //});
     // });


      







