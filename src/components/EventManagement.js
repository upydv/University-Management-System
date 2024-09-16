import React, { useState } from 'react';
import { Container, Card, Form, Button, ListGroup } from 'react-bootstrap';
import { FaCalendarPlus, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EventManagement = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'Orientation Day', date: '2023-09-01', time: '09:00', location: 'Main Auditorium' },
    { id: 2, title: 'Career Fair', date: '2023-10-15', time: '10:00', location: 'Student Center' },
  ]);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', time: '', location: '' });

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.date || !newEvent.time || !newEvent.location) {
      toast.error("Please fill in all fields.");
      return;
    }
    const event = {
      id: events.length + 1,
      ...newEvent,
    };
    setEvents([...events, event]);
    setNewEvent({ title: '', date: '', time: '', location: '' });
    toast.success("Event added successfully.");
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Event Management</h1>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Add New Event</Card.Title>
          <Form onSubmit={handleAddEvent}>
            <Form.Group className="mb-3">
              <Form.Label>Event Title</Form.Label>
              <Form.Control 
                type="text"
                value={newEvent.title}
                onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                placeholder="Enter event title"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control 
                type="date"
                value={newEvent.date}
                onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control 
                type="time"
                value={newEvent.time}
                onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control 
                type="text"
                value={newEvent.location}
                onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                placeholder="Enter event location"
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              <FaCalendarPlus className="me-2" />
              Add Event
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Upcoming Events</Card.Title>
          <ListGroup variant="flush">
            {events.map((event) => (
              <ListGroup.Item key={event.id}>
                <h5>{event.title}</h5>
                <p className="mb-1">
                  <FaCalendarPlus className="me-2" />
                  {event.date}
                </p>
                <p className="mb-1">
                  <FaClock className="me-2" />
                  {event.time}
                </p>
                <p className="mb-0">
                  <FaMapMarkerAlt className="me-2" />
                  {event.location}
                </p>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default EventManagement;