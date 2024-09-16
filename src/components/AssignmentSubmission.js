import React, { useState } from 'react';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AssignmentSubmission = () => {
  const [course, setCourse] = useState('');
  const [file, setFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!course || !file) {
      toast.error("Please select a course and upload a file.");
      return;
    }
    // Here you would typically upload the file to a server
    toast.success(`Assignment submitted for ${course}.`);
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Assignment Submission</h1>
      <Card>
        <Card.Body>
          <Card.Title>Submit Your Assignment</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Course</Form.Label>
              <Form.Select 
                value={course} 
                onChange={(e) => setCourse(e.target.value)}
                required
              >
                <option value="">Select a course</option>
                <option value="CS101">CS101 - Introduction to Programming</option>
                <option value="CS201">CS201 - Data Structures</option>
                <option value="MATH101">MATH101 - Calculus I</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Assignment File</Form.Label>
              <Form.Control 
                type="file" 
                onChange={(e) => setFile(e.target.files[0])} 
                required
              />
            </Form.Group>
            <Button type="submit">Submit Assignment</Button>
          </Form>
        </Card.Body>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default AssignmentSubmission;