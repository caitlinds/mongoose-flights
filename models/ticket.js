//require mongoose module:
const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
//mongoose library has a schema class that holds all our schemas
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    seat: {
        type: String,
        match: /[A-F][1-9]\d?/
    },
    price: {
        type: Number,
        min: 0,
    },
    flight: {
        //all ids we store here must be document ids
        //...from the flight model
        type: Schema.Types.ObjectId,
        ref: 'Flight'
    }
}, {
    timestamps: true
});


module.exports = mongoose.model('Ticket', ticketSchema);