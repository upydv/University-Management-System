import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';

const ClassSchedule = () => {
  const schedule = [
    { id: 1, day: "Monday", time: "09:00 AM - 10:30 AM", course: "CS101", room: "Room 101" },
    { id: 2, day: "Monday", time: "11:00 AM - 12:30 PM", course: "MATH101", room: "Room 201" },
    { id: 3, day: "Tuesday", time: "10:00 AM - 11:30 AM", course: "ENG101", room: "Room 301" },
    { id: 4, day: "Wednesday", time: "09:00 AM - 10:30 AM", course: "CS101", room: "Room 101" },
    { id: 5, day: "Thursday", time: "02:00 PM - 03:30 PM", course: "PHYS101", room: "Room 401" },
  ];

  return (
    <Container className="py-5">
      <h1 className="mb-4">Class Schedule</h1>
      <Card>
        <Card.Body>
          <Card.Title>Your Weekly Schedule</Card.Title>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Course</th>
                <th>Room</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((class_) => (
                <tr key={class_.id}>
                  <td>{class_.day}</td>
                  <td>{class_.time}</td>
                  <td>{class_.course}</td>
                  <td>{class_.room}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ClassSchedule;