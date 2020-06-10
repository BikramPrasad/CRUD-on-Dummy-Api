import * as actionTypes from "../action/actionTypes";

const initialState = {
  employees: [],
};

export default (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case actionTypes.ADD_EMPLOYEE_ACTION:
      console.log(state.employees);
      console.log(action.payload);
      if (state.employees) {
        const emp = [...state.employees];
        emp.push(action.payload);
        return emp;
      } else {
        return [action.payload];
      }

    // case actionTypes.ADD_EMPLOYEE_ACTION:
    //   console.log(state);
    //   // const temp = state.employees.push(action.payload);
    //   // return temp;
    //   return [];
    default:
      return [];
  }
};
