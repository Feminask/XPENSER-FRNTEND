
import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import ExpenseTable from "../components/ExpenseTable";
import "./Search.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { FetchExpenseList, removeExpense } from "../redux/Action";
import Card from 'react-bootstrap/Card';
import Aos from 'aos';
    import 'aos/dist/aos.css'


function SearchExpense(props) {
    const [searchTerm, setSearchTerm] = useState("");
    const [expenseType, setExpenseType] = useState("");
    const [expenseMonth, setExpenseMonth] = useState("");
    const [sortBy, setSortBy] = useState("");

    useEffect(() => {
        props.loadExpense();
    }, []);


    useEffect(()=>{
        Aos.init({duration:1000});
              },[])
        
    const filteredAndSortedExpenses = () => {
        let filteredExpenses = props.expenses;

        // Filter by search term
        if (searchTerm) {
            filteredExpenses = filteredExpenses.filter(expense =>
                expense.description.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Filter by expense type
        if (expenseType) {
            filteredExpenses = filteredExpenses.filter(expense => 
                expense.expenseType === expenseType
            );
        }

        // Filter by expense month
        if (expenseMonth) {
            filteredExpenses = filteredExpenses.filter(expense => {
                const month = new Date(expense.expenseDate).getMonth() + 1;
                return month === parseInt(expenseMonth);
            });
        }

        // Sort by date
        if (sortBy === "OF") {
            filteredExpenses = filteredExpenses.sort((a, b) => new Date(a.expenseDate) - new Date(b.expenseDate));
        } else if (sortBy === "NF") {
            filteredExpenses = filteredExpenses.sort((a, b) => new Date(b.expenseDate) - new Date(a.expenseDate));
        }

        return filteredExpenses;
    };

    const filteredExpenses = filteredAndSortedExpenses();
    const filteredTotalAmount = filteredExpenses.reduce((acc, curr) => acc + parseFloat(curr.expenseAmount), 0);

    return (
        <div>
            <Container className="py-5">
                <Link to={'/home'} style={{ textDecoration: 'none', color: 'black' }}>
                    <p><i className="fa-solid fa-angle-left"></i><i className="fa-solid fa-angle-left"></i>Back to Home</p>
                </Link>
                <div className="text-center">
                    <h1>Search Expenses</h1>
                </div>
                <Row className="justify-content-center">
                    <Col xs={12} md={8} lg={6}>
                        <div className="py-4 search-container">
                            <input
                                type="text"
                                className="form-control search-input"
                                placeholder=" Search by description"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </Col>
                </Row>
                <Row className="justify-content-center mt-4">
                    <Col xs={12} md={8} lg={6}>
                        <Row>
                            <Col xs={12} md={4}>
                                <Form.Group className="mb-3" controlId="expenseType">
                                    <Form.Label>Expense Type</Form.Label>
                                    <Form.Select aria-label="Expense Type" value={expenseType} onChange={(e) => setExpenseType(e.target.value)}>
                                        <option value="">Select Expense Type</option>
                                        <option value="cash">Cash</option>
                                        <option value="card">Card</option>
                                        <option value="Online Payment">Online Payment</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Group className="mb-3" controlId="expenseMonth">
                                    <Form.Label>Expense Month</Form.Label>
                                    <Form.Select aria-label="Select Month" value={expenseMonth} onChange={(e) => setExpenseMonth(e.target.value)}>
                                        <option value="">Select Month</option>
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">June</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={4}>
                                <Form.Group className="mb-3" controlId="sortExpense">
                                    <Form.Label>Sort By</Form.Label>
                                    <Form.Select aria-label="SortExpense" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                        <option value="">Select Sort By</option>
                                        <option value="OF">Oldest First</option>
                                        <option value="NF">Newest First</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <ExpenseTable 
                    expenses={filteredExpenses} 
                    removeExpense={(id) => props.removeExpense(id)} 
                />
                <div  className="text-center mt-3 p-4 shadow"style={{color:'black',backgroundColor:'transparent'}}>
                {/* <Card className="shadow" >
      <Card.Body> */}
<h5   >
            Total Amount : ${filteredTotalAmount.toFixed(2)}
    
</h5>        {/* </Card.Body>
    </Card> */}
                </div>
            </Container>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        expenses: state.expense.expenselist,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadExpense: () => dispatch(FetchExpenseList()),
        removeExpense: (id) => dispatch(removeExpense(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchExpense);
