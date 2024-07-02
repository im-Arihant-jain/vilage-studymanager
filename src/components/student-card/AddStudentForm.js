// src/components/AddStudentForm.js
import React, { useState } from "react";
import "./AddStudentForm.css";

const AddStudentForm = ({ addStudent }) => {
  const [student, setStudent] = useState({
    name: "",
    profilePic: "",
    studentClass: "",
    marks: {
      literacy: "",
      numeracy: "",
      socialEmotional: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleMarksChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevState) => ({
      ...prevState,
      marks: {
        ...prevState.marks,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(student);
    setStudent({
      name: "",
      profilePic: "",
      studentClass: "",
      marks: {
        literacy: "",
        numeracy: "",
        socialEmotional: "",
      },
    });
  };

  return (
    <form className="add-student-form" onSubmit={handleSubmit}>
      <h2>Add Student</h2>
      <input
        type="text"
        name="name"
        value={student.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="studentRollno"
        value={student.studentRollno}
        onChange={handleChange}
        placeholder="Roll no."
        required
      />
      <input
        type="text"
        name="studentClass"
        value={student.studentClass}
        onChange={handleChange}
        placeholder="Class"
        required
      />
      <input
        type="text"
        name="profilePic"
        value={student.profilePic}
        onChange={handleChange}
        placeholder="Profile Picture URL"
      />
      <div className="btn">
        <button type="submit">Add Student</button>
      </div>
    </form>
  );
};

export default AddStudentForm;
