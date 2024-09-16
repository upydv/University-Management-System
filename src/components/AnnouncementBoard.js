import React, { useState } from 'react';
import { Container, Card, Form, Button, ListGroup } from 'react-bootstrap';
import { FaBullhorn, FaCalendar } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AnnouncementBoard = () => {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: 'Campus Closure', content: 'The campus will be closed on May 15th for maintenance.', date: '2023-05-10' },
    { id: 2, title: 'New Course Offerings', content: 'Check out our new AI and Machine Learning courses!', date: '2023-05-08' },
  ]);
  const [newAnnouncement, setNewAnnouncement] = useState({ title: '', content: '' });

  const handleAddAnnouncement = (e) => {
    e.preventDefault();
    if (!newAnnouncement.title || !newAnnouncement.content) {
      toast.error("Please fill in all fields.");
      return;
    }
    const announcement = {
      id: announcements.length + 1,
      ...newAnnouncement,
      date: new Date().toISOString().split('T')[0],
    };
    setAnnouncements([announcement, ...announcements]);
    setNewAnnouncement({ title: '', content: '' });
    toast.success("Announcement added successfully.");
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Announcement Board</h1>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Add New Announcement</Card.Title>
          <Form onSubmit={handleAddAnnouncement}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text"
                value={newAnnouncement.title}
                onChange={(e) => setNewAnnouncement({...newAnnouncement, title: e.target.value})}
                placeholder="Enter announcement title"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Content</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3}
                value={newAnnouncement.content}
                onChange={(e) => setNewAnnouncement({...newAnnouncement, content: e.target.value})}
                placeholder="Enter announcement content"
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              <FaBullhorn className="me-2" />
              Post Announcement
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Recent Announcements</Card.Title>
          <ListGroup variant="flush">
            {announcements.map((announcement) => (
              <ListGroup.Item key={announcement.id}>
                <h5>{announcement.title}</h5>
                <p>{announcement.content}</p>
                <small className="text-muted">
                  <FaCalendar className="me-2" />
                  {announcement.date}
                </small>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card.Body>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default AnnouncementBoard;