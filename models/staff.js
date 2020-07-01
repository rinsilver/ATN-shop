const mongoose = require('mongoose');

var staffSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    MSNV: String,
    Name: String,
    UrlImg: String,
    Information: String    
} , { collection: 'Staff' } );

var Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;