import React, { useState } from 'react';
import { Container, Card, Form, Button, Table } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CourseManagement = () => {
  const [courses, setCourses] = useState([
    { id: 1, code: "CS101", name: "Introduction to Programming", students: 30 },
    { id: 2, code: "CS201", name: "Data Structures", students: 25 },
  ]);
  const [newCourse, setNewCourse] = useState({ code: '', name: '' });

  const handleAddCourse = (e) => {
    e.preventDefault();
    if (!newCourse.code || !newCourse.name) {
      toast.error("Please fill in all fields.");
      return;
    }
    setCourses([...courses, { ...newCourse, id: courses.length + 1, students: 0 }]);
    setNewCourse({ code: '', name: '' });
    toast.success("New course added successfully.");
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Course Management</h1>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Add New Course</Card.Title>
          <Form onSubmit={handleAddCourse}>
            <Form.Group className="mb-3">
              <Form.Label>Course Code</Form.Label>
              <Form.Control 
                type="text"
                value={newCourse.code}
                onChange={(e) => setNewCourse({...newCourse, code: e.target.value})}
                placeholder="e.g., CS301"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Course Name</Form.Label>
              <Form.Control 
                type="text"
                value={newCourse.name}
                onChange={(e) => setNewCourse({...newCourse, name: e.target.value})}
                placeholder="e.g., Advanced Programming"
              />
            </Form.Group>
            <Button type="submit">Add Course</Button>
          </Form>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Your Courses</Card.Title>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Code</th>
                <th>Name</th>
                <th>Enrolled Students</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course) => (
                <tr key={course.id}>
                  <td>{course.code}</td>
                  <td>{course.name}</td>
                  <td>{course.students}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default CourseManagement;