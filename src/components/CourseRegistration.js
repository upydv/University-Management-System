import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CourseRegistration = () => {
  const [courses, setCourses] = useState([
    { id: 1, code: "CS101", name: "Introduction to Programming", selected: false },
    { id: 2, code: "CS201", name: "Data Structures", selected: false },
    { id: 3, code: "CS301", name: "Algorithms", selected: false },
    { id: 4, code: "CS401", name: "Artificial Intelligence", selected: false },
  ]);

  const handleCourseToggle = (id) => {
    setCourses(courses.map(course => 
      course.id === id ? { ...course, selected: !course.selected } : course
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedCourses = courses.filter(course => course.selected);
    toast.success(`You have registered for ${selectedCourses.length} courses.`);
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Course Registration</h1>
      <Card>
        <Card.Body>
          <Card.Title>Available Courses</Card.Title>
          <Form onSubmit={handleSubmit}>
            {courses.map((course) => (
              <Form.Check 
                key={course.id}
                type="checkbox"
                id={`course-${course.id}`}
                label={`${course.code} - ${course.name}`}
                checked={course.selected}
                onChange={() => handleCourseToggle(course.id)}
                className="mb-2"
              />
            ))}
            <Button type="submit" className="mt-3">Register for Selected Courses</Button>
          </Form>
        </Card.Body>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default CourseRegistration;