const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// All routes "starts with" / (root)

// POST /flights/:id/dest
// bc we ar adding a destination ONLY to whatever flight we are viewing
// POSt /flights/destinations would be if we had a separate model
// ...or page for adding destinations, adn were adding a destination there
router.post('/flights/:id/destinations', destinationsCtrl.create);

module.exports = router;