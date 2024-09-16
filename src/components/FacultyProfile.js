import React, { useEffect, useState } from 'react';
import { Container, Card, Row, Col, Image } from 'react-bootstrap';

const FacultyProfile = () => {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    // Generate a random seed for the Lorem Picsum URL
    const randomSeed = Math.floor(Math.random() * 1000);
    setAvatarUrl(`https://randomuser.me/api/portraits/men/${randomSeed % 100}.jpg`);
  }, []);
  const faculty = {
    name: "Dr. Jane Smith",
    id: "F12345",
    department: "Computer Science",
    position: "Associate Professor",
    email: "jane.smith@example.com",
    office: "Room 301, Science Building",
    avatar: avatarUrl
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Faculty Profile</h1>
      <Card>
        <Card.Body>
          <Row>
            <Col md={3} className="text-center mb-3 mb-md-0">
              <Image src={faculty.avatar} roundedCircle fluid />
            </Col>
            <Col md={9}>
              <h2>{faculty.name}</h2>
              <p className="text-muted">Faculty ID: {faculty.id}</p>
              <Row>
                <Col sm={6}>
                  <p><strong>Department:</strong> {faculty.department}</p>
                  <p><strong>Position:</strong> {faculty.position}</p>
                </Col>
                <Col sm={6}>
                  <p><strong>Email:</strong> {faculty.email}</p>
                  <p><strong>Office:</strong> {faculty.office}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default FacultyProfile;