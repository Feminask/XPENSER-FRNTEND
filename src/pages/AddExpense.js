
import React, { useState } from "react";
import { Button, Container, FormGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddExpense } from "../redux/Action";

function AddExpense() {
  const [expenseType, expenseTypeChange] = useState("");
  const [expenseDate, expenseDateChange] = useState("");
  const [expenseAmount, expenseAmountChange] = useState("");
  const [description, descriptionChange] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const expenseobj = {
      expenseType,
      expenseDate,
      expenseAmount,
      description,
    };
    dispatch(FunctionAddExpense(expenseobj));
    navigate('/home');
    console.log(expenseobj);
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split("T")[0];

  return (
    <div>
      <Container className=" p-3 mt-5">
        <Link to={"/home"} style={{ textDecoration: "none", color: "black" }}>
          <p>
            <i className="fa-solid fa-angle-left"></i>
            <i className="fa-solid fa-angle-left"></i>Back to Home
          </p>
        </Link>
        <div className="text-center">
          <h1>Add Expense</h1>
        </div>
        <form action="" onSubmit={handleSubmit} className="">
          <div className="mt-3">
            <Form.Group className="mb-3" controlId="Expense_Type">
              <Form.Label>Expense Type</Form.Label>
              <Form.Select
                value={expenseType}
                onChange={(e) => expenseTypeChange(e.target.value)}
                aria-label="Expense Type"
              >
                <option>Select Expense Type</option>
                <option value="cash">Cash</option>
                <option value="card">Card</option>
                <option value="Online Payment">Online Payment</option>
              </Form.Select>
            </Form.Group>
          </div>
          <div className="mt-4">
            <Form.Group className="mb-3" controlId="Expense_date">
              <Form.Label>Expense Date</Form.Label>
              <Form.Control
                type="date"
                value={expenseDate}
                onChange={(e) => expenseDateChange(e.target.value)}
                max={today}
              />
            </Form.Group>
          </div>
          <div className="mt-4">
            <Form.Group className="mb-3" controlId="Expense_amount">
              <Form.Label>Expense Amount </Form.Label>
              <Form.Control
                value={expenseAmount}
                onChange={(e) => expenseAmountChange(e.target.value)}
                type="number"
                required={true}
                placeholder="Enter Amount (in USD)"
              />
            </Form.Group>
          </div>
          <div className="mt-4">
            <Form.Group className="mb-3" controlId="Description">
              <Form.Label>Description </Form.Label>
              <Form.Control
                as="textarea"
                value={description}
                onChange={(e) => descriptionChange(e.target.value)}
                rows={3}
                required={true}
                placeholder="Enter Description"
              />
            </Form.Group>
          </div>
          <div className="d-flex justify-content-space-evenly">
            <input
              style={{ backgroundColor: "" }}
              type="submit"
              className="btn btn-success "
              value="Add Expense"
            />
            <Link to={"/home"} className="btn btn-dark ms-2">
              Cancel
            </Link>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default AddExpense;

