const brain = require('brain.js');

// Create a new neural network with hidden layers
const net = new brain.NeuralNetwork({ hiddenLayers: [3] });

// Initial training data based on the importance of activities
const initialTrainingData = [
  { input: [1, 0, 0, 0, 0], output: { activity1: 1 } },  // Activity 1 is most important
  { input: [0, 1, 0, 0, 0], output: { activity2: 1 } },  // Activity 2 is second most important
  { input: [0, 0, 1, 0, 0], output: { activity3: 1 } },  // Activity 3 is third most important
  { input: [0, 0, 0, 1, 0], output: { activity4: 1 } },  // Activity 4 is fourth most important
  { input: [0, 0, 0, 0, 1], output: { activity5: 1 } }   // Activity 5 is least important
];

// Train the neural network with initial data
net.train(initialTrainingData);

// Function to get suggested activity
const getSuggestion = (preferences) => {
  const result = net.run(preferences);
  console.log(result);
  const suggestedActivity = Object.keys(result).reduce((a, b) => (result[a] > result[b] ? a : b));
  return suggestedActivity;
};

// Initial example usage
const initialPreferences = [1, 0, 0, 0, 0];  // Example input
const initialSuggestedActivity = getSuggestion(initialPreferences);
console.log(`Initially suggested activity: ${initialSuggestedActivity}`);

// Function to update training data and retrain the network
const updateTrainingDataAndRetrain = (newData) => {
  initialTrainingData.push(newData);
  net.train(initialTrainingData);
};

// New student data
const newStudentPreferences = [0, 8, 3, 2, 1];  
let maxpref  = 0;// Example input indicating student preferences
let activitysel = 0;
for (let i = 0; i < newStudentPreferences .length; i++) {
    if(maxpref<newStudentPreferences[i]){
        maxpref =newStudentPreferences[i];
        activitysel = i+1; 
    }
  }
const newTrainingData = { input: newStudentPreferences, output: { activity1: activitysel} };  // Assuming activity1 is still most important

// Update training data and retrain the network
updateTrainingDataAndRetrain(newTrainingData);

// Get updated suggestion
const updatedSuggestedActivity = getSuggestion(newStudentPreferences);
console.log(`Updated suggested activity: ${updatedSuggestedActivity}`);
