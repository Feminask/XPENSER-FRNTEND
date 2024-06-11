

import React, { useEffect } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { connect } from 'react-redux';
import { FetchExpenseList, removeExpense } from '../redux/Action';
import ExpenseTable from '../components/ExpenseTable';
import ExpenseCharts from '../components/ExpenseCharts';
import Aos from 'aos';
    import 'aos/dist/aos.css'

const Home = ({ expenses, fetchExpenses, deleteExpense }) => {
  useEffect(() => {
    fetchExpenses(); // Fetch expense data when component mounts
  }, [fetchExpenses]);
  useEffect(()=>{
    Aos.init({duration:1000});
          },[])
    
  return (
    <div className='home'>
      <Container className='p-5'>
        <div className='button-section mt-5 row'>
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-12 col-md-6 mb-3 mb-md-0'>
                <Link style={{ textDecoration: 'none' }} to={'/add'}>
                  <Button style={{ backgroundColor: '#557260', border: 'none' }} className='w-100'>
                    <i className="fas fa-square-plus"></i>
                    <span className='mx-2'>Add Expense</span>
                  </Button>
                </Link>
              </div>
              <div className='col-12 col-md-6'>
                <Link to={'/search'}>
                  <Button style={{ backgroundColor: '#557260', border: 'none' }} className="w-100">
                    <i className="fas fa-search"></i>
                    <span className='mx-2'>Search Expenses</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <Row>
            <Col md={6}  data-aos="fade-right">
              <ExpenseCharts expenses={expenses} />
            </Col>
          </Row>
        </div>

        <div   className='text-center mt-5'>
          <h2 >Expense List</h2>
          <ExpenseTable expenses={expenses} removeExpense={deleteExpense} />
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expense.expenselist,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchExpenses: () => dispatch(FetchExpenseList()), // Dispatch action to fetch expenses
    deleteExpense: (id) => dispatch(removeExpense(id)), // Add deleteExpense action
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
