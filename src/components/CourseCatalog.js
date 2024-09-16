import React, { useState } from 'react';
import { Container, Card, Form, Table } from 'react-bootstrap';

const CourseCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const courses = [
    { id: 1, code: "CS101", name: "Introduction to Programming", credits: 3, department: "Computer Science" },
    { id: 2, code: "CS201", name: "Data Structures", credits: 4, department: "Computer Science" },
    { id: 3, code: "MATH101", name: "Calculus I", credits: 4, department: "Mathematics" },
    { id: 4, code: "ENG101", name: "English Composition", credits: 3, department: "English" },
    { id: 5, code: "PHYS101", name: "Physics I", credits: 4, department: "Physics" },
  ];

  const filteredCourses = courses.filter(course => 
    course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.code.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="py-5">
      <h1 className="mb-4">Course Catalog</h1>
      <Card>
        <Card.Body>
          <Card.Title>Available Courses</Card.Title>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Form.Group>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Credits</th>
                <th>Department</th>
              </tr>
            </thead>
            <tbody>
              {filteredCourses.map((course) => (
                <tr key={course.id}>
                  <td>{course.code}</td>
                  <td>{course.name}</td>
                  <td>{course.credits}</td>
                  <td>{course.department}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default CourseCatalog;