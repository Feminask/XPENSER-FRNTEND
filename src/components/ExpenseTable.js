

import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
// import { toast } from "react-toastify";
import PropTypes from 'prop-types';

const ExpenseTable = ({ expenses, removeExpense }) => {
    const [showConfirmation, setShowConfirmation] = useState(false);
    const [expenseIdToDelete, setExpenseIdToDelete] = useState(null);

    const handleDeleteExpense = (id) => {
        setExpenseIdToDelete(id);
        setShowConfirmation(true);
    };

    // const confirmDeleteExpense = () => {
    //     removeExpense(expenseIdToDelete)
    //         .then(() => {
    //             toast.success('Expense entry successfully removed from the list!');
    //             setShowConfirmation(false);
    //         })
    //         .catch((error) => {
    //             toast.error('Failed to remove data: ' + error.message);
    //         });
    // };

    const confirmDeleteExpense = () => {
        removeExpense(expenseIdToDelete)
            .then(() => {
                setShowConfirmation(false);
            })
            .catch((error) => {
                console.error('Failed to remove data: ' + error.message);
            });
    };
    

    if (!expenses || expenses.length === 0) {
        return (
            <div className="text-center">
                <h2>No expenses found.</h2>
            </div>
        );
    }

    const slicedExpenses = Array.isArray(expenses) ? expenses.slice() : [];

    return (
        <div className="mt-4 table-responsive">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{ backgroundColor: "#BACD92" }}>#</th>
                        <th style={{ backgroundColor: "#BACD92" }}>Expense Type</th>
                        <th style={{ backgroundColor: "#BACD92" }}>Expense Date</th>
                        <th style={{ backgroundColor: "#BACD92" }}>Expense Amount</th>
                        <th style={{ backgroundColor: "#BACD92" }}>Description</th>
                        <th style={{ backgroundColor: "#BACD92" }}>Edit</th>
                        <th style={{ backgroundColor: "#BACD92" }}>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {slicedExpenses.map((item, index) => (
                        <tr key={index}>
                            <td style={{ backgroundColor: "#d4e9cae3" }}>{index + 1}</td>
                            <td style={{ backgroundColor: "#d4e9cae3" }}>{item.expenseType}</td>
                            <td style={{ backgroundColor: "#d4e9cae3" }}>{item.expenseDate}</td>
                            <td style={{ backgroundColor: "#d4e9cae3" }}>${item.expenseAmount}</td>
                            <td style={{ backgroundColor: "#d4e9cae3" }}>{item.description}</td>
                            <td style={{ backgroundColor: "#d4e9cae3" }}>
                                <Link to={`/edit/${item.id}`}>
                                    <i className="fa-solid fa-pen-to-square btn"></i>
                                </Link>
                            </td>
                            <td style={{ backgroundColor: "#d4e9cae3" }}>
                                <i className="fa-solid fa-trash btn" onClick={() => handleDeleteExpense(item.id)}></i>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            {/* Confirmation Modal */}
            <Modal
                show={showConfirmation}
                onHide={() => setShowConfirmation(false)}
                dialogClassName="custom-modal"
            >
                <Modal.Body closeButton>Do you want to remove this data?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowConfirmation(false)}>Cancel</Button>
                    <Button variant="danger" onClick={confirmDeleteExpense}>Delete</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

ExpenseTable.propTypes = {
    expenses: PropTypes.array.isRequired,
    removeExpense: PropTypes.func.isRequired
};
export default ExpenseTable;
