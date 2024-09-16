import React, { useState } from 'react';
import { Container, Card, Form, Button, Table } from 'react-bootstrap';
import { FaDollarSign, FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FinancialManagement = () => {
  const [transactions, setTransactions] = useState([
    { id: 1, description: "Student Fees", amount: 50000, type: "income" },
    { id: 2, description: "Faculty Salaries", amount: 30000, type: "expense" },
    { id: 3, description: "Equipment Purchase", amount: 5000, type: "expense" },
  ]);
  const [newTransaction, setNewTransaction] = useState({ description: '', amount: '', type: 'income' });

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!newTransaction.description || !newTransaction.amount) {
      toast.error("Please fill in all fields.");
      return;
    }
    setTransactions([...transactions, { ...newTransaction, id: transactions.length + 1, amount: parseFloat(newTransaction.amount) }]);
    setNewTransaction({ description: '', amount: '', type: 'income' });
    toast.success("New transaction added successfully.");
  };

  const calculateBalance = () => {
    return transactions.reduce((acc, transaction) => {
      return transaction.type === 'income' ? acc + transaction.amount : acc - transaction.amount;
    }, 0);
  };

  return (
    <Container className="py-5">
      <h1 className="mb-4">Financial Management</h1>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Add New Transaction</Card.Title>
          <Form onSubmit={handleAddTransaction}>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                type="text"
                value={newTransaction.description}
                onChange={(e) => setNewTransaction({...newTransaction, description: e.target.value})}
                placeholder="e.g., Book Sales"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control 
                type="number"
                value={newTransaction.amount}
                onChange={(e) => setNewTransaction({...newTransaction, amount: e.target.value})}
                placeholder="Enter amount"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Type</Form.Label>
              <Form.Select
                value={newTransaction.type}
                onChange={(e) => setNewTransaction({...newTransaction, type: e.target.value})}
              >
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </Form.Select>
            </Form.Group>
            <Button type="submit" variant="primary">Add Transaction</Button>
          </Form>
        </Card.Body>
      </Card>
      <Card className="mb-4">
        <Card.Body>
          <Card.Title>Financial Overview</Card.Title>
          <h3 className="text-center">
            Current Balance: <span className={calculateBalance() >= 0 ? "text-success" : "text-danger"}>
              ${calculateBalance().toFixed(2)}
            </span>
          </h3>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Transaction History</Card.Title>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>{transaction.description}</td>
                  <td>
                    <FaDollarSign className="me-1" />
                    {transaction.amount.toFixed(2)}
                  </td>
                  <td>
                    {transaction.type === 'income' ? (
                      <FaArrowUp className="text-success" />
                    ) : (
                      <FaArrowDown className="text-danger" />
                    )}
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

export default FinancialManagement;
