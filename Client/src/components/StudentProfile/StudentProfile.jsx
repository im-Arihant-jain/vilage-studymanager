
import React,{useState,useEffect} from 'react';
import PerformanceGraph from './PerformanceGraph';
import './StudentProfile.css'; // Assuming you have a CSS file for styling
import { useParams } from 'react-router-dom';
 import axios from 'axios';
  
// Random data for demonstration
const student = {
  name: 'John Doe',
  profilePic: 'https://via.placeholder.com/150',
  literacy: 85,
  numeracy: 90,
  socialEmotional: 80,
  division: 'Class 5A',
  attendance: '92%',
  category: 'A',
};

const studentMonthlyPerformanceData = [65, 59, 80, 81, 56, 55, 40, 70, 75, 90, 85, 95];

    // amount and hence its always good to make it and 
const StudentProfile = () => {
  const { userId } = useParams();
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { name, profilePic, literacy, numeracy, socialEmotional, division, attendance, category } = student;
  const [num,setNum] = useState(false);
  const [lit,setLit] = useState(false);
  const [soc,setSoc] = useState(true);

  //const [data,setData] = useState(null); and hence its always good to become 8:30 and hence to meri -10 ho gyi
  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        setLoading(true);
        console.log(userId);
        const response = await axios.post(`http://localhost:8000/api/v1/student/getstudent`,{_id:userId});
        // if (!response.ok) {
        //   throw new Error(`Error fetching data: ${response.statusText}`);
        // }
        const data = response.data;
        //console.log(data);
        setStudentData(data);
        console.log(studentData.name);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

     if(userId){

      fetchStudentData();
     }
    
  }, [userId]);
  const studentMonthlyPerformanceData = [65, 59, 80, 81, 56, 55, 40, 70, 75, 90, 85, 95];
  const studentMonthlyPerformanceDataLit = [65, 59, 80, 81, 56, 55, 40, 70, 75, 90, 85, 95];
  const studentMonthlyPerformanceDataNum = [65, 59, 80, 81, 56, 55, 40, 70, 75, 90, 85, 95];
  
// Mapping months to their respective indices (assuming January starts at index 0)
const monthIndices = {
  'January': 0,
  'February': 1,
  'March': 2,
  'April': 3,
  'May': 4,
  'June': 5,
  'July': 6,
  'August': 7,
  'September': 8,
  'October': 9,
  'November': 10,
  'December': 11
};

// Updating studentMonthlyPerformanceData with the scores from monthly_scores
!loading && studentData.monthly_scores.forEach(entry => {
  const monthIndex = monthIndices[entry.month];
  if (monthIndex !== undefined) {
    studentMonthlyPerformanceData[monthIndex] = entry.score;
  }
});
!loading && studentData.monthly_scoreslit.forEach(entry => {
  const monthIndex = monthIndices[entry.month];
  if (monthIndex !== undefined) {
    studentMonthlyPerformanceDataLit[monthIndex] = entry.score;
  }
});
!loading && studentData.monthly_scoresnum.forEach(entry => {
  const monthIndex = monthIndices[entry.month];
  if (monthIndex !== undefined) {
    studentMonthlyPerformanceDataNum[monthIndex] = entry.score;
  }
});
const studentQuarterlyPerformanceData = [
  (studentMonthlyPerformanceData[0] + studentMonthlyPerformanceData[1] + studentMonthlyPerformanceData[2]) / 3,
  (studentMonthlyPerformanceData[3] + studentMonthlyPerformanceData[4] + studentMonthlyPerformanceData[5]) / 3,
  (studentMonthlyPerformanceData[6] + studentMonthlyPerformanceData[7] + studentMonthlyPerformanceData[8]) / 3,
  (studentMonthlyPerformanceData[9] + studentMonthlyPerformanceData[10] + studentMonthlyPerformanceData[11]) / 3,
];
const studentQuarterlyPerformanceDataLit = [
  (studentMonthlyPerformanceDataLit[0] + studentMonthlyPerformanceDataLit[1] + studentMonthlyPerformanceDataLit[2]) / 3,
  (studentMonthlyPerformanceDataLit[3] + studentMonthlyPerformanceDataLit[4] + studentMonthlyPerformanceDataLit[5]) / 3,
  (studentMonthlyPerformanceDataLit[6] + studentMonthlyPerformanceDataLit[7] + studentMonthlyPerformanceDataLit[8]) / 3,
  (studentMonthlyPerformanceDataLit[9] + studentMonthlyPerformanceDataLit[10] + studentMonthlyPerformanceDataLit[11]) / 3,
];

const studentQuarterlyPerformanceDataNum = [
  (studentMonthlyPerformanceDataNum[0] + studentMonthlyPerformanceDataNum[1] + studentMonthlyPerformanceDataNum[2]) / 3,
  (studentMonthlyPerformanceDataNum[3] + studentMonthlyPerformanceDataNum[4] + studentMonthlyPerformanceDataNum[5]) / 3,
  (studentMonthlyPerformanceDataNum[6] + studentMonthlyPerformanceDataNum[7] + studentMonthlyPerformanceDataNum[8]) / 3,
  (studentMonthlyPerformanceDataNum[9] + studentMonthlyPerformanceDataNum[10] + studentMonthlyPerformanceDataNum[11]) / 3,
];

  return (
    <div className="student-profile">
      <div className="profile-header">
        <img className="profile-pic" src={profilePic} alt={`${name}'s profile`} />
        <div className="profile-details">
          <h2>{!loading && studentData.name}</h2>
          <p>Division: {!loading && studentData.current_division}</p>
          <p>Attendance: {!loading && studentData.attendance}</p>
          <p>Category: {!loading && studentData.standard}</p>
        </div>
      </div>
      
      <h3>Performance Graph</h3>
      
      {soc && <PerformanceGraph
        monthlyData={studentMonthlyPerformanceData}
        quarterlyData={studentQuarterlyPerformanceData}
      />}
      {lit && <PerformanceGraph
        monthlyData={studentMonthlyPerformanceDataLit}
        quarterlyData={studentQuarterlyPerformanceDataLit}
      />}
      {num && <PerformanceGraph
        monthlyData={studentMonthlyPerformanceDataNum}
        quarterlyData={studentQuarterlyPerformanceDataNum}
      />}
      
      <div className="subject-scores">
        <h3>Subjects</h3>
        <div className='btndis'>
          <button onClick={()=>{
            setLit(true)
            setNum(false)
            setSoc(false)
          } }>Literacy</button>
          <button onClick={()=>{
            setLit(false)
            setNum(true)
            setSoc(false)
          } }>Numeracy </button>
          <button onClick={()=>{
            setLit(false)
            setNum(false)
            setSoc(true)
          } }>Social-Emotional</button>
        </div>
      </div> 
      {/* <div>
        <button>NUMERACY</button>  
        <button></button> 
        <button></button> 
      </div>    */}
    </div>
  );
};

export default StudentProfile;
