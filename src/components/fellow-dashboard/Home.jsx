import React, { useState, useEffect } from 'react';
import {BarChartOutlined , DeleteOutlined, EditOutlined, UserAddOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, Select, message, Table, Modal, Form, Input } from 'antd';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import MonthlyScoreEditor from './MonthlyScoreeditor';

const { Header } = Layout;

const Home = () => {
  const navigate = useNavigate();
  const dummyData = [
    // Your dummy data
  ];

  const [students, setStudents] = useState(dummyData);
  const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState(false);
  const [modal, setModal] = useState(false);
  const [editable, setEditable] = useState(null);

  const getAllStudents = async () => {
    setLoading(true);
    try {
      const fellowid = JSON.parse(localStorage.getItem('userId'));
      if (!fellowid) {
        message.error('Fellow ID is required to get students');
        setLoading(false);
        return;
      }

      const response = await axios.post('http://localhost:8000/api/v1/student/get-allStudents', { fellowid });
      const arr = response.data.students.map(student => ({
        ...student,
        key: student._id
      }));

      setStudents(arr);
      message.success('Students fetched successfully');
    } catch (error) {
      console.error('Error fetching students:', error);
      message.error('An error occurred during fetching students');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  const handleAddUser = async (values) => {
    try {
      const fellow = JSON.parse(localStorage.getItem('userId'));
      if (!fellow) {
        message.error('Fellow ID is required to add user');
        return;
      }

      const value = {
        fellow,
        ...values
      };

      if (!editable) {
        await axios.post('http://localhost:8000/api/v1/student/add-student', value);
        message.success('Entry added');
      } else {
        console.log(values);
        const payload = values;
        const response = await axios.post('http://localhost:8000/api/v1/student/edit-student', {
          id: editable._id,
          payload
        });
        message.success('Entry updated');
        setEditable(null);
      }

      getAllStudents();
    } catch (error) {
      console.error('Error adding entry:', error);
      message.error('Failed to add entry');
    }
  };
  const handleNavigation = (record)=>{
    console.log('Delete clicked for:', record);
    navigate(`/student-profile/${record._id}`);
  }
  const handleSaveMonthlyScore = async (id, month, score,type) => {
    try {
      console.log(id, month, score);
      await axios.post('http://localhost:8000/api/v1/student/update-monthly-score', { id, month, score ,type});
      message.success('Monthly score updated');
      getAllStudents();
    } catch (error) {
      console.error('Error updating monthly score:', error);
      message.error('Failed to update monthly score');
    }
  };
  const handleSaveMonthlyScore2 = ()=>{
    console.log("monthly score lit")
  }
  const handleSaveMonthlyScore3 = ()=>{
    console.log("monthly score num")
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name'
    },
    {
      title: 'Standard',
      dataIndex: 'standard'
    },
    {
      title: 'Current Division',
      dataIndex: 'current_division'
    },
    {
      title: 'Attendance',
      dataIndex: 'attendance'
    },
    // {
    //   title: 'Month score',
    //   dataIndex: 'monthly_score'
    // },
    {
      title: 'Monthly Score(SOCIAL)',
      dataIndex: 'monthly_scores',
      render: (text, record) => <MonthlyScoreEditor type = "soc" record={record} onSave={handleSaveMonthlyScore} />
    },
    {
      title: 'Monthly Score(LITRETURE)',
      dataIndex: 'monthly_scoreslit',
      render: (text, record) => <MonthlyScoreEditor type = "lit" record={record} onSave={handleSaveMonthlyScore} />
    },
    {
      title: 'Monthly Score(NUMERACY)',
      dataIndex: 'monthly_scoresnum',
      render: (text, record) => <MonthlyScoreEditor type = "num" record={record} onSave={handleSaveMonthlyScore} />
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      render: (text, record) => (
        <div>
          <EditOutlined onClick={() => {
            setModal(true);
            setEditable(record);
          }} />
          <BarChartOutlined className='mx-2' onClick={() => handleNavigation(record)} />
        </div>
      )
    }
  ];

  return (
    <>
      <Header className="header">
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" onClick={() => setStudent(true)} icon={<UserAddOutlined />}>Add Student</Menu.Item>
        </Menu>
        <span>"          "</span>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserAddOutlined />}>Get AI-Social Activity</Menu.Item>
        </Menu>
      </Header> 
      <Table bordered columns={columns} dataSource={students} rowKey="key" loading={loading} />
      {student && (
        <Modal visible={student} title="Add Student" onCancel={() => setStudent(false)} footer={null}>
          <Form layout='vertical' onFinish={handleAddUser}>
            <Form.Item label='Name' name='name'>
              <Input type="text" />
            </Form.Item>
            <Form.Item label='RollNo.' name='rollnum'>
              <Input type="number" />
            </Form.Item>
            <Form.Item label='Standard' name='standard'>
              <Select>
                {[1, 2, 3, 4, 5].map(standard => (
                  <Select.Option key={standard} value={standard}>{standard}</Select.Option>
                ))}
              </Select>
            </Form.Item>
            <div>
              <Button type='primary' htmlType='submit'>Save</Button>
            </div>
          </Form>
        </Modal>
      )}
      {modal && (
        <Modal visible={modal} title="Edit Student" onCancel={() => setModal(false)} footer={null}>
          <Form layout="vertical" onFinish={handleAddUser}>
            <Form.Item label="Current Division" name="current_division" initialValue={editable?.current_division}>
              <Select>
                {['Social', 'group-diss', 'Active-part', 'Other', 'None'].map(division => (
                  <Select.Option key={division} value={division}>{division}</Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item label="Attendance" name="attendance" initialValue={editable?.attendance}>
              <Input type="number" />
            </Form.Item>
            {/* <Form.Item label="Monthly Score" name="monthly_score" initialValue={editable?.attendance}>
              <Input type="number" />
            </Form.Item> */}
            {/* <Form.Item label="Monthly Score" name="monthly_scores">
              <MonthlyScoreEditor record={editable} onSave={handleSaveMonthlyScore} />
            </Form.Item> */}
            <Form.Item label="Quarter Score Number" name="quarter_scorenum" initialValue={editable?.quarter_scorenum}>
              <Input type="number" />
            </Form.Item>
            <Form.Item label="Quarter Score Literacy" name="quarter_scorelit" initialValue={editable?.quarter_scorelit}>
              <Input type="number" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      )}
    </>
  );
};

export default Home;
