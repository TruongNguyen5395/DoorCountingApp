const mongoose = require ('mongoose');

// mongoose.connect('mongodb://localhost:27017/targetDB',{ useNewUrlParser: true }, (err) => {
//     if (!err) { console.log('MongoDB connection Success.') }
//     else { console.log('Error in DB Connection : ' + err) }
// });


mongoose.connect('mongodb+srv://truongnguyen5395:truong1995@cluster0-urh8c.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true }, (err) => {
    if (!err) { console.log('MongoDB connection Success.') }
    else { console.log('Error in DB Connection : ' + err) }
});

require ('../models/target.model');
require ('../models/tempData');