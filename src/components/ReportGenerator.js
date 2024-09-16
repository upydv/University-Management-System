import React, { useState } from 'react';
import { Container, Card, Form, Button, Table } from 'react-bootstrap';
import { FaFileAlt, FaDownload } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ReportGenerator = () => {
  const [reportType, setReportType] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [generatedReports, setGeneratedReports] = useState([
    { id: 1, type: 'Student Enrollment', date: '2023-05-01', status: 'Completed' },
    { id: 2, type: 'Financial Summary', date: '2023-04-15', status: 'Completed' },
  ]);

  const handleGenerateReport = (e) => {
    e.preventDefault();
    if (!reportType || !dateRange.start || !dateRange.end) {
      toast.error("Please fill in all fields.");
      return;
    }
    const newReport = {
      id: generatedReports.length + 1,
      type: reportType,
      date: new Date().toISOString().split('T')[0],
      status: 'Processing',
    };
    setGeneratedReports([newReport, ...generatedReports]);
    toast.success("Report generation initiated.");
    // Simulate report generation
    setTimeout(() => {
      setGeneratedReports(prevReports => 
        prevReports.map(report => 
          report.id === newReport.id ? { ...report, status: 'Completed' } : report
        )
      );
      toast.info("Report generation completed.");
    }, 3000);
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Report Generator</h1>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Generate New Report</Card.Title>
          <Form onSubmit={handleGenerateReport}>
            <Form.Group className="mb-3">
              <Form.Label>Report Type</Form.Label>
              <Form.Select
                value={reportType}
                onChange={(e) => setReportType(e.target.value)}
              >
                <option value="">Select report type</option>
                <option value="Student Enrollment">Student Enrollment</option>
                <option value="Financial Summary">Financial Summary</option>
                <option value="Course Performance">Course Performance</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Start Date</Form.Label>
              <Form.Control 
                type="date"
                value={dateRange.start}
                onChange={(e) => setDateRange({...dateRange, start: e.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>End Date</Form.Label>
              <Form.Control 
                type="date"
                value={dateRange.end}
                onChange={(e) => setDateRange({...dateRange, end: e.target.value})}
              />
            </Form.Group>
            <Button type="submit" variant="primary">Generate Report</Button>
          </Form>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Generated Reports</Card.Title>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Report Type</th>
                <th>Generation Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {generatedReports.map((report) => (
                <tr key={report.id}>
                  <td><FaFileAlt className="me-2" />{report.type}</td>
                  <td>{report.date}</td>
                  <td>{report.status}</td>
                  <td>
                    <Button variant="outline-primary" size="sm" disabled={report.status !== 'Completed'}>
                      <FaDownload className="me-1" /> Download
                    </Button>
                  </td>
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

export default ReportGenerator;