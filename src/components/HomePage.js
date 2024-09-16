import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FaGraduationCap, FaBook, FaUsers, FaChalkboardTeacher } from 'react-icons/fa';

// Reusable InfoCard component
const InfoCard = ({ icon, title, text, bgColor, linkTo }) => (
  <Link to={linkTo} style={{ textDecoration: 'none' }}>
    <Card
      className="mb-4 text-center"
      style={{
        backgroundColor: bgColor,
        border: 'none',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s ease',
        color: 'inherit',
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-5px)')}
      onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
    >
      <Card.Body>
        {icon}
        <Card.Title className="font-weight-bold">{title}</Card.Title>
        <Card.Text className="text-muted">{text}</Card.Text>
      </Card.Body>
    </Card>
  </Link>
);

const HomePage = () => {
  return (
    <Container className="py-5">
      <Row className="text-center mb-5">
        <Col>
          <h1 className="display-3 font-weight-bold mb-4" style={{ color: '#343a40' }}>
            Welcome to Our College Management System
          </h1>
          <p className="lead text-muted mb-4" style={{ maxWidth: '600px', margin: '0 auto' }}>
            Streamline your educational journey with our comprehensive management solution designed for both students and faculty.
          </p>
          <Button
            as={Link}
            to="/login"
            variant="primary"
            size="lg"
            style={{
              background: 'linear-gradient(135deg, #6a82fb, #fc5c7d)',
              border: 'none',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            Get Started
          </Button>
        </Col>
      </Row>

      <Row>
        <Col xs={12} sm={6} md={3}>
          <InfoCard
            icon={<FaGraduationCap className="display-4 mb-3 text-primary" />}
            title="Student Management"
            text="Efficiently manage student records, admissions, and academic progress."
            bgColor="#f8f9fa"
            linkTo="/student-profile"
          />
        </Col>
        <Col xs={12} sm={6} md={3}>
          <InfoCard
            icon={<FaBook className="display-4 mb-3 text-success" />}
            title="Course Management"
            text="Organize and track courses, schedules, and curriculum details with ease."
            bgColor="#f1f3f5"
            linkTo="/course-management"
          />
        </Col>
        <Col xs={12} sm={6} md={3}>
          <InfoCard
            icon={<FaUsers className="display-4 mb-3 text-info" />}
            title="Faculty Management"
            text="Streamline faculty information, assignments, and performance evaluations."
            bgColor="#f8f9fa"
            linkTo="/faculty-profile"
          />
        </Col>
        <Col xs={12} sm={6} md={3}>
          <InfoCard
            icon={<FaChalkboardTeacher className="display-4 mb-3 text-warning" />}
            title="Class Scheduling"
            text="Effortlessly create and manage class schedules for students and faculty."
            bgColor="#f1f3f5"
            linkTo="/class-schedule"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
