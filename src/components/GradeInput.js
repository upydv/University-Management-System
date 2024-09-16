import React, { useState } from 'react';
import { Container, Card, Form, Button, Table } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GradeInput = () => {
  const [selectedCourse, setSelectedCourse] = useState('');
  const [students, setStudents] = useState([
    { id: 1, name: "Alice Johnson", grade: "" },
    { id: 2, name: "Bob Smith", grade: "" },
    { id: 3, name: "Charlie Brown", grade: "" },
  ]);

  const handleGradeChange = (id, grade) => {
    setStudents(students.map(student => 
      student.id === id ? { ...student, grade } : student
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedCourse) {
      toast.error("Please select a course.");
      return;
    }
    // Here you would typically send the grades to a server
    toast.success(`Grades submitted for ${selectedCourse}.`);
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Grade Input</h1>
      <Card>
        <Card.Body>
          <Card.Title>Enter Student Grades</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Course</Form.Label>
              <Form.Select 
                value={selectedCourse} 
                onChange={(e) => setSelectedCourse(e.target.value)}
                required
              >
                <option value="">Select a course</option>
                <option value="CS101">CS101 - Introduction to Programming</option>
                <option value="CS201">CS201 - Data Structures</option>
                <option value="MATH101">MATH101 - Calculus I</option>
              </Form.Select>
            </Form.Group>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Student Name</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id}>
                    <td>{student.name}</td>
                    <td>
                      <Form.Control 
                        type="text" 
                        value={student.grade}
                        onChange={(e) => handleGradeChange(student.id, e.target.value)}
                        placeholder="Enter grade"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Button type="submit">Submit Grades</Button>
          </Form>
        </Card.Body>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default GradeInput;