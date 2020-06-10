import immer from "immer";
import {
  ADD_EMPLOYEE_ACTION,
  DELETE_EMPLOYEE_ACTION,
  EDIT_EMPLOYEE_ACTION,
} from "../action/actionTypes";

const initialState = {
  employees: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE_ACTION:
      return immer(state, (draft) => {
        draft.employees.push(action.payload);
      });
    case DELETE_EMPLOYEE_ACTION:
      return immer(state, (draft) => {
        draft.employees = draft.employees.filter((emp) => emp.id !== action.payload);
      });
    case EDIT_EMPLOYEE_ACTION:
      return immer(state, (draft) => {
        draft.employees = draft.employees.map((emp) => {
          if (emp.id === action.payload.empId) {
            return action.payload.newEmp;
          } else {
            return emp;
          }
        });
      });
    default:
      return state;
  }
};
