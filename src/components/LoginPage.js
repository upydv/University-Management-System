// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');

//     if (!email || !password) {
//       setError('Please fill in all fields');
//       return;
//     }

//     if (!email.includes('@')) {
//       setError('Please enter a valid email address');
//       return;
//     }

//     if (password.length < 6) {
//       setError('Password must be at least 6 characters long');
//       return;
//     }

//     // Here you would typically send the login request to your backend
//     console.log('Login submitted:', { email, password });
//     // For demo purposes, let's just show a success message
//     alert('Login successful!');
//   };

//   return (
//     <Container className="py-5">
//       <Row className="justify-content-center">
//         <Col md={6}>
//           <Card>
//             <Card.Body>
//               <h2 className="text-center mb-4">Login to College Management System</h2>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control 
//                     type="email" 
//                     placeholder="Enter email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control 
//                     type="password" 
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                 </Form.Group>

//                 {error && <Alert variant="danger">{error}</Alert>}

//                 <Button variant="primary" type="submit" className="w-100">
//                   Login
//                 </Button>
//               </Form>
//               <div className="text-center mt-3">
//                 <Link to="/forgot-password">Forgot password?</Link>
//                 <span className="mx-2">|</span>
//                 <Link to="/register">Create an account</Link>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };
/////////////////////////////////////////////////////////////////
// // export default LoginPage;
// import React, { useState } from 'react';
// import { Container, Row, Col, Card, Form, Button, Alert } from 'react-bootstrap';
// import { Link, useNavigate } from 'react-router-dom';
// import { FaUser, FaLock } from 'react-icons/fa';
// import '../App.css'; // Make sure to create this CSS file

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError('');

//     // Basic email validation
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setError('Please enter a valid email address.');
//       return;
//     }

//     // Basic password validation (at least 8 characters)
//     if (password.length < 8) {
//       setError('Password must be at least 8 characters long.');
//       return;
//     }

//     // If credentials meet requirements, navigate to home page
//     navigate('/');
//   };

//   return (
//     <Container fluid className="login-container py-5">
//       <Row className="justify-content-center">
//         <Col md={6} lg={4}>
//           <Card className="login-card">
//             <Card.Body>
//               <h2 className="text-center mb-4">Welcome Back</h2>
//               <Form onSubmit={handleSubmit}>
//                 <Form.Group className="mb-3" controlId="formBasicEmail">
//                   <Form.Label>Email address</Form.Label>
//                   <div className="input-group">
//                     <span className="input-group-text">
//                       <FaUser />
//                     </span>
//                     <Form.Control 
//                       type="email" 
//                       placeholder="Enter email"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                       className="form-control-lg"
//                     />
//                   </div>
//                 </Form.Group>

//                 <Form.Group className="mb-3" controlId="formBasicPassword">
//                   <Form.Label>Password</Form.Label>
//                   <div className="input-group">
//                     <span className="input-group-text">
//                       <FaLock />
//                     </span>
//                     <Form.Control 
//                       type="password" 
//                       placeholder="Password"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                       className="form-control-lg"
//                     />
//                   </div>
//                 </Form.Group>

//                 {error && <Alert variant="danger">{error}</Alert>}

//                 <Button variant="primary" type="submit" className="w-100 btn-lg btn-gradient">
//                   Login
//                 </Button>
//               </Form>
//               <div className="text-center mt-3">
//                 <Link to="/forgot-password" className="text-decoration-none">Forgot password?</Link>
//                 <span className="mx-2">|</span>
//                 <Link to="/register" className="text-decoration-none">Create an account</Link>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default LoginPage;
import React, { useState, useEffect } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { FaUser, FaLock } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';
import '../App.css'; // Make sure this CSS file exists and is properly styled

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the form fields when component mounts
    setEmail('');
    setPassword('');
  }, []);

  const validateForm = () => {
    if (!email || !password) {
      setError('Please enter both email and password.');
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return false;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters long.');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (validateForm()) {
      try {
        // Here you would typically make an API call to authenticate the user
        // For this example, we'll just simulate a successful login
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
        console.log('Login successful');
        // Clear the form fields after successful login
        setEmail('');
        setPassword('');
        // Redirect to dashboard on successful login
        navigate('/dashboard', { replace: true });
      } catch (err) {
        setError('Login failed. Please try again.');
      }
    }
  };

  return (
    <Container className="py-5 login-container">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="login-card">
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaUser />
                    </span>
                    <Form.Control 
                      type="email" 
                      placeholder="Enter email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control-lg"
                    />
                  </div>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <div className="input-group">
                    <span className="input-group-text">
                      <FaLock />
                    </span>
                    <Form.Control 
                      type="password" 
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control-lg"
                    />
                  </div>
                </Form.Group>

                {error && <Alert variant="danger">{error}</Alert>}

                <Button variant="primary" type="submit" className="w-100 btn-lg btn-gradient">
                  Login
                </Button>
              </Form>
              <div className="text-center mt-3">
                <Link to="/forgot-password" className="text-decoration-none">Forgot password?</Link>
                <span className="mx-2">|</span>
                <Link to="/register" className="text-decoration-none">Create an account</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;





