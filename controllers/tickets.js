const Ticket = require('../models/ticket');
const Flight = require('../models/flight');


module.exports = {
  new: newTicket,
  create
};

function newTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
  res.render('tickets/new', { title: 'Add Ticket', flight});
  })
}

// function create(req, res) {
//   Flight.findById(req.params.id, function(err, flight) {
//     if (req.body.arrival) flight.destinations.push(req.body);
//     flight.save(function(err) {
//       // Step 5: Respond with a redirect because we've mutated data
//       res.redirect(`/flights/${flight._id}`);
//     });
//   });
// }

function create(req, res) {
  res.render('tickets/test', { title: "Test" })
}