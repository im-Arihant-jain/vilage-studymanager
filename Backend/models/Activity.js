const uri = 'mongodb://localhost:27017/education'; // Replace 'yourDatabaseName' with the actual name of your database

const mongoose = require('mongoose');
// Connect to MongoDB
// mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => {
//         console.log('Successfully connected to MongoDB');
//     })
//     .catch(err => {
//         console.error('Error connecting to MongoDB:', err);
//     });


// Define the schema for the 'fellow' collection
const fellowSchema = new mongoose.Schema({
    attendance: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true  // meri to 9.4 cgpa hai and 
    },
    fellow_id: {
        type: Number,
        autoIncrement: true,
        primaryKey: true
    }
});


// Create the model for the 'fellow' collection
const Fellow = mongoose.model('Fellow', fellowSchema);


// Export the model to use it in other parts of the application
module.exports = Fellow;
