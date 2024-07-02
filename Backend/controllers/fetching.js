// const { MongoClient } = require('mongodb');


// // Connection URL and Database Name
// const url = 'mongodb://localhost:27017';
// const dbName = 'fellowDatabase';


// // Create a new MongoClient
// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });


// async function connectToDatabase() {
//   try {
//     await client.connect();
//     console.log('Connected to MongoDB database.');
//     const db = client.db(dbName);
//     return db;
//   } catch (err) {
//     console.error('Error connecting to MongoDB', err.message);
//   }
// }


// // Function to insert a new Fellow
// async function insertFellow(name, username, password, attendance) {
//   const db = await connectToDatabase();
//   const fellowCollection = db.collection('Fellow');
//   const result = await fellowCollection.insertOne({ name, username, password, attendance });
//   console.log(`A fellow has been inserted with id: ${result.insertedId}`);
// }


// // Function to fetch all Fellows
// async function fetchFellows() {
//   const db = await connectToDatabase();
//   const fellowCollection = db.collection('Fellow');
//   const fellows = await fellowCollection.find({}).toArray();
//   console.log(fellows);
//   return fellows;
// }


// // Function to close the database connection
// async function closeDatabase() {
//   try {
//     await client.close();
//     console.log('Database connection closed.');
//   } catch (err) {
//     console.error('Error closing the database connection', err.message);
//   }
// }


// // Export the functions for use in other files
// module.exports = {
//   insertFellow,
//   fetchFellows,
//   closeDatabase
// };
