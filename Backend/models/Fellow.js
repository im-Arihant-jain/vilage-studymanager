const mongoose = require('mongoose');


// MongoDB connection URI
// const uri = 'mongodb://localhost:27017/education'; // Replace 'yourDatabaseName' with the actual name of your database


// // Connect to MongoDB
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Successfully connected to MongoDB');
//     })
//     .catch(err => {
//         console.error('Error connecting to MongoDB:', err);
//     });


// Define the schema for the 'fellow' collection
const fellowSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
      
    },
    password: {
        type: String,
        required: true
    },
    profilepic: {
        type: String,
        default: "https://unsplash.com/photos/a-man-standing-on-top-of-a-lush-green-hillside-lGKtfrsWUQI"
    },
 
});


// Create the model for the 'fellow' collection
const Fellow = mongoose.model('Fellow', fellowSchema);


// Export the model to use it in other parts of the application
module.exports = Fellow;
