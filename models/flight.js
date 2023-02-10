//require mongoose module:
const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
//mongoose library has a schema class that holds all our schemas
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: {
        type: Date,
    }
}, {
    timestamps: true
});

const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'United', 'Southwest']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    flightNo: {
        type: Number,
        required: {
            min: 10,
            max: 9999
        }
    },
    departs: {
        type: Date,
        default: function() {
            return Date.now() + 365*24*60*60000;
          }
    },
    destinations: [destinationSchema]
}, {
        timestamps: true
    });

module.exports = mongoose.model('Flight', flightSchema);