
import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Image } from 'react-bootstrap';

const StudentProfile = () => {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    // Generate a random seed for the Lorem Picsum URL
    const randomSeed = Math.floor(Math.random() * 1000);
    setAvatarUrl(`https://randomuser.me/api/portraits/men/${randomSeed % 100}.jpg`);
  }, []);

  const student = {
    name: "John Doe",
    id: "12345",
    major: "Computer Science",
    gpa: "3.8",
    enrollmentYear: "2020",
    email: "john.doe@example.com",
    avatar: avatarUrl
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Student Profile</h1>
      <Card>
        <Card.Body>
          <Row>
            <Col md={3} className="text-center mb-3 mb-md-0">
              <Image src={student.avatar} roundedCircle fluid alt="Student Avatar" />
            </Col>
            <Col md={9}>
              <h2>{student.name}</h2>
              <p className="text-muted">Student ID: {student.id}</p>
              <Row>
                <Col sm={6}>
                  <p><strong>Major:</strong> {student.major}</p>
                  <p><strong>GPA:</strong> {student.gpa}</p>
                </Col>
                <Col sm={6}>
                  <p><strong>Enrollment Year:</strong> {student.enrollmentYear}</p>
                  <p><strong>Email:</strong> {student.email}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default StudentProfile;
