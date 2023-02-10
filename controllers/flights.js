const Flight = require('../models/flight');

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
    function dynamicSort(property) {
      var sortOrder = 1;
      if(property[0] === "-") {
          sortOrder = -1;
          property = property.substr(1);
      }
      return function (a,b) {
          var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
          return result * sortOrder;
      }
  }
  flight.destinations.sort(dynamicSort("arrival"));
    res.render('flights/show', { title: 'Flight Details', flight});
  })
}