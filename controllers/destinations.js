const Flight = require('../models/flight');

module.exports = {
  create
};

function create(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    // We push an object with the data for the
    // dest subdoc into Mongoose arrays
    // have to use push() vs destinations: req.body bc we want too add 
    //...many destinations so we want them in an array
    if (req.body.arrival) flight.destinations.push(req.body);

    flight.save(function(err) {
      // Step 5: Respond with a redirect because we've mutated data
      res.redirect(`/flights/${flight._id}`);
    });
  });
}