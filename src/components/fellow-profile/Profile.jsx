// src/components/Profile.js
import React , {useEffect, useState} from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';
import './Profile.css';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);



const Profile = () => {
  const [dataset,setData] = useState('');
  const [loading, setLoading] = useState(true);
  const profileData = {
    name: !loading && dataset.name ,
    profilePic: !loading && dataset.profilepic,
    email: !loading && dataset.email,
    performance: {
      labels: [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
      ],   
      
      datasets: [
        {
          label: 'Performance',
          data: [65, 59, 80, 81, 56, 55, 40, 70, 75, 82, 90, 88],
          fill: false,
          backgroundColor: 'rgb(75, 192, 192)',
          borderColor: 'rgba(75, 192, 192, 0.2)',
        },
      ],
    },
    
  };
  useEffect(() => {
    const fetchFellowData = async () => {
      try {
        setLoading(true);
        const fellowid = JSON.parse(localStorage.getItem('userId'));
        // setLoading(true);
        console.log(fellowid);
        const response = await axios.post(`http://localhost:8000/api/v1/student/getfellow`,{_id:fellowid});
        // if (!response.ok) {
        //   throw new Error(`Error fetching data: ${response.statusText}`);
        // }
        const data = response.data;
        console.log(data);
        setData(data);

        setLoading(false);
        // setStudentData(data);
        // console.log(studentData.name);
      } catch (error) {
        console.log(error.message);
      } finally {
        // setLoading(false);
      }
    };
      fetchFellowData();  // kisi ko to bheja hoga tumne and hence its always good to make it count ssdsdsfcaklk 
    
  }, [ ]);
  return (
    <div className="profile-container  ">
      <div className="profile-header  ">
        {/* <img className="profile-pic w-24 h-24 rounded-full" src={profileData.profilePic} alt="Profile" /> */}
        <h2 className="profile-name   ">{profileData.name}</h2>
        <p className="profile-email  ">{profileData.email}</p>
      </div>
      <div className="profile-chart mt-6 w-full">
        <Line data={profileData.performance} />
      </div>
    </div>
  );
};

export default Profile;
