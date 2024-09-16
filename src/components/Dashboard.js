import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { FaUserGraduate, FaBook, FaChalkboardTeacher, FaUniversity } from 'react-icons/fa';

const Dashboard = () => {
  const data = [
    { name: 'Students', total: 1234, color: '#007bff' },
    { name: 'Courses', total: 56, color: '#28a745' },
    { name: 'Faculty', total: 78, color: '#17a2b8' },
    { name: 'Departments', total: 12, color: '#ffc107' },
  ];

  const icons = {
    Students: <FaUserGraduate />,
    Courses: <FaBook />,
    Faculty: <FaChalkboardTeacher />,
    Departments: <FaUniversity />,
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Dashboard</h1>
      <Row className="mb-4">
        {data.map((item) => (
          <Col key={item.name} md={3} className="mb-3">
            <Card className="h-100">
              <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                <div className="display-4 mb-3" style={{ color: item.color }}>{icons[item.name]}</div>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text className="h2">{item.total}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Card>
        <Card.Body>
          <Card.Title>Overview</Card.Title>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="total" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Dashboard;