const Flight = require('../models/flight');
const Ticket = require('../models/ticket');

module.exports = {
  index,
  new: newFlight,
  create,
  show
};

function index(req, res) {
  Flight.find({}).sort([['departs', 1]]).exec(function(err, flights) {
    res.render('flights/index', { title: 'All Flights', flights });
  })
}

function newFlight(req, res) {
  res.render('flights/new', { title: 'Add Flight' });
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const flight = new Flight(req.body);
  flight.save(function(err) {
    if (err) return res.redirect('/flights/new');
    console.log(flight);
    res.redirect('/flights/');
  });
}

function show(req, res) {
  Flight.findById(req.params.id, function(err, flight) {
    Ticket.find({flight: flight._id}, function(err, tickets) {
      flight.destinations.sort((a,b) => (a.arrival > b.arrival) ? 1 : ((b.arrival > a.arrival) ? -1 : 0))
      res.render('flights/show', { title: 'Flight Details', flight, tickets});
    })
  })
}