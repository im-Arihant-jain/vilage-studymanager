const { findById } = require('../models/Fellow');
const Student =  require( '../models/Student'); // Ensure this path is correct

const mongoose = require('mongoose');
const addStudent = async (req, res) => {
    try {
        const { fellow, name, rollnum, standard } = req.body;

        if (!fellow) {
            return res.status(400).json({
                success: false,
                message: 'Invalid fellow ID',
            });
        }

        const student = new Student({
            fellow ,
            name,
            rollnum,
            standard
        });

        await student.save();
        res.status(200).json({
            success: true,
            student,
        });
    } catch (err) {
        console.error('Error during adding student:', err);
        res.status(500).json({
            success: false,
            message: 'An error occurred during adding the student',
            error: err.message || 'Unknown error',
        });
    }
};

const getStudentbyClass = async (req, res) => {
    try {
        const { standard, fellowid } = req.body;

        if (!standard) {
            return res.status(400).json({
                success: false,
                message: 'Standard is required to get students',
            });
        }

        const students = await Student.find({ standard, fellowid });

        if (students.length === 0) {
            return res.status(404).json({
                success: false,
                message: 'No students found for the given standard',
            });
        }

        res.status(200).json({
            success: true,
            students,
        });
    } catch (err) {
        console.error('Error during fetching students:', err);
        res.status(500).json({
            success: false,
            message: 'An error occurred during fetching students',
            error: err.message || 'Unknown error', 
        });
    }
};  
const getStudent = async (req,res) =>{
  try{
    console.log("get-student");
    const {_id} = req.body;
    const student = await Student.findById({_id});
    console.log(student);
    res.status(200).json(student);
  }catch(err){
    console.error('Error during fetching students:', err);
      res.status(500).json({
        success: false,
        message: 'An error occurred during fetching students',
        error: err.message || 'Unknown error',
      });   // meri sister to kh rhi hai aisa kuch nhi hota girls really like it when they are 
  }
}
const getAllStudents = async (req, res) => {
    try {
      const { fellowid } = req.body;
      console.log('Fellow ID from request:', fellowid);
      if (!fellowid) {
        return res.status(400).json({
          success: false,
          message: 'Fellow ID is required to get students',
        });
      }
  
      // Correctly querying by 'fellow' field in the database
      const students = await Student.find({ fellow: fellowid });
  
      if (students.length === 0) {
        return res.status(404).json({
          success: false,
          message: 'No students found for the given fellow ID',
        });
      }
  
      res.status(200).json({
        success: true,
        students,
      });
    } catch (err) {
      console.error('Error during fetching students:', err);
      res.status(500).json({
        success: false,
        message: 'An error occurred during fetching students',
        error: err.message || 'Unknown error',
      });
    }
  };
const updateMarks =  async (req, res) => {
        const { id, month, score ,type } = req.body;
        console.log(req.body);
        try {
          const student = await Student.findById(id);
          if (!student) {
            return res.status(404).json({ success: false, message: 'Student not found' });
          }
      
          // Update the monthly score
          let existingMonth;
          if(type === "soc"){
            existingMonth = student.monthly_scores.find(m => m.month === month);
          }
          else if(type === "num"){
            existingMonth = student.monthly_scoresnum.find(m => m.month === month);
          }
          else if(type === "lit"){
            existingMonth = student.monthly_scoreslit.find(m => m.month === month);
          }
           
          if (existingMonth) {
            existingMonth.score = score;
          } else {
            
            if(type === "soc"){
              student.monthly_scores.push({ month, score });
            }
            else if(type === "num"){
              student.monthly_scoresnum.push({ month, score });
            }
            else if(type === "lit"){
              student.monthly_scoreslit.push({ month, score });
            }
          }
      
          await student.save();
          const upstudent = await Student.findById(id);
          console.log(upstudent);
          res.status(200).json({ success: true, student });
        } catch (error) {
          console.error('Error updating monthly score:', error);
          res.status(500).json({ success: false, message: 'Server error' });
        }
      }
       

const editStudent = async (req, res) => {   // await transactionModel.findOneAndUpdate({_id:req.body.transactionId},req.body.payload);
    try{ 
        console.log("edit route called");   // how to have communication skills like yours
     //   const prev = await Student.findOne({_id:req.body.id});
        //  console.log(prev);  
        console.log(req.body.payload);
        await Student.findOneAndUpdate({_id:req.body.id},req.body.payload);
        const updated = await Student.findOne({_id:req.body.id});
        console.log("updated entry");
          console.log(updated);
        // console.log(updated);
        // its a love stor
        res.status(200).send('edit-successfull');
    }catch(error){        
        console.error('Error during getting all transactions:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred during getting all transactions',
            error: error.message || 'Unknown error',
        });
    }
};
module.exports ={ addStudent, editStudent, getStudentbyClass, getAllStudents ,updateMarks ,getStudent };
