import React, { useState } from "react";
import axios from "axios";
import "./AddFellow.css";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

const AddFellow = () => {
  const [fellow, setFellow] = useState({
    name: "",
    email: "",
    password: "",
    profilepic: "", // raam kaa hak hai   // avantika // palak buddhiraja // avantikaa and hence ayodhya and hence its always good to make it count and hence
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFellow((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/v1/users/register", fellow);
      if (response.status === 201) {
        // Navigate to another page or show a success message
        console.log("Fellow added successfully", response.data);
        message.success("its done and dusted!!");
        //navigate('/path-to-navigate'); // Replace with the path to navigate after success
      }
    } catch (error) {
      console.error("Error adding fellow", error);
      // Handle error, e.g., show an error message
    }
    setFellow({
      name: "",
      email: "",
      password: "",
      profilePic: "",
    });
  };

  return (
    <div className="add-fellow-container">
      <form className="add-fellow-form" onSubmit={handleSubmit}>
        <h2>Add Fellow</h2>
        <input
          type="text"
          name="name"
          value={fellow.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="email"
          name="email"
          value={fellow.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={fellow.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <input
          type="text"
          name="profilePic"
          value={fellow.profilePic}
          onChange={handleChange}
          placeholder="Profile Picture URL"
        />
        <div className="btn">
          <button type="submit">Add Fellow</button>
        </div>
      </form>
    </div>
  );
};

export default AddFellow;
