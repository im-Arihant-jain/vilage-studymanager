import React, { useState } from 'react';
import { Select, InputNumber, Button } from 'antd';

const { Option } = Select;

const MonthlyScoreEditor = ({ record, onSave ,type}) => {
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [score, setScore] = useState(null);

  const handleMonthChange = (value) => {
    setSelectedMonth(value);
  };

  const handleScoreChange = (value) => {
    setScore(value);
  };

  const saveScore = () => {
    console.log(record);// anuv
    if (selectedMonth && score !== null) {
      onSave(record._id, selectedMonth, score ,type);
    } else {
      console.error("Month and score must be selected");
    }
  };

  return (
    <div>
      <Select placeholder="Select month" onChange={handleMonthChange} style={{ width: 120 }}>
        {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(month => (
          <Option key={month} value={month}>{month}</Option>
        ))}
      </Select>
      <InputNumber placeholder="Score" onChange={handleScoreChange} style={{ marginLeft: 8 }} />
      <Button onClick={saveScore} style={{ marginLeft: 8 }}>Save</Button>
    </div>
  );
};

export default MonthlyScoreEditor;
