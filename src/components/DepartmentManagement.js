import React, { useState } from 'react';
import { Container, Card, Form, Button, Table } from 'react-bootstrap';
import { FaBuilding, FaUserTie, FaBook } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DepartmentManagement = () => {
  const [departments, setDepartments] = useState([
    { id: 1, name: "Computer Science", head: "Dr. John Doe", courses: 15 },
    { id: 2, name: "Mathematics", head: "Dr. Jane Smith", courses: 12 },
    { id: 3, name: "Physics", head: "Dr. Robert Brown", courses: 10 },
  ]);
  const [newDepartment, setNewDepartment] = useState({ name: '', head: '' });

  const handleAddDepartment = (e) => {
    e.preventDefault();
    if (!newDepartment.name || !newDepartment.head) {
      toast.error("Please fill in all fields.");
      return;
    }
    setDepartments([...departments, { ...newDepartment, id: departments.length + 1, courses: 0 }]);
    setNewDepartment({ name: '', head: '' });
    toast.success("New department added successfully.");
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Department Management</h1>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Add New Department</Card.Title>
          <Form onSubmit={handleAddDepartment}>
            <Form.Group className="mb-3">
              <Form.Label>Department Name</Form.Label>
              <Form.Control 
                type="text"
                value={newDepartment.name}
                onChange={(e) => setNewDepartment({...newDepartment, name: e.target.value})}
                placeholder="e.g., Biology"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Department Head</Form.Label>
              <Form.Control 
                type="text"
                value={newDepartment.head}
                onChange={(e) => setNewDepartment({...newDepartment, head: e.target.value})}
                placeholder="e.g., Dr. Sarah Johnson"
              />
            </Form.Group>
            <Button type="submit" variant="primary">Add Department</Button>
          </Form>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Departments</Card.Title>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Department Name</th>
                <th>Department Head</th>
                <th>Number of Courses</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((dept) => (
                <tr key={dept.id}>
                  <td><FaBuilding className="me-2" />{dept.name}</td>
                  <td><FaUserTie className="me-2" />{dept.head}</td>
                  <td><FaBook className="me-2" />{dept.courses}</td>
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

export default DepartmentManagement;