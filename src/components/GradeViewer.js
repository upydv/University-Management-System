import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';

const GradeViewer = () => {
  const grades = [
    { id: 1, course: "CS101", name: "Introduction to Programming", grade: "A" },
    { id: 2, course: "CS201", name: "Data Structures", grade: "B+" },
    { id: 3, course: "CS301", name: "Algorithms", grade: "A-" },
    { id: 4, course: "CS401", name: "Artificial Intelligence", grade: "B" },
  ];

  const calculateGPA = () => {
    const gradePoints = { 'A': 4, 'A-': 3.7, 'B+': 3.3, 'B': 3, 'B-': 2.7, 'C+': 2.3, 'C': 2 };
    const totalPoints = grades.reduce((sum, grade) => sum + gradePoints[grade.grade.replace('-', '')], 0);
    return (totalPoints / grades.length).toFixed(2);
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Grade Viewer</h1>
      <Card>
        <Card.Body>
          <Card.Title>Your Grades</Card.Title>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Course Code</th>
                <th>Course Name</th>
                <th>Grade</th>
              </tr>
            </thead>
            <tbody>
              {grades.map((grade) => (
                <tr key={grade.id}>
                  <td>{grade.course}</td>
                  <td>{grade.name}</td>
                  <td>{grade.grade}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="mt-3">
            <strong>Current GPA: {calculateGPA()}</strong>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default GradeViewer;