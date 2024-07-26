const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const brain = require('brain.js');
require('dotenv').config();
// Import controllers
const { loginController, registerController, getFellow } = require('./controllers/userController');
const { addStudent, editStudent, getStudentbyClass, getAllStudents, updateMarks ,getStudent} = require('./controllers/studentController');
const dburl = process.env.ATLASDB_URL; 
// MongoDB connection URI // mongodb://127.0.0.1:27017/edudata
async function main() {
    try {
      await mongoose.connect(dburl);    // vhii and hence its always good to make and hence its always good a d 
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  }
  
  main();

// Express app
const app = express();

// Middleware
app.use(cors(
  {
    origin : ['https://vilage-studymanager-11-50h8889n3-arihants-projects-c638e3ec.vercel.app'],
     methods : ['POST', 'GET'],
     credentials : true
  }
));
app.options('*', cors({
  origin: ['https://vilage-studymanager-11-50h8889n3-arihants-projects-c638e3ec.vercel.app'],
  methods: ['POST', 'GET', 'OPTIONS'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// User Routes
app.post('/api/v1/users/login', loginController);
app.post('/api/v1/users/register', registerController);

// Fellow Routes (if any, assuming it's empty for now)
// app.post('/api/v1/fellow/some-route', someFellowController);

// Student Routes
const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

// Initial training data based on the importance of activities
const initialTrainingData = [
  { input: [1, 0, 0, 0, 0,0,0], output: { sports: 1 } },  // Activity 1 is most important
  { input: [0, 1, 0, 0, 0,0,0], output: { literature: 1 } },  // Activity 2 is second most important
  { input: [0, 0, 1, 0, 0,0,0], output: { art: 1 } },  // Activity 3 is third most important
  { input: [0, 0, 0, 1, 0,0,0], output: { speaking: 1 } },  // Activity 4 is fourth most important
  { input: [0, 0, 0, 0, 1,0,0], output: { music: 1 } },  
  { input: [0, 0, 0, 0, 1,0,0], output: { dancing: 1 } },
  { input: [0, 0, 0, 0, 1,0,0], output: { others: 1 } } // Activity 5 is least important
];

// Train the neural network with initial data
net.train(initialTrainingData);

// Function to get suggested activity
const getSuggestion = (preferences) => {
  const result = net.run(preferences);
  const suggestedActivity = Object.keys(result).reduce((a, b) => (result[a] > result[b] ? a : b));
  return suggestedActivity;
};

// Function to update training data and retrain the network
const updateTrainingDataAndRetrain = (newData) => {
  initialTrainingData.push(newData);
  net.train(initialTrainingData);
};

app.post('/api/v1/student/add-student', addStudent);
app.post('/api/v1/student/edit-student', editStudent);
app.post('/api/v1/student/get-studentbyclass', getStudentbyClass);
app.post('/api/v1/student/get-allStudents', getAllStudents);
app.post('/api/v1/student/update-monthly-score', updateMarks);

app.post('/api/v1/student/getstudent', getStudent);
app.post('/api/v1/student/getfellow', getFellow);
app.post('/api/submit-preferences', (req, res) => {
  const preferences = req.body.preferences;
  const maxPref = Math.max(...preferences);
  const activitySel = preferences.indexOf(maxPref) + 1;

  const newTrainingData = { input: preferences, output: { [`activity${activitySel}`]: 1 } };
  updateTrainingDataAndRetrain(newTrainingData);

  const suggestedActivity = getSuggestion(preferences);
  res.json({ suggestedActivity });
});
// Start server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Connect to MongoDB on server start and hence its always good to m propaa ji aap bade balwaan hai aap sabki jaan hai propaa propaa 
 
