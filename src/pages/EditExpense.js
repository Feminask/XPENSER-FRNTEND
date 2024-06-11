
import React, { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FetchExpenseObj, FunctionUpdateExpense } from '../redux/Action';
import { useDispatch, useSelector } from 'react-redux';

function EditExpense() {
  const [id, idChange] = useState(0);
  const [expenseType, expenseTypeChange] = useState('');
  const [expenseDate, expenseDateChange] = useState('');
  const [expenseAmount, expenseAmountChange] = useState('');
  const [description, descriptionChange] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { code } = useParams();
  const expenseobj = useSelector((state) => state.expense.expenseobj);

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedExpense = {
      id,
      expenseType,
      expenseDate,
      expenseAmount,
      description,
    };
    dispatch(FunctionUpdateExpense(updatedExpense,id));
    navigate('/home');
  };

  useEffect(() => {
    dispatch(FetchExpenseObj(code));
  }, [code]);

  useEffect(() => {
    if (expenseobj) {
      idChange(expenseobj.id);
      expenseTypeChange(expenseobj.expenseType);
      expenseDateChange(expenseobj.expenseDate);
      expenseAmountChange(expenseobj.expenseAmount);
      descriptionChange(expenseobj.description);
    }
  }, [expenseobj]);

  return (
    <div>
      <Container className=" p-3 mt-5">
        <Link to={'/home'} style={{ textDecoration: 'none', color: 'black' }}>
          <p>
            <i class="fa-solid fa-angle-left"></i>
            <i class="fa-solid fa-angle-left"></i>Back to Home
          </p>
        </Link>

        <div className="text-center">
          <h1>Edit Expense</h1>
        </div>

        <form onSubmit={handleSubmit} className="">

          <div className="mt-3">
            <Form.Group className="mb-3" controlId="Expense_Type">
              <Form.Label>Expense Type</Form.Label>
              <Form.Select
                value={expenseType}
                onChange={(e) => expenseTypeChange(e.target.value)}
                type="number"

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
              />
            </Form.Group>
          </div>

          <div className="mt-4">
            <Form.Group className="mb-3" controlId="Expense_amount">
              <Form.Label>Expense Amount</Form.Label>
              <Form.Control
                value={expenseAmount}
                onChange={(e) => expenseAmountChange(e.target.value)}
                type="text"
                required
                placeholder="Enter Amount"
              />
            </Form.Group>
          </div>

          <div className="mt-4">
            <Form.Group className="mb-3" controlId="Description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                value={description}
                onChange={(e) => descriptionChange(e.target.value)}
                rows={3}
                required
                placeholder="Enter Description"
              />
            </Form.Group>
          </div>

          <div className="d-flex justify-content-space-evenly">
            <input
              style={{ backgroundColor: '' }}
              type="submit"
              className="btn btn-success"
              value="Update Expense"
            />
            <Link to={'/home'} className="btn btn-dark ms-2">
              Cancel
            </Link>
          </div>
        </form>
      </Container>
    </div>
  );
}

export default EditExpense;

// import React, { useEffect, useState } from 'react';
// import { Container, Form } from 'react-bootstrap';
// import { Link, useNavigate, useParams } from 'react-router-dom';
// import { FetchExpenseObj, FunctionUpdateExpense } from '../redux/Action';
// import { useDispatch, useSelector } from 'react-redux';
// import { toast } from 'react-toastify';

// function EditExpense() {
//   const [id, idChange] = useState(0);
//   const [expenseType, expenseTypeChange] = useState('');
//   const [expenseDate, expenseDateChange] = useState('');
//   const [expenseAmount, expenseAmountChange] = useState('');
//   const [description, descriptionChange] = useState('');

//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { code } = useParams();
//   const expenseobj = useSelector((state) => state.expense.expenseobj);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const updatedExpense = {
//       id,
//       expenseType,
//       expenseDate,
//       expenseAmount,
//       description,
//     };
//     dispatch(FunctionUpdateExpense(updatedExpense, id));
//     toast.success('Expense entry successfully updated'); // Update success message
//     navigate('/home');
//   };

//   useEffect(() => {
//     dispatch(FetchExpenseObj(code));
//   }, [code]);

//   useEffect(() => {
//     if (expenseobj) {
//       idChange(expenseobj.id);
//       expenseTypeChange(expenseobj.expenseType);
//       expenseDateChange(expenseobj.expenseDate);
//       expenseAmountChange(expenseobj.expenseAmount);
//       descriptionChange(expenseobj.description);
//     }
//   }, [expenseobj]);

//   return (
//     <div>
//       <Container className=" p-3 mt-5">
//         <Link to={'/home'} style={{ textDecoration: 'none', color: 'black' }}>
//           <p>
//             <i class="fa-solid fa-angle-left"></i>
//             <i class="fa-solid fa-angle-left"></i>Back to Home
//           </p>
//         </Link>

//         <div className="text-center">
//           <h1>Edit Expense</h1>
//         </div>

//         <form onSubmit={handleSubmit} className="">

//           <div className="mt-3">
//             <Form.Group className="mb-3" controlId="Expense_Type">
//               <Form.Label>Expense Type</Form.Label>
//               <Form.Select
//                 value={expenseType}
//                 onChange={(e) => expenseTypeChange(e.target.value)}
//                 aria-label="Expense Type"
//               >
//                 <option>Select Expense Type</option>
//                 <option value="cash">Cash</option>
//                 <option value="card">Card</option>
//                 <option value="Online Payment">Online Payment</option>
//               </Form.Select>
//             </Form.Group>
//           </div>

//           <div className="mt-4">
//             <Form.Group className="mb-3" controlId="Expense_date">
//               <Form.Label>Expense Date</Form.Label>
//               <Form.Control
//                 type="date"
//                 value={expenseDate}
//                 onChange={(e) => expenseDateChange(e.target.value)}
//               />
//             </Form.Group>
//           </div>

//           <div className="mt-4">
//             <Form.Group className="mb-3" controlId="Expense_amount">
//               <Form.Label>Expense Amount</Form.Label>
//               <Form.Control
//                 value={expenseAmount}
//                 onChange={(e) => expenseAmountChange(e.target.value)}
//                 type="text"
//                 required
//                 placeholder="Enter Amount"
//               />
//             </Form.Group>
//           </div>

//           <div className="mt-4">
//             <Form.Group className="mb-3" controlId="Description">
//               <Form.Label>Description</Form.Label>
//               <Form.Control
//                 as="textarea"
//                 value={description}
//                 onChange={(e) => descriptionChange(e.target.value)}
//                 rows={3}
//                 required
//                 placeholder="Enter Description"
//               />
//             </Form.Group>
//           </div>

//           <div className="d-flex justify-content-space-evenly">
//             <input
//               style={{ backgroundColor: '' }}
//               type="submit"
//               className="btn btn-success"
//               value="Update Expense"
//             />
//             <Link to={'/home'} className="btn btn-dark ms-2">
//               Cancel
//             </Link>
//           </div>
//         </form>
//       </Container>
//     </div>
//   );
// }

// export default EditExpense;


