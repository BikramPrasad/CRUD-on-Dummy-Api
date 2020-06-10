import { ADD_EMPLOYEE_ACTION, DELETE_EMPLOYEE_ACTION, EDIT_EMPLOYEE_ACTION } from "./actionTypes";

export const addNewEmployee = (employee) => (dispatch) => {
  dispatch({
    type: ADD_EMPLOYEE_ACTION,
    payload: employee,
  });
};

export const deleteEmployeeById = (empId) => (dispatch) => {
  dispatch({
    type: DELETE_EMPLOYEE_ACTION,
    payload: empId,
  });
};

export const editEmployee = (empId, newEmp) => (dispatch) => {
  dispatch({
    type: EDIT_EMPLOYEE_ACTION,
    payload: { empId, newEmp },
  });
};
