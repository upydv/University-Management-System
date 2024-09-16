import React, { useState } from 'react';
import { Container, Card, Form, Button, ListGroup } from 'react-bootstrap';
import { FaUser, FaPaperPlane } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MessagingSystem = () => {
  const [messages, setMessages] = useState([
    { id: 1, sender: 'John Doe', content: 'Hello, how are you?', timestamp: '2023-05-10 10:30' },
    { id: 2, sender: 'Jane Smith', content: 'I\'m doing well, thanks!', timestamp: '2023-05-10 10:35' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) {
      toast.error("Please enter a message.");
      return;
    }
    const message = {
      id: messages.length + 1,
      sender: 'You',
      content: newMessage,
      timestamp: new Date().toLocaleString(),
    };
    setMessages([...messages, message]);
    setNewMessage('');
    toast.success("Message sent successfully.");
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Messaging System</h1>
      <Card>
        <Card.Body>
          <Card.Title>Messages</Card.Title>
          <ListGroup variant="flush" className="mb-3" style={{ maxHeight: '400px', overflowY: 'auto' }}>
            {messages.map((message) => (
              <ListGroup.Item key={message.id}>
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <strong><FaUser className="me-2" />{message.sender}</strong>
                  <small className="text-muted">{message.timestamp}</small>
                </div>
                <p className="mb-0">{message.content}</p>
              </ListGroup.Item>
            ))}
          </ListGroup>
          <Form onSubmit={handleSendMessage}>
            <Form.Group className="mb-3">
              <Form.Control 
                as="textarea" 
                rows={3} 
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message here..."
              />
            </Form.Group>
            <Button type="submit" variant="primary">
              <FaPaperPlane className="me-2" />
              Send Message
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default MessagingSystem;