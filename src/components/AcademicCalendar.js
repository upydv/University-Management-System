import React, { useState } from 'react';
import { Container, Card, Table, Badge } from 'react-bootstrap';
import { FaCalendarAlt, FaGraduationCap, FaBook } from 'react-icons/fa';

const AcademicCalendar = () => {
  const [events] = useState([
    { id: 1, date: '2023-09-01', title: 'Fall Semester Begins', type: 'semester' },
    { id: 2, date: '2023-10-15', title: 'Midterm Exams', type: 'exam' },
    { id: 3, date: '2023-11-25', title: 'Thanksgiving Break', type: 'holiday' },
    { id: 4, date: '2023-12-15', title: 'Fall Semester Ends', type: 'semester' },
    { id: 5, date: '2024-01-15', title: 'Spring Semester Begins', type: 'semester' },
  ]);

  const getEventBadge = (type) => {
    switch (type) {
      case 'semester':
        return <Badge bg="primary"><FaCalendarAlt className="me-1" /> Semester</Badge>;
      case 'exam':
        return <Badge bg="warning"><FaBook className="me-1" /> Exam</Badge>;
      case 'holiday':
        return <Badge bg="success"><FaGraduationCap className="me-1" /> Holiday</Badge>;
      default:
        return <Badge bg="secondary">Other</Badge>;
    }
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Academic Calendar</h1>
      <Card>
        <Card.Body>
          <Card.Title>Academic Year 2023-2024</Card.Title>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Date</th>
                <th>Event</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {events.map((event) => (
                <tr key={event.id}>
                  <td>{event.date}</td>
                  <td>{event.title}</td>
                  <td>{getEventBadge(event.type)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AcademicCalendar;