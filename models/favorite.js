let mongoose = require('mongoose');

// create a model class
let favoriteSchema = mongoose.Schema({
    name: String,
   description: String,
    
},
{
    collection: "favorites"
});

module.exports = mongoose.model('ishrat', favoriteSchema);