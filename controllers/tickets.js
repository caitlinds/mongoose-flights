const Ticket = require('../models/ticket');
const Flight = require('../models/flight');


module.exports = {
  new: newTicket,
  create
};

function newTicket(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
  res.render('tickets/new', { title: 'Add Ticket', flight });
  })
}

function create(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    const ticket = new Ticket(
      { seat: req.body.seat,
        price: req.body.price,
        flight: flight._id
      })
    ticket.save(function(err) {
      if (err) return res.redirect(`/flights/${flight._id}/tickets/new`);
      res.redirect(`/flights/${flight._id}`);
    })
  })
}