const mongoose = require('mongoose');
const { Schema } = mongoose;

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rollnum: {
        type: Number,
        required: true
    },
    standard: {
        type: Number,
        required: true,
        enum: [1, 2, 3, 4, 5]
    },
    current_division: {
        type: String,
        default: 'A',
        enum: ['A', 'B', 'C', 'D']
    },
    attendance: {
        type: Number,
        default: 0
    },
    monthly_score: {
        type: Number, // or appropriate type based on your schema
        default: 0 // set a default value if it's an array
    },
    monthly_scores: [{
        month: {
            type: String,
            enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            required: true
        },
        score: {
            type: Number,
            required: true
        }
    }],
    activity_performed: {
        type: String,
        default: 'None',
        enum: ['Social', 'group-diss', 'Active-part', 'Other', 'None','A']
    },
    monthly_scoreslit: [{
        month: {
            type: String,
            enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            required: true
        },
        score: {
            type: Number,
            required: true
        }
    }],
    monthly_scoresnum: [{
        month: {
            type: String,
            enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            required: true
        },
        score: {
            type: Number,
            required: true
        }
    }],
    fellow: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
