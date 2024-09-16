// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { FaHome, FaSignInAlt, FaChalkboardTeacher, FaUserGraduate, FaBook, FaCalendarAlt, FaBuilding, FaDollarSign, FaChartBar, FaEnvelope, FaBullhorn, FaCalendarCheck,FaCalendarPlus ,FaCalendar} from 'react-icons/fa';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// // Import all components
// import HomePage from './components/HomePage';
// import LoginPage from './components/LoginPage';
// import Dashboard from './components/Dashboard';
// import StudentProfile from './components/StudentProfile';
// import CourseRegistration from './components/CourseRegistration';
// import GradeViewer from './components/GradeViewer';
// import CourseCatalog from './components/CourseCatalog';
// import ClassSchedule from './components/ClassSchedule';
// import AssignmentSubmission from './components/AssignmentSubmission';
// import FacultyProfile from './components/FacultyProfile';
// import CourseManagement from './components/CourseManagement';
// import GradeInput from './components/GradeInput';
// import UserManagement from './components/UserManagement';
// import DepartmentManagement from './components/DepartmentManagement';
// import FinancialManagement from './components/FinancialManagement';
// import ReportGenerator from './components/ReportGenerator';
// import DataVisualization from './components/DataVisualization';
// import MessagingSystem from './components/MessagingSystem';
// import AnnouncementBoard from './components/AnnouncementBoard';
// import AcademicCalendar from './components/AcademicCalendar';
// import EventManagement from './components/EventManagement';

// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <Navbar bg="primary" variant="dark" expand="lg" className="mb-4">
//           <Container>
//             <Navbar.Brand as={Link} to="/">College Management System</Navbar.Brand>
//             <Navbar.Toggle aria-controls="basic-navbar-nav" />
//             <Navbar.Collapse id="basic-navbar-nav">
//               <Nav className="me-auto">
//                 <Nav.Link as={Link} to="/"><FaHome /> Home</Nav.Link>
//                 <Nav.Link as={Link} to="/login"><FaSignInAlt /> Login</Nav.Link>
//                 <Nav.Link as={Link} to="/dashboard"><FaChalkboardTeacher /> Dashboard</Nav.Link>
//                 <NavDropdown title={<><FaUserGraduate /> Student</>} id="student-nav-dropdown">
//                   <NavDropdown.Item as={Link} to="/student-profile">Profile</NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to="/course-registration">Course Registration</NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to="/grade-viewer">Grade Viewer</NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to="/assignment-submission">Assignment Submission</NavDropdown.Item>
//                 </NavDropdown>
//                 <NavDropdown title={<><FaBook /> Courses</>} id="courses-nav-dropdown">
//                   <NavDropdown.Item as={Link} to="/course-catalog">Course Catalog</NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to="/class-schedule">Class Schedule</NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to="/course-management">Course Management</NavDropdown.Item>
//                 </NavDropdown>
//                 <NavDropdown title={<><FaBuilding /> Administration</>} id="admin-nav-dropdown">
//                   <NavDropdown.Item as={Link} to="/user-management">User Management</NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to="/department-management">Department Management</NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to="/financial-management">Financial Management</NavDropdown.Item>
//                 </NavDropdown>
//                 <NavDropdown title={<><FaChartBar /> Reports</>} id="reports-nav-dropdown">
//                   <NavDropdown.Item as={Link} to="/report-generator">Report Generator</NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to="/data-visualization">Data Visualization</NavDropdown.Item>
//                 </NavDropdown>
//                 <NavDropdown title={<><FaEnvelope /> Communication</>} id="communication-nav-dropdown">
//                   <NavDropdown.Item as={Link} to="/messaging-system">Messaging System</NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to="/announcement-board">Announcement Board</NavDropdown.Item>
//                 </NavDropdown>
//                 <NavDropdown title={<><FaCalendarAlt /> Calendar</>} id="calendar-nav-dropdown">
//                   <NavDropdown.Item as={Link} to="/academic-calendar">
//                     <FaCalendar className="me-2" /> Academic Calendar
//                   </NavDropdown.Item>
//                   <NavDropdown.Item as={Link} to="/event-management">
//                     <FaCalendarPlus className="me-2" /> Event Management
//                   </NavDropdown.Item>
//                 </NavDropdown>
//               </Nav>
//             </Navbar.Collapse>
//           </Container>
//         </Navbar>

//         <Container className="mt-4">
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/login" element={<LoginPage />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//             <Route path="/student-profile" element={<StudentProfile />} />
//             <Route path="/course-registration" element={<CourseRegistration />} />
//             <Route path="/grade-viewer" element={<GradeViewer />} />
//             <Route path="/course-catalog" element={<CourseCatalog />} />
//             <Route path="/class-schedule" element={<ClassSchedule />} />
//             <Route path="/assignment-submission" element={<AssignmentSubmission />} />
//             <Route path="/faculty-profile" element={<FacultyProfile />} />
//             <Route path="/course-management" element={<CourseManagement />} />
//             <Route path="/grade-input" element={<GradeInput />} />
//             <Route path="/user-management" element={<UserManagement />} />
//             <Route path="/department-management" element={<DepartmentManagement />} />
//             <Route path="/financial-management" element={<FinancialManagement />} />
//             <Route path="/report-generator" element={<ReportGenerator />} />
//             <Route path="/data-visualization" element={<DataVisualization />} />
//             <Route path="/messaging-system" element={<MessagingSystem />} />
//             <Route path="/announcement-board" element={<AnnouncementBoard />} />
//             <Route path="/academic-calendar" element={<AcademicCalendar />} />
//             <Route path="/event-management" element={<EventManagement />} />
//           </Routes>
//         </Container>

//         <footer className="mt-5 py-3 bg-light text-center">
//           <Container>
//             <p className="text-muted mb-0">© 2023 College Management System. All rights reserved.</p>
//           </Container>
//         </footer>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { FaHome, FaSignInAlt, FaChalkboardTeacher, FaUserGraduate, FaBook, FaCalendarAlt, FaBuilding, FaDollarSign, FaChartBar, FaEnvelope, FaBullhorn, FaCalendarCheck, FaCalendarPlus, FaCalendar, FaUserCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import all components (keep them intact)
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import StudentProfile from './components/StudentProfile';
import CourseRegistration from './components/CourseRegistration';
import GradeViewer from './components/GradeViewer';
import CourseCatalog from './components/CourseCatalog';
import ClassSchedule from './components/ClassSchedule';
import AssignmentSubmission from './components/AssignmentSubmission';
import FacultyProfile from './components/FacultyProfile';
import CourseManagement from './components/CourseManagement';
import GradeInput from './components/GradeInput';
import UserManagement from './components/UserManagement';
import DepartmentManagement from './components/DepartmentManagement';
import FinancialManagement from './components/FinancialManagement';
import ReportGenerator from './components/ReportGenerator';
import DataVisualization from './components/DataVisualization';
import MessagingSystem from './components/MessagingSystem';
import AnnouncementBoard from './components/AnnouncementBoard';
import AcademicCalendar from './components/AcademicCalendar';
import EventManagement from './components/EventManagement';
import Profile from './components/Profile';
import Settings from './components/Settings';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        {/* Improved Navbar */}
        <Navbar bg="dark" variant="dark" expand="lg" className="shadow-sm mb-4">
          <Container>
            {/* Logo and brand */}
            <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
              <img
                src="/logo.jpg" // Assuming logo.jpg is in the public folder
                alt="College Logo"
                width="40"
                height="40"
                className="d-inline-block align-top me-2"
              />
              <span className="fw-bold">College Management System</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/" className="fw-light text-light">
                  <FaHome className="me-2" /> Home
                </Nav.Link>
                <NavDropdown title={<span className="text-light fw-light"><FaUserGraduate className="me-2" /> Students</span>} id="student-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/student-profile">Student Profile</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/course-registration">Course Registration</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/grade-viewer">Grade Viewer</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/class-schedule">Class Schedule</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/assignment-submission">Assignment Submission</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<span className="text-light fw-light"><FaChalkboardTeacher className="me-2" /> Faculty</span>} id="faculty-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/faculty-profile">Faculty Profile</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/course-management">Course Management</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/grade-input">Grade Input</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title={<span className="text-light fw-light"><FaBuilding className="me-2" /> Administration</span>} id="admin-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/user-management">User Management</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/department-management">Department Management</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/financial-management">Financial Management</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                {isLoggedIn ? (
                  <NavDropdown title={<span><FaUserCircle className="me-2" /> {user?.name || 'User'}</span>} id="user-nav-dropdown" align="end">
                    <NavDropdown.Item as={Link} to="/profile">Profile</NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/settings">Settings</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => { setIsLoggedIn(false); setUser(null); }}>Logout</NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <Nav.Link as={Link} to="/login" className="text-light">
                    <FaUserCircle className="me-2" /> Login
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        {/* Main content */}
        <Container className="mt-4 flex-grow-1">
          <Routes>
            {/* Routing all components */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/student-profile" element={<StudentProfile />} />
            <Route path="/course-registration" element={<CourseRegistration />} />
            <Route path="/grade-viewer" element={<GradeViewer />} />
            <Route path="/course-catalog" element={<CourseCatalog />} />
            <Route path="/class-schedule" element={<ClassSchedule />} />
            <Route path="/assignment-submission" element={<AssignmentSubmission />} />
            <Route path="/faculty-profile" element={<FacultyProfile />} />
            <Route path="/course-management" element={<CourseManagement />} />
            <Route path="/grade-input" element={<GradeInput />} />
            <Route path="/user-management" element={<UserManagement />} />
            <Route path="/department-management" element={<DepartmentManagement />} />
            <Route path="/financial-management" element={<FinancialManagement />} />
            <Route path="/report-generator" element={<ReportGenerator />} />
            <Route path="/data-visualization" element={<DataVisualization />} />
            <Route path="/messaging-system" element={<MessagingSystem />} />
            <Route path="/announcement-board" element={<AnnouncementBoard />} />
            <Route path="/academic-calendar" element={<AcademicCalendar />} />
            <Route path="/event-management" element={<EventManagement />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Container>

        {/* Updated Footer */}
        <footer className="py-3 bg-dark text-light text-center">
          <Container>
            <p className="mb-1">&copy; 2023 College Management System. All rights reserved.</p>
            <p className="mb-0 small">Developed by <strong>Updesh</strong></p>
          </Container>
        </footer>
      </div>
    </Router>
  );
}

export default App;




