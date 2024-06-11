
import React from 'react';
import { Pie, Line } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);

const ExpenseCharts = ({ expenses }) => {
  const expenseTypes = ['cash', 'card', 'Online Payment'];
  const expenseTypeData = expenseTypes.map(type => {
    return expenses.filter(expense => expense.expenseType === type).reduce((sum, expense) => sum + parseFloat(expense.expenseAmount), 0);
  });

  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const monthlyExpenseData = months.map(month => {
    return expenses.filter(expense => new Date(expense.expenseDate).getMonth() + 1 === month).reduce((sum, expense) => sum + parseFloat(expense.expenseAmount), 0);
  });

  const expenseTypeChartData = {
    labels: expenseTypes,
    datasets: [
      {
        label: 'Expense Amount',
        data: expenseTypeData,
        backgroundColor: ['#ACE1AF', '#A1DD70', '#80B9AD'],

       
        // backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      }
    ],
  };

  const monthlyExpenseChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Monthly Expense Amount',
        data: monthlyExpenseData,
        backgroundColor: 'rgba(75,192,192,0.4)',
        // borderColor: 'rgba(75,192,192,1)',
        borderColor: 'green',

        borderWidth: 1,
      }
    ],
  };

  return (
    <div className="row">
      <div className="col-md-6 mb-4 mb-md-0">
        <div className="text-center">
          <h3>Expense Distribution by Type</h3>
        </div>
        <Pie  data={expenseTypeChartData} />
      </div>
      <div className="col-md-6">
        <div className="text-center">
          <h3>Monthly Expense Trend</h3>
        </div>
        <div className="monthly-expense-chart-container">
          <Line className='mt-4' data={monthlyExpenseChartData} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseCharts;

