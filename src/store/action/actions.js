import * as actionTypes from "./actionTypes";

export const addNewEmployee = (employee) => (dispatch) => {
  console.log(employee);
  dispatch({
    type: actionTypes.ADD_EMPLOYEE_ACTION,
    payload: employee,
  });
};
