import axios from "axios"
import { ADD_EXPENSE, DELETE_EXPENSE, FAIL_REQUEST, GET_EXPENSE_LIST, GET_EXPENSE_OBJ, MAKE_REQUEST, UPDATE_EXPENSE } from "./ActionType"
import { toast } from "react-toastify"

export const makeRequest=()=>{
    return{
        type:MAKE_REQUEST
    }
}

export const failRequest=(err)=>{
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}

export const getExpenseList=(data)=>{
    return{
        type:GET_EXPENSE_LIST,
        payload:data
    }
}

// export const deleteExpense=()=>{
//     return{
//         type:DELETE_EXPENSE
//     }
// }

export const deleteExpense = (id) => {
    return {
        type: DELETE_EXPENSE,
        payload: id
    };
};


export const addExpense=()=>{
    return{
        type:ADD_EXPENSE
    }
}

export const updateExpense=()=>{
    return{
        type:UPDATE_EXPENSE
    }
}

export const getExpenseObj=(data)=>{
    return{
        type:GET_EXPENSE_OBJ,
        payload:data
    }
}




export const base_Url=`https://expenser-server.onrender.com`


export const FetchExpenseList=()=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.get(`${base_Url}/Expenses`).then(res=>{
            const expenselist=res.data;
            dispatch(getExpenseList(expenselist));
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}

// export const removeExpense=(code)=>{
//     return (dispatch)=>{
//         dispatch(makeRequest());
//         axios.delete(`http://localhost:9000/Expenses/`+code).then(res=>{
//             dispatch(deleteExpense());

//         }).catch(err=>{
//             dispatch(failRequest(err.message))
//         })
//     }
// }

export const removeExpense = (code) => {
    return (dispatch) => {
      dispatch(makeRequest());
      return axios.delete(`${base_Url}/Expenses/${code}`)
        .then(() => {
          dispatch(deleteExpense(code));
          toast.success('Entry deleted successfully!',{ autoClose: 2000 });
        })
        .catch(err => {
          dispatch(failRequest(err.message));
          toast.error('Failed to remove data: ' + err.message);
        });
    };
  };
  

// The addExpense action creator
// export const FunctionAddExpense = (data) => {
//     return (dispatch) => {
//         dispatch(makeRequest());
//         axios.post(`${base_Url}/Expenses`, data)
//             .then(res => {
//                 dispatch(addExpense());
//                 toast.success('New Entry successfully added!')
//             })
//             .catch(err => {
//                 dispatch(failRequest(err.message));
//             });
//     };
// };
export const FunctionAddExpense = (data) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.post(`${base_Url}/Expenses`, data)
            .then(res => {
                dispatch(addExpense());
                toast.success('New Entry successfully added!',{ autoClose: 2000 });
                // Dispatch action to fetch updated list of expenses
                dispatch(FetchExpenseList());
            })
            .catch(err => {
                dispatch(failRequest(err.message));
            });
    };
};


export const FunctionUpdateExpense = (data,code) => {
    return (dispatch) => {
        dispatch(makeRequest());
        axios.put(`${base_Url}/Expenses/`+code, data)
            .then(res => {
                dispatch(updateExpense());
                toast.success('Expense entry has been successfully updated!',{ autoClose: 2000 })
            })
            .catch(err => {
                dispatch(failRequest(err.message));
            });
    };
};

export const FetchExpenseObj=(code)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.get(`${base_Url}/Expenses/`+code).then(res=>{
            const expenselist=res.data;
            dispatch(getExpenseObj(expenselist));
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}
